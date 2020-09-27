import React, { useState, useEffect } from "react";
import "./App.css";
import TwitterLogin from "react-twitter-login";
import Posts from "./components/Posts";
const App = () => {
	const [user, setUser] = useState({});
	const [userInfo, setUserInfo] = useState({});
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const userLocal = localStorage.getItem("user");

		if (userLocal !== null) {
			setUser(JSON.parse(userLocal));
		}

		return () => {};
	}, []);

	useEffect(() => {
		/**
		 * Load in tweets whenever a user object is loaded
		 */
		if (!user.screen_name) {
			return;
		}

		fetch("https://empatweet.herokuapp.com/getUserInfo", {
			method: "POST",
			body: JSON.stringify({ screenName: user.screen_name }),
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => res.json())
			.then((res) => setUserInfo(res.response[0]));

		fetch("https://empatweet.herokuapp.com/getLatestTweetsWithSentiment", {
			method: "POST",
			body: JSON.stringify({ screenName: user.screen_name }),
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => res.json())
			.then((res) => setPosts(res.response));
	}, [user]);

	const authHandler = (err, data) => {
		if (err) {
			alert(err);
			return;
		}
		setUser(data);
		localStorage.setItem("user", JSON.stringify(data));
	};

	return (
		<div className="App">
			<header className="App-header">
				{user.screen_name ? (
					<div>
						<h1>Welcome back, {user.screen_name}</h1>
						{userInfo.profile_image_url ? (
							<div>
								<img
									src={userInfo.profile_image_url}
									alt="this is car image"
								/>
								<Posts posts={posts} />
							</div>
						) : null}
					</div>
				) : (
					<div>
						<h1>
							Welcome to Empatweet! Please sign in with twitter to
							get started!
						</h1>
						<TwitterLogin
							authCallback={authHandler}
							consumerKey={"Aoh6EfyVOcYkC3oBrbvS5Lmoz"}
							consumerSecret={
								"48Lo2VyTW0PuCaQFExubtKRi7UmfA1O8798dGZuRbg31oMyCxm"
							}
							callbackUrl={"http://localhost:3000/"}
						/>
					</div>
				)}
			</header>
		</div>
	);
};

export default App;

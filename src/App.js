import React, { useState, useEffect } from "react";
import "./App.css";
import TwitterLogin from "react-twitter-login";
import Posts from "./components/Posts";
import DocumentMeta from "react-document-meta";
import { Button } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const App = () => {
	const meta = {
		title: "EmpaTweet",
		description: "Start a conversations about how you're feeling!",
		meta: {
			charset: "utf-8",
			name: {
				keywords: "twitter, health, sentiment analysis, conversations",
			},
		},
	};

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

	const ColorButton = withStyles((theme) => ({
		root: {
			color: theme.palette.getContrastText(blue[500]),
			backgroundColor: blue[500],
			'&:hover': {
			backgroundColor: blue[700],
			textTransform: "none"
			},
		},
	}))(Button);

	return (
		<div className="App">
			<DocumentMeta {...meta} />

			<header className="App-header">
				{user.screen_name ? (
					<div>
						<h1>Welcome back, {user.screen_name}</h1>
						{userInfo.profile_image_url ? (
							<div>
								<img
									src={userInfo.profile_image_url}
									alt="Profile image."
								/>
								<br />
								<ColorButton
									variant="contained"
									onClick={() => {
										localStorage.removeItem("user");
										window.location.reload();
									}}
								>
									Logout
								</ColorButton>

								<Posts posts={posts} />
							</div>
						) : null}
					</div>
				) : (
					<div>
						<h1 className="App-welcome">
							Welcome to <span style={{color:"#61dafb"}}>EmpaTweet</span>! <br></br>
							Please sign in with Twitter to get started.
						</h1>
						<TwitterLogin
							authCallback={authHandler}
							consumerKey={"Aoh6EfyVOcYkC3oBrbvS5Lmoz"}
							consumerSecret={
								"48Lo2VyTW0PuCaQFExubtKRi7UmfA1O8798dGZuRbg31oMyCxm"
							}
							callbackUrl={"https://empatweet.tech/"}
						/>
					</div>
				)}
			</header>
		</div>
	);
};

export default App;

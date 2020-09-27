import React, { useState, useEffect } from "react";
import "./App.css";
import TwitterLogin from "react-twitter-login";
import Posts from "./components/Posts";
const App = () => {
  const [user, setUser] = useState({});

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

    fetch("http://localhost:3001/getTweets", { method: "POST" }).then((res) => {
      console.log(res);
    });
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
            <img
              src={
                "http://pbs.twimg.com/profile_images/1292910281065222144/W2HjB-V__normal.png"
              }
              alt="this is car image"
            />
            <Posts />
          </div>
        ) : (
          <TwitterLogin
            authCallback={authHandler}
            consumerKey={"bq7ycdnw2f4qwViP6RYHs4Ppm"}
            consumerSecret={
              "h0JGaWXSlvIlZKvWhQ54dMO27o0jI7UFas9V59v6BLdYf2xLv3"
            }
            callbackUrl={"http://localhost:3000/"}
          />
        )}
      </header>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";

import { Grid, Typography, CircularProgress } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "./styles.css";

//import { posts } from "./dummy-posts";
import PopUp from "./Popup";

function Posts({ posts }) {
	// const posts = [
	// 	{
	// 		title: "My first post",
	// 		excerpt: "This is my first post with more content inside",
	// 		//image: "https://bit.ly/2WNi2Ml",
	// 	},

	// 	{
	// 		title: "My second post",
	// 		excerpt: "This is my second post with more content inside",
	// 		image: "https://bit.ly/2WNi2Ml",
	// 	},

	// 	{
	// 		title: "My third post",
	// 		excerpt: "This is my third post with more content inside",
	// 		image: "https://bit.ly/2WNi2Ml",
	// 	},

	// 	{
	// 		title: "My fourth post",
	// 		excerpt: "This is my fourth post with more content inside",
	// 		image: "https://bit.ly/2WNi2Ml",
	// 	},

	// 	{
	// 		title: "My fifth post",
	// 		excerpt: "This is my fifth post with more content inside",
	// 		image: "https://bit.ly/2WNi2Ml",
	// 	},

	// 	{
	// 		title: "My sixth post",
	// 		excerpt: "This is my sixth post with more content inside",
	// 		image: "https://bit.ly/2WNi2Ml",
	// 	},
	// ];

	const [showPopup, setPopupState] = useState({});

	useEffect(() => {
		setPopupState(true);
	}, []);

	const emojiForSentiment = (sentiment) => {
		switch (sentiment[0]) {
			case "sad":
				if (sentiment[1] >= 0.9) {
					return "😭";
				} else {
					return "😢";
				}

			case "happy":
				if (sentiment[1] >= 0.9) {
					return "😁";
				} else {
					return "😀";
				}

			case "angry":
				if (sentiment[1] >= 0.9) {
					return "😡";
				} else {
					return "😠";
				}

			case "scared":
				if (sentiment[1] >= 0.9) {
					return "😖";
				} else {
					return "😫";
				}

			default:
				return "😮";
		}
	};

	return (
		<div style={{ marginTop: 20, padding: 30 }}>
			<PopUp />

			<h2 style={{ marginBottom: "-3vmin" }}>
				Your recent <span style={{ color: "#00acee" }}>Tweets</span>:
			</h2>
			{posts.length === 0 ? (
				<CircularProgress color="secondary" style={{ marginTop: 40 }} />
			) : (
				<Grid
					container
					spacing={10}
					justify="center"
					style={{ marginTop: "2vmin" }}
				>
					{posts.map((post) => (
						<Grid item key={post.text}>
							<Card>
								<CardActionArea disabled>
									{/* <CardMedia
									component="img"
									//alt="Contemplative Reptile"
									height="140"
									image={post.image}
									//title="Contemplative Reptile"
								/> */}
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
										>
											{post.text}
										</Typography>
										<Typography
											style={{ fontSize: "3vmin" }}
											component="p"
										>
											{emojiForSentiment(post.sentiment)}
										</Typography>
									</CardContent>
								</CardActionArea>
								{/* <CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions> */}
							</Card>
						</Grid>
					))}
				</Grid>
			)}
		</div>
	);
}

export default Posts;

import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./styles.css";
import { blue } from "@material-ui/core/colors";
import {
	createMuiTheme,
	withStyles,
	makeStyles,
	ThemeProvider,
} from "@material-ui/core/styles";

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(blue[500]),
		textTransform: "none",
		backgroundColor: blue[500],
		fontSize: "2vmin",
		"&:hover": {
			backgroundColor: blue[700],
		},
	},
}))(Button);

export default () => {
	const [buttonOpen, setButtonOpen] = useState(false);

	const modal = (close) => {
		return buttonOpen ? (
			<div
				className="modal"
				style={{
					height: 150,
					width: 300,
					backgroundColor: "#2196f3",
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<h3 style={{ color: "white" }}>Want to tell us more?</h3>
				<Button
					variant="contained"
					color="primary"
					onClick={() =>
						(window.location.href =
							"https://twitter.com/intent/tweet?hashtags=HealthyConversations")
					}
				>
					Tweet #HealthyConversations
				</Button>
			</div>
		) : (
			<div className="modal">
				<button className="close" onClick={close}>
					&times;
				</button>
				<div className="header" style={{ color: "white" }}>
					{" "}
					On a scale of 1 to 10, how are you?{" "}
				</div>
				<div className="actions">
					<button
						className="va"
						onClick={() => {
							console.log("1 pressed closed ");
							// close();
							setButtonOpen(true);
						}}
					>
						1
					</button>
					<button
						className="va"
						onClick={() => {
							console.log("2 pressed closed ");
							// close();
							setButtonOpen(true);
						}}
					>
						2
					</button>
					<button
						className="va"
						onClick={() => {
							console.log("3 pressed closed ");
							// close();
							setButtonOpen(true);
						}}
					>
						3
					</button>
					<button
						className="va"
						onClick={() => {
							console.log("4 pressed closed ");
							// close();
							setButtonOpen(true);
						}}
					>
						4
					</button>
					<button
						className="va"
						onClick={() => {
							console.log("5 pressed closed ");
							// close();
							setButtonOpen(true);
						}}
					>
						5
					</button>
					<button
						className="va"
						onClick={() => {
							console.log("6 pressed closed ");
							// close();
							setButtonOpen(true);
						}}
					>
						6
					</button>
					<button
						className="va"
						onClick={() => {
							console.log("7 pressed closed ");
							// close();
							setButtonOpen(true);
						}}
					>
						7
					</button>
					<button
						className="va"
						onClick={() => {
							console.log("8 pressed closed ");
							// close();
							setButtonOpen(true);
						}}
					>
						8
					</button>
					<button
						className="va"
						onClick={() => {
							console.log("1 pressed closed ");
							// close();
							setButtonOpen(true);
						}}
					>
						9
					</button>
					<button
						className="va"
						onClick={() => {
							console.log("10 pressed closed ");
							// close();
							setButtonOpen(true);
						}}
					>
						10
					</button>
				</div>
			</div>
		);
	};

	return (
		<Popup
			trigger={
				<ColorButton
					style={{ marginTop: "-2vmin" }}
					variant="contained"
					className="button4"
				>
					{" "}
					How are you feeling today?{" "}
				</ColorButton>
			}
			modal
			nested
		>
			{(close) => modal(close)}
		</Popup>
	);
};

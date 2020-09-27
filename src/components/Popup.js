import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./styles.css";
import { Button } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    textTransform: "none",
    backgroundColor: blue[500],
    fontSize: "2vmin",
    '&:hover': {
    backgroundColor: blue[700],
    }
  },
}))(Button);

<<<<<<< Updated upstream
export default () => {
	const [buttonOpen, setButtonOpen] = useState(false);

	const modal = (close) => {
		return buttonOpen ? (
			<div
				className="modal"
				style={{
					height: 150,
					width: 300,
					backgroundColor: "red",
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<h3 style={{ marginTop: 40 }}>Want to tell us more?</h3>
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
				<div className="header"> How are you? </div>
				<div className="content">
					{" "}
					On a scale of 1 to 10, how are you feeling right now?
				</div>
				<div className="actions">
					<Popup
						trigger={<button className="button"> Why? </button>}
						position="bottom center"
						nested
					>
						<div className="content">
							<p style={{ color: "white" }}>
								To promote #HealthyConversation, you need to be
								at your best, so we want make sure you're
								alright
							</p>
						</div>
					</Popup>
					<button
						className="1"
						onClick={() => {
							console.log("1 pressed closed ");
							setButtonOpen(true);
							// close();
						}}
					>
						1
					</button>
					<button
						className="2"
						onClick={() => {
							console.log("2 pressed closed ");
							setButtonOpen(true);

							// close();
						}}
					>
						2
					</button>
					<button
						className="3"
						onClick={() => {
							console.log("3 pressed closed ");
							setButtonOpen(true);

							// close();
						}}
					>
						3
					</button>
					<button
						className="4"
						onClick={() => {
							console.log("4 pressed closed ");
							setButtonOpen(true);

							// close();
						}}
					>
						4
					</button>
					<button
						className="5"
						onClick={() => {
							console.log("5 pressed closed ");
							setButtonOpen(true);

							// close();
						}}
					>
						5
					</button>
					<button
						className="6"
						onClick={() => {
							console.log("6 pressed closed ");
							setButtonOpen(true);

							// close();
						}}
					>
						6
					</button>
					<button
						className="7"
						onClick={() => {
							console.log("7 pressed closed ");
							setButtonOpen(true);

							// close();
						}}
					>
						7
					</button>
					<button
						className="8"
						onClick={() => {
							console.log("8 pressed closed ");
							setButtonOpen(true);

							// close();
						}}
					>
						8
					</button>
					<button
						className="9"
						onClick={() => {
							console.log("1 pressed closed ");
							setButtonOpen(true);

							// close();
						}}
					>
						9
					</button>
					<button
						className="10"
						onClick={() => {
							console.log("10 pressed closed ");
							setButtonOpen(true);

							// close();
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
			trigger={<a className="button4"> How are you feeling today? </a>}
			modal
			nested
		>
			{(close) => modal(close)}
		</Popup>
	);
};
=======
export default () => (
  <Popup
    trigger={<ColorButton style={{marginTop:"-2vmin"}} variant="contained" className="button4"> How are you feeling today? </ColorButton>}
    modal
    nested
  >
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header" style={{color:"white"}}> On a scale of 1 to 10, how are you? </div>
        <div className="actions">
          <button
            className="va"
            onClick={() => {
              console.log("1 pressed closed ");
              close();
            }}
          >
            1
          </button>
          <button
            className="va"
            onClick={() => {
              console.log("2 pressed closed ");
              close();
            }}
          >
            2
          </button>
          <button
            className="va"
            onClick={() => {
              console.log("3 pressed closed ");
              close();
            }}
          >
            3
          </button>
          <button
            className="va"
            onClick={() => {
              console.log("4 pressed closed ");
              close();
            }}
          >
            4
          </button>
          <button
            className="va"
            onClick={() => {
              console.log("5 pressed closed ");
              close();
            }}
          >
            5
          </button>
          <button
            className="va"
            onClick={() => {
              console.log("6 pressed closed ");
              close();
            }}
          >
            6
          </button>
          <button
            className="va"
            onClick={() => {
              console.log("7 pressed closed ");
              close();
            }}
          >
            7
          </button>
          <button
            className="va"
            onClick={() => {
              console.log("8 pressed closed ");
              close();
            }}
          >
            8
          </button>
          <button
            className="va"
            onClick={() => {
              console.log("1 pressed closed ");
              close();
            }}
          >
            9
          </button>
          <button
            className="va"
            onClick={() => {
              console.log("10 pressed closed ");
              close();
            }}
          >
            10
          </button>
        </div>
      </div>
    )}
  </Popup>
);
>>>>>>> Stashed changes

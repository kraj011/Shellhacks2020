import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./styles.css";
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

import React from "react";
import Popup from "reactjs-popup";
import "./styles.css";

export default () => (
  <Popup
    trigger={<a className="button4"> How are you feeling today? </a>}
    modal
    nested
  >
    {(close) => (
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
                To promote #HealthyConversation, you need to be at your best, so
                we want make sure you're alright
              </p>
            </div>
          </Popup>
          <button
            className="1"
            onClick={() => {
              console.log("1 pressed closed ");
              close();
            }}
          >
            1
          </button>
          <button
            className="2"
            onClick={() => {
              console.log("2 pressed closed ");
              close();
            }}
          >
            2
          </button>
          <button
            className="3"
            onClick={() => {
              console.log("3 pressed closed ");
              close();
            }}
          >
            3
          </button>
          <button
            className="4"
            onClick={() => {
              console.log("4 pressed closed ");
              close();
            }}
          >
            4
          </button>
          <button
            className="5"
            onClick={() => {
              console.log("5 pressed closed ");
              close();
            }}
          >
            5
          </button>
          <button
            className="6"
            onClick={() => {
              console.log("6 pressed closed ");
              close();
            }}
          >
            6
          </button>
          <button
            className="7"
            onClick={() => {
              console.log("7 pressed closed ");
              close();
            }}
          >
            7
          </button>
          <button
            className="8"
            onClick={() => {
              console.log("8 pressed closed ");
              close();
            }}
          >
            8
          </button>
          <button
            className="9"
            onClick={() => {
              console.log("1 pressed closed ");
              close();
            }}
          >
            9
          </button>
          <button
            className="10"
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

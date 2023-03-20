import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const HandleUpClick = () => {
    if(text.length>0){
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success")}
  };
  const HandleLoClick = () => {
    if(text.length>0){
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase","success")}
  };
  const HandleClClick = () => {
    if(text.length>0){
    let newtext = "";
    setText(newtext);
    props.showAlert("Text cleared","success")}
  };
  const HandleCopyClick = () => {
    if(text.length>0){
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success")}
  };

  const HandleOnchange = (event) => {
    setText(event.target.value);
  };

  const HandleExtraSpaces = () => {
    if(text.length>0){
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed extra spaces","success")}
    
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-3]"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 className="mb-3">{props.heading}</h3>
        <form>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#bac6d2",
                color: props.mode === "dark" ? "white" : "black",
              }}
              onChange={HandleOnchange}
              id="myBox"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </form>
        <button className="btn btn-primary mx-1 my-1" onClick={HandleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={HandleLoClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={HandleClClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={HandleCopyClick}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={HandleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>Text Summary</h4>
        <p>
          {text.split(/\S+/g).length-1} words and {text.replace(/\s+/g, "").length} characters.
        </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read.</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview."}</p>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string,
};

Textform.defaultProps = {
  heading: "Enter text below to edit",
};

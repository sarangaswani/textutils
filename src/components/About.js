import React from "react";

export default function About(props) {
  // const [buttontext, setButtonText] = useState("Enable Dark Mode");
  
  // const [style, setStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const toggleStyle = () => {
  //   if (style.color === "black") {
  //     setStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "white solid 0.5px",
  //     });
  //     setButtonText("Enable White Mode");
  //   } else {
  //     setStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setButtonText("Enable Dark Mode");
  //   }
  // };

  let style = {
    color: props.mode === 'dark'?'white':"black",
    backgroundColor: props.mode === 'dark'?'#455462':'white'

  }

  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        } my-3`}
      >
        <h2>About Us</h2>
      </div>

      <div class="accordion my-3" id="accordionExample">
        <div class="accordion-item" style={style}>
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={style}
            >
              <strong> Analyze Your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={style}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, or character count.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={style}>
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={style}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={style}>
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={style}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

            </div>
          </div>
        </div>
      </div>

      {/* <button className="btn btn-primary my-1" onClick={toggleStyle}>
        {buttontext}
      </button> */}
    </>
  );
}

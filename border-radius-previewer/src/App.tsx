import React, { useState } from "react";

const App: React.FC = () => {
  const [upperLeft, setUpperLeft] = useState<string>("0px ");
  const [upperRight, setUpperRight] = useState<string>("0px ");
  const [lowerLeft, setLowerLeft] = useState<string>("0px ");
  const [lowerRight, setLowerRight] = useState<string>("0px ");
  const [roundedCornersCss, setRoundCornersCss] = useState<string>("0px 0px 0px 0px");
  const [backgroundColor, setBackgroundColor] = useState<string>("rgb(103, 143, 141)");
  const [padding, setPadding] = useState<string>("100px");

  function onChangeHandler(id: string, value: string): void {
    setBorderRadiuses(id, value);
    setTextarea();
  }

  function setBorderRadiuses(id: string, value: string): void {
    if (id === "upperLeft") {
      setUpperLeft(value + "px ");
    } else if (id === "upperRight") {
      setUpperRight(value + "px ");
    } else if (id === "lowerLeft") {
      setLowerLeft(value + "px ");
    } else if (id === "lowerRight") {
      setLowerRight(value + "px ");
    }
  }

  function setTextarea(): void {
    const para = document.querySelector("p");
    const compStyles = window.getComputedStyle(para!);

    const observer = new MutationObserver(() => {
      setRoundCornersCss(compStyles.getPropertyValue("border-radius"));
      setBackgroundColor(compStyles.getPropertyValue("background-color"));
      setPadding(compStyles.getPropertyValue("padding"));
    });

    const target = document.getElementById("boxStyle");
    const config = { attributes: true, childList: false, subtree: false };
    observer.observe(target!, config);
  }

  function copyTextarea(): void {
    // var copyText = document.getElementById("boxStyle");
    // // Select the text field
    // copyText?.select();
    //  // Copy the text inside the text field
    // navigator.clipboard.writeText(copyText.value);
    // // Alert the copied text
    // alert("Copied the text: " + copyText.value);
    // }
  }

  return (
    <>
      <div className="App">
        <form>
          <label>左上</label>
          <input id="upperLeft" onChange={(e) => onChangeHandler(e.target.id, e.target.value)} type="number"></input>
          <label>右上</label>
          <input id="upperRight" onChange={(e) => onChangeHandler(e.target.id, e.target.value)} type="number"></input>
          <label>左下</label>
          <input id="lowerLeft" onChange={(e) => onChangeHandler(e.target.id, e.target.value)} type="number"></input>
          <label>右下</label>
          <input id="lowerRight" onChange={(e) => onChangeHandler(e.target.id, e.target.value)} type="number"></input>
        </form>
        <p
          id="boxStyle"
          style={{
            borderRadius: upperLeft + upperRight + lowerRight + lowerLeft,
            backgroundColor: "#678F8D",
            padding: "100px",
          }}
        >
          Rounded corners!
        </p>
        <textarea
          rows={3}
          cols={80}
          value={
            "border-radius:" +
            roundedCornersCss +
            "\n" +
            "background-color:" +
            backgroundColor +
            "\n" +
            "padding:" +
            padding
          }
          readOnly
        ></textarea>

        <button onClick={(e) => copyTextarea()}>Copy text</button>
      </div>
    </>
  );
};

export default App;

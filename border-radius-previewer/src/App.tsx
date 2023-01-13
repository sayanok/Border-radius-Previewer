import React, { useState } from "react";

const App: React.FC = () => {
  const [upperLeft, setUpperLeft] = useState(0);
  const [upperRight, setUpperRight] = useState(0);
  const [lowerLeft, setLowerLeft] = useState(0);
  const [lowerRight, setLowerRight] = useState(0);
  const [roundedCornersCss, setRoundCornersCss] = useState<string>("0px 0px 0px 0px");

  function onChangeHandler(id: string, value: string): void {
    setBorderRadiuses(id, Number(value));
    setTextarea();
  }

  function setBorderRadiuses(id: string, value: number): void {
    if (id === "upperLeft") {
      setUpperLeft(value);
    } else if (id === "upperRight") {
      setUpperRight(value);
    } else if (id === "lowerLeft") {
      setLowerLeft(value);
    } else if (id === "lowerRight") {
      setLowerRight(value);
    }
  }

  function setTextarea(): void {
    const para = document.querySelector("p");
    const compStyles = window.getComputedStyle(para!);

    const observer = new MutationObserver(() => {
      setRoundCornersCss(compStyles.getPropertyValue("border-radius"));
    });

    const target = document.getElementById("boxStyle");
    const config = { attributes: true, childList: false, subtree: false };
    observer.observe(target!, config);
  }

  const textAreaValue = `border-radius: ${upperLeft}px ${upperRight}px ${lowerLeft}px ${lowerRight}px`;
  function copyTextarea(): void {
    navigator.clipboard.writeText(textAreaValue).then(() => alert("Copied the text: " + textAreaValue));
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
            borderTopLeftRadius: upperLeft,
            borderTopRightRadius: upperRight,
            borderBottomLeftRadius: lowerLeft,
            borderBottomRightRadius: lowerRight,
            backgroundColor: "#678F8D",
            padding: "100px",
          }}
        >
          Rounded corners!
        </p>
        <textarea id="text" rows={3} cols={80} value={"border-radius:" + roundedCornersCss} readOnly></textarea>

        <button onClick={() => copyTextarea()}>Copy text</button>
      </div>
    </>
  );
};

export default App;

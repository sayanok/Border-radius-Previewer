import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [upperLeft, setUpperLeft] = useState<string>("");
  const [upperRight, setUpperRight] = useState<string>("");
  const [lowerLeft, setLowerLeft] = useState<string>("");
  const [lowerRight, setLowerRight] = useState<string>("");

  useEffect(() => {
    setUpperLeft("10px ");
    setUpperRight("10px ");
    setLowerLeft("10px ");
    setLowerRight("10px ");
  }, []);

  function onChangeHandler(id: string, value: string) {
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

  return (
    <div className="App">
      <form>
        <label>左上</label>
        <input id="upperLeft" onChange={(e) => onChangeHandler(e.target.id, e.target.value)}></input>
        <label>右上</label>
        <input id="upperRight" onChange={(e) => onChangeHandler(e.target.id, e.target.value)}></input>
        <label>左下</label>
        <input id="lowerLeft" onChange={(e) => onChangeHandler(e.target.id, e.target.value)}></input>
        <label>右下</label>
        <input id="lowerRight" onChange={(e) => onChangeHandler(e.target.id, e.target.value)}></input>
      </form>
      <p
        style={{
          borderRadius: upperLeft + upperRight + lowerRight + lowerLeft,
          backgroundColor: "#678F8D",
          padding: "100px",
        }}
      >
        Rounded corners!
      </p>
    </div>
  );
};

export default App;

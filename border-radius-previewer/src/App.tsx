import React from "react";

const App: React.FC = () => {
  const style = {
    backgroundColor: "#678F8D",
    borderRadius: "100px 10px 200px 50px",
    padding: "20px",
  };

  return (
    <div className="App">
      <p style={style}>Rounded corners!</p>
    </div>
  );
};

export default App;

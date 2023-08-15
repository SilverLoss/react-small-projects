import { useState } from "react";

function ChangeBg() {
  const [color, setColor] = useState(undefined);
  const [bgColor, setBgColor] = useState(undefined);

  function val(e) {
    setColor(e.target.value);
  }

  function change(e) {
    setBgColor(color);
    e.preventDefault();
  }

  return (
    <div id="container" style={{ backgroundColor: bgColor }}>
      <h2>Select Background Color</h2>
      <div id="card" onChange={(e) => val(e)}>
        <input
          type="radio"
          name="r"
          id="r1"
          value={"red"}
          style={{ marginLeft: 20 }}
        />
        <label style={{ marginLeft: 5 }}>Red</label>
        <input
          type="radio"
          name="r"
          id="r2"
          value={"skyblue"}
          style={{ marginLeft: 20 }}
        />
        <label style={{ marginLeft: 5 }}>Blue</label>
        <input
          type="radio"
          name="r"
          id="r3"
          value={"orange"}
          style={{ marginLeft: 20 }}
        />
        <label style={{ marginLeft: 5 }}>Orange</label>
      </div>
      <br />
      <button onClick={change}>Click</button>
    </div>
  );
}

export default ChangeBg;

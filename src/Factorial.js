import { useState } from "react";

function Factorial() {
  var [num, setNum] = useState(undefined);
  var [res, setRes] = useState(undefined);

  function val(e) {
    setNum(parseInt(e.target.value));
  }

  function calc(e) {
    var res1 = 1;
    var arr = [];

    for (var i = num; i > 1; i--) {
      res1 *= i;
      arr.push(i + " X ");
    }

    var arrString = arr.join("");
    setRes("Result is " + arrString + "1" + " = " + res1);
  }
  return (
    <div id="container">
      <div className="card">
        <h2>Calculate Factorial</h2>
        <input
          type="text"
          placeholder="Enter a Number"
          onChange={(e) => val(e)}
        />
        <br />
        <input type="button" value="Click" onClick={calc} />
        <h3>{res}</h3>
      </div>
    </div>
  );
}

export default Factorial;

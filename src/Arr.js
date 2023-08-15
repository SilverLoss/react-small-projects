import { useState } from "react";
function Arr() {
  var [num1, setNum1] = useState(0);
  var [num2, setNum2] = useState(0);
  var [num3, setNum3] = useState(0);
  var [num4, setNum4] = useState(0);
  var [num5, setNum5] = useState(0);
  var [res, setRes] = useState(undefined);

  function val1(e) {
    setNum1(e.target.value);
  }

  function val2(e) {
    setNum2(e.target.value);
  }

  function val3(e) {
    setNum3(e.target.value);
  }

  function val4(e) {
    setNum4(e.target.value);
  }

  function val5(e) {
    setNum5(e.target.value);
  }

  function calc(e) {
    var max = 0;
    var arr1 = [];
    arr1.push(num1, num2, num3, num4, num5);
    for (var i = 0; i < arr1.length; i++) {
      if (max < parseInt(arr1[i])) {
        max = parseInt(arr1[i]);
      }
    }
    setRes("The maximum value is " + max);
    e.preventDefault();
  }

  return (
    <div id="container">
      <div className="card">
        <h2>Find Maximum</h2>
        <br />
        <input
          type="text"
          placeholder="Enter Value 1"
          onChange={(e) => val1(e)}
        />
        <input
          type="text"
          placeholder="Enter Value 2"
          onChange={(e) => val2(e)}
        />
        <input
          type="text"
          placeholder="Enter Value 3"
          onChange={(e) => val3(e)}
        />
        <input
          type="text"
          placeholder="Enter Value 4"
          onChange={(e) => val4(e)}
        />
        <input
          type="text"
          placeholder="Enter Value 5"
          onChange={(e) => val5(e)}
        />
        <br />
        <input type="button" value="Click" onClick={calc} />
        <br />
        <h3>{res}</h3>
      </div>
    </div>
  );
}

export default Arr;

import { useState } from "react";

function Marksheet() {
  var [num1, setNum1] = useState(undefined);
  var [num2, setNum2] = useState(undefined);
  var [num3, setNum3] = useState(undefined);
  var [num4, setNum4] = useState(undefined);
  var [num5, setNum5] = useState(undefined);
  var [rem1, setRem1] = useState(undefined);
  var [rem2, setRem2] = useState(undefined);
  var [rem3, setRem3] = useState(undefined);
  var [rem4, setRem4] = useState(undefined);
  var [rem5, setRem5] = useState(undefined);
  var [res, setRes] = useState(undefined);
  var [total, setTotal] = useState(undefined);
  var [percent, setPercent] = useState(undefined);
  var [display1, setDisplay1] = useState("block");
  var [display2, setDisplay2] = useState("none");

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
    setDisplay1("none");
    setDisplay2("block");

    var totalOne =
      parseInt(num1) +
      parseInt(num2) +
      parseInt(num3) +
      parseInt(num4) +
      parseInt(num5);

    setTotal(totalOne);
    var percentOne = totalOne * 0.2;
    setPercent(percentOne);

    // Result
    if (parseInt(percent) >= 40) {
      setRes("Pass");
    } else if (parseInt(percent) >= 70) {
      setRes("Pass With Distinction");
    }

    // Check Distinction & Grace
    if (parseInt(num1) >= 75) {
      setRem1("Dist");
    } else if (parseInt(num1) <= 33 && parseInt(num1) >= 28) {
      setRem1("Grace");
      setRes("Pass With Grace");
    } else if (parseInt(num1) < 28) {
      setRem1("Supp");
    }

    if (parseInt(num2) >= 75) {
      setRem2("Dist");
    } else if (parseInt(num2) <= 33 && parseInt(num2) >= 28) {
      setRem2("Grace");
      setRes("Pass With Grace");
    } else if (parseInt(num2) < 28) {
      setRem2("Supp");
    }

    if (parseInt(num3) >= 75) {
      setRem3("Dist");
    } else if (parseInt(num3) <= 33 && parseInt(num3) >= 28) {
      setRem3("Grace");
      setRes("Pass With Grace");
    } else if (parseInt(num3) < 28) {
      setRem3("Supp");
    }

    if (parseInt(num4) >= 75) {
      setRem4("Dist");
    } else if (parseInt(num4) <= 33 && parseInt(num4) >= 28) {
      setRem4("Grace");
      setRes("Pass With Grace");
    } else if (parseInt(num4) < 28) {
      setRem4("Supp");
    }

    if (parseInt(num5) >= 75) {
      setRem5("Dist");
    } else if (parseInt(num5) <= 33 && parseInt(num5) >= 28) {
      setRem5("Grace");
      setRes("Pass With Grace");
    } else if (parseInt(num5) < 28) {
      setRem5("Supp");
    }

    // Check Fail
    if (
      parseInt(num1) < 28 ||
      parseInt(num2) < 28 ||
      parseInt(num3) < 28 ||
      parseInt(num4) < 28 ||
      parseInt(num5) < 28
    ) {
      setRes("Fail");
    }
  }

  return (
    <div id="containerOne">
      <div className="card" style={{ display: display1 }}>
        <h2>Print MarkSheet</h2>
        <br />
        <input
          type="text"
          placeholder="Enter Subject 1 Number"
          onChange={(e) => val1(e)}
        />
        <input
          type="text"
          placeholder="Enter Subject 2 Number"
          onChange={(e) => val2(e)}
        />
        <input
          type="text"
          placeholder="Enter Subject 3 Number"
          onChange={(e) => val3(e)}
        />
        <input
          type="text"
          placeholder="Enter Subject 4 Number"
          onChange={(e) => val4(e)}
        />
        <input
          type="text"
          placeholder="Enter Subject 5 Number"
          onChange={(e) => val5(e)}
        />
        <br />
        <input type="button" value="Click" onClick={calc} />
      </div>
      <div className="result" style={{ display: display2 }}>
        <table border={1} className="w-600">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks Obtained</th>
              <th>Max. Marks</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Subject 1</td>
              <td>{num1}</td>
              <td>100</td>
              <td>{rem1}</td>
            </tr>
            <tr>
              <td>Subject 2</td>
              <td>{num2}</td>
              <td>100</td>
              <td>{rem2}</td>
            </tr>
            <tr>
              <td>Subject 3</td>
              <td>{num3}</td>
              <td>100</td>
              <td>{rem3}</td>
            </tr>
            <tr>
              <td>Subject 4</td>
              <td>{num4}</td>
              <td>100</td>
              <td>{rem4}</td>
            </tr>
            <tr>
              <td>Subject 5</td>
              <td>{num5}</td>
              <td>100</td>
              <td>{rem5}</td>
            </tr>
            <tr>
              <th>Total Marks</th>
              <th>{total}</th>
              <th colSpan={2}>500</th>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
          className="w-600"
        >
          <h3> Total Percentage is {percent} %</h3>
          <h3>Result is {res}</h3>
        </div>
      </div>
    </div>
  );
}

export default Marksheet;

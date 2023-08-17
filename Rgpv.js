import "./Style.css";
import logo from "./images/rgpvlogo.png";
import profile from "./images/profileImg.png";
import { useState } from "react";

function Rgpv() {
  // Marks
  var [marks1, setMarks1] = useState(0);
  var [marks2, setMarks2] = useState(0);
  var [marks3, setMarks3] = useState(0);
  var [marks4, setMarks4] = useState(0);
  var [markspr1, setMarkspr1] = useState(0);
  var [markspr2, setMarkspr2] = useState(0);
  var [markspr3, setMarkspr3] = useState(0);
  var [markspr4, setMarkspr4] = useState(0);

  // Grades
  var [grade1, setGrade1] = useState(0);
  var [grade2, setGrade2] = useState(0);
  var [grade3, setGrade3] = useState(0);
  var [grade4, setGrade4] = useState(0);
  var [gradepr1, setGradepr1] = useState(0);
  var [gradepr2, setGradepr2] = useState(0);
  var [gradepr3, setGradepr3] = useState(0);
  var [gradepr4, setGradepr4] = useState(0);

  // Credit
  var [credit1, setCredit1] = useState(4);
  var [credit2, setCredit2] = useState(4);
  var [credit3, setCredit3] = useState(4);
  var [credit4, setCredit4] = useState(4);
  var [creditpr1, setCreditpr1] = useState(2);
  var [creditpr2, setCreditpr2] = useState(2);
  var [creditpr3, setCreditpr3] = useState(2);
  var [creditpr4, setCreditpr4] = useState(2);

  // Total
  var [sgpa, setSgpa] = useState(undefined);
  var [crtotal, setCrTotal] = useState(undefined);
  var [res, setRes] = useState(undefined);

  function Val(e) {
    if (e.target.id === "sub1") {
      setMarks1(parseInt(e.target.value) / 10);
    } else if (e.target.id === "sub2") {
      setMarks2(parseInt(e.target.value) / 10);
    } else if (e.target.id === "sub3") {
      setMarks3(parseInt(e.target.value) / 10);
    } else if (e.target.id === "sub4") {
      setMarks4(parseInt(e.target.value) / 10);
    } else if (e.target.id === "pract1") {
      setMarkspr1(parseInt(e.target.value) / 10);
    } else if (e.target.id === "pract2") {
      setMarkspr2(parseInt(e.target.value) / 10);
    } else if (e.target.id === "pract3") {
      setMarkspr3(parseInt(e.target.value) / 10);
    } else {
      setMarkspr4(parseInt(e.target.value) / 10);
    }
  }

  function calculate(e) {
    var sgpa1 = 0;
    var sgpaArr = [];
    var creditOne = [];
    var result = "";
    var totalCr = 0;

    totalCr =
      credit1 +
      credit2 +
      credit3 +
      credit4 +
      creditpr1 +
      creditpr2 +
      creditpr3 +
      creditpr4;

    sgpaArr.push(
      marks1,
      marks2,
      marks3,
      marks4,
      markspr1,
      markspr2,
      markspr3,
      markspr4
    );

    creditOne.push(
      credit1,
      credit2,
      credit3,
      credit4,
      creditpr1,
      creditpr2,
      creditpr3,
      creditpr4
    );

    if (totalCr === 24) {
      result = "Pass";
    } else {
      result = "Fail";
    }

    // Check Marks
    if (marks1 <= 10 && marks1 >= 9.1) {
      setGrade1("A+");
    } else if (marks1 <= 9 && marks1 >= 8.1) {
      setGrade1("A");
    } else if (marks1 <= 8 && marks1 >= 7.1) {
      setGrade1("B+");
    } else if (marks1 <= 7 && marks1 >= 6.1) {
      setGrade1("B");
    } else if (marks1 <= 6 && marks1 >= 5.1) {
      setGrade1("C+");
    } else if (marks1 <= 5 && marks1 >= 4.1) {
      setGrade1("C");
    } else if (marks1 <= 4 && marks1 >= 3.1) {
      setGrade1("D");
    } else if (marks1 <= 3 && marks1 >= 2.6) {
      setGrade1("D*");
      result = "Pass with Grace";
    } else {
      setGrade1("F");
      setCredit1(0);
    }

    if (marks2 <= 10 && marks2 >= 9.1) {
      setGrade2("A+");
    } else if (marks2 <= 9 && marks2 >= 8.1) {
      setGrade2("A");
    } else if (marks2 <= 8 && marks2 >= 7.1) {
      setGrade2("B+");
    } else if (marks2 <= 7 && marks2 >= 6.1) {
      setGrade2("B");
    } else if (marks2 <= 6 && marks2 >= 5.1) {
      setGrade2("C+");
    } else if (marks2 <= 5 && marks2 >= 4.1) {
      setGrade2("C");
    } else if (marks2 <= 4 && marks2 >= 3.1) {
      setGrade2("D");
    } else if (marks2 <= 3 && marks2 >= 2.6) {
      setGrade2("D*");
      result = "Pass with Grace";
    } else {
      setGrade2("F");
      setCredit2(0);
    }

    if (marks3 <= 10 && marks3 >= 9.1) {
      setGrade3("A+");
    } else if (marks3 <= 9 && marks3 >= 8.1) {
      setGrade3("A");
    } else if (marks3 <= 8 && marks3 >= 7.1) {
      setGrade3("B+");
    } else if (marks3 <= 7 && marks3 >= 6.1) {
      setGrade3("B");
    } else if (marks3 <= 6 && marks3 >= 5.1) {
      setGrade3("C+");
    } else if (marks3 <= 5 && marks3 >= 4.1) {
      setGrade3("C");
    } else if (marks3 <= 4 && marks3 >= 3.1) {
      setGrade3("D");
    } else if (marks3 <= 3 && marks3 >= 2.6) {
      setGrade3("D*");
      result = "Pass with Grace";
    } else {
      setGrade3("F");
      setCredit3(0);
    }

    if (marks4 <= 10 && marks4 >= 9.1) {
      setGrade4("A+");
    } else if (marks4 <= 9 && marks4 >= 8.1) {
      setGrade4("A");
    } else if (marks4 <= 8 && marks4 >= 7.1) {
      setGrade4("B+");
    } else if (marks4 <= 7 && marks4 >= 6.1) {
      setGrade4("B");
    } else if (marks4 <= 6 && marks4 >= 5.1) {
      setGrade4("C+");
    } else if (marks4 <= 5 && marks4 >= 4.1) {
      setGrade4("C");
    } else if (marks4 <= 4 && marks4 >= 3.1) {
      setGrade4("D");
    } else if (marks4 <= 3 && marks4 >= 2.6) {
      setGrade4("D*");
      result = "Pass with Grace";
    } else {
      setGrade4("F");
      setCredit4(0);
    }

    if (markspr1 <= 10 && markspr1 >= 9.1) {
      setGradepr1("A+");
    } else if (markspr1 <= 9 && markspr1 >= 8.1) {
      setGradepr1("A");
    } else if (markspr1 <= 8 && markspr1 >= 7.1) {
      setGradepr1("B+");
    } else if (markspr1 <= 7 && markspr1 >= 6.1) {
      setGradepr1("B");
    } else if (markspr1 <= 6 && markspr1 >= 5.1) {
      setGradepr1("C+");
    } else if (markspr1 <= 5 && markspr1 >= 4.1) {
      setGradepr1("C");
    } else if (markspr1 <= 4 && markspr1 >= 3.1) {
      setGradepr1("D");
    } else if (markspr1 <= 3 && markspr1 >= 2.6) {
      setGradepr1("D*");
      result = "Pass with Grace";
    } else {
      setGradepr1("F");
      setCreditpr1(0);
    }

    if (markspr2 <= 10 && markspr2 >= 9.1) {
      setGradepr2("A+");
    } else if (markspr2 <= 9 && markspr2 >= 8.1) {
      setGradepr2("A");
    } else if (markspr2 <= 8 && markspr2 >= 7.1) {
      setGradepr2("B+");
    } else if (markspr2 <= 7 && markspr2 >= 6.1) {
      setGradepr2("B");
    } else if (markspr2 <= 6 && markspr2 >= 5.1) {
      setGradepr2("C+");
    } else if (markspr2 <= 5 && markspr2 >= 4.1) {
      setGradepr2("C");
    } else if (markspr2 <= 4 && markspr2 >= 3.1) {
      setGradepr2("D");
    } else if (markspr2 <= 3 && markspr2 >= 2.6) {
      setGradepr2("D*");
      result = "Pass with Grace";
    } else {
      setGradepr2("F");
      setCreditpr2(0);
    }

    if (markspr3 <= 10 && markspr3 >= 9.1) {
      setGradepr3("A+");
    } else if (markspr3 <= 9 && markspr3 >= 8.1) {
      setGradepr3("A");
    } else if (markspr3 <= 8 && markspr3 >= 7.1) {
      setGradepr3("B+");
    } else if (markspr3 <= 7 && markspr3 >= 6.1) {
      setGradepr3("B");
    } else if (markspr3 <= 6 && markspr3 >= 5.1) {
      setGradepr3("C+");
    } else if (markspr3 <= 5 && markspr3 >= 4.1) {
      setGradepr3("C");
    } else if (markspr3 <= 4 && markspr3 >= 3.1) {
      setGradepr3("D");
    } else if (markspr3 <= 3 && markspr3 >= 2.6) {
      setGradepr3("D*");
      result = "Pass with Grace";
    } else {
      setGradepr3("F");
      setCreditpr3(0);
    }

    if (markspr4 <= 10 && markspr4 >= 9.1) {
      setGradepr4("A+");
    } else if (markspr4 <= 9 && markspr4 >= 8.1) {
      setGradepr4("A");
    } else if (markspr4 <= 8 && markspr4 >= 7.1) {
      setGradepr4("B+");
    } else if (markspr4 <= 7 && markspr4 >= 6.1) {
      setGradepr4("B");
    } else if (markspr4 <= 6 && markspr4 >= 5.1) {
      setGradepr4("C+");
    } else if (markspr4 <= 5 && markspr4 >= 4.1) {
      setGradepr4("C");
    } else if (markspr4 <= 4 && markspr4 >= 3.1) {
      setGradepr4("D");
    } else if (markspr4 <= 3 && markspr4 >= 2.6) {
      setGradepr4("D*");
      result = "Pass with Grace";
    } else {
      setGradepr4("F");
      setCreditpr4(0);
    }

    for (var i = 0; i < sgpaArr.length; i++) {
      sgpa1 += sgpaArr[i] * creditOne[i];
    }

    setRes(result);
    setCrTotal(totalCr);
    setSgpa(sgpa1 / totalCr);

    e.preventDefault();
  }

  return (
    <div id="container" className="d-flex-row">
      <div className="card d-flex-col">
        <h1>Print Marksheet</h1>
        <div className="main-div d-flex-row">
          <div>
            <input
              type="text"
              id="sub1"
              placeholder="Enter R.C.C Marks / 100"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="sub2"
              placeholder="Enter Steel Marks / 100"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="sub3"
              placeholder="Enter Pavement Design Marks / 100"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="sub4"
              placeholder="Enter Soil Mech Marks / 100"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <br />
          </div>
          <div>
            <input
              type="text"
              id="pract1"
              placeholder="Enter R.C.C Practical Marks / 100"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="pract2"
              placeholder="Enter Steel Practical Marks / 100"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="pract3"
              placeholder="Enter Pav. Design Practical Marks / 100"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="pract4"
              placeholder="Enter Soil Mech. Practical Marks / 100"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
          </div>
        </div>
        <br />
        <button onClick={calculate}>Click</button>
      </div>

      <div className="result">
        <header id="logo">
          <img src={logo} alt="Logo" style={{ width: 80, height: 80 }} />
          <div>
            <h2>RAJIV GANDHI PROUDYOGIKI VISHWAVIDYALAYA, BHOPAL</h2>
            <h3 style={{ fontWeight: 500, textDecoration: "underline" }}>
              (UNIVERSITY OF TECHNOLOGY OF MADHYA PRADESH)
            </h3>
          </div>
        </header>
        <section className="contain d-flex-col">
          <div className="head">
            <p
              style={{
                backgroundColor: "red",
                fontSize: 20,
                padding: "5px",
                fontWeight: "bold",
                color: "white",
                borderRadius: 10,
              }}
            >
              STATEMENT OF GRADE
            </p>
            <p style={{ fontWeight: "bold" }}>EXAMINATION JUNE - 2023</p>
            <p>B.E.,(Civil Engineering)</p>
          </div>
          <div className="details">
            <div style={{ textAlign: "left", marginLeft: "20px" }}>
              <table>
                <tbody>
                  <tr>
                    <th>ROLL NO. </th>
                    <td>: 0811CE111111</td>
                  </tr>
                  <tr>
                    <th>NAME </th>
                    <td>: ABC XYZ</td>
                  </tr>
                  <tr>
                    <th>S/D/W/O </th>
                    <td>: DEF XYZ</td>
                  </tr>
                  <tr>
                    <th>INSTT. </th>
                    <td>: Central India Institute of Technology, Indore</td>
                  </tr>
                  <tr>
                    <th>SEMESTER </th>
                    <td>: FIRST</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ textAlign: "right", marginRight: "20px" }}>
              <img src={profile} alt="Profile" />
              <br />
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                STATUS: Regular
              </span>
            </div>
          </div>
          <div className="marks-table">
            <table cellSpacing={0} cellPadding={2}>
              <thead>
                <tr
                  className="border-black"
                  style={{ border: "2px solid black" }}
                >
                  <th rowSpan={2}>Subject Code</th>
                  <th rowSpan={2}>Subject Name</th>
                  <th rowSpan={2}>Total Credit</th>
                  <th rowSpan={2}>Credit Earned</th>
                  <th rowSpan={2}>Grade</th>
                </tr>
              </thead>
              <tbody
                style={{
                  textAlign: "center",
                  border: "2px solid black",
                }}
              >
                {/* Subject 1 */}
                <tr>
                  <td>CE7001[T]</td>
                  <td className="text-left">R.C.C</td>
                  <td>{credit1}</td>
                  <td>4</td>
                  <td>{grade1}</td>
                </tr>
                {/* Subject 2 */}
                <tr>
                  <td>CE7002[T]</td>
                  <td className="text-left">Steel</td>
                  <td>{credit2}</td>
                  <td>4</td>
                  <td>{grade2}</td>
                </tr>
                {/* Subject 3 */}
                <tr>
                  <td>CE7003[T]</td>
                  <td className="text-left">Pavement Design</td>
                  <td>{credit3}</td>
                  <td>4</td>
                  <td>{grade3}</td>
                </tr>
                {/* Subject 4 */}
                <tr>
                  <td>CE7004[T]</td>
                  <td className="text-left">Soil Mechanics</td>
                  <td>{credit4}</td>
                  <td>4</td>
                  <td>{grade4}</td>
                </tr>
                {/* Practical  Subject 1 */}
                <tr>
                  <td>CE7001[P]</td>
                  <td className="text-left">R.C.C.</td>
                  <td>{creditpr1}</td>
                  <td>2</td>
                  <td>{gradepr1}</td>
                </tr>
                {/* Practical  Subject 2 */}
                <tr>
                  <td>CE7002[P]</td>
                  <td className="text-left">Steel</td>
                  <td>{creditpr2}</td>
                  <td>2</td>
                  <td> {gradepr2} </td>
                </tr>
                {/* Practical  Subject 3 */}
                <tr>
                  <td>CE7003[P]</td>
                  <td className="text-left">Pavement Design</td>
                  <td>{creditpr3}</td>
                  <td>2</td>
                  <td> {gradepr3} </td>
                </tr>
                {/* Practical  Subject 4 */}
                <tr>
                  <td>CE7004[P]</td>
                  <td className="text-left">Soil Mechanics</td>
                  <td>{creditpr4}</td>
                  <td>2</td>
                  <td>{gradepr4}</td>
                </tr>
              </tbody>
              <tfoot style={{ border: "2px solid black" }}>
                {/* Total */}
                <tr style={{ border: "2px solid black", textAlign: "center" }}>
                  <td></td>
                  <th style={{ height: "30px" }}>Total</th>
                  <th style={{ height: "30px" }}>{crtotal}</th>
                  <th style={{ height: "30px" }}>24</th>
                  <td style={{ height: "30px" }}></td>
                </tr>
                <tr
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                  }}
                >
                  <th colSpan={2} style={{ height: "30px" }}>
                    Result : {res}
                  </th>
                  <th colSpan={3} style={{ height: "30px" }}>
                    SGPA : {sgpa}
                  </th>
                </tr>
                <tr
                  style={{
                    borderBottom: "2px solid black",
                    textAlign: "left",
                  }}
                >
                  <th colSpan={2} style={{ paddingLeft: "10px" }}>
                    Issue Date : 18/08/2023
                  </th>
                </tr>
                <tr>
                  <th style={{ paddingTop: "100px" }}>Prepared By</th>
                  <th style={{ paddingTop: "100px" }}>Checked By</th>
                  <th style={{ paddingTop: "100px" }}>
                    Signature of Principal <br /> and Seal of Institute
                  </th>
                  <th style={{ paddingTop: "100px" }}>
                    (Dr. A.K. Singh) <br /> Controller of Examinations <br />{" "}
                    (RGPV, BHOPAL)
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
        <footer>
          <p>0811</p>
          <p>3438440</p>
          <br />
        </footer>
      </div>
    </div>
  );
}

export default Rgpv;

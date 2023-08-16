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

  var [crtotal, setCrTotal] = useState(undefined);
  var [res, setRes] = useState(undefined);

  function Val(e) {
    if (e.target.id == "sub1") {
      setMarks1(e.target.value);
    } else if (e.target.id == "sub2") {
      setMarks2(e.target.value);
    } else if (e.target.id == "sub3") {
      setMarks3(e.target.value);
    } else if (e.target.id == "sub4") {
      setMarks4(e.target.value);
    } else if (e.target.id == "pract1") {
      setMarkspr1(e.target.value);
    } else if (e.target.id == "pract2") {
      setMarkspr2(e.target.value);
    } else if (e.target.id == "pract3") {
      setMarkspr3(e.target.value);
    } else {
      setMarkspr4(e.target.value);
    }
  }

  function calculate(e) {
    // Check Marks
    if (marks1 == 10) {
      setGrade1("A+");
    } else if (marks1 == 9) {
      setGrade1("A");
    } else if (marks1 == 8) {
      setGrade1("B+");
    } else if (marks1 == 7) {
      setGrade1("B");
    } else if (marks1 == 6) {
      setGrade1("C+");
    } else if (marks1 == 5) {
      setGrade1("C");
    } else if (marks1 == 4) {
      setGrade1("D");
    } else {
      setGrade1("F");
      setCredit1(0);
    }

    if (marks2 == 10) {
      setGrade2("A+");
    } else if (marks2 == 9) {
      setGrade2("A");
    } else if (marks2 == 8) {
      setGrade2("B+");
    } else if (marks2 == 7) {
      setGrade2("B");
    } else if (marks2 == 6) {
      setGrade2("C+");
    } else if (marks2 == 5) {
      setGrade2("C");
    } else if (marks2 == 4) {
      setGrade2("D");
    } else {
      setGrade2("F");
      setCredit2(0);
    }

    if (marks3 == 10) {
      setGrade3("A+");
    } else if (marks3 == 9) {
      setGrade3("A");
    } else if (marks3 == 8) {
      setGrade3("B+");
    } else if (marks3 == 7) {
      setGrade3("B");
    } else if (marks3 == 6) {
      setGrade3("C+");
    } else if (marks3 == 5) {
      setGrade3("C");
    } else if (marks3 == 4) {
      setGrade3("D");
    } else {
      setGrade3("F");
      setCredit3(0);
    }

    if (marks4 == 10) {
      setGrade4("A+");
    } else if (marks4 == 9) {
      setGrade4("A");
    } else if (marks4 == 8) {
      setGrade4("B+");
    } else if (marks4 == 7) {
      setGrade4("B");
    } else if (marks4 == 6) {
      setGrade4("C+");
    } else if (marks4 == 5) {
      setGrade4("C");
    } else if (marks4 == 4) {
      setGrade4("D");
    } else {
      setGrade4("F");
      setCredit4(0);
    }

    if (markspr1 == 10) {
      setGradepr1("A+");
    } else if (markspr1 == 9) {
      setGradepr1("A");
    } else if (markspr1 == 8) {
      setGradepr1("B+");
    } else if (markspr1 == 7) {
      setGradepr1("B");
    } else if (markspr1 == 6) {
      setGradepr1("C+");
    } else if (markspr1 == 5) {
      setGradepr1("C");
    } else if (markspr1 == 4) {
      setGradepr1("D");
    } else {
      setGradepr1("F");
      setCreditpr1(0);
    }

    if (markspr2 == 10) {
      setGradepr2("A+");
    } else if (markspr2 == 9) {
      setGradepr2("A");
    } else if (markspr2 == 8) {
      setGradepr2("B+");
    } else if (markspr2 == 7) {
      setGradepr2("B");
    } else if (markspr2 == 6) {
      setGradepr2("C+");
    } else if (markspr2 == 5) {
      setGradepr2("C");
    } else if (markspr2 == 4) {
      setGradepr2("D");
    } else {
      setGradepr2("F");
      setCreditpr2(0);
    }

    if (markspr3 == 10) {
      setGradepr3("A+");
    } else if (markspr3 == 9) {
      setGradepr3("A");
    } else if (markspr3 == 8) {
      setGradepr3("B+");
    } else if (markspr3 == 7) {
      setGradepr3("B");
    } else if (markspr3 == 6) {
      setGradepr3("C+");
    } else if (markspr3 == 5) {
      setGradepr3("C");
    } else if (markspr3 == 4) {
      setGradepr3("D");
    } else {
      setGradepr3("F");
      setCreditpr3(0);
    }

    if (markspr4 == 10) {
      setGradepr4("A+");
    } else if (markspr4 == 9) {
      setGradepr4("A");
    } else if (markspr4 == 8) {
      setGradepr4("B+");
    } else if (markspr4 == 7) {
      setGradepr4("B");
    } else if (markspr4 == 6) {
      setGradepr4("C+");
    } else if (markspr4 == 5) {
      setGradepr4("C");
    } else if (markspr4 == 4) {
      setGradepr4("D");
    } else {
      setGradepr4("F");
      setCreditpr4(0);
    }

    var totalCr =
      credit1 +
      credit2 +
      credit3 +
      credit4 +
      creditpr1 +
      creditpr2 +
      creditpr3 +
      creditpr4;

    console.log(totalCr)
    if (totalCr == 24) {
      setRes("Pass");
    } else{
      setRes("Fail")
    }

    setCrTotal(totalCr);

    e.preventDefault();
  }

  return (
    <div id="container" className="d-flex-row">
      <div className="card d-flex-col" style={{ display: "block" }}>
        <h1>Print Marksheet</h1>
        <div className="main-div d-flex-row">
          <div>
            <input
              type="text"
              id="sub1"
              placeholder="Enter R.C.C Marks / 10"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="sub2"
              placeholder="Enter Steel Marks / 10"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="sub3"
              placeholder="Enter Pavement Design Marks / 10"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="sub4"
              placeholder="Enter Soil Mech Marks / 10"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <br />
          </div>
          <div>
            <input
              type="text"
              id="pract1"
              placeholder="Enter R.C.C Practical Marks / 10"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="pract2"
              placeholder="Enter Steel Practical Marks / 10"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="pract3"
              placeholder="Enter Pav. Design Practical Marks / 10"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
            <input
              type="text"
              id="pract4"
              placeholder="Enter Soil Mech. Practical Marks / 10"
              onChange={(e) => Val(e)}
            />{" "}
            <br />
          </div>
        </div>
        <br />
        <button onClick={calculate}>Click</button>
      </div>

      <div className="result" style={{ display: "block" }}>
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
              <img src={profile} alt="Profile Photo" />
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
                    SGPA : 6.50
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
          <p>0819</p>
          <p>3438440</p>
        </footer>
      </div>
    </div>
  );
}

export default Rgpv;

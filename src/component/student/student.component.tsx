import { useState } from "react";
import { IStudent } from "../../types";
import CoursesList from "../courses-list/courses-list.component";
import "./student.css";

interface IProps extends IStudent {
}
const Student = (props: IProps) => {
  // let absents = 0;    Replace it with the line below
  const [absents, setAbsents] = useState(0);


  const addAbsent = () => {
    // absents += 1;    (JS)Replace it with the line below in React
    // absents += 1 and assign the absent to the line below? => We can't do like that cause it immutable
    setAbsents(absents + 1);
    // setAbsents(absents + 2);
    // setAbsents(absents + 5); //take the last one

    // setAbsents(oldValue => oldValue + 1);
    // setAbsents(oldValue => oldValue + 1);
    // setAbsents(oldValue => oldValue + 1);
    //In these lines the absent will add 3 times  setState(preValue => updateValue)

    console.log(absents);
  }

  const removeAbsent = () => {
    if(absents > 0)
    setAbsents(absents - 1)
  }

  const resetAbsent = () => {
    setAbsents(0);
  }
  return (
    <div className="std-wrapper">
      <div>
        <b>Student</b> {props.name.toUpperCase() + "!"},
      </div>
      <div>
        <b>Age</b> {props.age},
      </div>
      <div>
        <b>Is Graduated</b> {props.isGraduated ? "Yes" : "No"}
      </div>
      <div>
        <b>Absents:</b> {absents}
        <button onClick={addAbsent}>+</button>
        <button onClick={removeAbsent}>-</button>
        <button onClick={resetAbsent}>Reset</button>

      </div>
      <CoursesList list={props.coursesList} />
      <hr />
    </div>
  );
};
export default Student;

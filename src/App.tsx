import { useState } from "react";
import "./App.css";
import Student from "./component/student/student.component";
import { IStudent } from "./types";
import AddForm from "./component/add-form/add-form.component";


const COURSES_LIST: string[] = ["React", "HTML", "CSS"];
const INITIAL_LIST: Array<IStudent> = [
  {
    id: '2401',
    name: "Waad Amer",
    age: 20,
    isGraduated: false,
    coursesList: ['Math', 'English'],
  },
  {
    id: '2402',
    name: "Seba Rabee",
    age: 18,
    isGraduated: false,
    coursesList: ['Web Dev', 'Science', 'React', 'HTML', 'Science'],
  },
  {
    id: '2403',
    name: "Sayyaf Sammar",
    age: 24,
    isGraduated: true,
    coursesList: COURSES_LIST,
  },
  {
    id: '2404',
    name: "Abood Mohammad",
    age: 15,
    isGraduated: false,
    coursesList: COURSES_LIST,
  },
];

function App() {
  const [studentsList, setStudentsList] = useState<IStudent[]>(INITIAL_LIST);
  const [totalAbsents, setTotalAbsents] = useState(0);

  const removeFirst = () => {
    const newList = [...studentsList];
    newList.shift();
    // newList.pop();  Remove Last student
    setStudentsList(newList);
  }

  const handleAbsentChange = (name: string, change: number) => {
    console.log("[App.tsx] Absent changed");
    console.log(`${name}: ${change}`);
    setTotalAbsents(totalAbsents + change);
  }

  return (
    <div>
      <h1>Welcome to GSG React/Next Course</h1>
      <AddForm />
      <button onClick={removeFirst}>Remove First Student</button>
      <b>Total Absents {totalAbsents}</b>
      {
        studentsList.map(student => (
          <Student
            id={student.id}
            key={student.id}
            name={student.name}
            age={student.age}
            isGraduated={student.isGraduated}
            coursesList={student.coursesList}
            onAbsentChange={handleAbsentChange}
          />
        ))
      }
    </div>
  )
}

export default App;

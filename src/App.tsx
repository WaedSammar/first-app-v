import "./App.css";
import Student from "./component/student/student.component";

const COURSES_LIST = ['React', 'HTML', 'CSS'];

function App() {
  return (
    <div>
      <h1>Welcome to GSG React/Next Course</h1>
      <Student name="Rand Sammar" age={22} isGraduated={true} coursesList={COURSES_LIST} />
      <Student name="Seba Rabee" age={18} isGraduated={false} coursesList={COURSES_LIST} />
      <Student name="Sayyaf Hassan" age={24} isGraduated={true} coursesList={COURSES_LIST} />
      <Student name="Abood Mohammad" age={15} isGraduated={false} coursesList={COURSES_LIST} />
    </div>
  );
}

export default App;

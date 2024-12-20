import { useState } from "react";
import "./add-form.css";
import { IStudent } from "../../types";

const AddForm = () => {
  //   const [name, setName] = useState<string>("");
  //   const [age, setAge] = useState<number>(0);
  //   const [isGraduated, setIsGraduated] = useState<boolean>(false);
  //   instead of making all these we can make this

  const [student, setStudent] = useState<IStudent>({
    age: 0,
    coursesList: [],
    id: "",
    isGraduated: false,
    name: "",
  });

  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setName(e.target.value)
  // }
  const handleChange = (field: string, value: any) => {
    setStudent({ ...student, [field]: value });
  };
  return (
    <div>
      <h3>{student.name}</h3>
      <h3>{student.age}</h3>
      <h3>{student.isGraduated.toString()}</h3>

      <div>
        <label htmlFor="name">Student Name: </label>
        <input
          id="name"
          type="text"
          value={student.name}
          onChange={(e) => handleChange("name", e.target.value)}

        />
      </div>
      <div>
        <label htmlFor="age">Student Age: </label>
        <input
          id="age"
          type="number"
          min={17}
          max={40}
          onChange={(e) => handleChange("age", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isGraduated">Is Student Graduated: </label>
        <input
          id="isGraduated"
          type="checkbox"
          onChange={(e) => handleChange("isGraduated", e.target.checked)}
        />
      </div>
    </div>
  );
};

export default AddForm;

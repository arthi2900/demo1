import { useParams, useHistory } from "react-router-dom";

export function Viewstudent({ studentlist }) {
  const { id } = useParams();
  const history = useHistory();
  const student = studentlist[id];
  return (
    <div>
      <h1>{student.sname}</h1>
      <h1>{student.degree}</h1>
      <h1>{student.year}</h1>
      <h1>{student.section}</h1>
      <h1>{student.batchyear}</h1>
      <button onClick={() => history.goBack()}> back</button>
    </div>
  );
}

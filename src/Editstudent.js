import { useParams, useHistory } from "react-router-dom";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Editstudent({ studentlist, setstudentlist }) {
  const history = useHistory();
  const { id } = useParams();
  console.log(id, studentlist);
  const student = studentlist[id];
  console.log(student);
  const [sname, setSname] = useState(student.sname);
  const [degree, setDegree] = useState(student.degree);
  const [year, setYear] = useState(student.year);
  const [section, setSection] = useState(student.section);
  const [batchyear, setBatchyear] = useState(student.batchyear);
  return (
    <div className="add-movie-form">
      <TextField fullWidth label="name" id="fullWidth" type="text"
        onChange={(event) => setSname(event.target.value)} value={sname} />
      <TextField fullWidth label="Degree" id="fullWidth" type="text"
        onChange={(event) => setDegree(event.target.value)} value={degree} />
      <TextField fullWidth label="Year" id="fullWidth" type="text"
        onChange={(event) => setYear(event.target.value)} value={year} />
      <TextField fullWidth label="Section" id="fullWidth" type="text"
        onChange={(event) => setSection(event.target.value)} value={section} />
      <TextField fullWidth label="Batch" id="fullWidth" type="text"
        onChange={(event) => setBatchyear(event.target.value)} value={batchyear} />
      <Button onClick={() => {
        const updatestudent = {
          sname: sname,
          degree: degree,
          year: year,
          section: section,
          batchyear: batchyear
        };
        const copystudentlist = [...studentlist];
        copystudentlist[id] = updatestudent;
        setstudentlist(copystudentlist);
        history.push('/Student');
      }}>edit</Button>
    </div>

  );
}

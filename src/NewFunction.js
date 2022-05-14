import { useHistory } from "react-router-dom";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function NewFunction({ studentlist, setstudentlist }) {
  const history = useHistory();
  const [sname, setSname] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  const [batchyear, setBatchyear] = useState("");
  return (<div className="add-movie-form">
    <TextField fullWidth label="name" id="fullWidth" type="text"
      placeholder="Name"
      onChange={(event) => setSname(event.target.value)} />
    <TextField fullWidth label="Degree" id="fullWidth" type="text"
      onChange={(event) => setDegree(event.target.value)} />
    <TextField fullWidth label="Year" id="fullWidth" type="text"
      onChange={(event) => setYear(event.target.value)} />
    <TextField fullWidth label="Section" id="fullWidth" type="text"
      onChange={(event) => setSection(event.target.value)} />
    <TextField fullWidth label="Batch" id="fullWidth" type="text"
      onChange={(event) => setBatchyear(event.target.value)} />
    <Button onClick={() => {
      const newMovie = {
        sname: sname,
        degree: degree,
        year: year,
        section: section,
        batchyear: batchyear
      };
      setstudentlist([...studentlist, newMovie]);
      history.push('/Student');

    }}>add movie</Button>
  </div>

  );
}

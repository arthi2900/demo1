import { useHistory } from "react-router-dom";
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export function Addteacher({ teacherlist, setteacherlist }) {
  const [tname, settname] = useState("");
  const [tdegree, settdegree] = useState("");
  const [texp, settexp] = useState("");
  const history = useHistory();
  return <div className="add-teacher-form">
    <TextField fullWidth label="name" id="fullWidth" type="text"
      placeholder="Name"
      onChange={(event) => settname(event.target.value)} />
    <TextField fullWidth label="name" id="fullWidth" type="text" placeholder="poster"
      onChange={(event) => settdegree(event.target.value)} />
    <TextField fullWidth label="name" id="fullWidth" type="text" placeholder="rating"
      onChange={(event) => settexp(event.target.value)} />

    <button onClick={() => {
      const newMovie = {
        tname: tname,
        tdegree: tdegree,
        texp: texp,
      };
      setteacherlist([...teacherlist, newMovie]);
      history.push('/Teacher');
    }}>add movie</button>
  </div>;
}

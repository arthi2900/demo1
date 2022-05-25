import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { APIteacher } from './APIteacher';
import { teacherValidationSchema } from './Addteacher';
import {useFormik} from "formik";
export function Editteacher() {
  const [ teacherlist,setteacherlist]= useState(null);
  const { id } = useParams();
     useEffect(()=>{
  fetch(`${APIteacher}/teacher/${id}`,
  {
    method:"GET",
  })
  //.then(data=>console.log(data))
  .then(data=>data.json())
  .then ((mvs)=>setteacherlist(mvs));
},[])
  //console.log(id, teacherlist);
  //const teacher1 = teacherlist[id];
  //console.log(teacher1);
    return (
  <div className="add-teacher-form">
    {teacherlist ?<Editteacherform  teacherlist={ teacherlist}/>:<h1>loading</h1>}
  </div>
  )
}
function Editteacherform({ teacherlist}){
   const history = useHistory();
   const formik=useFormik({
    initialValues:{
     tname:teacherlist.tname,
     texp:teacherlist.texp,
     tdegree:teacherlist.tdegree,
    },
    validationSchema:teacherValidationSchema, 
     onSubmit:(editte)=>{
      editteacher(editte);
      //console.log("onSubmit",newteacher);
  },
      });
      const editteacher=(editte)=>{
        console.log("update",editte);
  fetch(`${APIteacher}/teacher/${teacherlist.id}`,{
    method:"PUT",
    body:JSON.stringify(editte),
    headers:{
      "content-Type":"application/json",
    }})
  .then(()=> history.push('/Teacher'));
      }
  return (<div className="add-teacher-form">
        <form onSubmit={formik.handleSubmit}>
     {/*<TextField fullWidth label="name" id="fullWidth" type="text"
      placeholder="Name"
    onChange={(event) => settname(event.target.value)} />*/}
    <TextField fullWidth label="name" id="tname"name="tname" 
    type="text" onBlur={formik.handleChange}
     onChange={formik.handleChange} 
    value={formik.values.tname}
        />{formik.touched.tname && formik.errors.tname ?formik.errors.tname :" "}
    <TextField fullWidth label="degree" id="tdegree" 
    name="tdegree" type="text" 
      onChange={formik.handleChange} 
      onBlur={formik.handleChange} value={formik.values.tdegree}/>
      {formik.touched.tdegree && formik.errors.tdegree ?formik.errors.tdegree :" "}
    <TextField fullWidth label="exp" id="texp" name="texp" type="text" 
      onChange={formik.handleChange} onBlur={formik.handleChange} />
      {formik.touched.texp && formik.errors.texp ?formik.errors.texp :" "}

    <button  type="submit" >SAVE</button>
  
   </form>
</div>
)
}
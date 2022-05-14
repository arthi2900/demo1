import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Student } from "./Student";
import { useHistory } from 'react-router-dom';
export function Data({ studentlist, setstudentlist }) {
  const history = useHistory();
  return (
    <div className="data">
           <div className="student-list">
        {studentlist.map((st, index) => (
          <Student key={st.index}
            sname={st.sname} degree={st.degree}
            year={st.year} section={st.section}
            batchyear={st.batchyear}

            //delete comment 
            deleteButton={<IconButton aria-label="add to favorites" color="error"
              onClick={() => {
                console.log(index);
                const copystudentlist = [...studentlist];
                copystudentlist.splice(index, 1);
                setstudentlist(copystudentlist);
              }}>  <DeleteIcon />
            </IconButton>}
            editButton={<IconButton aria-label="add to favorites" color="primary"
              onClick={() =>history.push(`/Student/edit/${index}`)}>  <EditIcon />
            </IconButton>}
            id={index} />
        ))}
      </div>
    </div>
  );
}

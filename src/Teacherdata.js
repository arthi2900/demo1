import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import { Teacher } from './Teacher';

export function Teacherdata({ teacherlist, setteacherlist }) {
  const history = useHistory();
  return (
    <div className="App">
      <div className="teacher-list">
        {teacherlist.map((art1, index) => (
          <Teacher key={art1.index}
            tname={art1.tname}
            tdegree={art1.tdegree}
            texp={art1.texp}
            deleteteacher={<IconButton aria-label="add to favorites" color="error"
              onClick={() => {
                console.log(index);
                const copyteacher = [...teacherlist];
                copyteacher.splice(index, 1);
                setteacherlist(copyteacher);
              }}><DeleteIcon /></IconButton>}
            editteacher={<IconButton aria-label="add to favorites" color="primary"
              onClick={() => history.push(`/Teacher/edit/${index}`)}>  <EditIcon />
            </IconButton>}
            id={index} />))}

      </div>
    </div>
  );
}

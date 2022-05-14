import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export function Viewteacher({ teacherlist }) {
  const history = useHistory();
  const { id } = useParams();
  const teacher1 = teacherlist[id];
  return (
    <div>
      <h1>{teacher1.tname}</h1>
      <h1>{teacher1.tdegree}</h1>
      <h1>{teacher1.texp}</h1>
      <button onClick={() => history.goBack()}>back</button>
    </div>
  );
}

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import StudentDB from './components/studentDB';
import CreateRecord from './components/createRecord';
import ChangeEdit from './components/changeEdit';
import {Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <nav>
        <Link to='/'>ADD NEW STUDENT</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/studentDB'>Student Database</Link>
      
        
      </nav>

      <Routes >
        <Route path="/" element={<CreateRecord/>}/>
        <Route path="/:id" element={<CreateRecord/>}/>
        <Route path='/studentDB' element={<StudentDB/>}/>
        <Route path="/changeEdit" element={<ChangeEdit/>}/>
      </Routes>
     
   
    {/* <div className="App">
      <StudentDB/>
      <CreateRecord/>
    </div> */}
    </div>
  );
}

export default App;

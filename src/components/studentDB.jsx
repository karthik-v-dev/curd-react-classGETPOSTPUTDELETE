import axios from "axios";
import React, { Component } from "react";
import{Link} from 'react-router-dom';

import { Table,Button} from "react-bootstrap";
import CreateRecord from "./createRecord";
// import ChangeEdit from "./changeEdit";
class StudentDB extends Component {
  constructor() {
    super();
    this.state = {
      student:[],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:7444/student")
      .then((res) =>
        this.setState({student:res.data})
      )
      .catch((err) => console.log(err.message));
  }
  changeEdit(e){
    <CreateRecord />
    // <ChangeEdit edit ={stud} name="karthik"/>
  }
  changeDelete(id,Name){
    window.confirm(`Are you really delete this student ${Name} Record`)&& axios.delete('http://localhost:7444/student/'+id.toString()).then(res=>window.alert(`Delete ${Name} record Successfully....`),window.location.reload()).catch(err=>console.log(err.message));
  }
  render() {
    const students = this.state.student;
    const trows=
        students.map((stud)=>{return (
          <tr key={stud.id}>
              <td>{stud.id}</td>
              <td>{stud.Name}</td>
              <td>{stud.age}</td>
              <td>{stud.gender}</td>
              <td>{stud.standard}</td>
              <td>
                <Link to={'/'+stud.id}><Button className="btn btn-primary" onClick={(e)=>{this.changeEdit(e,stud)}}>EDIT</Button></Link>
                -<Link to={'/'+stud.id}><Button className="btn btn-warning"onClick={(e)=>{this.changeDetails(e,stud)}}>DETAILS</Button></Link>-
                  <Button className="btn btn-danger"onClick={(e)=>{this.changeDelete(stud.id,stud.Name)}}>DELETE</Button>
              </td>
          </tr>
        )})
        
    return (
      <div className="container">
        <h2 className="text-success">Student Database</h2>
        <Link to='/'><Button className="btn btn-success mx-5" onClick={this.addStudent}>Add New Student<span>(+)</span></Button></Link>
        <Table>
          <thead>
            <tr className="bg-dark text-white">
              <th>Roll NUmber</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Standard</th>
              <th>View Data</th>
            </tr>
          </thead>
          <tbody>{trows}</tbody>
        </Table>
      </div>
    );
  }
}
export default StudentDB;

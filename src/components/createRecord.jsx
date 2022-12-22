import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
class CreateRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      Name: "",
      age: "",
      standard: "",
      gender: "",
      path: window.location.pathname
        ? parseInt(window.location.pathname.split("")[1])
        : "",
    };

    this.submitData = this.submitData.bind(this);
  }

  componentDidMount() {
    !isNaN(this.state.path) &&
      axios
        .get("http://localhost:7444/student/" + this.state.path.toString())
        .then((res) =>
          this.setState({
            id: res.data.id,
            Name: res.data.Name,
            age: res.data.age,
            standard: res.data.standard,
            gender: res.data.gender,
          })
        )
        .catch((err) => console.log(err.message));
  }
  changeVal(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state[e.target.name]);
  }

  submitData(e) {
    e.preventDefault();
    let { id, Name, age, standard, gender } = this.state;
    if (
      isNaN(this.state.path) ||
      this.state.path === "undefined" ||
      this.state.path === null
    ) {
      axios
        .post("http://localhost:7444/student", {
          id,
          Name,
          age,
          standard,
          gender,
        })
        .then((response) => {
          window.alert("Student Data Added Successfully...");
          this.setState({
            id: "",
            Name: "",
            age: "",
            standard: "",
            gender: "",
          });
        })
        .catch((error) => console.log(error.message));
    } else {
      axios
        .put("http://localhost:7444/student/" + id.toString(), {
          id,
          Name,
          age,
          standard,
          gender,
        })
        .then((response) => {
          window.alert("Student Data Updated Successfully...");
          this.setState({
            id: "",
            Name: "",
            age: "",
            standard: "",
            gender: "",
          });
        })
        .catch((error) => console.log(error.message));
    }
  }
  render() {
    //    let [id,Name,age,standard] = this.state;
    return (
      <div className="mt-80">
        <div className="form_data text-web-center b-1">
        <h2 className="text-white">ADD NEW STUDENT</h2>
        <form
          name="f"
          className="form-group"
          onSubmit={(e) => this.submitData(e)}
        >
          <input
            type="number"
            name="id"
            onChange={(e) => {
              this.setState({ id: Math.floor(Math.random() * 10000) + 1 });
            }}
            value={this.state.id}
            placeholder="ID"
            disabled={true}
          />
          <br />
          <br />
          <input
            type="text"
            name="Name"
            onChange={(e) => {
              this.changeVal(e);
            }}
            value={this.state.Name}
            placeholder="NAME"
            required
            autoComplete="off"
          />
          <br />
          <br />
          <input
            type="Number"
            name="age"
            onChange={(e) => {
              this.changeVal(e);
            }}
            value={this.state.age}
            placeholder="AGE"
            autoComplete="off"
          />
          <br />
          <br />
          <input
            type="text"
            name="standard"
            onChange={(e) => {
              this.changeVal(e);
            }}
            value={this.state.standard}
            placeholder="STANDARD"
            required
            autoComplete="off"
          />
          <br />
          <br />
          <input
            type="radio"
            name="gender"
            onChange={(e) => {
              this.changeVal(e);
            }}
            value="Male"
            checked={this.state.gender === "Male" ? true : false}
            style={this.state.gender === "Male"?{height:'15px',width:'15px'}:{}}
            required
           
          />
          &nbsp;Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            onChange={(e) => {
              this.changeVal(e);
            }}
            value="Female"
            required
            checked={this.state.gender === "Female" ? true : false}
            style={this.state.gender === "Female"?{height:'15px',width:'15px'}:{}}
          />
          &nbsp;Female
          <br />
          <br />
          <input type="submit" className="btn btn-success" value="Submit" />
        </form>
        </div>
        <div className="text-web-center">
          <table className="b-1">
            <thead>
              <tr className="bg-primary text-white">
                <td colspan={3}>
                  <h2>
                    STUDENT{" "}
                    <sapn className="text-warning">
                      {this.state.Name.toUpperCase()}
                    </sapn>{" "}
                    DETAILS
                  </h2>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-initial"><h4 class>Roll Number Student</h4></td>
                <td className="text-initial"><h2>:</h2></td>
                <td  className="text-initial"><h3>{this.state.id}</h3></td>
              </tr>
              <tr>
                <td  className="text-initial"><h4>Name of Student</h4></td>
                <td className="text-initial"><h2>:</h2></td>
                <td className="text-initial"><h3>{this.state.Name.toUpperCase()}</h3></td>
              </tr>
              <tr>
                <td className="text-initial"><h4>Age of Student</h4></td>
                <td className="text-initial"><h2>:</h2></td>
                <td className="text-initial"><h3>{this.state.age}</h3></td>
              </tr>
              <tr>
                <td className="text-initial"> <h4>Gender of Student</h4></td>
                <td className="text-initial"><h2>:</h2></td>
                <td className="text-initial"><h3>{this.state.gender}</h3></td>
              </tr>
              <tr>
                <td className="text-initial"><h4>Standard of Student</h4></td>
                <td className="text-initial"><h2>:</h2></td>
                <td className="text-initial"><h3>{this.state.standard}</h3></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default CreateRecord;

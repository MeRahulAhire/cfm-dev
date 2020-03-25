import React, { Component } from 'react'
import UserDetail from './UserDetail'
import Credential from './Credential'
import ProfileDetail from './ProfileDetail'
import CollegeDetail from './CollegeDetail'
// import ReviewForm from './ReviewForm'

export class Registration extends Component {
    state = {
    step: 1,
    CollegeName: '',
    Branch: '',
    YearOfAdmission: '',

    FirstName: '',
    LastName: '',
    Gender: '',
    DOB:'',

    Email:'',
    Username:'',
    Phone:'',
    Password:'',
    
    ProfilePic:'',
    Description:''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
    render() {
        const { step } = this.state;
    const { CollegeName, Branch, YearOfAdmission, FirstName, LastName, Gender, DOB, Email, Username, Password, ProfilePic, Description } = this.state;
    const values = { CollegeName, Branch, YearOfAdmission, FirstName, LastName, Gender, DOB, Email, Username, Password, ProfilePic, Description };
        switch(step){
          case 1:
            return(
              <CollegeDetail
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
                />
            )
          case 2:
            return(
              <UserDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
                />
            )  
            case 3:
              return(
                <Credential
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
              )
              case 4:
            return(
              <ProfileDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              />
            )  
            case 5: return(
              <h1 style={{backgroundColor:'black', color:'white', height:'100vh'}}>Thanks for Submitting but we are under Contruction</h1>
            )

        }
    }
}

export default Registration

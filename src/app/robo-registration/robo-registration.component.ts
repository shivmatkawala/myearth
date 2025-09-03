import { Component } from '@angular/core';

@Component({
  selector: 'app-robo-registration',
  templateUrl: './robo-registration.component.html',
  styleUrls: ['./robo-registration.component.css']
})
export class RoboRegistrationComponent {

  myRobot={
    roboid:'',
    roboname:'',
    roboprice: 0,
    manufacturer:'',
    origin:'',
    purpose:''
  };

  Origin: string[] = [
    'India',
    'America',
    'Australia',
    'England'
  ];

  constructor(){}

  onSubmit(){
      if (this.isFormValid()){
        console.log(this.myRobot)
        alert("Form submitted successfully..!")
      }else{
        alert("Invalid Form..!")
      }
  }

  isFormValid(): boolean{
    return(
        this.myRobot.roboid.trim() !== ''&&
        this.myRobot.roboname.trim() !== '' &&
        this.myRobot.manufacturer.trim() !== '' &&
        this.myRobot.purpose.trim() !== "" &&
        this.myRobot.origin.trim() !== "" &&
        this.myRobot.roboprice > 0
      )
  }
}

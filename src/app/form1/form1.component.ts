import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form1Service } from '../form1.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  form1: FormGroup;

  constructor(private fb: FormBuilder, private form1Service:Form1Service){
    this.form1 = this.fb.group({
      animalName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      animalColor: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      animalAge: [[null, Validators.required, Validators.min(1), Validators.max(100)]],
      animalRegion: ['', [Validators.required]],
    })
  };

  onSubmit(){
    if(this.isFormValid()){
      this.form1Service.addAnimal({...this.form1.value})
      alert("Form Submitted Successfully..!")
      console.log(this.form1Service.getAnimal())
      this.form1.reset()
    }else{
      alert('Invalid Form.!')
    }
  };

  isFormValid(): boolean{
    return this.form1.valid;
  }
}

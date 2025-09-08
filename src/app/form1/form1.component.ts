import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  form1: FormGroup;

  constructor(private fb: FormBuilder){
    this.form1 = this.fb.group({
      animalName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      animalColor: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      animalAge: [[null, Validators.required, Validators.min(1), Validators.max(100)]],
      animalRegion: ['', [Validators.required]],
    })
  };

  onSubmit(){
    if(this.isFormValid()){
      alert("Form Submitted Successfully..!")
    }else{
      alert('Invalid Form.!')
    }
  };

  isFormValid(): boolean{
    debugger
    return this.form1.valid;
  }
}

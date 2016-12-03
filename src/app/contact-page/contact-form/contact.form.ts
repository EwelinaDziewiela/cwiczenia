import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "contact-form",
  templateUrl: "contact.form.html",
  styles: ["contact.form.sass"]
})
export class ContactForm {

  //model = {
  //  firstname: "asdasd",
  //  lastname: "",
  //  email: ""
  //};
  //
  //onSubmit(contactForm){
  //  console.log(this.model);
  //}


  contactForm: any;

  constructor(private formBuilder: FormBuilder){

    this.contactForm = this.formBuilder.group({
      'firstname': ['gowno', Validators.required],
      'lastname': ['', [Validators.required]],
      //'email': ['', [Validators.required, ValidationService.emailValidator]],
      'email': ['', [Validators.required, Validators.minLength(5)]]
    });

    //will show changes in the view
    this.contactForm.valueChanges.subscribe( (data) => {
      console.log('form changes', data)
    });

  }

  onSubmit(){
    console.log(this.contactForm.value);
  }

}



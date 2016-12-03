import { Component } from '@angular/core'

@Component({
  selector: "contact-form",
  templateUrl: "contact.form.html",
  styles: ["contact.form.sass"]
})
export class ContactForm {

  model = {
    firstname: "asdasd",
    lastname: "",
    email: ""
  };

  onSubmit(contactForm){
    console.log(contactForm, this.model);
  }

}



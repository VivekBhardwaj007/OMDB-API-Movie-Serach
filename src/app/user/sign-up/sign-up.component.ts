import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/shared/user.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user : User;
  // emailPattern : "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";

  constructor() { }

  ngOnInit() {
    // this.resetForm();
  }

  registers=[]

  registerUser(username,password){
    let register = {"username":username.value,"password":password.value};
    if(localStorage.getItem("registers")){
      this.registers = JSON.parse(localStorage.getItem("registers"))
    }
    this.registers.push(register);
    localStorage.setItem("registers",JSON.stringify(this.registers))
    username.value="";
    password.value="";
    alert("You are registered");

  }
  
  // resetForm(form? : NgForm)
  // {
  //   if(form != null)
  //   form.reset();
  //   this.user = {
  //     UserName:'',
  //     Password:'',
  //     Email:'',
  //     FirstName:'',
  //     LastName:''
  //       }
  // }

  // SignUpUser(e)
  // {
  //   var username = e.target.elements[0].value;
  //   var password = e.target.elements[1].value;
  //   console.log(username, password);
  //   this.router.navigate(['login']);

  //   // if(username == 'admin' && password == 'admin')
  //   // {
  //   //   this.router.navigate(['home']);
  //   // }
  // }


}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user : User;

  constructor(private router:Router) { }

  registers=[]

  ngOnInit() {
    this.registers = JSON.parse(localStorage.getItem("registers"));
    console.log(this.registers);
  }

  loginUser(e)
  {
    
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(username, password);

    if(username == 'admin' && password == 'admin')
    {
      this.router.navigate(['dashboard']);
    }
  }

}

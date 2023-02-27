import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
    
  }
  res: any;

  RedirectLogin() {
    this.router.navigate(['login']);
  }
  reactiveform = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    MiddleName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Username: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    Password: new FormControl('', Validators.required),
  });
  SaveUser() {
    if (this.reactiveform.valid) {
      this.service.Registeration(this.reactiveform.value).subscribe(item => {
        this.res = item;
        console.log(this.res);
        if(this.res.message=='Account Created Successfully'){
          Swal.fire(
            'Done',
            'Login Successfuly',
            'success'
          )
         this.RedirectLogin();
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: this.res.message,
          })        }
      });
    }

  }

}

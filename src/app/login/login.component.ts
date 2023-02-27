import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent implements OnInit {
  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  res: any;
   ProdceedLogin  ( logindata: any) {
    if (logindata.valid) {
      this.service.ProceedLogin(logindata.value).subscribe(item => {
        this.res=item;
        if(this.res.message==true){
          Swal.fire(
            'Done',
            'Login Successfuly',
            'success'
          )
          localStorage.setItem('token',this.res.access_token);
          this.route.navigate(['contact']);
          console.log(this.res);

        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: this.res.message,
          })
        }
      });

    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All Field Required',
      })
    }
  }
  RedirectRegister(){
    this.route.navigate(['/register']);
  }

}

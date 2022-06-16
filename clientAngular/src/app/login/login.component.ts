import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {}
  handleData(data:any){
    this.auth.login( data.un, data.pw).subscribe( ()=>{ 
         console.log("Đăng nhập thành công");
         this.router.navigateByUrl('/');
      }
    )
  }
  handleNewData(data: any) {
    console.log(data, data.un , data.pw);
    this.auth.login( data.un, data.pw).subscribe( 
      res =>{          
          var d = JSON.parse(res);
          console.log("Đăng nhập thành công ", res);          
          const expiresAt = moment().add(d.expiresIn,'second');
           localStorage.setItem('id_token', d.idToken);
           localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
           this.router.navigateByUrl('/');
      },
      error => {
        console.log('You are not allowed to access this page', error);
        this.router.navigateByUrl('/authLogin');
      }
    )
   }
  
}

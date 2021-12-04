import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private _snack : MatSnackBar) { }


  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName:'',
    email:'',
    phone:'',
  };

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);

   this.Validation();
    
    //addUser:userService
    this.userService.addUser(this.user).subscribe(
      (data:any) => {
        //success
        console.log(data);
        //alert('success');
        Swal.fire('Successfully done','User is registered and id is ' + data.id,'success');

      },
      (error) => {
        //error
        console.log(error);
        this._snack.open('Something went wrong','',{
          duration : 3000,
          verticalPosition: 'top',
        })
        //alert('Something went wrong')
      }
    )
  }

  Validation(){

    if(this.user.username == '' || this.user.username == null){
      this._snack.open('Username is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if(this.user.password == '' || this.user.password == null){
      this._snack.open('Password is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if(this.user.firstName == '' || this.user.firstName == null){
      this._snack.open('First Name is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if(this.user.lastName == '' || this.user.lastName == null){
      this._snack.open('Last Name is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if(this.user.email == '' || this.user.email == null){
      this._snack.open('Email is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if(this.user.phone == '' || this.user.phone == null){
      this._snack.open('Phone Number is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }

  }

}

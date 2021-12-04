import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  categories;
  constructor(private categoryService : CategoryService, private _snack:MatSnackBar) { }

  ngOnInit(): void {

    this.categoryService.categories().subscribe((data:any) => {
      this.categories = data;
    },
    (error)=>{
      this._snack.open('Error in loading categories from server','',{
        duration:3000,
        verticalPosition:'top'
      });
    });


  }

}

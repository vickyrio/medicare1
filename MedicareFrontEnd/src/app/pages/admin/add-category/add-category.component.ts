import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category = {
    title: '',
    description: ''
  };

  constructor(private categoryService: CategoryService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.category);

    if (this.category.title.trim() == '' || this.category.title == null) {
      this._snack.open('Title required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    if (this.category.description.trim() == '' || this.category.description == null) {
      this._snack.open('Description required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }


    this.categoryService.addCategory(this.category).subscribe(
      (data: any) => {
        //success
        console.log(data);
        //alert('success');
        this.category.title ='';
        this.category.description ='';
        Swal.fire('Successfully done', 'Catergory is added ' , 'success');
      },
      (error) => {
        //error
        console.log(error);
        Swal.fire('Error occur', 'Server error !!' ,'error');

        //alert('Something went wrong')
      })

  }
}
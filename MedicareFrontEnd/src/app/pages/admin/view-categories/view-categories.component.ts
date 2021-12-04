import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories=[
    {
      cid: '',
      title : '',
      description: '',
    }
  ]

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.categoryService.categories().subscribe(
      (data:any) => {
        //success
        this.categories = data;
        console.log(this.categories);
        //alert('success');
       // Swal.fire('Successfully done');

      },
      (error) => {
        //error
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');

        //alert('Something went wrong')
      }
    )

  }

}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import { MedicineService } from 'src/app/service/medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  categories =[
    {
      cid:'',
      title:''
    },
];

  medicine ={
      id:'',
      name:'',
      seller:'',
      prodDesc:'',
      offers:'',
      price:'',
      active: true,
      category: {
        cid:'',
      },
    };


    constructor(private categoryService: CategoryService,private medicineService: MedicineService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
    this.categoryService.categories().subscribe(
      (data: any) => {
        //success
        //alert('success');
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        //error
        console.log(error);
        Swal.fire('Error occur', 'Server error !!' ,'error');

        //alert('Something went wrong')
      })


  }









  addMedicine() {
    console.log(this.medicine);

    if (this.medicine.name.trim() == '' || this.medicine.name == null) {
      this._snack.open('Name required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    if (this.medicine.seller.trim() == '' || this.medicine.seller == null) {
      this._snack.open('Seller required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    if (this.medicine.prodDesc.trim() == '' || this.medicine.prodDesc == null) {
      this._snack.open('Description required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    if (this.medicine.offers.trim() == '' || this.medicine.offers == null) {
      this._snack.open('Offer required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    if (this.medicine.price.trim() == '' || this.medicine.price == null) {
      this._snack.open('Price required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    // if (this.medicine.category..cidtrim() == '' || this.medicine.category == null) {
    //   this._snack.open('Category required !!', '', {
    //     duration: 3000,
    //     verticalPosition: 'top',
    //   });
    //   return;
    // }


    this.medicineService.addMedicine(this.medicine).subscribe(
      (data: any) => {
        //success
        console.log(data);
        this.medicine ={
          id:'',
          name:'',
          seller:'',
          prodDesc:'',
          offers:'',
          price:'',
          active: false,
          category: {
            cid:'',
          },
        };
    
        
        Swal.fire('Successfully done', 'Medicine is added ' , 'success');
      },
      (error) => {
        //error
        console.log(error);
        Swal.fire('Error occur', 'Server error !!' ,'error');

        //alert('Something went wrong')
      })

 }
}

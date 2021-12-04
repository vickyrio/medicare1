import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Medicine } from 'src/app/model/Medicine';
import { MessengerService } from 'src/app/service/messenger.service';
import { MedicineService } from 'src/app/service/medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  medicines;
  
  @Input()
  productItem: Medicine;

  constructor(private msg: MessengerService, private medicineService: MedicineService, private _router: Router) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem);
  }

  buyMedicine() {

    this._router.navigate(['/user-dashboard/payment']);
  }


  seachByName(name){
    this.medicineService.searchByName(name).subscribe(
      (data : any) => {
        this.medicines = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    )
  }

}

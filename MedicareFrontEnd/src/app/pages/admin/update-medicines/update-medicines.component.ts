import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { MedicineService } from 'src/app/service/medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-medicines',
  templateUrl: './update-medicines.component.html',
  styleUrls: ['./update-medicines.component.css']
})
export class UpdateMedicinesComponent implements OnInit {

  constructor(private _route:ActivatedRoute, 
    private medicineService: MedicineService, 
    private categoryService: CategoryService, 
    private _router :Router) { }

  id =  0;
  medicine;
  categories;

  ngOnInit(): void {

    this.id = this._route.snapshot.params.id;
    this.medicineService.getMedicine(this.id).subscribe(
      (data)=>{
        this.medicine = data;
        console.log(this.medicine);
      },
      (error)=>{
        console.log(error);
      }
    );

    this.categoryService.categories().subscribe(
      (data: any) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error occur', 'Server error !!' ,'error');
      });
  }

  public updateData(){
    this.medicineService.updateMedicine(this.medicine).subscribe(
      (data: any) => {
        Swal.fire('Success !!', 'Medicine updated !!' ,'success').then((s) =>{
          this._router.navigate(['/admin/medicines'])
        }
        );

      },
      (error) => {
        console.log(error);
        Swal.fire('Error occur', 'Server error !!' ,'error');
      });

  }

}

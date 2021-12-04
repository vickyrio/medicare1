
import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/service/medicine.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  catId;
  medicines;
  keyWord;
  searchMode: boolean;

  constructor(
    private medicineService: MedicineService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this._route.paramMap.subscribe(() => {
      this.listproduct();
    })
    
  }

  listproduct() {
    this.searchMode = this._route.snapshot.paramMap.has('keyword');
    console.log(this.searchMode)
    if(this.searchMode){
      this.handleSearchProducts();
    }else{
      this.handleListProducts();
    }  
  }

  handleListProducts(){
    this._route.params.subscribe((params) => {
      this.catId = params.catId;
      if (this.catId == 0) {
        console.log("load all med");

        this.medicineService.getActiveMedicines().subscribe(
          (data: any) => {
            this.medicines = data;
           },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log("load specific med");

        this.medicineService.getActiveMedicinesOfCategory(this.catId).subscribe(
          (data: any) => {
            this.medicines = data;
            console.log(this.medicines);
          },
          (error) => {
            console.log(error);
            alert('Error in loading medicines');
          }
        );
      }
    });
  }


  handleSearchProducts(){
    const theKeyword = this._route.snapshot.paramMap.get('keyword');
    this.medicineService.searchByName(theKeyword).subscribe(
      (data: any) => {
        this.medicines = data;
        console.log(this.medicines)
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    )
  }
}

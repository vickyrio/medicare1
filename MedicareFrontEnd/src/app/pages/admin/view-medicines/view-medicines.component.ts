import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/service/medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-medicines',
  templateUrl: './view-medicines.component.html',
  styleUrls: ['./view-medicines.component.css']
})
export class ViewMedicinesComponent implements OnInit {

  medicines = [
    {
      id: 6,
      name: 'some',
      seller: 'exmaple',
      prodDesc: 'Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing. Writers write persuasive and argument paragraphs because their purpose is to persuade or convince someone. ',
      offers: 'svdf',
      price: '34',
      active: '',
      category: {
        title: 'program'
      }
    }
  ]

  constructor(private medicineService: MedicineService, private router: Router) { }

  ngOnInit(): void {
    this.medicineService.medicines().subscribe(
      (data: any) => {
        //success
        this.medicines = data;
        console.log(this.medicines);
        //alert('success');
        //Swal.fire('Successfully done');

      },
      (error) => {
        //error
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');

        //alert('Something went wrong')
      }
    )
  }


  removeMedicine(id) {

    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {

      if (result.isConfirmed) {

        this.medicineService.deleteMedicine(id).subscribe(
          (data) => {
            // this.router.navigate(['admin', 'medicines']);
             this.medicines = this.medicines.filter((medicine)=> medicine.id != id);
            Swal.fire('Successfully done', 'Medicine Removed', 'success');
          },
          (error) => {
            console.log(error);
            Swal.fire('Error !!', 'Error in removing medicine', 'error');
          });

      }
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit {

  medicines;
  constructor(private _route: ActivatedRoute, private medicineService: MedicineService) { }

  ngOnInit(): void {

    this.medicineService.getActiveMedicines().subscribe(
      (data: any) => {
        this.medicines = data;
        console.log(this.medicines);
      },
      (error) => {
        console.log(error);
      }
    );
    }
  }

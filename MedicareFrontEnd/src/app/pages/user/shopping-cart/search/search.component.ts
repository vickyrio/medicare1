import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  // searchByName(value: string){
  //   console.log(`value=${value}`);
  //   this._router.navigateByUrl('user-dashboard/search/:{value}');
   
  // }

}

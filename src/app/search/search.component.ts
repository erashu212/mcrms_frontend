import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  courses = ['Course1','Course2','Course3'];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    console.log("Hi");
    this._http.getData()
        .subscribe(d => console.log(d));
      
  }

}

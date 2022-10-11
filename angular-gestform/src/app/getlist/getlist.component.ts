import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getlist',
  templateUrl: './getlist.component.html',
  styleUrls: ['./getlist.component.css']
})
export class GetlistComponent implements OnInit {
  getList!:number[]

  constructor() { }

  ngOnInit(): void {
  }

}

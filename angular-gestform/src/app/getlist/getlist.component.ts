import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getlist',
  templateUrl: './getlist.component.html',
  styleUrls: ['./getlist.component.css']
})
export class GetlistComponent implements OnInit {
  processed_list!:string;

  constructor() { }

  ngOnInit(): void {
  }

  async call_back(content:string): Promise<void> {
    let myUrl = 'http://127.0.0.1:8000/process_list'
    console.log(content);

    

    const response = await fetch(myUrl, {
      method: 'POST',
      body: content,
      headers: {'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"},
      mode: 'no-cors',
    });
    
    if (!response.ok) { 
      console.log('no response'); 
    }

    if (response.body !== null) {

      this.processed_list= JSON.stringify(response.json());
      console.log(response.body);
    }
  }
}

import { Component, OnInit,Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-getlist',
  templateUrl: './getlist.component.html',
  styleUrls: ['./getlist.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class GetlistComponent implements OnInit {
  processed_list!:string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  call_back(list_send:string): Observable<any> {
    let myUrl = 'http://127.0.0.1:8000/process_list/'
    let content = {
      'list_send':list_send
    }
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });
    headers.append('Content-Type','application/json');
    console.log(myUrl,content)
    return this.http.post(myUrl,content,{'headers':headers, observe:'response'});
  }
  test(send:string){
    this.call_back(send).subscribe((response:any)=>{
      this.processed_list = response.body
    })
  }
}

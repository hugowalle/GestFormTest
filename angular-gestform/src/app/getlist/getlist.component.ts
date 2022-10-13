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
  error_check!:string;
  numbers = /^[0-9,-]*$/;                                                           //constante permettant de vérifier la contenance de la liste
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  
  private call_back(list_send:string): Observable<any> {                            //fonction envoyant la liste entrée au backend pour récuperer ensuite
    let myUrl = 'http://127.0.0.1:8000/process_list/'                               //la liste traitée.
    let content = {
      'list_send':list_send
    }
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });
    headers.append('Content-Type','application/json');
    return this.http.post(myUrl,content,{'headers':headers, observe:'response'});
  }

  private check_list(list_send:string){                                             //fonction vérifiant que la liste reçue ne contient que des nombres,
    return this.numbers.test(list_send)                                             //des virgules et des moins.
  }

  private check_first_last(list_send:string){                                       //fonction vérifiant que la liste commence et finit par des nombres
    list_send = list_send.replace(/-/g,'')
    let first = Array.from(list_send)[0]
    let last = Array.from(list_send)[list_send.length -1]
    return (/^-?\d+$/.test(first) && /^-?\d+$/.test(last))
  }

  private check_number_range(list_send:string){                                     //fonction vérifiant que les nombres soient bien compris entre 1000 et -1000
    list_send = list_send.replace(/-/g,'')
    const numbers = list_send.split(',');
    let check = true;
    for(const i of numbers){
      if(i.length>3 && i != '1000'){
        check = false;
        return check;
      }
    }
    return check;
  }

  private check_minus(list_send:string){                                            //fonction vérifiant qu'il n'y ai pas de 'moins' mal placés
    const numbers = list_send.split(',');
    var minus_number = 0;
    let check = 0;
    for(const i of numbers){
      minus_number = (i.match(/-/g)||[]).length
      if(minus_number>1){
        check = 1;
        return check;
      }
      else if((minus_number==1 && i[0]!='-')){
        check = 2
        return check;
      }
    }
    return check
  }

  test(list_send:string){                                                             //fonction appelée lors de l'appui du bouton de traitement
    if(this.check_list(list_send)){                                                   //mettant en utilisation toutes les fonctions vues plus haut.
      if(this.check_first_last(list_send)){
        if(this.check_minus(list_send) == 0){
          if(this.check_number_range(list_send)){
            this.call_back(list_send).subscribe((response:any)=>{
              this.processed_list = response.body
            })
            this.error_check = "";
          }
          else {
            this.error_check="Les nombres doivent être compris entre -1000 et 1000"
            this.processed_list = "";
          }
        }
        else if(this.check_minus(list_send)==2){
          this.error_check="Un nombre peut contenir un - seulement s'il se trouve au début de celui-ci"
          this.processed_list = "";
        }
        else{
          this.error_check="Un nombre ne peut contenir plusieurs -"
          this.processed_list = "";
        }
      }
      else{
        this.error_check="Cette liste doit commencer et finir par un nombre!"
        this.processed_list = "";
      }
    }
    else{
      this.error_check="Cette liste contient autre chose que des nombres et des virgules!"
      this.processed_list = "";
    }
  }
}

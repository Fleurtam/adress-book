import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  obj = {
    name:
    email:
    company:
    role:
    twitter:
    location:
    info:
  };

  private apiUrl: string = 'https://ca-address-book.herokuapp.com/api/contacts';
  data = {};

  // title = 'app';
  // data = {};
  // private apiUrl =
  // 'https://ca-address-book.herokuapp.com/api/contacts';

    constructor(private http: Http) {
      this.getContacts().subscribe(data => {
        console.log(data);
      });
    }

    getContacts() {
      return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
      // we get the response from the request get(this.apiUrl)(line 37)
      // it will be converted into the json object
      // .map will return to us in line 38
    
    }
    )
    }
}

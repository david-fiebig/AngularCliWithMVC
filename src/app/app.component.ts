import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient)  {
  }
  title = 'AngularCLI in MVC with WebAPI';
  values = 'test';

  ngOnInit(): void {
    this.http.get('http://localhost:1515/api/WebApi').subscribe(data => {
      // Read the result field from the JSON response.
      this.values = data.toString();
    });
  }
}

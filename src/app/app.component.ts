import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  webApiEndPoint: string;
  title = 'AngularCLI in MVC with WebAPI';
  values = 'test';
  constructor(/*private sessionService: SessionService, */private elementRef: ElementRef, private http: HttpClient)  {
    const native = this.elementRef.nativeElement;
    this.webApiEndPoint = native.getAttribute('webApiEndPoint');
    // sessionService.apiServer = this.webApiEndPoint;
  }

  ngOnInit(): void {
    this.http.get(`${this.webApiEndPoint}WebApi`).subscribe(data => {
      // Read the result field from the JSON response.
      this.values = data.toString();
    });
  }
}

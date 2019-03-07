import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  public email:string;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    //debugger
    //console.log(this.route.params);
    this.email = this.routeInfo.snapshot.params["ids"];
    //this.email = this.routeInfo.snapshot.params["ids"];
  }

}

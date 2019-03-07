import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-demotwo',
  templateUrl: './demotwo.component.html',
  styleUrls: ['./demotwo.component.css']
})
export class DemotwoComponent implements OnInit {

  public sessionid:string;
  public names:string;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    debugger
    //this.sessionid = this.routeInfo.snapshot.params["session_id"];
    //console.log(this.route.params);
    this.sessionid = this.routeInfo.snapshot.queryParams["session_id"];
    this.names = this.routeInfo.snapshot.queryParams["user_name"];

  }

}

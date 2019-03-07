import { Component, OnInit } from '@angular/core';

import { Router ,NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demoone',
  templateUrl: './demoone.component.html',
  styleUrls: ['./demoone.component.css']
})
export class DemooneComponent implements OnInit {

  public demooneValue;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  demoone() {
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': this.demooneValue,'user_name':"dadaada" },
      fragment: 'anchor'
    };


   this.router.navigate(['/demotwo'],navigationExtras);
  }

}

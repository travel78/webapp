import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public navLinks = [{path:'users',label:'Users'},{path:'skills',label:'Skills'},{path:'resources',label:'Resources'}];

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('init resources');
  }

  ngOnDestroy(): void {
    console.log('destroy resources');
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public displayedColumns = ['parent', 'group', 'name', 'description', 'levels', 'edit'];
  public dataSource = new MatTableDataSource();

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataSource.data = skills;
  }

  public onEdit(id: string) {
    this.router.navigate([id], {relativeTo: this.route});
  }

}


const skills = [
  {
    _id: '4323jhfd32kjn',
    parent: 'ruby',
    group: 'Computer',
    name: 'ruby syntax core',
    description: 'some description',
    levels: [
      'first', 'second', 'third', 'fourth'
    ]
  }
];

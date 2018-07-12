import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {AdminHttpService} from "../admin-http.service";


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public displayedColumns = ['email', 'role', 'disable', 'enable'];
  public dataSource = new MatTableDataSource();

  constructor(private http: AdminHttpService) {
  }

  ngOnInit(): void {
    this.http.getUsers().subscribe(
      data=>{
        this.dataSource.data = data;
      },
      err =>{
        console.log(err);
      }
    );
  }
}

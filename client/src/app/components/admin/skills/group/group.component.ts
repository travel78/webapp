import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminHttpService } from '../../admin-http.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  public form: FormGroup;
  public groups = [];

  constructor(private http: AdminHttpService) {
  }

  ngOnInit() {
    this.http.getGroups().subscribe(
      res =>{
        this.groups = res;
      },
      err =>{
        console.log(err);
      }
    );
    this.form = new FormGroup({
      'group': new FormControl(null, [Validators.required]),
      'subgroup': new FormControl(null, [Validators.required])
    });
  }

  public onSubmit() {
    this.http.createGroup(this.form.value).subscribe(
      res => {
        this.form.reset();
      },
      err => {
        console.log(err);
      }
    );

  }
}

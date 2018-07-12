import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminHttpService } from '../../admin-http.service';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {
  public editMode = false;

  constructor(private route: ActivatedRoute, private http: AdminHttpService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editMode = true;
        this.http.getSkill(params['id']).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }


}

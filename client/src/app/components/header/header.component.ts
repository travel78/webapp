import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  public isLogined: boolean;
  private subscription: Subscription;

  constructor(private authSer: AuthService, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = this.authSer.getIsAuthorized().subscribe(
      role=>{
        this.isLogined = role !=='none';
        this.ref.detectChanges();
      }
    );
  }

  public onLogOut() {
    this.authSer.logOut();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

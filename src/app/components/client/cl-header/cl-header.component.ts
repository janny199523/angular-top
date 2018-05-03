import { Component, OnInit } from '@angular/core';
import { ClAuthGuard } from '../../../guards/client/cl-auth.guard';
import { ClAuthenticationService } from '../../../services/client/cl-authentication.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { query } from '@angular/core/src/animation/dsl';
import { ClFoodService } from '../../../services/client/cl-food.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-cl-header',
  templateUrl: './cl-header.component.html',
  styleUrls: ['./cl-header.component.css']
})
export class ClHeaderComponent implements OnInit {

  nickname: any;
  cartnum: any = 0;

  constructor(private foodService: ClFoodService,
              private notification: NotificationService,
              private authGuard: ClAuthGuard,
              private authService: ClAuthenticationService,
              private router: Router,
              private translate: TranslateService) {
                /*translate.setDefaultLang('en');
                foodService.cartNum.subscribe(num => this.changeCartNum(num));*/
              }

  ngOnInit() {
    //this.foodService.setHeaderCartNum();
  }

  /*changeCartNum(num)
  {
    this.cartnum = num;
  }

  switchLanguage(lang: string)
  {
    this.translate.use(lang);
  }

  checkUserType() {
    let userData = JSON.parse(sessionStorage.getItem('clientUser'));

    if(userData != null)
    {
      if(userData.user.usertype === 0)
        return true;
      else
        return false;
    }
  }*/

  checkPostFood() {
    let userData = JSON.parse(sessionStorage.getItem('clientUser'));

    if (userData != null) {
      if (userData.user.usertype === 0)
        return true;
      else
        return false;
    }
    if (userData == null)
      return true;
  }

  checkLogined() {
    let userData = JSON.parse(sessionStorage.getItem('clientUser'));

    if(userData != null)
    {
      this.nickname = userData.user.nickname;
      return true;
    }  
    else
    {
      return false;
    }
    // return this.authGuard.canActivate();
  }

  doSignOut() {
    console.log("will signout");
    this.authService.logout();
    this.router.navigate(['/']);
  }

  doPostFood() {
    let clientData = JSON.parse(sessionStorage.getItem('clientUser'));
    if(clientData)
    {
      if(clientData.token)
      {
        this.router.navigate(['/client/food-post']);
      }
      else
      {
        console.log('ruru');
        this.router.navigate(['/client/singin']);
      }
    }
    else
    {
      console.log('ruru');
      this.router.navigate(['/client/singin']);
    }
    
  }

  goToProfile() {
    this.router.navigate(['/client/profile']);
  }

}

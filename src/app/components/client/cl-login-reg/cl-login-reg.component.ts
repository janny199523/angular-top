import { Component, OnInit } from '@angular/core';
import { cl_configs } from '../../../config/cl-config';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cl-login-reg',
  templateUrl: './cl-login-reg.component.html',
  styleUrls: ['./cl-login-reg.component.css']
})
export class ClLoginRegComponent implements OnInit {

  loadTemplate: string = cl_configs.loadgif;

  constructor(private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }

  goRegister()
  {
    $('#register-tab').click();
  }

  goLogin()
  {
    $('#login-tab').click();
  }

}

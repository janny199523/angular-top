import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cl-wallet',
  templateUrl: './cl-wallet.component.html',
  styleUrls: ['./cl-wallet.component.css']
})
export class ClWalletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openAddReward()
  {

    $('#AddRewardModal').modal('show');

  }

  openContinueReward()
  {
    $('#AddRewardModal').modal('hide');
    $('#ContinueAddReward').modal('show');
  }

  openAddVoucher() 
  {
    $('#AddVoucher').modal('show');
  }

  addedVoucher()
  {
    $('#AddVoucher').modal('hide');
  }

  openMileagePlan()
  {
    $('#mileagplan').modal('show');
  }

  doneMileage()
  {
    $('#mileagplan').modal('hide');
  }

}

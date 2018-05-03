import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cl-home',
  templateUrl: './cl-home.component.html',
  styleUrls: ['./cl-home.component.css']
})
export class ClHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chooseOne()
  {
    $('#ChoiceModal').modal('show');
  }

  openVoucher()
  {
    $('#ChoiceModal').modal('hide');
    $('#VoucherModal').modal('show');
  }

  openClaim() {
    $('#ChoiceModal').modal('hide');
    $('#ClaimModal').modal('show');
  }

}

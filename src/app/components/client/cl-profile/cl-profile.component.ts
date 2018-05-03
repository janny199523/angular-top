import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cl-profile',
  templateUrl: './cl-profile.component.html',
  styleUrls: ['./cl-profile.component.css']
})
export class ClProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openPasswordModal()
  {
    $('#PasswordModal').modal('show');
  }

}

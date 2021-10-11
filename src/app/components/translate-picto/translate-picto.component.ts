import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
declare var monitorInput:any;
declare var getUrlPicto:any;

@Component({
  selector: 'app-translate-picto',
  templateUrl: './translate-picto.component.html',
  styleUrls: ['./translate-picto.component.css']
})
export class TranslatePictoComponent implements OnInit {

  result:any;

  constructor() { }

  ngOnInit(): void {
    this.result = [];
  }

  onSubmit(formText: NgForm) {
    monitorInput(formText.form.value.text);
    this.result = getUrlPicto();
    console.log('le resultat en TS',this.result);
  }
}

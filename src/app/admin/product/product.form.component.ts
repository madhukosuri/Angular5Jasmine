import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-form',
  templateUrl: './product.form.component.html'
})

export class ProductFormComponent implements OnInit {

  brands = [
    {value: 'LEE', viewValue: 'LEE'},
    {value: 'Killer', viewValue: 'Killer'},
    {value: 'Killer-2', viewValue: 'Killer-2'}
  ];

  constructor() { }
  ngOnInit() {
  }
}


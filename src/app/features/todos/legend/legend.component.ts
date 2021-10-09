import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mbr-legend',
  template: `
    <i class="pi pi-check-circle"></i>: Task complete
    |
    <i class="pi pi-circle-off"></i>: Task to do
  `,
  styles: [
  ]
})
export class LegendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

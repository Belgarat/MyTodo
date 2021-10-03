import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mbr-debug-info',
  template: `
    <p-divider align="left" type="dashed">
      <div class="flex ai-center">
        <i class="pi pi-info-circle mr-2"></i>
        <b>Debug info</b>
      </div>
    </p-divider>
    Display area: <pre>{{debugItem|json}}</pre>
  `,
  styles: [
  ]
})
export class DebugInfoComponent implements OnInit {
  @Input() debugItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}

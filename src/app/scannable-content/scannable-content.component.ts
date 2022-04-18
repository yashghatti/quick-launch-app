import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scannable-content',
  templateUrl: './scannable-content.component.html',
  styleUrls: ['./scannable-content.component.scss'],
})
export class ScannableContentComponent implements OnInit {

  @Input() collapsed: boolean;
  @Input() barcodePath: string;

  constructor() { }

  ngOnInit() {}

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

}

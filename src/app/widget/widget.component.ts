import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {

  @Input() private cardTitle: string;
  @Input() private avatar: string;

  constructor() { }

  ngOnInit() {}

  getAvatar():string {
    return `/assets/images/widgets/${this.avatar}.png`
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Brightness} from "@ionic-native/brightness/ngx";

@Component({
  selector: 'app-scannable-content',
  templateUrl: './scannable-content.component.html',
  styleUrls: ['./scannable-content.component.scss'],
})
export class ScannableContentComponent implements OnInit {

  @Input() collapsed: boolean;
  @Input() barcodePath: string;

  private originalScreenBrightness: number;

  constructor(private brightness: Brightness) { }

  ngOnInit() {}

  async toggleCollapse() {
    this.collapsed = !this.collapsed;

    if(!this.collapsed)
      this.originalScreenBrightness = await this.brightness.getBrightness()
      await this.brightness.setBrightness(1);
      setTimeout(async () => {
        await this.brightness.setBrightness(this.originalScreenBrightness);
      }, 5000);
  }

}

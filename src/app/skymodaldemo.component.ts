import { Component, ViewChild, OnInit } from '@angular/core';
import { SkyModalInstance } from '@skyux/modals';
import 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';

export class SkyModalDemoContext {
  public valueA: string;
  public eventMessage?: string;
}
@Component({
  selector: 'app-skymodaldemo',
  templateUrl: './skymodaldemo.component.html'
})
export class SkyModalDemoComponent implements OnInit {
  constructor(public context: SkyModalDemoContext,
    public instance: AddinClientService) {

  }

  ngOnInit() {
    var a = this.context;
    var b = this.instance;
  }



}

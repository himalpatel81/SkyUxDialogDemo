import { Component } from '@angular/core';
import { SkyModalService, SkyModalCloseArgs } from '@skyux/modals';
import { SkyModalDemoComponent, SkyModalDemoContext } from './skymodaldemo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skyuxdialogdemo';

  constructor(private skyModalService: SkyModalService) {
    
  }

  ngOnInit() {
    this.openModal('fullScreenModal')
  }

  public openModal(type: string) {
    const context = new SkyModalDemoContext();
    context.valueA = 'Hello';

    const options: any = {
      providers: [{ provide: SkyModalDemoContext, useValue: context }],
      ariaDescribedBy: 'docs-modal-content'
    };

    let modalInstanceType = SkyModalDemoComponent;

    switch (type) {
      case 'fullScreenModal':
        options.fullPage = true;
        break;
      case 'smallModal':
        options.size = 'small';
        break;
      case 'largeModal':
        options.size = 'large';
        break;
      default:
        break;
    }

    const modalInstance = this.skyModalService.open(modalInstanceType, options);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      console.log(`Modal closed with reason: ${result.reason} and data: ${result.data}`);
    });

    modalInstance.helpOpened.subscribe((helpKey: string) => {
      // context.eventMessage = `
      //   Modal header help was invoked with the following help key: ${helpKey}
      // `;
    });
  }
}

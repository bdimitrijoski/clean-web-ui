import { Component } from '@angular/core';

@Component({
  selector: 'clean-web-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clean-web-ui-app';

  eventListener(){
    console.log('some event was fired');
  }
}

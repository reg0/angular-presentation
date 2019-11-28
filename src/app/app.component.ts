import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fresh-ng';
  collection = [{name: 'John'}, {name: 'Sarah'}, {name: 'Thomas'}, {name: 'Monica'}];

  conditionMet() {
    return true;
  }
}

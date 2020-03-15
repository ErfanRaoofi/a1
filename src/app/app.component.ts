import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // tslint:disable-next-line: no-inferrable-types
  absent: boolean = true;
  names: string[] = ['foad', 'ali', 'erfan'];

  makeDisapear() {
    this.absent = !this.absent;
  }
}

import { Component } from '@angular/core';

import { Post } from './post';

@Component({
   selector: 'my-app',
   templateUrl: './app.component.html'
})

export class AppComponent  {

 constructor() {}

 handlecommentsFound(data: Post[]): void {
      for (var i = 0; i < data.length; i++) {
         console.log(data[i].name);
      }
 }
}

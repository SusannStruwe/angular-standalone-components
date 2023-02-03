import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDefaultRoute: boolean = true;

  constructor(private router: Router){ }

  ngOnInit(){
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd ) {
        this.isDefaultRoute = event.url == "/";
      }
    });
  }

}

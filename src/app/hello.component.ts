import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hello',
  template: `<h2>versionId queryParam: {{ versionId$ | async }}</h2>
  <h2>id routeParam: {{ id$ | async }}</h2>`,
})
export class HelloComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  versionId$: Observable<number> = of(0);
  id$: Observable<string> = of();

  ngOnInit() {
    this.versionId$ = this.route.queryParams.pipe(
      map((params) => {
        console.log(params);
        return params['versionId'];
      })
    );

    this.id$ = this.route.params.pipe(
      map((params) => {
        console.log(params);
        return params['id'];
      })
    );
  }
}

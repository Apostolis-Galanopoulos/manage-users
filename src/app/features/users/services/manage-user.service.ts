import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ManageUserService {

  constructor (
    private readonly router: Router
  ) { }

  goTo (urls: string[]) {
    this.router.navigate(urls);
  }
}

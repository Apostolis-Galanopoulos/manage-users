import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbModel } from '@app/shared/components/breadcrumb/breadcrumb.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'usr-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent {

  user!: User;
  breadcrumbs: BreadcrumbModel[] = [];

  constructor (private readonly activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(data => {
      this.user = data['user'];
      this.setBreadcrumbs(data['user']);
    });
  }

  setBreadcrumbs (user: User) {
    this.breadcrumbs = [
      {
        name: 'Users',
        path: '/users'
      },
      {
        name: `${user.name} ${user.lastName}`,
      }];
  }

}

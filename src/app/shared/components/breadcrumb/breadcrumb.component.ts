import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BreadcrumbModel } from './breadcrumb.model';

@Component({
  selector: 'usr-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent {

  @Input() breadcrumbs: BreadcrumbModel[] = [];

  trackByFn (index: number) {
    return index;
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageUserService } from '../../services/manage-user.service';

import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const ManageUserServiceSpy = jasmine.createSpyObj('ManageUserService', ['goTo', 'update', 'create', 'deleteUser', 'delete']);
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ HomeComponent ],
      providers: [
        { provide: ManageUserService, useValue: ManageUserServiceSpy },
      ]
    })
    .compileComponents();
    // store = TestBed.get(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

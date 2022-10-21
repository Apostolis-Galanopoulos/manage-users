import { ComponentFixture, TestBed } from '@angular/core/testing';
import { USER_MOCK_DATA } from '@app/features/users/mock/user-mock-data';

import { CardComponent } from './card.component';
import { CardModel } from './card.model';

const data: CardModel = {
  id: USER_MOCK_DATA.id,
  name: USER_MOCK_DATA.name,
  lastName: USER_MOCK_DATA.lastName,
  email: USER_MOCK_DATA.email,
  avatar: USER_MOCK_DATA.avatar,
  hasDeleteAction: false
}

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.data = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

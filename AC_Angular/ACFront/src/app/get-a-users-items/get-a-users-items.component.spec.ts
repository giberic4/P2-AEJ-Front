import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetAUsersItemsComponent } from './get-a-users-items.component';

describe('GetAUsersItemsComponent', () => {
  let component: GetAUsersItemsComponent;
  let fixture: ComponentFixture<GetAUsersItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAUsersItemsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAUsersItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SellItemComponent } from './sell-item.component';

describe('SellItemComponent', () => {
  let component: SellItemComponent;
  let fixture: ComponentFixture<SellItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ SellItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

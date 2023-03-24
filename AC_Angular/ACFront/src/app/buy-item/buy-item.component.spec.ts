import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItemComponent } from './buy-item.component';

describe('BuyItemComponent', () => {
  let component: BuyItemComponent;
  let fixture: ComponentFixture<BuyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyItemComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Default values test', () => {
    expect(component.input).toEqual(0);
    expect(component.totalSum).toEqual(0);
  });

});

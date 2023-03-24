import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GetMarketplaceItemsComponent } from './get-marketplace-items.component';

describe('GetMarketplaceItemsComponent', () => {
  let component: GetMarketplaceItemsComponent;
  let fixture: ComponentFixture<GetMarketplaceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMarketplaceItemsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMarketplaceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { AllItemsComponent } from './all-items.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AllItemsComponent', () => {
  let component: AllItemsComponent;
  let fixture: ComponentFixture<AllItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ AllItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

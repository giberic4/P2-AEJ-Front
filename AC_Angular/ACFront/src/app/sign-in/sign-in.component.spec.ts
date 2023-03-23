import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, FormsModule } from '@angular/forms';


//differences between comp and service test
//they have lifecycle hooks, 
//
describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a default user with empty values', () => {
  //   expect(component.newuser).toEqual(
  //     {
  //       username :  "",
  //       password : "",
  //       fname : "",
  //       lname : "",
  //       wallet : 0
  //     }
  //   );
  //   it('should expect username and password to change when calling login()', () => {
  //     component.login('bobuser', 'passbob');
      
  //     expect(component.newuser).toBe(
  //       {
  //         username :  "bobuser",
  //         password : "passbob",
  //         fname : "",
  //         lname : "",
  //         wallet : 0
  //       }
  //     )




  //   })



  // });

});

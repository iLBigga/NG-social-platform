import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { By } from '@angular/platform-browser';


describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]

    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(UserService, 'getUsers').and.returnValue(of([
      {id: 1, name: "John Doe"},
      {id: 2, name: "Maria Doe"}
    ]))

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retreive users from the UserService on init', () => {
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  });

  it('should retrieve users from the UserService when the refresh button is calicked', () => {\
    fixture.detectChanges();
    userServiceSpy.calls.reset();
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(userServiceSpy).toHaveBeenCalled
  });
});
function of(arg0: { id: number; name: string; }[]): never {
  throw new Error('Function not implemented.');
}


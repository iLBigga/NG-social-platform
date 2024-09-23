import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('sould be created', () => {
    expect(service).toBeTruthy();
  });

  it('sould get users', () => {
    service.getUsers().subscribe(user => {
      expect(user.length).toBeGreaterThan(0);
    })
  });

});

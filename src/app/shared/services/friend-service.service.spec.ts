import { TestBed } from '@angular/core/testing';

import { FriendServiceService } from './friend-service.service';

describe('FriendServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FriendServiceService = TestBed.get(FriendServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';
import { SocketHandlerService } from './socket-handler.service';

describe('SocketHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketHandlerService]
    });
  });

  it('should ...', inject([SocketHandlerService], (service: SocketHandlerService) => {
    expect(service).toBeTruthy();
  }));
});

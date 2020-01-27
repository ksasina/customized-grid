import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CustomizedGridService } from './customized-grid.service';

describe('TableGridService', () => {

  let service: CustomizedGridService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(CustomizedGridService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get url with parameters', () => {
    const mockResponse = [{
      items: [
        {
          id: 3
        }
      ]
    }];
    service.getData()
      .subscribe((r) => {
        expect(r.length > 0).toBe(true);
      });

    const req = httpTestingController.expectOne((r) => r.url.includes('AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk'));
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
});

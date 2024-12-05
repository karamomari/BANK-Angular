import { TestBed } from '@angular/core/testing';

import { AdminserService } from './adminser.service';
import { app } from '../../../../server';
import { beforeEach, describe, it } from 'node:test';

describe('AdminserService', () => {
  let service: AdminserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
run();

function expect(service: AdminserService) {
  throw new Error('Function not implemented.');
}

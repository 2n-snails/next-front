import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      console.log('ㅗ디ㅣo');
      console.log('ㅗ디ㅣo');
      console.log('ㅗ디ㅣo');
      console.log('ㅗ디ㅣo');
      console.log('ㅗ디ㅣo');
      
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
          console.log('hi');
          console.log('hi');
          console.log('hi');
          console.log('hi');console.log('hi');console.log('hi');
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

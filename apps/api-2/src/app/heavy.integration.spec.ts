import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { heavyTask } from '@shared/util';

describe('Heavy Integration Suite (API 2)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const testIds = Array.from({ length: 10 }, (_, i) => i + 1);

  test.each(testIds)('Heavy Test Block #%p - Database + CPU stress', async (id) => {
    await heavyTask(`API-1-Test-${id}`);
    expect(true).toBe(true);
  }, 50000); // Increase timeout to 10s for heavy tasks

  afterAll(async () => {
    await app.close();
  });
});

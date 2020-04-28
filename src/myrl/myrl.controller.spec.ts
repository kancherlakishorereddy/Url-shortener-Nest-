import { Test, TestingModule } from '@nestjs/testing';
import { MyrlController } from './myrl.controller';

describe('Myrl Controller', () => {
  let controller: MyrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyrlController],
    }).compile();

    controller = module.get<MyrlController>(MyrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

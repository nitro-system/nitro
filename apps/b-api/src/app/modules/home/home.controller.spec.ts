import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

describe('HomeController', () => {
  let controller: HomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [HomeService],
    }).compile();

    controller = module.get<HomeController>(HomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('get Welcome Message', () => {
    it('should return "Welcome To Our PROJECT!"', () => {
      expect(controller.getWelcomeMessage('Admin App')).toEqual({
        message: 'Welcome To Our Admin App!',
      });
    });
  });
});

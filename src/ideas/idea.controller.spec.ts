import { Test, TestingModule } from '@nestjs/testing';
import { IdeaController } from './idea.controller';
import { IdeaService } from './idea.service';

describe('IdeaController', () => {
  let ideasController: IdeaController;

  beforeEach(async () => {
    const ideas: TestingModule = await Test.createTestingModule({
      controllers: [IdeaController],
      providers: [IdeaService],
    }).compile();

    ideasController = ideas.get<IdeaController>(IdeaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ideasController.getIdeas()).toBe('Hello World!');
    });
  });
});

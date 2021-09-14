import { Test, TestingModule } from '@nestjs/testing';
import { SuggestionsController } from './suggestions.controller';
import { SuggestionsService } from './suggestions.service';

describe('SuggestionsController', () => {
  let suggestionsController: SuggestionsController;

  beforeEach(async () => {
    const suggestions: TestingModule = await Test.createTestingModule({
      controllers: [SuggestionsController],
      providers: [SuggestionsService],
    }).compile();

    suggestionsController = suggestions.get<SuggestionsController>(SuggestionsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(suggestionsController.getSuggestions({searchText: ""})).toBe('Hello World!');
    });
  });
});

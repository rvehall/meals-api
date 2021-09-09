import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import IdeaModel from 'src/models/idea.model';
import { IdeaService } from './idea.service';

@Controller('ideas')
export class IdeaController {
  constructor(private readonly ideasService: IdeaService) {}

  @Get()
  getIdeas(): IdeaModel[] {
    return this.ideasService.getIdeas();
  }
  @Get()
  getIdeaById(id: string): IdeaModel {
    return this.ideasService.getIdeaById(id);
  }
  @Post()
  createIdea(idea: IdeaModel): boolean {
    return this.ideasService.addIdea(idea);
  }
  @Put()
  updateIdea(idea: IdeaModel): boolean {
    return this.ideasService.updateIdea(idea);
  }
  @Delete()
  deleteIdea(idea: IdeaModel): boolean {
    return this.ideasService.deleteIdea(idea);
  }
}

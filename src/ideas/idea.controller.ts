import { Body, Param } from '@nestjs/common';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import IdeaModel from '../models/idea.model';
import { IdeaService } from './idea.service';

@Controller('ideas')
export class IdeaController {
  constructor(private readonly ideasService: IdeaService) {}

  @Get()
  getIdeas(): Promise<any> {
    return this.ideasService.getIdeas();
  }
  @Get(':id')
  getIdeaById(@Param('id') id: string): Promise<IdeaModel> {
    return this.ideasService.getIdeaById(id);
  }
  @Post()
  createIdea(@Body() idea: IdeaModel): Promise<string> {
    return this.ideasService.addIdea(idea);
  }
  @Post('bulk')
  createIdeas(@Body() ideas: IdeaModel[]): Promise<string[]> {
    return this.ideasService.addIdeas(ideas);
  }
  @Put()
  updateIdea(@Body() idea: IdeaModel): Promise<any> {
    return this.ideasService.updateIdea(idea);
  }
  @Delete()
  deleteIdea(idea: IdeaModel): Promise<boolean> {
    return this.ideasService.deleteIdea(idea);
  }
}

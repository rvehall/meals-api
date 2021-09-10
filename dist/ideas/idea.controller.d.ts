import IdeaModel from '../models/idea.model';
import { IdeaService } from './idea.service';
export declare class IdeaController {
    private readonly ideasService;
    constructor(ideasService: IdeaService);
    getIdeas(): Promise<any>;
    getIdeaById(id: string): Promise<IdeaModel>;
    createIdea(idea: IdeaModel): Promise<string>;
    createIdeas(ideas: IdeaModel[]): Promise<string[]>;
    updateIdea(idea: IdeaModel): Promise<any>;
    deleteIdea(idea: IdeaModel): Promise<boolean>;
}

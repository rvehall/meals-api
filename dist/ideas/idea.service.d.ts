import IdeaModel from '../models/idea.model';
export declare class IdeaService {
    getIdeas(): Promise<any>;
    getIdeaById(id: string): Promise<IdeaModel>;
    updateIdea(idea: IdeaModel): Promise<any>;
    addIdea(idea: IdeaModel): Promise<string>;
    addIdeas(ideas: IdeaModel[]): Promise<string[]>;
    deleteIdea(idea: IdeaModel): Promise<any>;
}

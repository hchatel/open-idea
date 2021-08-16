interface IdeaCore {
    createdAt: number | Date;
    description: string;
    downvotes: number;
    id: string;
    title: string;
    upvotes: number;
}

export interface IdeaRaw extends IdeaCore {
    createdAt: number;
}

export interface Idea extends IdeaCore {
    createdAt: Date;
}

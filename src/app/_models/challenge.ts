export class Challenge {
    id: number;
    name: string = ``;
    challengetype: string;
    description: string = ``;
    challengeitems : [ChallengeItems];
    created_at: string;
    updated_at: string;
}

export class ChallengeItems {
    id: number;
    index: number;
    item: string  = ``;
}
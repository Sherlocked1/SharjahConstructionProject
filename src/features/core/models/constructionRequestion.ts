
export interface ConstructionRequest {
    _id?: string;
    title: string;
    description: string;
    location:string;
    status:statusType;
}

export type statusType = 'Pending' | 'Processing' | 'Completed' ;
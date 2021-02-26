export interface StoreUnit {
    id: number;
    name: string;
    bands?: Array<number>;
    musicians?: Array<number>;
}

export interface RootState {
    genres: Array<StoreUnit>;
    bands: Array<StoreUnit>;
    musicians: Array<StoreUnit>;
}
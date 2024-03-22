export type IProducts = {
    id? : string;
    productsimg: string;
    subtitle: string;
    title: string | null;
}

export type IFilterOptions = {
    value : string;
    label : string;
    checked : boolean;
}

export type IFilter = {
    id : string,
    name : string,
    options : IFilterOptions[]
}
export type IProducts = {
    id?: string;
    productsimg: string;
    subtitle: string;
    title: string | null;
}

export type IFilterOptions = {
    value: string;
    label: string;
    checked: boolean;
}

export type IFilter = {
    id: string,
    name: string,
    options: IFilterOptions[]
}

export interface IApiResponse {
    message: string;
    status: number;
    success: boolean;
    data: {
        products: IProducts[];
        pages: number;
    };
}

export interface IReturnResult {
    isSuccess: boolean;
    response: IApiResponse | null;
    error: Error | null;
}
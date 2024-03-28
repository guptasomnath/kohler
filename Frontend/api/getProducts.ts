
import { API_BASE_URL } from "@/constant";
import { IApiResponse, IProducts, IReturnResult } from "@/types/products";

export async function getProducts(catName: string, pageNum: number) {
    function createFetchProductsUrl(catNames: string[]) {
        let tableNames = "";
        catNames?.map((item) => {
            tableNames +=
                " " +
                item
                    .trim()
                    .replaceAll("&", "")
                    .replaceAll(" ", "_")
                    .replaceAll("__", "_")
                    .replaceAll("-", "_")
                    .toLowerCase();
        });

        return `${API_BASE_URL}/products/?catname=${tableNames.trim()}&page=${pageNum}`;
    }

    const returnResults: IReturnResult = {
        isSuccess: false,
        response: null,
        error: null,
    };

    const response = await fetch(createFetchProductsUrl([catName]), {
        next: { revalidate: 360 },
    });
    const result = (await response.json()) as IApiResponse;

    if (!response.ok) {
        returnResults.response = null;
        returnResults.isSuccess = false;
        returnResults.error = new Error(result.message);
    }else {
        returnResults.error = null;
        returnResults.isSuccess = true;
        returnResults.response = result;
    }

    return returnResults;
}
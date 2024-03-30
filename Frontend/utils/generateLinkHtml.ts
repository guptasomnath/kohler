import { BASE_URL } from "@/constant";

export const generateLinkHtml = (endpoint: string, text: string) => {
    // ${BASE_URL}/basin-area/basin
    return `<a class = "text-blue-700 font-semibold" href = "${
      BASE_URL + endpoint
    }">${text}</a>`;
  };

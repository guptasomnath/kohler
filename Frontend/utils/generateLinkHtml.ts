import { BASE_URL } from "@/constant";

export const generateLinkHtml = (endpoint: string, text: string) => {
    // ${BASE_URL}/basin-area/basin
    return `<a style="color: #1d4ed8;" class = "font-semibold" href = "${
      BASE_URL + endpoint
    }">${text}</a>`;
  };

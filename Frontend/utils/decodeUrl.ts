export const encodeUrl = (url: string) => {
    return encodeURI(url.replaceAll(" ", "-"))
}

export const decodeUrl = (url: string) => {
    return decodeURI(url.replaceAll("-", " "))
}
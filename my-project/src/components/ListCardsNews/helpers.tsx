export const getTodayDay = (): string => {
    const date = new Date();
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    return `${date.getFullYear()}${month}${day}`
}


export const getNextDay = (date: Date ): string => {
    date.setDate(date.getDate() + 1)
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    return `${date.getFullYear()}${month}${day}`
}

export const createQuery = (parametrs: { [key: string]: string }): string => {
    const entriesParametrs = Object.entries(parametrs);
    const queryParametrs = entriesParametrs.map(([key, value]) => {
        return `${key}=${value}`
    }).join('&')
    const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
    return `${BASE_URL}?${queryParametrs}`
}
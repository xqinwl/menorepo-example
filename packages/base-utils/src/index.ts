export const ellipsis = (string: string) => {
    return string.slice(0, 6).concat("...");
}

export const log = (...args: any[]) => {
    console.log(...args);
}
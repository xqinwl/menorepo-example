export const ellipsis = (string: string) => {
    return string.slice(0, 6).concat("...");
}

export const log = (...args: any[]) => {
    console.log(...args);
}

const fullColorRegex =
    /^#?(?<red>[0-9a-fA-F]{2})(?<green>[0-9a-fA-F]{2})(?<blue>[0-9a-fA-F]{2})(?<alpha>[0-9a-fA-F]{2})?$/;
const shortColorRegex = /^#?(?<red>[0-9a-fA-F]{1})(?<green>[0-9a-fA-F]{1})(?<blue>[0-9a-fA-F]{1})$/;

type Color = {
    red: number;
    green: number;
    blue: number;
    alpha: number;
};

export const parseColor = (colorString: string): Color => {
    let color = fullColorRegex.exec(colorString);
    if (color != null) {
        return {
            red: parseInt(color!.groups!.red, 16),
            green: parseInt(color!.groups!.green, 16),
            blue: parseInt(color!.groups!.blue, 16),
            alpha: color!.groups!.blue != null ? parseInt(color!.groups!.alpha, 16) : 256,
        };
    }
    color = shortColorRegex.exec(colorString);
    if (color != null) {
        return {
            red: parseInt(color!.groups!.red, 16) * 17,
            green: parseInt(color!.groups!.green, 16) * 17,
            blue: parseInt(color!.groups!.blue, 16) * 17,
            alpha: 256,
        };
    }
    throw new Error("Invalid color");
};

export const getContrastColor = (color: string) => {
    const {red, green, blue} = parseColor(color);
    const yiq = (red * 299 + green * 587 + blue * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
};
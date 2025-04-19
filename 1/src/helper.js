export const getElement = (elemIdentifire = "") => {
    try {
        const element = document.querySelector(`${elemIdentifire}`);
        return element;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const isNullOrUndefined = (data) => {
    if(data === undefined || data === null)
        return true;
    else
        return false;
}

export const changeBackgroundColor = (color = "") => {
    document.body.style.backgroundColor = color;
}

export const changeBackgroundFilter = (filter = "") => {
    const numericValue = parseFloat(filter.match(/brightness\(([^)]+)\)/)?.[1]);
    if (numericValue < 0) {
        console.warn("Filter value cannot be negative. Skipping update.");
        return;
    }
    document.documentElement.style.filter = filter;
}
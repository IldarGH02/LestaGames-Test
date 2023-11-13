export const prepareLinks = (str: string) => {
    // return str.replace(/"/g, '')
    return `https://${str.replace('//','')}`
}
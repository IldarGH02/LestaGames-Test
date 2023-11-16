export const prepareLinks = (str: string) => {
    return `https://${str.replace('//','')}`
}
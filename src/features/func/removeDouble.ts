export const removeDoubleString = (data: string[]) => {
    return data.filter((item, index) => {
        return data.indexOf(item) === index
    })
}

export const removeDoubleNumber = (data: number[]) => {
    return data.filter((item, index) => {
        return data.indexOf(item) === index
    })
}

// data.filter((item, index) => {
//     return data.indexOf(item) === index})
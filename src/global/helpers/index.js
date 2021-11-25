
export const filteredData = (arr, search) => search ? 
        arr
            ?.filter(({ name, currency }) => name.toLowerCase().includes(search) || currency.toLowerCase().includes(search))
    : 
        arr;


export const filteredCurrency = (arr, cur) => cur ?
        arr
            ?.filter(({ currency }) => currency === cur)
    :
        arr;
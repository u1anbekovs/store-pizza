export const getCartLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items)

    return {
        items,
        totalPrice,
    }
}


export const calcTotalPrice = (items) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}
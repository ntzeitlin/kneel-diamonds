export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=shapetype")
    const orders = await fetchResponse.json()

    let ordersHTML = ""

    let ordersStringArray = orders.map((order) => {
        const orderPrice = (order.metal.price + order.style.price + order.size.price) * order.shapetype.multiple
        return `<div>Order #${order.id} costs $${orderPrice.toFixed(2)}</div>`
    })

    ordersHTML += ordersStringArray.join("")

    return ordersHTML
}
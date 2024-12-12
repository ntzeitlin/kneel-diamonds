// handle click event and submit transient state

import { placeOrder, setOrderTime } from "./TransientState.js"

const handleButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "orderbutton") {
        setOrderTime(Date.now())
        placeOrder()
    }
}


// component function
export const orderButton = () => {
    document.addEventListener("click", handleButtonClick)
    return '<div><button id="orderbutton">Create Custom Order</button></div> '
}
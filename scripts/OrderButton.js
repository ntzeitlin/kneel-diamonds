// handle click event and submit transient state

import { placeOrder } from "./TransientState.js"

const handleButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "orderbutton") {
        placeOrder()
    }
}


// component function
export const orderButton = () => {
    document.addEventListener("click", handleButtonClick)
    return '<div><button id="orderbutton">Create Custom Order</button></div> '
}
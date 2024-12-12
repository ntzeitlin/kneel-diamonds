// Set up Initial State 
const transientState = {
    "id": 0,
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0,
    "orderTime": "",
    "price": 0.0
}

// Set up Setter Functions
export const setMetalType = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}
export const setSize = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}
export const setStyle = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}
export const setOrderTime = (ordertime) => {
    transientState.orderTime = ordertime
    console.log(transientState)
}
export const setPrice = (totalPrice) => {
    transientState.price = totalPrice
    console.log(transientState)
}


// Function to convert transient state into permanent state
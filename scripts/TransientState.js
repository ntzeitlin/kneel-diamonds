// Set up Initial State 
// const transientState = {
//     "id": 0,
//     "metalId": 0,
//     "sizeId": 0,
//     "styleId": 0,
//     "orderTime": 0
// }

const transientState = new Map()

const resetTransientState = () => {
    transientState.set("id", 0)
    transientState.set("metalId", 0)
    transientState.set("sizeId", 0)
    transientState.set("styleId", 0)
    transientState.set("orderTime", 0)
}

resetTransientState()

// Set up Setter Functions
export const setMetalType = (chosenMetal) => {
    transientState.set("metalId", chosenMetal)
    console.log(transientState)
}
export const setSize = (chosenSize) => {
    transientState.set("sizeId", chosenSize)
    console.log(transientState)
}
export const setStyle = (chosenStyle) => {
    transientState.set("styleId", chosenStyle)
    console.log(transientState)
}

export const setOrderTime = (ordertime) => {
    transientState.set("orderTime", ordertime)
    console.log(transientState)
}



// Function to convert transient state into permanent state

export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(transientState))
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)
    resetTransientState()
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)

}
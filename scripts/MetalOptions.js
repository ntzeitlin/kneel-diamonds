import { setMetalType, transientState } from "./TransientState.js"

// event handler function
const handleMetalChoice = (event) => {
    if (event.target.name === "metaloption") {
        setMetalType(parseInt(event.target.value))
    }
}

// component function
export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let metalOptionHTML = ""

    // Using For...Of...
    // for (const metal of metals) {
    //     metalOptionHTML += `<div>
    //     <input type='radio' name='metaloption' value='${metal.id}' /> ${metal.metal} 
    //     </div>`
    // }

    // Using .map()
    const metalStringArray = metals.map((metal) => {
        if (metal.id !== "0") {
            let currentTransientStateMetal = transientState.get("metalId")
            if (currentTransientStateMetal === parseInt(metal.id)) {
                return `<div>
                <input type='radio' name='metaloption' value='${metal.id}' checked /> ${metal.metal} 
                </div>`
            }
            return `<div>
            <input type='radio' name='metaloption' value='${metal.id}' /> ${metal.metal} 
            </div>`
        }
    })

    metalOptionHTML += metalStringArray.join("")

    document.addEventListener("change", handleMetalChoice)

    return metalOptionHTML
}
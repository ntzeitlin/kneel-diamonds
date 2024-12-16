

// Event Handler

import { setStyle, transientState } from "./TransientState.js"

const handleStyleChoice = (event) => {
    if (event.target.name === "styleoption") {
        setStyle(parseInt(event.target.value))
    }
}

// Component Function
export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styleOptions = await response.json()

    let styleOptionHTML = ""

    // for (const styleOption of styleOptions) {
    //     styleOptionHTML += `<div>
    //     <input type="radio" name="styleoption" value="${styleOption.id}" /> ${styleOption.style}
    //     </div>`
    // }

    const stylesStringArray = styleOptions.map((styleOption) => {
        if (styleOption.id !== "0") {
            let currentTransientStateStyle = transientState.get("styleId")
            if (currentTransientStateStyle === parseInt(styleOption.id)) {
                return `<div>
                <input type="radio" name="styleoption" value="${styleOption.id}" checked /> ${styleOption.style}
                </div>`
            }
            return `<div>
                <input type="radio" name="styleoption" value="${styleOption.id}" /> ${styleOption.style}
                </div>`
        }
    })

    styleOptionHTML += stylesStringArray.join("")

    document.addEventListener("change", handleStyleChoice)

    return styleOptionHTML
}
import { setSize, transientState } from "./TransientState.js"

//event handler
const handleSizeChoice = (event) => {
    if (event.target.name === "sizeoption") {
        setSize(parseInt(event.target.value))
    }
}


// component function
export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizeOptions = await response.json()

    let sizeOptionHTML = ""

    // For...of...
    // for (const sizeOption of sizeOptions) {
    // sizeOptionHTML += `<div>
    // <input type="radio" name="sizeoption" value="${sizeOption.id}" /> ${sizeOption.carets}
    // </div>`
    // }

    const sizeStringArray = sizeOptions.map((sizeOption) => {
        if (sizeOption.id !== "0") {
            let currentTransientStateSize = transientState.get("sizeId")
            if (currentTransientStateSize === parseInt(sizeOption.id)) {
                return `<div>
                <input type="radio" name="sizeoption" value="${sizeOption.id}" checked /> ${sizeOption.carets}
                </div>`
            }
            return `<div>
            <input type="radio" name="sizeoption" value="${sizeOption.id}" /> ${sizeOption.carets}
            </div>`
        }
    })

    sizeOptionHTML += sizeStringArray.join("")

    document.addEventListener("change", handleSizeChoice)

    return sizeOptionHTML
}
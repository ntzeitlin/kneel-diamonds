import { setShapeType, transientState } from "./TransientState.js"

const handleChangeType = (changeEvent) => {
    if (changeEvent.target.name === "typeoption") {
        const typeValue = changeEvent.target.value
        if (typeValue > 0) {
            setShapeType(parseInt(typeValue))
        } else {
            setShapeType(parseInt(1))
        }
    }
}

// component function
export const TypeOptions = async () => {
    const response = await fetch("http://localhost:8088/shapetypes")
    const shapetypes = await response.json()
    document.addEventListener("change", handleChangeType)

    return shapetypes.map(({ id, type, multiple }) => {
        if (transientState.get("shapetypeId") === parseInt(id)) {
            return `<div>
            <input type="radio" name="typeoption" value="${id}" checked /> ${type}
            </div>`
        }

        return `<div>
            <input type="radio" name="typeoption" value="${id}" /> ${type}
            </div>`
    }).join("")
}
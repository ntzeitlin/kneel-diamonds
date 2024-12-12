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
    const metalStringArray = metals.map(metal => `<div>
        <input type='radio' name='metaloption' value='${metal.id}' /> ${metal.metal} 
        </div>` )

    metalOptionHTML += metalStringArray.join("")

    return metalOptionHTML
}
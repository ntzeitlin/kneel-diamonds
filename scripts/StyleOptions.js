export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styleOptions = await response.json()

    let styleOptionHTML = ""

    // for (const styleOption of styleOptions) {
    //     styleOptionHTML += `<div>
    //     <input type="radio" name="styleoption" value="${styleOption.id}" /> ${styleOption.style}
    //     </div>`
    // }

    const stylesStringArray = styleOptions.map(styleOption => `<div>
        <input type="radio" name="styleoption" value="${styleOption.id}" /> ${styleOption.style}
        </div>`)

    styleOptionHTML += stylesStringArray.join("")

    return styleOptionHTML
}
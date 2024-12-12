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

    const sizeStringArray = sizeOptions.map(sizeOption => `<div>
        <input type="radio" name="sizeoption" value="${sizeOption.id}" /> ${sizeOption.carets}
        </div>` )

    sizeOptionHTML += sizeStringArray.join("")

    return sizeOptionHTML
}
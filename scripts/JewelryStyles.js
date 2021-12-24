import { getStyles, setStyle } from "./database.js"

const styles = getStyles()
const style = setStyle()

document.addEventListener(
    "change",
    (event) => { setStyle(parseInt(event.target.value))
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map((style) => {
        return `<li>
        <input type ="radio" name= "style" value= "${style.id}" /> ${style.style} </li>`
    }
    )

    // Join all of the strings in the array into a single string
    html += listItemsArray.join(" ")

    html += "</ul>"
    return html
}

const jewelryStyles = getStyles()

// Remember that the function you pass to find() must return true/false
const foundStyle = jewelryStyles.find(
    (style) => {
        return style.id === order.styleId
    }
)
const totalCost = foundStyle.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

`<li>
    Order #${order.id} cost ${costString}
</li>`
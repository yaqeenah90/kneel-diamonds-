import { getSizes, setSize } from "./database.js"


const sizes = getSizes()
const size = setSize()
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map((size) => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    }
    )

    html += listItems.join(" ")
   
    html += "</ul>"
     return html
}
const jewelSizes = getSizes()
const foundSize = jewelSizes.find(
    (size) => {
        return size.id === jewelSizes.sizeId
        
    }
)
    const totalCost = foundSize.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

`<li>
    Order #${order.id} cost ${costString}
</li>`


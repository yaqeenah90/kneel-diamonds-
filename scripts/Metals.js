import { getMetals, setMetal } from "./database.js"


const metals = getMetals()
const metal = setMetal()
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))

        }
    }
)
export const Metals = () => {
    let html = "<ul>"


    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }
    html += "</ul>"
    return html

}

const fancyMetals = getMetals()

// Remember that the function you pass to find() must return true/false
const foundMetal = fancyMetals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const totalCost = foundMetal.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

`<li>
    Order #${order.id} cost ${costString}
</li>`
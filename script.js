const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click",function() {
    // console.log("Button Clicked from addEventListener")
    // myLeads.push("www.awesomelead.com")
    // console.log(myLeads)
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()

})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})

function renderLeads(){
    let listItems = ""

    for(let i = 0; i<myLeads.length; i++)
    {
        // listItems += "<li><a href='https://"+ myLeads[i] +"' target='_blank'>"+myLeads[i]+"</a></li>"  
        listItems += `
        <li>
            <a href='https://${myLeads[i]}' target='_blank'>
                ${myLeads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}


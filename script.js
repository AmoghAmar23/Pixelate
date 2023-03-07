// Your code here

const table = document.getElementsByTagName('table')[0]

const select = document.getElementsByTagName('select')[0]
//^ this is what we needed to add

function makeRow (){
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++)
        {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)    
}

makeRow()
makeRow()

const button = document.getElementById('add-row')
button.addEventListener('click', makeRow)

table.addEventListener('click', colorize)

let chosenColor = 'red'

select.addEventListener('change',function (event) {
    chosenColor = event.target.value
    console.log(chosenColor)
})

function colorize (event) {
    const target = event.target
    if (target.classname === chosenColor) {
        target.classname = ''
    } else {
        target.className = chosenColor
    }
}
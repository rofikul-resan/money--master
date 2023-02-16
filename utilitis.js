let mainIncome = 0;

function getValue(id){
    const element= document.getElementById(id).value;
    return parseFloat(element)
}

function setValue (id, value){
    const element = document.getElementById(id);
    element.innerText = value;
}
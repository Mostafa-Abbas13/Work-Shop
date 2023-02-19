let inputs=document.querySelectorAll("input")
function valid() {
 for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if(element==""){
        element.nextElementSibling.textContent=`${element.name} is `
    }
 }
}
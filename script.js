let idNum = 1;

function additem() {
    
    const newDiv = document.createElement('div');
    newDiv.setAttribute("class", "divClass");
    newDiv.setAttribute("id", idNum);

    const span = document.createElement('span');
    
    const button = document.createElement('button');
    button.setAttribute("class", "buttonClass");
    button.setAttribute("onclick", "deleteitem("+idNum+")");

    const input = document.querySelector('input');
    const textBoxContent = input.value;

    span.innerHTML = textBoxContent;
    button.innerHTML = "Delete";

    newDiv.appendChild(span);
    newDiv.appendChild(button);
    document.body.appendChild(newDiv);
    idNum += 1;
}


function deleteitem(idNum) {

    const deleteitem = document.getElementById(idNum)
    deleteitem.remove();
}
//todo: check for duplicates before adding new favorite

const list = document.querySelector("ul");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const body = document.body;

//btn.onclick = addFavorite;
btn.addEventListener("click",addFavorite);

/*function(){
    if(input.value.length > 0){
        //create element li
        let li = document.createElement("li");
        //add input value to it
        li.textContent = input.value;
        //add list item to our list in the DOM
        list.appendChild(li);
    }
}*/

function addFavorite(){
    if(input.value.length > 0){
        if(isDuplicate()){
            //do not add, give message instead
            console.log("Duplicate was found");
            //create element p
            let msg = document.createElement("p");
            //find the place where to add it
            body.appendChild(msg);
            //use some method, like innerHTML, to add the message
            msg.textContent = "Duplicates will not be added to the list."
        } else {
            //create element li
            let li = document.createElement("li");
            //add input value to it
            li.textContent = input.value;
            //add list item to our list in the DOM
            list.appendChild(li);
        }
    } else {
        console.log("my value is empty. why?");
    }
}

function isDuplicate(){
    let result = false;

    //loop through list items and check if value is equal to our input value
    //find the list items, use forEach to find value of each item
    list.querySelectorAll("li").forEach(function(item){
        if(item.textContent.toLowerCase().trim() === input.value.toLowerCase().trim()){
            result = true;
        }
    });

    return result;
}
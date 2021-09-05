function getFetch(url){
    return fetch(url)
    .then(data => data.json())
    .then(json => json)
    .catch(err => console.log(err))
}
function creatElementWithText(el , text){
    let element = document.createElement(el);
    let textNode = document.createTextNode(text)
    element.appendChild(textNode);
    return element;
}

function creatCard(headText ,paraText, image, completed){
    const cardContainer = document.createElement("DIV")
    cardContainer.classList ="card-container"
    const cardBackground = document.createElement("DIV")
    cardBackground.classList ="card-background"
    cardBackground.style.backgroundImage =`url(${image})`

    const hpContainer = document.createElement("DIV")
    const head = creatElementWithText("h3", headText)
    const paragraph = creatElementWithText("p",paraText)
   
     
    const liContainer = document.createElement("DIV")
    liContainer.classList="li-container"
    const input= document.createElement("input") 
    input.setAttribute("type" , "checkbox")
    completed ? input.checked=true : input.checked=false
    const label= document.createElement("label")
    completed ? label.innerHTML="completed" : label.innerHTML="inCompleted"
  input.addEventListener("change", function(e){
    //   e.target.checked=true ? label.innerHTML="completed" : label.innerHTML="inCompleted"
    if(e.target.checked){
        label.innerHTML="completed"
    }else{
        label.innerHTML="inCompleted"
    }
  })



    cardContainer.appendChild(cardBackground)
    hpContainer.appendChild(head)
    hpContainer.appendChild(paragraph)
    cardContainer.appendChild(hpContainer);
    liContainer.appendChild(input)
    liContainer.appendChild(label)
    cardContainer.appendChild(liContainer)

return cardContainer;
}

async function main(){
        const toDos= await getFetch('https://jsonplaceholder.typicode.com/todos/');
        console.log(toDos)
        toDos.forEach((item)=>{
           const card = creatCard(item.title ,
               "Lorem ipsum dolor sit amet consecteturNecessitatibus soluta",
               "https://picsum.photos/300/400 ",
               item.completed)
               document.getElementsByTagName('main')[0].appendChild(card)
           })
        //    toDos.forEach((x)=>{
        //        let innerLabel = x.completed;
        //       if(innerLabel ===true){
        //           creatCard().input ==="checked"
        //       }
        //    })
}
main()
 
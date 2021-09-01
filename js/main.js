
function textToElement(text ,el){
    let textNode = document.createTextNode(text)
    el.appendChild(textNode)
}
function creatCard(headText ,paraText, url){
    const cardContainer = document.createElement("DIV")
    cardContainer.classList ="card-container"
    cardContainer.style.backgroundImage = url
    const head = document.createElement("H3")
    const paragraph = document.createElement("P")
    const hpContainer = document.createElement("DIV")
    

    hpContainer.appendChild(head)
    hpContainer.appendChild(paragraph)
    cardContainer.appendChild(hpContainer);

textToElement(headText ,head)
textToElement(paraText, paragraph)
return cardContainer;
}

async function main(){
    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/todos/');
        const json = await res.json();
     json.forEach((item)=>{
        const card = creatCard(item.title ,
            "Lorem ipsum dolor sit amet consecteturNecessitatibus soluta",
            "https://picsum.photos/300/400 ")
            document.getElementsByTagName('main')[0].appendChild(card)
        })
        }catch(err){
        console.log(err);
    }
}
main()
 

function textToElement(text ,el){
    let textNode = document.createTextNode(text)
    el.appendChild(textNode)
}
function creatCard(headText ,paraText, liText,url){
    const cardContainer = document.createElement("DIV")
    cardContainer.classList ="card-container"
    const cardBackground = document.createElement("DIV")
    cardBackground.classList ="card-background"
    cardBackground.style.backgroundImage = url

    const head = document.createElement("H3")
    const paragraph = document.createElement("P")
    const hpContainer = document.createElement("DIV")

    const input= document.createElement("input")
    const label= document.createElement("label")
    const liContainer = document.createElement("DIV")
 
    cardContainer.appendChild(cardBackground)
    hpContainer.appendChild(head)
    hpContainer.appendChild(paragraph)
    cardContainer.appendChild(hpContainer);

    liContainer.appendChild(input)
    input.setAttribute("type", "checkbox");
    liContainer.appendChild(label)
    cardContainer.appendChild(liContainer)

textToElement(headText ,head)
textToElement(paraText, paragraph)
textToElement(liText,label)
return cardContainer;
}

async function main(){
    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/todos/');
        const json = await res.json();
     json.forEach((item)=>{
        const card = creatCard(item.title ,
            "Lorem ipsum dolor sit amet consecteturNecessitatibus soluta",
            item.completed,
            "https://picsum.photos/300/400 ")
            document.getElementsByTagName('main')[0].appendChild(card)
        })
        json.forEach((x)=>{
            let innerLabel = x.completed;
            innerLabel.eve
            innerLabel ? checked : !checked
        })
        }catch(err){
        console.log(err);
    }
}
main()
 
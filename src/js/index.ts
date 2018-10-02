// let elementNode = document.getElementById('one');

// elementNode.textContent = "Hallo";

//  let listeusund = document.getElementById('listeUsund');
//  let newLi = document.createElement('li');
//  let newText = document.createTextNode('Sodavand')
//  newLi.setAttribute('class','usundt');
// newLi.appendChild(newText);
//  listeusund.appendChild(newLi);

//  console.log(listeusund);

document.getElementById('submitBtn').addEventListener("click",addVare);
document.getElementById('unhideBtn').addEventListener("click",noHide);

let elementsLi = document.getElementById('liste').addEventListener('click',function(e){
    let clikElement = (<HTMLInputElement>e.target);

    if(e.target && (clikElement).nodeName == "LI")
      {
          console.log(clikElement.id + " was clicked")
          clikElement.setAttribute('hidden','true');
      }
    
});


let elementInput = document.getElementById('nyvare');

 function noHide(){
     let liElements = document.getElementById('liste').children;

     for(let i=0;liElements.length;i++)
     {
         let eh = liElements[i].getAttribute('hidden'); 
         if( eh == 'true')
         {
            // (<HTMLLIElement>liElements[i]).style.visibility = 'visible';  
             liElements[i].removeAttribute('hidden');
         }      
     }
 }
 
 function addVare(){
     let inputText = (<HTMLInputElement>elementInput).value;

     let listeusund = document.getElementById('listeUsund');
 
     let newLi = document.createElement('li');
     let newText = document.createTextNode(inputText)
     newLi.setAttribute('class','usundt');
     newLi.appendChild(newText);
     listeusund.appendChild(newLi);

    }


let fruits: string[] = ["Ananas", "Appelsin", "Banan", "Pære", "Æble"];

function createLiElement(text : string, classAttribute : string, id : number) : HTMLLIElement {
    let newLiElement = document.createElement("li");
    let newText = document.createTextNode(text);

    newLiElement.setAttribute("class", classAttribute);
    // String converterer id'et fra et nummer til en string
    newLiElement.setAttribute("id", String(id));
    newLiElement.appendChild(newText);
    
    return newLiElement;
}

function createFruitList() : void {
    let fruitlist = document.getElementById("fruits");

    for (let index = 0; index < fruits.length; index++) {
        let text = fruits[index];
        let newLiElement : HTMLElement = createLiElement(text, "sundt", index);
        fruitlist.appendChild(newLiElement);
    }
}

createFruitList();
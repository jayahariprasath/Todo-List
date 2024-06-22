todoArr = [
    {
        "name" : "Todo1",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas deserunt at tempora, obcaecati ex! Enim fuga minima eaque voluptatem? Facere dolorem dolores earum consequatur totam minus illum dignissimos quaerat!",
        "status" : "Critical",
        "completion" : "2024-06-21"// It should be yyyy-MM-dd format
    },
    {
        "name" : "Todo2",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas deserunt at tempora, obcaecati ex! Enim fuga minima eaque voluptatem? Facere dolorem dolores earum consequatur totam minus illum dignissimos quaerat!",
        "status" : "Important",
        "completion" : "2024-06-21"
    },
    {
        "name" : "Todo3",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas deserunt at tempora, obcaecati ex! Enim fuga minima eaque voluptatem? Facere dolorem dolores earum consequatur totam minus illum dignissimos quaerat!",
        "status" : "Normal",
        "completion" : "2024-06-21"
    }
]

inProgessArr = [
    {
        "name" : "In-progess 1",
        "description" : "Just a simple In-progess 1 description",
        "status" : "Critical",
        "completion" : "2024-06-21"
    },
    {
        "name" : "In-progess 2",
        "description" : "Just a simple In-progess 2 description",
        "status" : "Normal",
        "completion" : "2024-06-21"
    },
    {
        "name" : "In-progess 3",
        "description" : "Just a simple In-progess 3 description",
        "status" : "Important",
        "completion" : "2024-06-21"
    }
]

doneArr = [
    {
        "name" : "Done1",
        "description" : "Just a simple Done 1 description",
        "status" : "Normal",
        "completion" : "2024-06-21"
    },
    {
        "name" : "Done2",
        "description" : "Just a simple Done 2 description",
        "status" : "Important",
        "completion" : "2024-06-21"
    },
    {
        "name" : "Done3",
        "description" : "Just a simple Done 3 description",
        "status" : "Critical",
        "completion" : "2024-06-21"
    }
]

taskColorMap = {
    "Critical" : "red",
    "Important" : "yellow",
    "Normal" : "green"
}

function addElement(toBeChangedEle, arr){
    // if(toBeChangedEle.id=="todo")
    toBeChangedEle.innerHTML = `
    <h1>${toBeChangedEle.id.toUpperCase()}</h1>
    `
    arr.forEach((item, idx)=>{
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class","generalClass");

        let secondaryDiv = document.createElement("div");
        secondaryDiv.setAttribute("class","taskList");

        let headDiv = document.createElement("h3");
        headDiv.textContent = item['name'];

        let buttonDiv = document.createElement("button");
        buttonDiv.textContent = item['status'];
        buttonDiv.style.backgroundColor = taskColorMap[item['status']];

        secondaryDiv.appendChild(headDiv);
        secondaryDiv.appendChild(buttonDiv);

        mainDiv.appendChild(secondaryDiv);

        let paraDiv = document.createElement("p");
        paraDiv.textContent = item['description'];

        mainDiv.appendChild(paraDiv);

        let scrollDiv = document.createElement("div");
        scrollDiv.setAttribute("class","scrollBar");

        mainDiv.appendChild(scrollDiv);

        let brtag = document.createElement("br");

        mainDiv.appendChild(brtag);

        let thirdDiv = document.createElement("div");
        thirdDiv.setAttribute("class","dateTimeToBeCompletedDiv");

        let inputDiv = document.createElement("input");
        inputDiv.setAttribute("type","date");
        inputDiv.setAttribute("class","dateTimeToBeCompleted");
        inputDiv.value = item['completion'];

        let leftArrowBtn = document.createElement("button");
        leftArrowBtn.setAttribute("class","arrowCSS");
        leftArrowBtn.addEventListener("click", function(){
            shiftLeft(toBeChangedEle.id, idx);
        });
        leftArrowBtn.textContent = "\u2190";

        let rightArrowBtn = document.createElement("button");
        rightArrowBtn.setAttribute("class","arrowCSS");
        rightArrowBtn.textContent = "\u2192";
        rightArrowBtn.addEventListener("click", function(){
            shiftRight(toBeChangedEle.id, idx);
        });

        if(toBeChangedEle.id=="done" || toBeChangedEle.id=="in-progess"){
            thirdDiv.appendChild(leftArrowBtn);
        }
        thirdDiv.appendChild(inputDiv);
        
        if(toBeChangedEle.id=="todo" || toBeChangedEle.id=="in-progess"){
            thirdDiv.appendChild(rightArrowBtn);
        }

        mainDiv.appendChild(thirdDiv);

        toBeChangedEle.appendChild(mainDiv);
    })
}

function shiftLeft(idName, index){
    if(idName=="done"){
        inProgessArr.push(doneArr[index]);
        doneArr = doneArr.filter((item, idx)=>idx!=index);
    }
    else if(idName=="in-progess"){
        todoArr.push(inProgessArr[index]);
        inProgessArr = inProgessArr.filter((item, idx)=>idx!=index);
    }
    renderUI();
}

function shiftRight(idName, index){
    if(idName=="todo"){
        inProgessArr.push(todoArr[index]);
        todoArr = todoArr.filter((item, idx)=>idx!=index);
    }
    else if(idName=="in-progess"){
        doneArr.push(inProgessArr[index]);
        inProgessArr = inProgessArr.filter((item, idx)=>idx!=index);
    }
    renderUI();
}

// function addElement(toBeChangedEle, arr){
//     arr.forEach((item, idx)=>{
//         toBeChangedEle.innerHTML +=`
//         <div class="generalClass">
//             <div class="taskList">
//                 <h3> ${item['name']} </h3>
//                 <button style="background-color: ${taskColorMap[item['status']]}"> ${item['status']} </button>
//             </div>
//             <p> ${item['description']} </p>
//             <div class="scrollBar"></div>
//             <br>
//             <div class="dateTimeToBeCompletedDiv" id="dateTimeToBeCompletedId">
//                 <input type="date" name="completionDate" id="" class="dateTimeToBeCompleted" value = ${item['completion']}>
//             </div>
//         </div>
//         `
//         console.log(toBeChangedEle.id)
//         // if(toBeChangedEle.id=="todo"){
//         //     let elementToBeChanged = document.getElementById("dateTimeToBeCompletedId")
//         //     elementToBeChanged.innerHTML += `
//         //     <button class="arrowCSS"> <b>&rarr;</b></button>
//         //     `
//         // }
//     });
// }


function renderUI(){
    let todoElement = document.getElementById("todo");
    let inProgessElement = document.getElementById("in-progess");
    let doneElement = document.getElementById("done");

    addElement(todoElement, todoArr);
    addElement(inProgessElement, inProgessArr);
    addElement(doneElement, doneArr);
}

renderUI();


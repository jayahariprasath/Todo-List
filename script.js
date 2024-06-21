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
        "name" : "In-progess 2",
        "description" : "Just a simple Done 2 description",
        "status" : "Important",
        "completion" : "2024-06-21"
    },
    {
        "name" : "In-progess 3",
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
    arr.forEach((item, idx)=>{
        toBeChangedEle.innerHTML +=`
        <div class="generalClass">
            <div class="taskList">
                <h3> ${item['name']} </h3>
                <button style="background-color: ${taskColorMap[item['status']]}"> ${item['status']} </button>
            </div>
            <p> ${item['description']} </p>
            <div class="scrollBar"></div>
            <br>
            <div class="dateTimeToBeCompletedDiv" id="dateTimeToBeCompletedId">
                <input type="date" name="completionDate" id="" class="dateTimeToBeCompleted" value = ${item['completion']}>
            </div>
        </div>
        `
        console.log(toBeChangedEle.id)
        if(toBeChangedEle.id=="todo"){
            let elementToBeChanged = document.getElementById("dateTimeToBeCompletedId")
            elementToBeChanged.innerHTML += `
            <button class="arrowCSS"> <b>&rarr;</b></button>
            `
        }
    });
}


function renderUI(){
    let todoElement = document.getElementById("todo");
    let inProgessElement = document.getElementById("in-progess");
    let doneElement = document.getElementById("done");

    addElement(todoElement, todoArr);
    addElement(inProgessElement, inProgessArr);
    addElement(doneElement, doneArr);
}

renderUI();


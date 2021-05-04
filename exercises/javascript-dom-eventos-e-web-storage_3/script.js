function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //Exercicio 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysMonth = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = document.createElement('li');
    days.innerText = dezDaysList[index];
    if(dezDaysList[index] == 25){
        days.className = 'day holyday friday';
    }
    else if (dezDaysList[index] == 24 || dezDaysList[index] == 31) {
        days.className = 'day holyday'
    } else if (dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18) {
        days.className = 'day friday';
    } else {
        days.className = 'day';
    }
    daysMonth.appendChild(days);
  }

  //Exercicio 2
  let buttonCreator = document.createElement('button');
  function createButton (str, btn, creator) {   
    creator.innerText = str;
    let btnConteiner = document.querySelector('.buttons-container');
    btnConteiner.appendChild(btn);
  }
  buttonCreator.id = 'btn-holiday'
  createButton('Feriados', buttonCreator, buttonCreator);

  //Exercicio 3
  let holyday = document.querySelectorAll('.holyday');
  let button = document.querySelector('.buttons-container button');
  button.addEventListener('click', function () {
    for (let index = 0; index < holyday.length; index += 1) {
        if (holyday[index].style.backgroundColor === 'lightgreen') {
            holyday[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            holyday[index].style.backgroundColor = 'lightgreen';
        }
    }
  })


//Exercicio 4
let buttonCreator2 = document.createElement('button');
buttonCreator2.id = 'btn-friday';
  createButton('Sexta-Feira', buttonCreator2, buttonCreator2);

//Exercicio 5
let fridayButton = document.getElementById('btn-friday');
let fridayDayArray = [4, 11, 24, 25];
fridayButton.addEventListener('click', function () {
    let fridayDay = document.querySelectorAll('.friday');
    for (let index = 0; index < fridayDay.length; index += 1) {
        if (fridayDay[index].innerText !== 'Sextouu') {
            fridayDay[index].innerText = 'Sextouu';
        } else {
            fridayDay[index].innerText = fridayDayArray[index];
        }
    }
})

//Exercicio 6
let day = document.getElementById('days');
function zoomIn () {
  day.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}
zoomIn();
 
function zoomOut () {
  day.addEventListener('mouseout', event => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}
zoomOut();

//Exercicio 7
let task = document.createElement('span');
function createTasks (toDo) {
  const myTasks = document.querySelector('.my-tasks');
  task.innerHTML = toDo;
  myTasks.appendChild(task);
}

//Exercicio 8
function legend (cor) {
  let createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = cor;
  document.querySelector('.my-tasks').appendChild(createDiv);
}
  
legend('green');
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
    if (dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList[index] == 31) {
        days.className = 'day holyday'
    } else if (dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18 || dezDaysList[index] == 25) {
        days.className = 'day friday';
    } else {
        days.className = 'day';
    }
    daysMonth.appendChild(days);
  }

  //Exercicio 2
  let buttonCreator = document.createElement('button');
  function createButton (str) {   
    buttonCreator.innerText = str;
    let btnConteiner = document.querySelector('.buttons-container');
    btnConteiner.appendChild(buttonCreator);
  }
  createButton('Feriados');

  //Exercicio 3
  let holyday = document.querySelectorAll('.holyday');
  let button = document.querySelector('.buttons-container button');
  button.addEventListener('click', function () {
    for (let index = 0; index < holyday.length; index += 1) {
        holyday[index].style.backgroundColor = 'lightGreen';
    }
  })



  

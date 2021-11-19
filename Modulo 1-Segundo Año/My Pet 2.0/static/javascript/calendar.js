onload = turnosMain;

function turnosMain(){
    let inputElem1,
        inputElem2,
        inputElem3,
        selectElem,
        dateInput,
        timeInput,
        button,
        calendar;


    getElements();
    initCalendar();


    function getElements(){
        inputElem1 = document.getElementsById("nombre");
        inputElem2 = document.getElementsById("apellido");
        inputElem3 = document.getElementsById("nombreMascota");
        selectElem = document.getElementsById("tipoConsulta");
        dateInput = document.getElementsById("fecha");
        timeInput = document.getElementsById("horario");
        button = document.getElementsById("confDatos");
    }

    function addEvents(event){
        let inputValue1 = inputElem1.value;
        inputElem1.value= "";
        let inputValue2 = inputElem2.value;
        inputElem2.value= "";
        let inputValue3 = inputElem3.value;
        inputElem3.value= "";
        let selectValue = selectElem.value;
        selectElem.value= "";
        let dateValue = dateInput.value;
        dateInput.value= "";
        let timeValue = timeInput.value;
        timeInput.value= "";
        
        let obj = {
            id: _uuid(),
            nombre: inputValue1,
            apellido: inputValue2,
            nombreMascota: inputValue3,
            fecha: dateValue,
            time: timeValue,
          };

        save();
    }

    function save() {
        let stringified = JSON.stringify(todoList);
        localStorage.setItem("todoList", stringified);
    }

            

       

    function initCalendar(){
        var calendarEl = document.getElementById('calendar');

    calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2021-11-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [],
    });
    
    calendar.render();
    }


    function addEvent(event){
        calendar.addEvent( event [getElements] );
        
    }
}

   

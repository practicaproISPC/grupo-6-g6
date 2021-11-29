// To-do List #7 localStorage - Learning vanilla JavaScript via mini-projects
// https://www.youtube.com/watch?v=FUnowGWhSxw&list=PLkqwj9vc20pUitqvZrLPk-hTNv63EJqwg&index=7&ab_channel=GordonChan

otScriptMain();

function otScriptMain() {
  

  let inputElem,
    inputElem2,
    inputElem3,
    inputElem4,
    dateInput,
    timeInput,
    addButton,
    todoTable,
    todoList = [],
    calendar;

  getElements();
  addListeners();
  initCalendar();
  load();
  renderRows();

  function getElements() {
    inputElem = document.getElementsByTagName("input")[0];
    inputElem2 = document.getElementsByTagName("input")[1];
    inputElem3 = document.getElementsByTagName("input")[2];
    inputElem4 = document.getElementsByTagName("input")[3];
    dateInput = document.getElementById("fecha");
    timeInput = document.getElementById("horario");
    addButton = document.getElementById("addBtn");
    todoTable = document.getElementById("todoTable");
  }

  function addListeners() {
    addButton.addEventListener("click", addEntry, false);
    
  }

  function addEntry(event) {

    let inputValue = inputElem.value;
    inputElem.value = "";
    let inputValue2 = inputElem2.value;
    inputElem2.value = "";
    let inputValue3 = inputElem3.value;
    inputElem3.value= "";
    let inputValue4 = inputElem4.value;
    inputElem4.value = "";
    let dateValue = dateInput.value;
    dateInput.value = "";
    let timeValue = timeInput.value;
    timeInput.value = "";

    let obj = {
      id: _uuid(),
      nombreCliente: inputValue,
      apellidoCliente: inputValue2,
      nombreMascota: inputValue3,
      tipoConsulta: inputValue4,
      fechaTurno: dateValue,
      horarioTurno: timeValue,
    };

    renderRow(obj);

    todoList.push(obj);

    save();

    
  }


  function save() {
    let stringified = JSON.stringify(todoList);
    localStorage.setItem("todoList", stringified);
  }

  function load() {
    let retrieved = localStorage.getItem("todoList");
    todoList = JSON.parse(retrieved);
    //console.log(typeof todoList)
    if (todoList == null)
      todoList = [];
  }
  
  function renderRows() {
    todoList.forEach(todoObj => {
      renderRow(todoObj);
    })
    
  }

  function renderRow({
    nombreCliente: inputValue,
    apellidoCliente: inputValue2,
    nombreMascota: inputValue3,
    tipoConsulta: inputValue4,
    fechaTurno: dateValue,
    horarioTurno: timeValue,
    id}){
    // add a new row

    let table = document.getElementById("todoTable");

    let trElem = document.createElement("tr");
    table.appendChild(trElem);
    
     // nombre cell
     let tdElem1 = document.createElement("td");
     tdElem1.innerText = inputValue;
     trElem.appendChild(tdElem1);
 
     // apellido cell
     let tdElem2 = document.createElement("td");
     tdElem2.innerText = inputValue2;
     trElem.appendChild(tdElem2);
 
     // nombreMascota cell
     let tdElem3 = document.createElement("td");
     tdElem3.innerText = inputValue3;
     trElem.appendChild(tdElem3);
 
     // consulta cell
     let tdElem4 = document.createElement("td");
     tdElem4.innerText = inputValue4;
     trElem.appendChild(tdElem4);
 
     // date cell
     let dateElem = document.createElement("td");
     dateElem.innerText = formatDate(dateValue);
     trElem.appendChild(dateElem);
 
     // time cell
     let timeElem = document.createElement("td");
     timeElem.innerText = timeValue;
     trElem.appendChild(timeElem);

     
     addEvent({
       
      title: inputValue ,

      start: dateValue,  
     });
  }

  function formatDate(date){
    let dateObj = new Date(date);
    let formattedDate = dateObj.toLocaleString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  }

  function _uuid() {
    var d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
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
      calendar.addEvent(event);
    }
  

}

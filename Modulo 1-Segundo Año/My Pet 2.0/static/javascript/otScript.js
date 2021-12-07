<<<<<<< HEAD
=======
// To-do List #7 localStorage - Learning vanilla JavaScript via mini-projects
// https://www.youtube.com/watch?v=FUnowGWhSxw&list=PLkqwj9vc20pUitqvZrLPk-hTNv63EJqwg&index=7&ab_channel=GordonChan

>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa
otScriptMain();

function otScriptMain() {
  

  let inputElem,
    inputElem2,
    inputElem3,
    inputElem4,
    dateInput,
    timeInput,
    addButton,
<<<<<<< HEAD
    todoList = [],
    calendar,
    editBtn,
    modalCloseButton,
    changeButton,
    todoTable;
=======
    todoTable,
    todoList = [],
    calendar;
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa

  getElements();
  addListeners();
  initCalendar();
  load();
<<<<<<< HEAD
  renderRows(todoList);
=======
  renderRows();
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa

  function getElements() {
    inputElem = document.getElementsByTagName("input")[0];
    inputElem2 = document.getElementsByTagName("input")[1];
    inputElem3 = document.getElementsByTagName("input")[2];
    inputElem4 = document.getElementsByTagName("input")[3];
    dateInput = document.getElementById("fecha");
    timeInput = document.getElementById("horario");
    addButton = document.getElementById("addBtn");
<<<<<<< HEAD
    modalCloseButton = document.getElementById("modalCloseBtn");
    changeButton = document.getElementById("changeBtn");
    todoTable = document.getElementById("todoTable");
    editBtn = document.getElementById("editBtn");
=======
    todoTable = document.getElementById("todoTable");
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa
  }

  function addListeners() {
    addButton.addEventListener("click", addEntry, false);
<<<<<<< HEAD
    document.getElementById("todoTable").addEventListener("click", onTableClicked, false);

=======
    
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa
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

    
<<<<<<< HEAD
    
  }




=======
  }


>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa
  function save() {
    let stringified = JSON.stringify(todoList);
    localStorage.setItem("todoList", stringified);
  }

  function load() {
    let retrieved = localStorage.getItem("todoList");
    todoList = JSON.parse(retrieved);
<<<<<<< HEAD
=======
    //console.log(typeof todoList)
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa
    if (todoList == null)
      todoList = [];
  }
  
<<<<<<< HEAD
  function renderRows(arr) {
    arr.forEach(todoObj => {
      renderRow(todoObj);
    })
=======
  function renderRows() {
    todoList.forEach(todoObj => {
      renderRow(todoObj);
    })
    
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa
  }

  function renderRow({
    nombreCliente: inputValue,
    apellidoCliente: inputValue2,
    nombreMascota: inputValue3,
    tipoConsulta: inputValue4,
    fechaTurno: dateValue,
    horarioTurno: timeValue,
    id}){
<<<<<<< HEAD
    
=======
    // add a new row
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa

    let table = document.getElementById("todoTable");

    let trElem = document.createElement("tr");
    table.appendChild(trElem);
    
     // nombre cell
     let tdElem1 = document.createElement("td");
     tdElem1.innerText = inputValue;
     trElem.appendChild(tdElem1);
<<<<<<< HEAD
     
    // apellido cell
=======
 
     // apellido cell
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa
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

<<<<<<< HEAD

    // delete cell
    let btnElem = document.createElement("button");
    btnElem.innerText = "delete";
    btnElem.className = "material-icons";
    btnElem.addEventListener("click", deleteItem, false);
    btnElem.dataset.id = id;
    let tdElem5 = document.createElement("td");
    tdElem5.appendChild(btnElem);
    trElem.appendChild(tdElem5);
     

    addEvent({
      id: id,
      title: inputValue,
      start: dateValue,
      
     });

    
    tdElem1.dataset.id = id;
    tdElem2.dataset.id = id;
    tdElem3.dataset.id = id;
    tdElem4.dataset.id = id;
    dateElem.dataset.id = id;
    timeElem.dataset.id = id;
    

    tdElem1.dataset.editable = true;
    tdElem2.dataset.editable = true;
    tdElem3.dataset.editable = true;
    tdElem4.dataset.editable = true;
    dateElem.dataset.editable = true;
    timeElem.dataset.editable = true;
    
    tdElem1.dataset.type = "nombreCliente";
    tdElem2.dataset.type = "apellidoCliente";
    tdElem3.dataset.type = "nombreMascota";
    tdElem4.dataset.type = "tipoConsulta";
    dateElem.dataset.type = "fechaTurno";
    dateElem.dataset.value = dateValue;
    timeElem.dataset.type = "horarioTurno";
   
  
    function deleteItem() {
      trElem.remove();

      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == this.dataset.id)
          todoList.splice(i, 1);
      }
      save();
      calendar.getEventById(this.dataset.id).remove();
    }


    function allowEdit(event){
      let currentText = event.target.innerText;
      event.target.innerText = "";

      let tempTextBox = document.createElement("input");
      event.target.appendChild(tempTextBox);
      tempTextBox.value = currentText;

      tempTextBox.addEventListener("change", onChange, false);

      function onChange(event){
        let changedValue = event.target.value;
        let id = event.target.parentNode.dataset.id;
        calendar.getEventById(id).remove();
        
        todoList.forEach(todoObj =>{
          if(todoObj.id == id){
            todoObj.nombreCliente=changedValue;
            addEvent({
              id: id,
              title: changedValue,
              start: todoObj.fechaTurno,
            });
          }
        });
        save();

        event.target.parentNode.innerText = changedValue;
      }
    }

  }
  /*Acá termina renderRow*/


    function _uuid() {
      var d = Date.now();
      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); 
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
      timeZone: 'UTC',
      initialView: 'dayGridMonth',
      initialDate: '2021-12-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
        events: [],
        
        eventBackgroundColor: "#454150",
        eventTextColor: "#FFE4E9",
        eventBorderColor: "#45B6CC",
=======
     
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
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa
      });
    
      calendar.render();
    }

<<<<<<< HEAD



=======
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa
    function addEvent(event){
      calendar.addEvent(event);
    }
  

<<<<<<< HEAD


  function showEditModalBox(event){
     document.getElementById("todo-overlay").classList.add("slidedIntoView");
  }
  
  function closeEditModalBox(event){
    document.getElementById("todo-overlay").classList.remove("slidedIntoView");
  }

  function onTableClicked(event){
    if(event.target.matches("td") && event.target.dataset.editable  == "true"){
      let tempInputElem;
      switch(event.target.dataset.type){
        case "fechaTurno" :
          tempInputElem = document.createElement("input");
          tempInputElem.type = "date";
          tempInputElem.value = event.target.dataset.value;
          break;
        case "horarioTurno" :
          tempInputElem = document.createElement("input");
          console.log("horarioTurno");
          tempInputElem.type = "horarioTurno";
          tempInputElem.value = event.target.innerText;
          break;
        case "nombreCliente" :
        case "apellidoCliente":
        case "nombreMascota":
        case "tipoConsulta" :
          tempInputElem = document.createElement("input");
          tempInputElem.value = event.target.innerText;
          
          break;
          
        default:
      }
      event.target.innerText = "";
      event.target.appendChild(tempInputElem);

      tempInputElem.addEventListener("change", onChange, false);
    }

    function onChange(event){
      let changedValue = event.target.value;
      let id = event.target.parentNode.dataset.id;
     
      //para borrar del calendario los eventos cambiados
      calendar.getEventById(id).remove();
      
      todoList.forEach(todoObj =>{
        if(todoObj.id == id){
          todoObj[event.target.parentNode.dataset.type] = changedValue
          addEvent({
            id: id,
            title: todoObj.nombreCliente,
            start: todoObj.fechaTurno,
          });
        }
      });
      save();

      event.target.parentNode.innerText = changedValue;
    }
  }

  function formatDate(fechaTurno){
    let dateObj = new Date(fechaTurno);
     let formattedDate = dateObj.toLocaleString("es-AR", {
      timeZone: 'UTC',
      month: "long",
      day: "numeric",
      year: "numeric",
      });
    return formattedDate;
  }

} /*final de todoMain*/
=======
}
>>>>>>> f12d305d9f8349c5cf8349e47dcdfddced59c7fa

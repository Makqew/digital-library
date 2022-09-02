let newLibrary = [
  {author: 'Maximilliamus', title: 'Gladiator', numOfPages: '300', status: 'Reading'}, 
  {author: 'The Gus', title: 'Hi, my name is Gustavo , but people call me Gus', numOfPages: '491', status: 'Readed'}
];
let fullCap = document.getElementById('catalog');



class Book {
  constructor(author, title, numOfPages, status) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.status = status;
  }
}





// Adds new item into array and clears the input
function addBookToLibrary() {
  inputValAuthor = $('#author').val();
  inputValTitle = $('#title').val();
  inputValPages = $('#numOfPages').val();
  inputValStatus = document.querySelector('input[name="status"]:checked').value;


  // Adding constructor data
  let newBook = new Book(inputValAuthor, inputValTitle, inputValPages, inputValStatus)
  newLibrary.push(newBook);
  

  for(let i = 0; i < newLibrary.length; i++){
    let cardDivOne;
    if(newLibrary[i].status === "Reading"){
      cardDivOne = `<div class="bookcard">
        <div class="top-section">
          <button class="status reading" onclick="changeStatus(this)">${newLibrary[i].status}</button>
          <button class="remove" onclick="removeBook(this)">✖ Remove</button>
        </div>`;
    } else if(newLibrary[i].status === "Booked"){
      cardDivOne = `<div class="bookcard">
        <div class="top-section">
          <button class="status booked" onclick="changeStatus(this)">${newLibrary[i].status}</button>
          <button class="remove" onclick="removeBook(this)">✖ Remove</button>
        </div>`;
    } else {
      cardDivOne = `<div class="bookcard">
        <div class="top-section">
          <button class="status readed" onclick="changeStatus(this)">${newLibrary[i].status}</button>
          <button class="remove" onclick="removeBook(this)">✖ Remove</button>
        </div>`;
    }
    let cardDivTwo =
        `<div class="main-section">
          <p class="title">${newLibrary[i].title}</p>
          <p class="author">by ${newLibrary[i].author}</p>
          <p class="number-of-pages">${newLibrary[i].numOfPages} pages</p>
        </div>
      </div>`;


    cardDivOne += cardDivTwo;
    fullCap.innerHTML += cardDivOne;
    }  
    document.getElementById("catalog").innerHTML = fullCap.innerHTML;

    // Clearing input fields
    $('#author').val('');
    $('#title').val('');
    $('#numOfPages').val('');
};



function changeStatus(element){
  console.log(element)
  if(element.innerHTML === 'Reading'){
    element.innerHTML = 'Booked';
    element.classList.remove('reading');
    element.classList.add('booked');
  } else if (element.innerHTML === 'Booked') {
    element.innerHTML = 'Readed';
    element.classList.remove('booked');
    element.classList.add('readed');
  } else if (element.innerHTML === 'Readed') {
    element.innerHTML = 'Reading';
    element.classList.remove('readed');
    element.classList.add('reading')
  }  
};


// shows array for the first time
for( let i = 0; i < newLibrary.length; i++){

  let cardDivOne;

  if(newLibrary[i].status === "Reading"){
    cardDivOne = `<div class="bookcard">
      <div class="top-section">
        <button class="status reading" onclick="changeStatus(this)">${newLibrary[i].status}</button>
        <button class="remove" onclick="removeBook(this)">✖ Remove</button>
      </div>`;
  } else if(newLibrary[i].status === "Booked"){
    cardDivOne = `<div class="bookcard">
      <div class="top-section">
        <button class="status booked" onclick="changeStatus(this)">${newLibrary[i].status}</button>
        <button class="remove" onclick="removeBook(this)">✖ Remove</button>
      </div>`;
  } else {
    cardDivOne = `<div class="bookcard">
      <div class="top-section">
        <button class="status readed" onclick="changeStatus(this)">${newLibrary[i].status}</button>
        <button class="remove" onclick="removeBook(this)">✖ Remove</button>
      </div>`;
  }
  let cardDivTwo =
      `<div class="main-section">
        <p class="title">${newLibrary[i].title}</p>
        <p class="author">by ${newLibrary[i].author}</p>
        <p class="number-of-pages">${newLibrary[i].numOfPages} pages</p>
      </div>
    </div>`;


  cardDivOne += cardDivTwo;
  fullCap.innerHTML += cardDivOne;
}
document.getElementById("catalog").innerHTML = fullCap.innerHTML;




// Deletes the previously added array data, to avoid reapeting books
function deleteHistory() {
  $('.bookcard').remove();
}

// Removes book from HTML and array
function removeBook(element) {
  let topTarget = element.parentNode.parentNode;
  topTarget.remove();
  newLibrary.splice(newLibrary.map(elem => elem.title).indexOf(topTarget.querySelector('.title').innerHTML), 1)
}

//showing/hiding Modal
function showModal() {
  $('.dark').show();
  body.style.overflow = "hidden";

}
function hideModal() {
  $('.dark').hide();
  body.style.overflow = "auto";
}


function activeState(){
  let allRadios = document.querySelectorAll('input[name="status"]');
  for(let k = 0; k < allRadios.length; k++){
    if(allRadios[k].checked){
      allRadios[k].parentNode.style.backgroundColor = "antiquewhite";
    } else {
      allRadios[k].parentNode.style.backgroundColor = "white";
    }  
  }
  }

// Initiates 4 functions after click on the button
let header = document.querySelector('.primary');

let selectedRadio = document.querySelectorAll('input[name="status"]');
for(let j = 0; j < selectedRadio.length; j++){
  selectedRadio[j].addEventListener('click', activeState);
  console.log(selectedRadio[j].value);
}
// selectedRadio.addEventListener("click", activeState2)

header.addEventListener("click", deleteHistory);
header.addEventListener("click", addBookToLibrary);
header.addEventListener("click", hideModal);


  
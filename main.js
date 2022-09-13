
let newLibrary = [
  {author: 'Maximilliamus', title: 'Gladiator', numOfPages: '300', status: 'Reading'}, 
  {author: 'The Gus', title: 'Hi, my name is Gustavo , but people call me Gus', numOfPages: '491', status: 'Readed'}
];
let fullCap = document.getElementById('catalog');
const body = document.querySelector('body');


class Book {
  constructor(author, title, numOfPages, status) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.status = status;
  }

  addBookToLibrary() {

      let cardDivOne;
      if(this.status === "Reading"){
        cardDivOne = `<div class="bookcard">
          <div class="top-section">
            <button class="status reading" onclick="changeStatus(this)">${this.status}</button>
            <button class="remove" onclick="removeBook(this)">✖ Remove</button>
          </div>`;
      } else if(this.status === "Booked"){
        cardDivOne = `<div class="bookcard">
          <div class="top-section">
            <button class="status booked" onclick="changeStatus(this)">${this.status}</button>
            <button class="remove" onclick="removeBook(this)">✖ Remove</button>
          </div>`;
      } else {
        cardDivOne = `<div class="bookcard">
          <div class="top-section">
            <button class="status readed" onclick="changeStatus(this)">${this.status}</button>
            <button class="remove" onclick="removeBook(this)">✖ Remove</button>
          </div>`;
      }


      let cardDivTwo =
          `<div class="main-section">
            <p class="title">${this.title}</p>
            <p class="author">by ${this.author}</p>
            <p class="number-of-pages">${this.numOfPages} pages</p>
          </div>
        </div>`;
  
  
      cardDivOne += cardDivTwo;
      return fullCap.innerHTML += cardDivOne;
      // document.getElementById("catalog").innerHTML = fullCap.innerHTML;
  }



  
}

function constructorCreator (){
  let inputValAuthor = $('#author').val();
  let inputValTitle = $('#title').val();
  let inputValPages = $('#numOfPages').val();
  let inputValStatus = document.querySelector('input[name="status"]:checked').value;


  const newBook = new Book(inputValAuthor, inputValTitle, inputValPages, inputValStatus);
  newLibrary.push(newBook);


  $('#author').val('');
  $('#title').val('');
  $('#numOfPages').val('');

  return newBook.addBookToLibrary();

}



// shows array for the first time
for( let i = 0; i < newLibrary.length; i++){
  const initBook = new Book(newLibrary[i].author, newLibrary[i].title, newLibrary[i].numOfPages, newLibrary[i].status )
  initBook.addBookToLibrary();
}




//Functions

//Changing status of the book
function changeStatus(element) {
  if(element.innerHTML === 'Reading'){
    element.innerHTML = 'Booked';
    element.classList.remove('reading');
    element.classList.add('booked');
  } else if (element.innerHTML === 'Booked') {
    element.innerHTML = 'Readed';
    element.classList.remove('booked');
    element.classList.add('readed');
  } else {
    element.innerHTML = 'Reading';
    element.classList.remove('readed');
    element.classList.add('reading');
  }  
};


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





//Adding click event on the radios
let selectedRadio = document.querySelectorAll('input[name="status"]');
for(let j = 0; j < selectedRadio.length; j++){
  selectedRadio[j].addEventListener('click', activeState);
}

//Making the radio button background active
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



// Initiates 2 functions after click on the button
let header = document.querySelector('.primary');
header.addEventListener("click", constructorCreator)
header.addEventListener("click", hideModal);


  
let newLibrary = [
  {author: 'Maximilliamus', title: 'Gladiator', numOfPages: '300', status: 'Reading'}, 
  {author: 'The Gus', title: 'Hi, my name is Gustavo , but people call me Gus', numOfPages: '491', status: 'Readed'}
];

const body = document.querySelector('body');
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
    let div = document.createElement('div');
    div.classList.add("bookcard");

    
    let botDiv = document.createElement('div');
    botDiv.classList.add('top-section');

    let oneDiv = document.createElement('div');
    oneDiv.classList.add('main-section');

    let removeBtn = document.createElement('button');
    removeBtn.classList.add("remove");
    removeBtn.appendChild(document.createTextNode('Remove'));
    

    let author = document.createElement('p');
    author.classList.add("author");
    author.appendChild(document.createTextNode("by " + newLibrary[i].author));

    let title = document.createElement('p');
    title.classList.add("title");
    title.appendChild(document.createTextNode(newLibrary[i].title));
    
    let numOfPages = document.createElement('p');
    numOfPages.classList.add("number-of-pages");
    numOfPages.appendChild(document.createTextNode(newLibrary[i].numOfPages + " pages"));
    
    let status = document.createElement('button');
    status.classList.add("status");
    status.appendChild(document.createTextNode(newLibrary[i].status));
    if(newLibrary[i].status === "Reading"){
      status.classList.add("reading");
    } else if(newLibrary[i].status === "Booked"){
      status.classList.add("booked");
    } else {
      status.classList.add("readed");
    }
      
    
    // Adding Author and remove button to the top section of the card
    oneDiv.appendChild(title);
    oneDiv.appendChild(author);
    oneDiv.appendChild(numOfPages);

    botDiv.appendChild(status);
    botDiv.appendChild(removeBtn);

    div.append(botDiv);
    div.append(oneDiv);
    fullCap.append(div);

    // Clearing input fields
    $('#author').val('');
    $('#title').val('');
    $('#numOfPages').val('');
    


    
    removeBtn.addEventListener("click", removeBook);
    status.addEventListener("click", changeStatus);
  }  
};

function changeStatus(event){
  let statusVal = event.currentTarget.innerHTML
  if(statusVal === 'Reading'){
    this.innerHTML = 'Booked';
    this.classList.remove('reading');
    this.classList.add('booked');
  } else if (statusVal === 'Booked') {
    this.innerHTML = 'Readed';
    this.classList.remove('booked');
    this.classList.add('readed');
  } else if (statusVal === 'Readed') {
    this.innerHTML = 'Reading';
    this.classList.remove('readed');
    this.classList.add('reading')
  }  
};


// shows array for the first time
for( let i = 0; i < newLibrary.length; i++){
     
  let div = document.createElement('div');
  div.classList.add("bookcard");

  let botDiv = document.createElement('div')
  botDiv.classList.add('top-section')
  let oneDiv = document.createElement('div')
  oneDiv.classList.add('main-section')

  let author = document.createElement('p');
  author.classList.add("author");
  author.appendChild(document.createTextNode("by " + newLibrary[i].author));
    
  let removeBtn = document.createElement('button');
  removeBtn.classList.add("remove");
  removeBtn.appendChild(document.createTextNode('✖ Remove'));

  let title = document.createElement('p');
  title.classList.add("title");
  title.appendChild(document.createTextNode(newLibrary[i].title));
    
  let numOfPages = document.createElement('p');
  numOfPages.classList.add("number-of-pages");
  numOfPages.appendChild(document.createTextNode(newLibrary[i].numOfPages + " pages"));
    
  let status = document.createElement('button');
  status.classList.add("status");
  status.appendChild(document.createTextNode(newLibrary[i].status));

  if(newLibrary[i].status === "Reading"){
    status.classList.add("reading");
  } else if(newLibrary[i].status === "Booked"){
    status.classList.add("booked");
  } else {
    status.classList.add("readed");
  }
    
  oneDiv.appendChild(title);
  oneDiv.appendChild(author);
  oneDiv.appendChild(numOfPages);

  botDiv.appendChild(status);
  botDiv.appendChild(removeBtn);

  div.append(botDiv);
  div.append(oneDiv);
  
  fullCap.append(div);

  removeBtn.addEventListener("click", removeBook);
  status.addEventListener("click", changeStatus);
}




// Deletes the previously added array data, to avoid reapeting books
function deleteHistory() {
  $('.bookcard').remove();
}

// Removes book from HTML and array
function removeBook(event) {
  let targetTop = event.currentTarget.parentNode.parentNode;
  targetTop.remove();
  newLibrary.splice(newLibrary.map(elem => elem.title).indexOf(targetTop.querySelector('.title').innerHTML), 1)
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


  
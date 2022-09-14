let myLibrary = [];

function Book (book,author,pages,status) {
    this.book = book;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

let i=0;
function addBookToLibrary() {
  i++;
  const book=document.getElementById('book').value;
  const author=document.getElementById('author').value;
  const pages=document.getElementById('pages').value;
  const statusInt=document.getElementById('status').value;
  let status = ''; 
    if(statusInt === 'yes') {status='Read'}
    else if (statusInt === 'no') {status='Not Read'}
    let userObj=new Book (book,author,pages,status);
    myLibrary.push(userObj);
    const table = document.getElementById('table');
    const tRow = document.createElement('tr');
    table.appendChild(tRow);
    const bookS = document.createElement('td');
    tRow.appendChild(bookS);
    bookS.textContent = book;

    const authorS = document.createElement('td');
    tRow.appendChild(authorS);
    authorS.textContent = author;

    const pagesS = document.createElement('td');
    tRow.appendChild(pagesS);
    pagesS.textContent = pages;
    const statusR = document.createElement('td');
    const statusS = document.createElement('button');
    statusS.setAttribute('id', `toggle-${i}`);
    statusS.setAttribute('class', 'toggle-btn');
    tRow.appendChild(statusR);
    statusR.appendChild(statusS);
    statusS.textContent = status;
    const statusToggle = document.getElementById(`toggle-${i}`);
    statusToggle.addEventListener('click', () => {
      if(statusToggle.textContent=='Read') {statusToggle.textContent='Not Read'}
      else if(statusToggle.textContent=='Not Read') {statusToggle.textContent='Read'}
    })
}

const add = document.getElementById('add');
add.addEventListener('click', addBookToLibrary);

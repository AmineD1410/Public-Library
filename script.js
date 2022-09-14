let myLibrary = [];

function Book (book,author,pages,status) {
    this.book = book;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function addBookToLibrary() {
  const book=document.getElementById('book').value;
  const author=document.getElementById('author').value;
  const pages=document.getElementById('pages').value;
  const statusInt=document.getElementById('status').value;
  let status = '';
    if(statusInt === 'yes') {status='Read'}
    else if (statusInt === 'no') {status='Not Read'}
    let userObj=new Book (book,author,pages,status);
    myLibrary.push(userObj);
    console.table(myLibrary);
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

    const statusS = document.createElement('td');
    tRow.appendChild(statusS);
    statusS.textContent = status;
}
const add = document.getElementById('add');
add.addEventListener('click', addBookToLibrary);
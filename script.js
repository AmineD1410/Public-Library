myLibrary = [];

function Book (name,author,pages,status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

let i=0;

function createElement() {
    i++;
    //get values
    const bookIn = document.getElementById('book').value;
    const authorIn = document.getElementById('author').value;
    const pagesIn = document.getElementById('pages').value;
    const statusIn = document.getElementById('status').value;
    //add book to library
    const newBook = new Book (bookIn,authorIn,pagesIn,statusIn);
    myLibrary.push(newBook);

    //Create Row
    const table = document.getElementById('table');
    const newRow = document.createElement('tr');
    newRow.setAttribute('rowIndex', i);
    newRow.setAttribute('id', `table-row-${i}`);
    table.appendChild(newRow);

     //start counter
    tableRow = document.getElementById(`table-row-${i}`); //Get row

    //Create Elements and set their text content from the array
    const bookName = document.createElement('td');
    bookName.setAttribute('bkIndex',i);
    bookName.textContent = bookIn;
    tableRow.appendChild(bookName);

    const authorName = document.createElement('td');
    authorName.textContent = authorIn;
    tableRow.appendChild(authorName);

    const pagesName = document.createElement('td');
    pagesName.textContent = pagesIn;
    tableRow.appendChild(pagesName);

    const statusName = document.createElement('td');
    const statusToggle = document.createElement('button');
    statusToggle.setAttribute('class', 'toggle-btn');
    statusToggle.setAttribute('stIndex',i);
    statusToggle.textContent = statusIn;
    tableRow.appendChild(statusName);
    statusName.appendChild(statusToggle);
    statusToggle.addEventListener('click', toggleStatus)

    const removeCell = document.createElement('td');
    tableRow.appendChild(removeCell);
    const removeBtn = document.createElement('img');
    removeBtn.setAttribute('btnIndex',i); //Set the same attribute as the row to create a link to be able to remove it
    removeBtn.setAttribute('src', './Ressources/remove.png');
    removeCell.appendChild(removeBtn);
    removeBtn.addEventListener('click', removeElement);
}

function removeElement () {
        let buttonAtt = this.getAttribute("btnIndex");
        const deleteRow = document.querySelector(`[rowIndex="${buttonAtt}"]`);
            let book = document.querySelector(`[bkIndex="${buttonAtt}"]`);
                for (let k = myLibrary.length - 1; k >= 0; --k) {
                    if (myLibrary[k].name == book.textContent) {
                        myLibrary.splice(k,1);
                    }
                }
        table.removeChild(deleteRow);

}
function toggleStatus() {
    
        let statAt = this.getAttribute("stIndex");
        const statusToggle = document.querySelector(`[stIndex="${statAt}"]`)
        if(statusToggle.textContent=='Read') {statusToggle.textContent='Unread';
        let book = document.querySelector(`[bkIndex="${statAt}"]`);
                for (let k = myLibrary.length - 1; k >= 0; --k) {
                    if (myLibrary[k].name == book.textContent) {
                        myLibrary[k].status='Unread';
                    }
                }
    }
        else if(statusToggle.textContent=='Unread') {statusToggle.textContent='Read';
        let book = document.querySelector(`[bkIndex="${statAt}"]`);
        for (let k = myLibrary.length - 1; k >= 0; --k) {
            if (myLibrary[k].name == book.textContent) {
                myLibrary[k].status='Read';
            }
        }}
      }
const addBtn = document.getElementById('add');
addBtn.addEventListener('click', createElement);


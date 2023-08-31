// calling storage UI
bindBookData();

// CRUD
function bindBookData() {
    var books = JSON.parse(localStorage.getItem('bookData'));
    if (books != null) {
        document.getElementById('tblbody').innerHTML = "";
        books.forEach(function (item, index) {
            debugger;
            var btnEditId = "btnedit" + item.id;
            var btnDeleteId = "btndelete" + item.id;
            var tableRow = "<tr Id='" + item.id + "'data-BookID='" + item.id + "'data-title='" + item.title + "'data-count='" + item.count + "' data-author='" + item.author + "' data-description='" + item.description + "'>"
                + "<td class='td-data'>" + item.id + "</td>"
                + "<td class='td-data'>" + item.title + "</td>"
                + "<td class='td-data'>" + item.count + "</td>"
                + "<td class='td-data'>" + item.author + "</td>"
                + "<td class='td-data'>" + item.description + "</td>"
                + "<td class='td-data'>" +
                "<button id='" + btnEditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showEditRow(" + item.id + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
                "<button id='" + btnDeleteId + "' class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteRow(" + item.id + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
                + "</td>"
                + "</tr>";
            document.getElementById('tblbody').innerHTML += tableRow;
        })
    }
    var AddRow = "<tr>"
        + "<td class='td-data'></td>"
        + "<td class='td-data'><input type='text' id='txtTitle' placeholder='title...'></td>"
        + "<td class='td-data'><input type='number' id='numberCount' placeholder='count...'></td>"
        + "<td class='td-data'><input type='text' id='txtAuthor' placeholder='author...'></td>"
        + "<td class='td-data'><input type='text' id='txtDescription' placeholder='description...'></td>"
        + "<td class='td-data'>" + "<button id= 'btnaddCustomer' onclick='addBook()' class='btn btn-success'> <i class='fa fa-plus-circle' aria-hidden='true'></i>Add</button>" + "</td>"
        + "</tr>";
    document.getElementById('tblbody').innerHTML += AddRow;
}


function GetBookID() {
    const ID = Date.now();
    return ID;
}


function addBook() {
    var bookId = GetBookID();
    var title = document.getElementById("txtTitle").value;
    if (!title) {
        alert('Please enter a title!')
        return false;
    }
    var count = document.getElementById("numberCount").value;
    if (!count) {
        alert('Please enter a number!')
        return false;
    }
    var author = document.getElementById("txtAuthor").value;
    if (!author) {
        alert('Please enter an author')
        return false;
    }
    var description = document.getElementById("txtDescription").value;
    if (!description) {
        alert('Please enter a description')
        return false;
    }
    var bookObj = {
        "id": bookId,
        "title": title,
        "count": count,
        "author": author,
        "description": description
    };
    addBookDataToLocalStorage(bookObj);
    document.getElementById('txtTitle').value = "";
    document.getElementById('txtAuthor').value = "";
    bindBookData();
}


function showEditRow(BookID) {
    var bookRow = document.getElementById(BookID); //this gives tr of whose button was clicked
    var trdata = bookRow.querySelectorAll(".td-data");
    /*returns array of all elements with
    "row-data" class within the row with given id*/
    var bookID = trdata[0].innerHTML;
    var bookTitle = trdata[1].innerHTML;
    var bookCount = trdata[2].innerHTML;
    var bookAuthor = trdata[3].innerHTML;
    var bookDescription = trdata[4].innerHTML;


    trdata[0].innerHTML = '<input name="txtbookid"  disabled id="txtbookid" value="' + bookID + '"/>';
    trdata[1].innerHTML = '<input name="txttitle" id="txttitle" value="' + bookTitle + '"/>';
    trdata[2].innerHTML = '<input name="txtcount" id="txtcount" value="' + bookCount + '"/>';
    trdata[3].innerHTML = '<input name="txtauthor" id="txtauthor" value="' + bookAuthor + '"/>';
    trdata[4].innerHTML = '<input name="txtdescription" id="txtdescription" value="' + bookDescription + '"/>';
    trdata[5].innerHTML =
        "<button class='btn btn-primary btn-xs btn-updateCustomer' onclick='updateBook(" + bookID + ")'>" +
        "<i class='fa fa-pencil' aria-hidden='true'></i>Save</button>"
        + "<button class='btn btn-warning btn-xs btn-cancelupdate' onclick='cancel(" + bookID + ")'><i class='fa fa-times' aria-hidden='true'></i>Cancel</button>"
}


function cancel(BookID) {
    debugger;
    var btneditId = "btnedit" + BookID;
    var btndeleteId = "btndelete" + BookID;


    var CustomerRow = document.getElementById(BookID); //this gives tr of whose button was clicked
    var data = CustomerRow.querySelectorAll(".td-data");


    var title = CustomerRow.getAttribute("data-title");
    var count = CustomerRow.getAttribute("data-count");
    var author = CustomerRow.getAttribute("data-author");
    var description = CustomerRow.getAttribute("data-description");


    data[0].innerHTML = BookID;
    data[1].innerHTML = title;
    data[2].innerHTML = count;
    data[3].innerHTML = author;
    data[4].innerHTML = description;
    var actionbtn = "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showEditRow(" + BookID + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteRow(" + BookID + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
    data[5].innerHTML = actionbtn;
}


function updateBook(BookID) {
    var bookRow = document.getElementById(BookID); //this gives tr of  whose button was clicked
    var data = bookRow.querySelectorAll(".td-data");
    var title = data[1].querySelector("#txttitle").value;
    var count = data[2].querySelector("#txtcount").value;
    var author = data[3].querySelector("#txtauthor").value;
    var description = data[4].querySelector("#txtdescription").value;
    var bookObj = {
        "id": BookID,
        "title": title,
        "count": count,
        "author": author,
        "description": description
    };
    updateDataToLocalStorage(bookObj);
    bindBookData();
}


function deleteRow(BookID) {
    deleteDataFromLocalStorage(BookID);
        bindBookData();
}




// CRUD Local Storage
function addBookDataToLocalStorage(bookObj) {

    //already has data in localstorage then update it other create new one
    var books = JSON.parse(localStorage.getItem('bookData'));
    if (books != null) {
        books.push(bookObj);
       
        localStorage.setItem('bookData', JSON.stringify(books));
    }
    else {
        var bookData = new Array();
        bookData.push(bookObj);
        localStorage.setItem('bookData', JSON.stringify(bookData));
    }
}


function updateDataToLocalStorage(bookObj) {

    var books = JSON.parse(localStorage.getItem('bookData'));
    if (books != null) {
        var book = books.filter((x) => x.id == bookObj.id).pop();
        if (book != null) {
            book.title = bookObj.title;
            book.count = bookObj.count;
            book.author = bookObj.author;
            book.description = bookObj.description;
        }
        localStorage.setItem('bookData', JSON.stringify(books));
    }
}


function deleteDataFromLocalStorage(BookId) {

    var books = JSON.parse(localStorage.getItem('bookData'));
    if (books != null) {
        books.splice(books.findIndex(a => a.id === BookId), 1)  
        localStorage.setItem('bookData', JSON.stringify(books));
    }
}
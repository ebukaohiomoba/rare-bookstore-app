
let table = document.getElementById("myTable");

function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
let books = [
    {
        "title": "Things Fall Apart",
        "author": "Chinua Achebe",
        "genre": "Fiction",
        "country": "Nigeria",
        "language": "English",
        "length": "209",
        "year": "1958",
        "isbn": "978-7-1735-1972-0",
        "condition": "Fair"
        
       },
       {
        "title": "Fairy tales",
        "author": "Hans Christian Andersen",
        "genre": "Fiction",
        "country": "Denmark",
        "language": "Danish",
        "length": "784",
        "year": "1836",
        "isbn": "978-7-1735-1972-1",
        "condition": "Fair"
       },
       {
        "title": "The Divine Comedy",
        "author": "Dante Alighieri",
        "genre": "Fiction",
        "country": "Italy",
        "language": "Italian",
        "length": "928",
        "year": "1315",
        "isbn": "0-7067-4636-8",
        "condition": "Poor"
       },
       {
        "title": "The Epic Of Gilgamesh",
        "author": "Unknown",
        "genre": "Fiction",
        "country": "Sumer and Akkadian Empire",
        "language": "Akkadian",
        "length": "160",
        "year": 1700,
        "isbn": "0-3933-0529-5",
        "condition": "Good"
       },
       {
        "title": "The Book Of Job",
        "author": "Unknown",
        "genre": "Fiction",
        "country": "Achaemenid Empire",
        "language": "Hebrew",
        "length": "176",
        "year": 600,
        "isbn": "0-6845-1134-7",
        "condition": "Great"
       },
       {
        "title": "The Magic Mountain",
        "author": "Thomas Mann",
        "genre": "PsychologicalFiction",
        "country": "Germany",
        "language": "German",
        "length": "720",
        "year": "1924",
        "isbn": "0-3283-5716-2",
        "condition": "Good"
       },
       {
        "title": "Moby Dick",
        "author": "Herman Melville",
        "genre": "PsychologicalFiction",
        "country": "United States",
        "language": "English",
        "length": "378",
        "year": "1851",
        "isbn": "0-8091-0004-5",
        "condition": "Great"
       },
       {
        "title": "Essays",
        "author": "Michel de Montaigne",
        "genre": "PsychologicalFiction",
        "country": "France",
        "language": "French",
        "length": "404",
        "year": "1595",
        "isbn": "0-6872-0495-X",
        "condition": "Poor"
       },
       {
        "title": "History",
        "author": "Elsa Morante",
        "genre": "PsychologicalFiction",
        "country": "Italy",
        "language": "Italian",
        "length": "600",
        "year": "1974",
        "isbn": "978-8-4517-5443-7",
        "condition": "Great"
       },
       {
        "title": "Beloved",
        "author": "Toni Morrison",
        "genre": "PsychologicalFiction",
        "country": "United States",
        "language": "English",
        "length": "321",
        "year": "1987",
        "isbn": "978-1-1177-7373-5",
        "condition": "Good"
       },
       {
        "title": "The Tale of Genji",
        "author": "Murasaki Shikibu",
        "genre": "PsychologicalFiction",
        "country": "Japan",
        "language": "Japanese",
        "length": "1360",
        "year": "1006",
        "isbn": "978-6-9789-4583-3",
        "condition": "Fair"
       },
       {
        "title": "The Man Without Qualities",
        "author": "Robert Musil",
        "genre": "PsychologicalFiction",
        "country": "Austria",
        "language": "German",
        "length": "365",
        "year": "1931",
        "isbn": "0-9124-2177-0",
        "condition": "Poor"
       },
       {
        "title": "Heart of Darkness",
        "author": "Seymour Apples",
        "genre": "PsychologicalFiction",
        "country": "Russia\/United States",
        "language": "English",
        "length": "317",
        "year": "1955",
        "isbn": "978-0-6179-6131-4",
        "condition": "Poor"
       },
       {
        "title": "Nineteen Eighty-Four",
        "author": "George Orwell",
        "genre": "Political Fiction",
        "country": "United Kingdom",
        "language": "English",
        "length": "272",
        "year": "1949",
        "isbn": "978-1-1960-6341-3",
        "condition": "Great"
       },
    ]


    function populatetablewitharray(myTable) {
      // get the table to add rows to

      // cycle through the array for each of the presidents
      for (var i = 0; i < books.length; ++i) {
        // keep a reference to an individual president object
        let book = books[i];
    
        // create a row element to append cells to
        let row = document.createElement('tr');
        let addButton = document.createElement('button');
        let delButton = document.createElement('button');

        // properties of the array elements
        let properties = ['title', 'author', 'genre','country','language','length','year','isbn','condition','add','delete'];
    
        // append each one of them to the row in question, in order
        for (var j = 0; j < properties.length; ++j) {
          // create new data cell for books
         
          addButton.textContent="Add";
          delButton.textContent="Del";
          
          addButton.classList.add('.table-add-btn');
          delButton.classList.add('.table-del-btn')


       let tablecell = document.createElement('td');
       console.log(tablecell);
       
          // set name of property using bracket notation (properties[j] is a string,
          // which can be used to access properties of president)
          let bookvalues = book[properties[j]];
          tablecell.innerText = bookvalues;
          // add to end of the row
          if(properties[j]=='add'){
            tablecell.appendChild(addButton);
          } else if(properties[j]=='delete'){
            tablecell.appendChild(delButton);
          }
          console.log(row.appendChild(tablecell));
          
        }
        // add new row to table
        console.log(table.appendChild(row));
      
    
      
    }
  
}
    populatetablewitharray(books);




    var addBook = (e) => {
        //get the list of books from local storage
        let bookList = getBookList();
        //create variable that stores the values from each of
        //the input controls on the Add modal
        let tbTitle = document.getElementById("tbTitle");
        console.log(tbTitle);
        let tbAuthor = document.getElementById("tbAuthor");
        console.log(tbAuthor);
        let ddlGenre = document.getElementById("ddlGenre");
        console.log(ddlGenre);
        let tbPublisher = document.getElementById("tbPublisher");
        console.log(tbPublisher);
        let tbLength = document.getElementById("tbLength");
        console.log(tbLength);
        //indicate that the book hasn't been found
        let found = false;
        //indicate the current maximum ID number in the array
        let maxIDNum = 0;
      
        //look through each book in the list
        for (let i = 0; i < bookList.length; i++) {
          //set a variable that represent the current book in the list
          let book = bookList[i];
          //if the current book's id number is greater than the max
          //make it the max
          if (book.id > maxIDNum) {
            maxIDNum = book.id;
          }
        }
    } 

    var modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
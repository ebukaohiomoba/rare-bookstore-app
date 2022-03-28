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


  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const country = document.getElementById("country").value;
  const language = document.getElementById("language").value;
  const length = document.getElementById("length").value;
  const year = document.getElementById("year").value;
  const isbn = document.getElementById("isbn").value;
  const condition = document.getElementById("condition").value;
  
  analyzebooks(books);
  
  function analyzebooks(data) {
    let myTable = document
      .getElementById("my-table")
      .getElementsByTagName("tbody")[0];
  
    myTable.innerHTML = "";
  
    for (let i = 0; i < data.length; i++) {
      var row = `<tr>
                      <td>${data[i].title}</td>
                      <td>${data[i].author}</td>
                      <td>${data[i].genre}</td>
                      <td>${data[i].country}</td>
                      <td>${data[i].language}</td>
                      <td>${data[i].length}</td>
                      <td>${data[i].year}</td>
                      <td>${data[i].isbn}</td>
                      <td>${data[i].condition}</td>
                      <td><button id="btnDelete" >Delete</button>
                         <button id="btnEdit" onclick="editRow()">Edit</button>
                      </td>
                   </tr> `;
      myTable.innerHTML += row;
    }
  }
  
  const myTable = document
    .getElementById("my-table")
    .getElementsByTagName("tbody")[0];
  
  function addRow() {
    if (!validate()) {
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const genre = document.getElementById("genre").value;
      const country = document.getElementById("country").value;
      const language = document.getElementById("language").value;
      const length = document.getElementById("length").value;
      const year = document.getElementById("year").value;
      const isbn = document.getElementById("isbn").value;
      const condition = document.getElementById("condition").value;
      console.log(title, author, genre, country, language, length, year, isbn, condition);
  
      const newBook = {
        title: title,
        author: author,
        genre: genre,
        country: country,
        language: language,
        length: length,
        year: year,
        isbn: isbn,
        condition: condition
      };
  
      books.push(newBook);
  
      validate();
  
      analyzebooks(books);
    }
  }
  
  // const btnEdit = document.getElementById("btnEdit");
  // console.log(btnEdit);
  // The Delete Row function
  addEventListener("click", (e) => {
    if (e.target.id === "btnDelete") {
      console.log(e.target.parentElement.parentElement);
      const indexToRemove = e.target.parentElement.parentElement.rowIndex - 1;
      books.splice(indexToRemove, 1);
    }
    analyzebooks(books);
  });
  
  // The Edit Row function
  
  const btnEdit = document.getElementById("my-button");
  console.log(btnEdit);
  const btnSave = document.getElementById("btnSave");
  console.log(btnSave);
  
  var table = document.getElementById("my-table");
  var rIndex;
  function editRow() {
    for (var i = 1; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        rIndex = this.rowIndex;
        console.log(rIndex);
  
        document.getElementById("title").value = this.cells[0].innerHTML;
        document.getElementById("author").value = this.cells[1].innerHTML;
        document.getElementById("genre").value = this.cells[2].innerHTML;
        document.getElementById("country").value = this.cells[3].innerHTML;
        document.getElementById("language").value = this.cells[4].innerHTML;
        document.getElementById("length").value = this.cells[5].innerHTML;
        document.getElementById("year").value = this.cells[6].innerHTML;
        document.getElementById("isbn").value = this.cells[7].innerHTML;
        document.getElementById("condition").value = this.cells[8].innerHTML;

      };
  
      document.getElementById("my-button").style.display = "none";
      document.getElementById("btnSave").style.display = "block";
    }
  }
  
  btnSave.addEventListener("click", (event) => {
    console.log(rIndex);
    console.log(books);
  
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const country = document.getElementById("country").value;
    const language = document.getElementById("language").value;
    const length = document.getElementById("length").value;
    const year = document.getElementById("year").value;
    const isbn = document.getElementById("isbn").value;
    const condition = document.getElementById("condition").value;
  
    for (var i = 0; i < books.length; i++) {
      if (i === rIndex - 1) {
        books[i].name = title;
        books[i].lastName = author;
        books[i].email = genre;
        books[i].phone = country;
        books[i].name = language;
        books[i].lastName = length;
        books[i].email = year;
        books[i].phone = isbn;
        books[i].phone = condition;

      }
    }
  
    event.preventDefault();
    document.getElementById("my-button").style.display = "block";
    document.getElementById("btnSave").style.display = "none";
  
    analyzebooks(books);
  });
  
  // Function for clearing the inputs after the add button was clicked on
  
  let btnClear = document.getElementById("my-button");
  let inputs = document.querySelectorAll("input");
  
  btnClear.addEventListener("click", () => {
    inputs.forEach((input) => (input.value = ""));
  });
  
  btnSave.addEventListener("click", () => {
    inputs.forEach((input) => (input.value = ""));
  });
  
  //This function makes sure that the user has enterted all the required information.
  function validate() {
    var isEmpty = false;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const country = document.getElementById("country").value;
    const language = document.getElementById("language").value;
    const length = document.getElementById("length").value;
    const year = document.getElementById("year").value;
    const isbn = document.getElementById("isbn").value;
    const condition = document.getElementById("condition").value;
  
    if (title === "" && author === "" && genre === "" && country === "" && language === "" && length === "" && year === "" && isbn === ""&& condition === "") {
      alert("You Left all the inputs empty");
      isEmpty = true;
    } else if (title === "") {
      alert("Please provide the book's title");
      isEmpty = true;
    } else if (author === "") {
      alert("Please Provide the author");
      isEmpty = true;
    } else if (genre === "") {
      alert("Please provide the genre");
      isEmpty = true;
    } else if (language === "") {
      alert("Please provide the language");
      isEmpty = true;
    }
    return isEmpty;
  }


//Search the books
function searchBooks() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("my-table");
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



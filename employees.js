let employee = [
  {
   "name": "Hal Goodman",
   "idnumber": "43578029",
   "storenumber": "2",
   "employeetype": "Employee",
   "picture": "https://www.minneapolisheadshots.com/gallery/main/blackandwhitebusinessportrait.jpg",
  },
  {
   "name": "Weyenshet Fantaye",
   "idnumber": "78300272",
   "storenumber": "1",
   "employeetype": "Manager",
   "picture": "https://www.minneapolisheadshots.com/gallery/main/blackandwhitebusinessportrait.jpg",
  },
  {
   "name": "Gracie Christopher",
   "idnumber": "67892373",
   "storenumber": "5",
   "employeetype": "Manager",
   "picture": "https://www.minneapolisheadshots.com/gallery/main/blackandwhitebusinessportrait.jpg",

  },
  {
   "name": "Kristy Harold",
   "idnumber": "89897236",
   "storenumber": "10",
   "employeetype": "Employee",
   "picture": "https://www.minneapolisheadshots.com/gallery/main/blackandwhitebusinessportrait.jpg",

  },
  {
   "name": "Matthew Lopez",
   "idnumber": "78204892",
   "storenumber": "4",
   "employeetype": "Employee"
  },
  {
   "name": "David Goliath",
   "idnumber": "72909021",
   "storenumber": "7",
   "employeetype": "Manager"
  },
  {
   "name": "Daisy Smith",
   "idnumber": "78902398",
   "storenumber": "3",
   "employeetype": "Employee"
  },
  {
   "name": "Chigozie Obioma",
   "idnumber": "98922356",
   "storenumber": "9",
   "employeetype": "Manager"
  },
  {
   "name": "Dawn Summners",
   "idnumber": "87923012",
   "storenumber": "5",
   "employeetype": "Employee"
  },
  {
   "name": "Carrie Washington",
   "idnumber": "82225347",
   "storenumber": "6",
   "employeetype": "Employee"
  },
  {
   "name": "Helen Johnson",
   "idnumber": "92368210",
   "storenumber": "8",
   "employeetype": "Employee"
  },
]
     

    analyzeemployees(employee);
  
    function analyzeemployees(data) {
      let employeecards = document
        .getElementById("employee-cards")
        .getElementsByTagName("div")[0];
    
        employeecards.innerHTML = "";
    
      for (let i = 0; i < employee.length; i++) {
        let personcard = `<div class="card">
                        <p class="name-text">${employee[i].name}</p>
                        <p class="id-text">ID Number:  ${employee[i].idnumber}</p>
                        <p class="store-text">Store Number: ${employee[i].storenumber}</p>
                        <p class="employeetype-text">Employee Type: ${employee[i].employeetype}</p>
                        <p><img src="${employee[i].picture}"</p>

                        <p><button id="btnDelete" >Delete</button>
                           <button id="btnEdit" onclick="editRow()">Edit</button>
                        </p>
                        </div>
                      `;
                    
                     employeecards.innerHTML += personcard;
      }
    }
    
    const employeecards = document
      .getElementById("employee-cards")
      .getElementsByTagName("div")[0];
    
    function addRow() {
      
        const name = document.getElementById("name").value;
        const idnumber = document.getElementById("idnumber").value;
        const storenumber = document.getElementById("storenumber").value;
        const employeetype = document.getElementById("employeetype").value;
        const picture = document.getElementById("imageurl").value;

  
        console.log(name, idnumber, storenumber, employeetype);
    
        const newEmployee = {
          name: name,
          idnumber: idnumber,
          storenumber: storenumber,
          employeetype: employeetype,
          picture: picture  
        };
    
        employee.push(newEmployee);
        
        analyzeemployees(employee);
      
    }
    
    // const btnEdit = document.getElementById("btnEdit");
    // console.log(btnEdit);
    // The Delete Row function
    addEventListener("click", (e) => {
      if (e.target.id === "btnDelete") {
        console.log(e.target.parentElement.parentElement);
        const indexToRemove = e.target.parentElement.parentElement.rowIndex - 1;
        employee.splice(indexToRemove, 1);
      }
      analyzeemployees(employee);
    });

    // The Edit Row function
  
  const btnEdit = document.getElementById("my-button");
  console.log(btnEdit);
  const btnSave = document.getElementById("btnSave");
  console.log(btnSave);
  
  var mycards = document.getElementById("employee-cards");
  var rIndex;
  function editRow() {
    for (var i = 1; i < mycards.div.length; i++) {
      mycards.div[i].onclick = function () {
        rIndex = this.rowIndex;
        console.log(rIndex);
  

        document.getElementById("name").value = this.cells[0].innerHTML;
        document.getElementById("idnumber").value = this.cells[1].innerHTML;
        document.getElementById("storenumber").value = this.cells[2].innerHTML;
        document.getElementById("employeetype").value = this.cells[3].innerHTML;
        document.getElementById("imageurl").value = this.cells[4].innerHTML;

      };
  
      document.getElementById("my-button").style.display = "none";
      document.getElementById("btnSave").style.display = "block";
    }
  }
  
    btnSave.addEventListener("click", (event) => {
    console.log(rIndex);
    console.log(employee);
  
    const name = document.getElementById("name").value;
    const idnumber = document.getElementById("idnumber").value;
    const storenumber = document.getElementById("storenumber").value;
    const employeetype = document.getElementById("employeetype").value;

  
    for (var i = 0; i < employee.length; i++) {
      if (i === rIndex - 1) {
        employee[i].name = name;
        employee[i].idnumber = idnumber;
        employee[i].storenumber = storenumber;
        employee[i].employeetype = employeetype;

      }
    }
  
    event.preventDefault();
    document.getElementById("my-button").style.display = "block";
    document.getElementById("btnSave").style.display = "none";
  
    console.log(name, idnumber, storenumber, employeetype);
    analyzeemployees(employee);
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
  


  


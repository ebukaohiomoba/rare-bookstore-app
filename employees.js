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
   "picture": "https://organizations.dgsom.ucla.edu/snma/files/view/snma-board-pics-2021-2022/Joy_SNMA_Board_Pic.jpg",
  },
  {
   "name": "Gracie Christopher",
   "idnumber": "67892373",
   "storenumber": "5",
   "employeetype": "Manager",
   "picture": "https://www.wto.org/images/img_index/photos/ngozi_official_photo_lg.jpg",

  },
  {
   "name": "Kristy Harold",
   "idnumber": "89897236",
   "storenumber": "10",
   "employeetype": "Employee",
   "picture": "https://media.vanityfair.com/photos/5f074915e132b56358d73f5f/3:2/w_1998,h_1332,c_limit/VF0720_Viola_Davis_Tout.jpg",

  },
  {
   "name": "Matthew Lopez",
   "idnumber": "78204892",
   "storenumber": "4",
   "employeetype": "Employee",
   "picture": "https://i.guim.co.uk/img/media/6543826cf1cbd7ade9c31dc946f49ee0538547f7/677_481_3223_1934/master/3223.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=8bdb964abc751e0a08faa9bedbb52083",

  },
  {
   "name": "David Goliath",
   "idnumber": "72909021",
   "storenumber": "7",
   "employeetype": "Manager",
   "picture": "https://cdn.pixabay.com/photo/2019/10/18/23/57/thinking-man-4560322_1280.png",

  },
  {
   "name": "Chigozie Obioma",
   "idnumber": "98922356",
   "storenumber": "9",
   "employeetype": "Manager",
   "picture": "https://uploads.concordia.net/2017/08/25100135/Olusegun-Obasanjo.jpg",

  },
  {
   "name": "Dawn Summners",
   "idnumber": "87923012",
   "storenumber": "5",
   "employeetype": "Employee",
   "picture": "https://www.pngkey.com/png/detail/7-74978_thinking-man-png-image-icon-thinking-person-png.png",

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
  


  


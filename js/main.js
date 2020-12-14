  var tblone = document.querySelector('.tblOne')
  var tblall = document.querySelector('.tblAll')
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1bpsbTnO0htQFm7thHX-e4EeD5igujYT3b1tR_3WeIAc/edit?usp=sharing';
  
  function init() {

    /**if(localStorage.studsData != undefined){
        showInfo(JSON.parse(localStorage.studsData))
    }**/

    Tabletop.init({ 
        key: publicSpreadsheetUrl,
        simpleSheet: true, 
        callback: function(data, tabletop){
            localStorage.studsData = JSON.stringify(data)
            showInfo(data, tabletop)
        } 
    })
  }

  function showInfo(data, tabletop) {
    let tbody= document.querySelector("tbody")
    let td = document.createElement("td")
    
    let spin = document.querySelector('.fa-spinner')
    spin.parentNode.removeChild(spin)

    data.forEach(function(obj, i){
      let tr = document.createElement("tr")
   
        let col1 = td.cloneNode(true)
        col1.innerHTML = obj['Id']
        tr.appendChild(col1) 

        let col2 = td.cloneNode(true)
        col2.innerHTML = obj['LastName']
        tr.appendChild(col2)

        let col3 = td.cloneNode(true)
        col3.innerHTML = obj['FirstName']
        tr.appendChild(col3)

      tbody.appendChild(tr)
    })
  }

  var img = document.createElement("img")
  img.src = "images/image-0.jpg"

  function show(){
    var sheetData = JSON.parse(localStorage.studsData)
    let pwd = document.getElementById('txtPwrd')

    if (pwd.value.trim() == "") return

    tblall.style.display = "none"
    tblone.style.display = "block"

    document.querySelector('.pic').src = img.src

    sheetData.forEach(function(obj, i){
      if (obj.Phone == pwd.value){
        
        displayStudent(obj) 
        return
      }
    }) 
  }

  function showAllStudents(){
    tblall.style.display = "block"
    tblone.style.display = "none"
  }

  function scores(){
    window.location.href = "scores.html"
  }

  function displayStudent(obj){
    document.querySelector('.pic').src = "images/" + obj.Picture
    document.getElementById('firstname').textContent = obj.FirstName
    document.getElementById('lastname').textContent = obj.LastName
    document.getElementById('dept').textContent = obj.Department
    document.getElementById('state').textContent = obj.State
    document.getElementById('dob').textContent = obj['Date of birth']
    document.getElementById('sex').textContent = obj.Sex
    document.getElementById('religion').textContent = obj.Religion
    document.getElementById('phone').textContent = obj.Phone

    localStorage.setItem("studentInfo", JSON.stringify(obj))
  }
 
  window.addEventListener('DOMContentLoaded', init)

let inputSection = document.querySelector(".input-section");
let creditLoads = document.querySelectorAll(".load");
let grades = document.querySelectorAll(".grade");
let points = document.querySelectorAll(".point");
const addCourse = document.getElementById("add-course");


let counter = 1 + inputSection.childElementCount;

addCourse.addEventListener("click", function() {
  let newRow = `<div class="row row${counter}">
        
        <input type="text" class="course" name="course${counter}" id="course${counter}" placeholder="Course Code">
        
        <select name="load${counter}" class="load" id="load${counter}" onchange="updatePoint(${counter})">
          <option value="" disabled>Credit Load</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        
        <select name="grade${counter}" class="grade" id="grade${counter}" onchange="updatePoint(${counter})">
          <option value="" disabled>Grade</option>
          <option value="5">A</option>
          <option value="4">B</option>
          <option value="3">C</option>
          <option value="2">D</option>
          <option value="1">E</option>
          <option value="0">F</option>
        </select>
        
        <span class="point${counter} point" id="point${counter}">0</span>
        
      </div>`;
      
      if (counter < 25) {
        inputSection.insertAdjacentHTML("afterend", newRow);
        counter++;
      } else {
        alert("Maximum courses reached")
      }
      
});



function updatePoint(a) {
  
  for (let i = 0; i < 25; i++) {
    let load = 0;
    let grade = 0;
    let point = 0;
    load = document.getElementById(`load${a}`).value;
    grade = document.getElementById(`grade${a}`).value;
    point = document.getElementById(`point${a}`);
    point.textContent = load * grade;
    
  }
  totalUnits();
  totalPoints();
  updateGPA();
}


function totalUnits() {
  let count = document.querySelectorAll(".row").length;
  let totalUnit = document.getElementById("total-units");
  
  let sumUnit = 0;
  for (var i = 1; i <= count; i++) {
    let unit = parseInt(document.getElementById(`load${i}`).value);
    
    sumUnit += unit;
  }
  totalUnit.textContent = sumUnit;
}

function totalPoints() {
  let count = document.querySelectorAll(".row").length;
  let totalPoints = document.getElementById("total-points");
  
  let sumPoint = 0;
  for (var i = 1; i <= count; i++) {
    let point = parseInt(document.getElementById(`point${i}`).textContent);
    
    sumPoint += point;
  }
  totalPoints.textContent = sumPoint;
}

function updateGPA() {
  let totalPoints = document.getElementById("total-points").innerText;
  let totalUnits = document.getElementById("total-units").innerText;
  let gpa = document.getElementById("gpa");
  
  let result = totalPoints / totalUnits;
  
  if(isNaN(result) === true) {
    gpa.textContent = 0;
  } else {
    gpa.textContent = result.toFixed(2);
  }
}
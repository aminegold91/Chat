let inp = document.querySelector('input');
let btn = document.querySelector('.button');
let box = document.querySelector('.box');
let min = document.querySelector('main');

let database;
if(localStorage.message != null){
  database = JSON.parse(localStorage.message);
} else {
  let database = [];
}

inp.onkeyup = function (){
  box.classList.add('active');
  if (inp.value == '') {
    btn.classList.add('active');
  }
  else {
    btn.classList.remove('active');
  }
}

let date = new Date();
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();


btn.addEventListener('click',()=>{
  let obg = {
    inp : inp.value,
    hh :mm,
    mm :mm
  }
  database.push(obg);
  console.log(database);
  localStorage.setItem('message', JSON.stringify(database));
  
  if (inp.value.toLowerCase() == 'hi') {
    box.innerHTML += `
     <main>
        ${inp.value}
        <div class="dat">${hh}:${mm}</div> 
     </main>
    `;
    del();
  }
  else if(inp.value.toLowerCase()== 'how old are you') {
    box.innerHTML += `
         <main>
            ${inp.value}
            <div class="dat">
              ${hh}:${mm}
            </div> 
         </main>
        `;
    alert('كم عمرك');
    del();
  }
  else{
    alert('لا نملك ترجمتها نعتدر');
    del();
  }
})

function del() {
  inp.value = '';
}


function showdata() {
  for(let i =0;i < database.length;i++){
    box.innerHTML +=`
      <main>
        ${database[i].inp}
        <div class="dat">
          ${hh}:${mm}
        </div>       
      </main>
        `;
  }
}
showdata();


        //     <div class='dat'>
        // ${database[i].hh}:${database[i].mm}
        //     </div> 

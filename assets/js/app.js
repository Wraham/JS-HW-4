const navtbn = document.querySelector('nav button')
const sidebar = document.querySelector('.sidebar')

const sidebaropen = ()=> {
    sidebar.classList.add('active')
}

navtbn .addEventListener(`click`,sidebaropen)


const cancelbtn = document.querySelector(".cancelbtn")
 
const sidebarclose = (event)=> {
  if (
    event.target.classList.contains("sidebar") ||
    event.target.classList.contains("cancelbtn")
  ) {
    sidebar.classList.remove('active')
  }
   
 }

 cancelbtn.addEventListener('click',sidebarclose)
 sidebar.addEventListener('click',sidebarclose)


 const darkbtn = document.querySelector(".darkbtn");

 const body = document.querySelector('body')
 

 const darkmode =()=> {
  body.classList.toggle('darkmode')


 }

darkbtn.addEventListener('click',darkmode)


const cursor = document.querySelector('.cursor')

const cursorsm = document.querySelector('.cursorsm')

const custommousecursor =(event)=>{
  cursor.style.top = `${event.pageY}px`;
  cursor.style.left = `${event.pageX}px`;
  cursorsm.style.top = `${event.pageY}px`;
  cursorsm.style.left = `${event.pageX}px`;
}

window.addEventListener('mousemove',custommousecursor)

const inputbox=document.getElementById('input-box');
const addlist=document.getElementById('list-container');

function addTask(){
 if(inputbox.value===''){
  alert("You Must Write Somethings!..");
 }else{
   let li=document.createElement('li');
   li.innerHTML=inputbox.value;
   addlist.appendChild(li);
   let span=document.createElement("span");
   span.innerHTML="\u00d7";
   li.appendChild(span);
  }
  inputbox.value="";
  saveData();
}
addlist.addEventListener('click',function(e){
  if(e.target.tagName ==="LI"){
    e.target.classList.toggle("check");
    saveData()
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
},false);

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
  addlist.innerHTML=localStorage.getItem("data")
}
showTask();
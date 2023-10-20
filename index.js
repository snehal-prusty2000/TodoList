var inputcenter = document.getElementById("input-center");
var listcontent = document.getElementById("list-content");
// var li = document.createElement("li");

function Task(){
    if(inputcenter.value === ""){
      alert("You must enter Some Task");
    }
    else{
      var li = document.createElement("li");
        li.innerHTML=inputcenter.value;
        listcontent.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";/*this is for cross"x" symbol*/
        li.appendChild(span);
        span.className="close";
    }
    savedata();
    inputcenter.value="";
}

listcontent.addEventListener("click", function(p){
  if(p.target.tagName === "LI"){
    p.target.classList.toggle("checked");
  }
  else if(p.target.tagName === "SPAN"){
    p.target.parentElement.remove();
  }
  savedata();
})

function savedata(){
  localStorage.setItem("data",listcontent.innerHTML);
}
function showdata(){
  listcontent.innerHTML=listcontent.getItem("data");
}
showdata();
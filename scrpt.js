const box = document.getElementById("storyDiv");

function scrolrigth(){
  box.scrollBy({ left: 200, behavior: "smooth" });
}
function scrolLeft(){
  box.scrollBy({ left: -200, behavior: "smooth" });
}
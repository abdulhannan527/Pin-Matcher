
   //Start Here Pin Number Generator Function
   function generatePin(){
    const pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('pinNumberDisplay').value = pin;
}
// Start Here Input Number Function
function input(num){
    document.getElementById('inputNumberDisplay').value = document.getElementById('inputNumberDisplay').value + num;
}
//Start Here Pin Submit Function
function submitPin(){
    if(document.getElementById('inputNumberDisplay').value == document.getElementById('pinNumberDisplay').value){
        document.getElementById('matched').style.display = "block";
        document.getElementById("notMatched").style.display = "none";
    } else {
        document.getElementById("notMatched").style.display = "block";
        document.getElementById('matched').style.display = "none";
    }            
}
//Start Here Clear Function
function clean(){
    document.getElementById('inputNumberDisplay').value = '';
}
//Start Here backspace Function
function back(){
    let value = document.getElementById('inputNumberDisplay').value;
    document.getElementById('inputNumberDisplay').value = value.substr(0, value.length -1);
  
}










const bgcolors = () =>{ 
    let val = "0123456789ABCDEF";
    let cons = "#";
  
   for(let i = 0; i<6 ; i++){ 
       cons = cons + val[Math.floor(Math.random() * 16)]

   } 
  return cons; 
}

console.log(bgcolors());

document.body.addEventListener('click' , colorchangfunction);

function  colorchangfunction(){ 
    document.body.style.backgroundColor = bgcolors();
}


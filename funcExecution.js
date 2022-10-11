function a(){
    console.log("Inside A");
}


setTimeout(()=>{
    console.log("Printing after 10 seconds")
},10000);

a();
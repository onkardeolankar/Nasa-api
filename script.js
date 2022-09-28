
let button=document.querySelector(".btn");
let data=document.querySelector(".data");

button.addEventListener("click",async function(){
   data.innerHTML="Getting your data.....";
    try{
       const url=`https://api.nasa.gov/planetary/apod?api_key=ZLZRqLBvD3D1W8mvJ84nS0QRq5QphENG094HvCdb`;
        let result=await fetch(url);
        let obj=await result.json();
        data.innerHTML=
        `<h2><u>Title</u>:${obj.title}</h2><hr>
        <h2><u>Copyright</u>:${obj.copyright}</h2><hr>
        <h2><u>Date</u>:${obj.date}</h2><hr>
        <h2><u>Explanation</u>:${obj.explanation}</h2><hr>
        <a href="https://apod.nasa.gov/apod/image/2206/NGC6744_chakrabarti2048R.jpg">IMAGE</a>`
    }catch(error) {alert('country not found');
    }
    });


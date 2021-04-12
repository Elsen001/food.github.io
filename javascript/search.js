var search = document.querySelector("#search");
var doc= document.querySelector("#searchInner");
search.addEventListener("keyup",function (e) { 

    var keyword = e.target.value;

    

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(res =>{
        return res.json()
    }).then(data=>{

      
    var html="";

    html+=
    `
    <div class="meal">
        <img src=${data.meals[0].strMealThumb} alt="">
        <h3>${data.meals[0].strMeal}</h3>
        <ul>
        <li>Country:${data.meals[0].strArea}</li><br>
        <li>Category:${data.meals[0].strCategory}</li>
    </ul>
    </div>

    <div class="inst">
     <h2>Instructions</h2> 
        <p>${data.meals[0].strInstructions}</p>
    </div>
    
    `



     doc.innerHTML=html;

     if(search.value.length>0){
        doc.style.display="flex"
    }else{
        doc.style.display="none"

    }

     

    })





 })

var Turkish = document.querySelector("#Turkish")
var Chinese = document.querySelector("#Chinese")
var American = document.querySelector("#American")
var searchInner = document.querySelector("#searchInner")


Turkish.addEventListener("click",function(){


    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Turkish")
    .then(res =>{
        return res.json();
    }).then(data =>{

        items=data.meals;

        var html = "";

        items.forEach(element => {
            html +=
                `
            
       <div class="card mt-4">
         <img class="card-img-top" src=${element.strMealThumb} alt="Card image">
          <div class="card-body">
            <h4 class="card-title">${element.strMeal}</h4>
         </div>
      </div>
       
       
       
       `
        });

        var inner = document.querySelector("#category").innerHTML=html
        console.log(items)
    })


})

// cin

Chinese.addEventListener("click",function(){


    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese")
    .then(res =>{
        return res.json();
    }).then(data =>{

        items=data.meals;

        var html = "";

        items.forEach(element => {
            html +=
                `
            
       <div class="card mt-4">
         <img class="card-img-top" src=${element.strMealThumb} alt="Card image">
          <div class="card-body">
            <h4 class="card-title">${element.strMeal}</h4>
         </div>
      </div>
       
       
       
       `
        });

        var inner = document.querySelector("#category").innerHTML=html
        console.log(items)
    })


})

//  america

American.addEventListener("click",function(){


    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=American")
    .then(res =>{
        return res.json();
    }).then(data =>{

        items=data.meals;

        var html = "";

        items.forEach(element => {
            html +=
                `
            
       <div class="card mt-4">
         <img class="card-img-top" src=${element.strMealThumb} alt="Card image">
          <div class="card-body">
            <h4 class="card-title">${element.strMeal}</h4>
         </div>
      </div>
       
       
       
       `
        });

        var inner = document.querySelector("#category").innerHTML=html
        console.log(items)
    })


})
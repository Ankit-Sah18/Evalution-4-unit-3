// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

 import { navbar } from "../components/navbar.js";

  let n=document.getElementById("navbar")

  n.innerHTML=navbar()

  import { sidebar } from "../components/navbar.js";

  let x= document.getElementById("Sidebar")

  x.innerHTML=sidebar()

// masai-mock-api.herokhttpsuapp.com/news?q=tesla
const SearchNews= async () =>{
   
   
    try{
       
        let x= document.getElementById("search_input").value
   
         
       const res= await fetch(`masai-mock-api.herokhttpsuapp.com/news?q=${x}`)
       
        x= JSON.stringify(x)
        {
            method="POST"

        }

        Headers :{
             "Content-type :apllication /json "
        }

       const data= await res.json()

       console.log(data)
    // console.log(url)
    }
    catch(err)
    {
        console.log(err)
    }


}

SearchNews()



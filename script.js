var ul = document.getElementById("ul");
    var add = document.getElementById("add");
    var txt = document.getElementById("txt");
   
    
    add.addEventListener("click", function(){
       var li = document.createElement("li");
       let text = txt.value;
       li.innerHTML=text;
       li.addEventListener("click", function(){
            
            li.classList.add("checked");
            var div = document.createElement("span");
            div.innerHTML="\u00D7";
            div.className = "cut";

           
            li.appendChild(div);

            div.addEventListener("click", function(){
                li.style.display = "none";
            });

        });

       ul.appendChild(li);
       
    });
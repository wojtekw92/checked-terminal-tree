"use strict";

var data = {
  "App": ["one","two","three"],
  "Application": ["one",{"two":["five","six"]},"three"],
  "Demo": ["one","two","three"],
  "Demos": ["one","two","three"]
}



var print = function(input,spaceing) {
  for(var key in input) {
   if (input.hasOwnProperty(key)) {
     let pom ="";
      for(let j =0 ;j< spaceing; j++) pom += " ";
      console.log(pom + key)
      for(let j =0 ;j< 2; j++) pom += " ";
       var value = input[key];
       if(Array.isArray(value)) {
         for(let i =0;i<value.length;i++) {
           if(typeof(value[i])=="string") {
             console.log(pom + value[i]);
           }
           else print(value[i],spaceing+2);
         }
       }
   }
}

}
print(data,2);

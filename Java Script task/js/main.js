function Calculator(a,b,operation){
    if(operation==="+"){
        return a+b;
    }
    if(operation==="-"){
        return a-b;
    }
    if (operation==="*") {
        return a*b
    }
    else {
    return a/b;
    }
}
 console.log(Calculator(6,3,"/"));

 var arr=[1,2,3,4,5,6,9,10,13]
 
 function getEvenNumbers() 
 {
     for(let i=0;i<arr.length;i++){
         if (arr[i]%2===0){
             console.log("the even elements of array is",arr[i]);
         }
     }
     
 }

getEvenNumbers();

function Check(a) {
    for (let i = 0; i< arr.length; i++) {
      
        if (a===arr[i]) {
            console.log("Daxil etdiyiniz ədəd verilmis massivə daxildir");
        }
    }
    
}

Check(5);
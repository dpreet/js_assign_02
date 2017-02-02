function realArray (  ) {
let array = [ 7, 2 , 5];
let newArray =  [];

console.log(`Original array is : ${array}`) ;
    for (  let index=0 ; index<array.length; index++ )
    
        {
             newArray[index] = array[index] + 2 ;
      
            

            
         }
         
         
          console.log(`new array after adding 2 to each value is : [ ${newArray} ]`) ;
}   



realArray();
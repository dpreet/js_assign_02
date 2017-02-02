function arrLoop (array , value ) {
array = [1,'dog'];

array.push(value) ;

    for (  let index=0 ; index<array.length; index++ )
    
        {
      
        console.log(`${index} : ${array[index]}`) ;
         }
}
let arr1 = [ ] ;
arrLoop(arr1, 'one');

/*function superbowlWin(obj, key, value) {
   return obj.find(function (a) {
       return a[key] === value;
   })
}
superbowlWin(record);  */


/*
function superbowlWin (arr) {
    return arr.find(function (obj) {
        if (obj === { year: '1969', result: 'W'}){
            return obj.year;
        }
    } );
}  
 
function superbowlWin (obj){
     let ind = obj.indexOf({ year: '1969', result: 'W'});

}*/
function superbowlWin (arr) {
    
    let a = arr.find( ({ year }) => year === '1969' || year === void 0);
     
    
       return a.year;
     
        
       
} 

 
              

 

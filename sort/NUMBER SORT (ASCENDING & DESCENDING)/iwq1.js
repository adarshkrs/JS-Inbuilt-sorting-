let numbers = [0, 1 , 2, 30, 10, 25, 40, 30 ];
// Sort this array in ascending and descending order using compare function
    //  compare function
    number.sort( function(a,b){
        if( a > b ) return a-b
        if(a < b )
        return b-a;
        return 0;
    })
    console.log( numbers)

  
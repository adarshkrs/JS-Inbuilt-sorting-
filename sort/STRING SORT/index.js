let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
// Sort this array in ascending and descending order using compare function
   animals.sort(function (a, b) {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
   })
   console.log(animals)
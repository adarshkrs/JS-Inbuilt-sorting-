// Sort this array by its firstname(ascending & descending)

// Sort this array by age (ascending & descending)

let employees = [
    {
        firstName: 'john',
        lastName: 'doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'ana',
        lastName: 'rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'zion',
        lastName: 'albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

     employees.sort(function (a, b){
        if( a.firstName > b.firstName) return -1;
        if(a.lastName > b.lastName) return 1;
        return 0;
     })
     console.log(employees);

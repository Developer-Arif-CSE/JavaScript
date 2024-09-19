const collage={
    name:'CCR',
    class:['11','12'],
    events:['science fair','book fair','tournamnet'],
    unique:{
        dress_color:'pink',
            results:{
                 gpa:5,
                 merit:'top'
           }
    }
}

// console.log (collage);

// console.log(collage.unique);

// console.log(collage.unique.results);

console.log(collage.unique.results.gpa);

collage.unique.results.merit='first in rangpur';
console.log(collage.unique.results);

collage.events[1]='phph';
console.log(collage.events);



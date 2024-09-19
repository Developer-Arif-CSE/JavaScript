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

console.log(collage);

delete collage.unique.results;

console.log(collage);
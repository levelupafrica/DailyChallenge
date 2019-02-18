
// Question 1
var library =
[ {author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false } ];


 library.map((students, index) => {
   console.log(students.author +" "+ students.title + " "+ students.readingStatus);
   
});

// QUESTION 2
// Write a JavaScript program which returns a subset of a string. dog



String.prototype.sub_String = function() 
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

let animalType = "dog"
console.log(animalType.sub_String());







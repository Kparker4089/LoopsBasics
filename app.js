 /* Done in wednesday class:
1. What is a loop?
A function that repeats itself. 
2. What is the syntax of a loop?
for(i = 0; i < 5; i++){
for(initializing; terminating; incrementing){
    //tasks to be repeated
}
}
initializing = start at? ex. var i = 0
terminating = end at?, ex. i > 10
incrementing = how often/periods, intervals in between, ex i = i + 1

i = i + 1
shortcut: i++
i = i + 2
shortcut: i+=2

for(i = 0; i < 5; i++){
    console.log("I am smart.")
}
1- I am smart. i = 0
2- I am smart i = 1
3- I am smart i = 2
4- I am smart. i = 3
5- I am smart i = 4
6 -- i = 5 X

3. Give a few examples.
*/

//Create a loop that prints "HTA rocks." 3 times
for( var i = 0; i < 3; i = i + 1){
    console.log("HTA rocks." )
}
for(var i= 0; i < 10; i =i+2){
    console.log(i)
}
//var i = i+1;
// Create a loop that prints even numbers.
//4. Create a loop that prints numbers from 0-10.

//5. Create a loop that prints odd numbers from 1-9.

//6. Create a loop that prints multiples of 3 from 3-15.

//7. Create an array that lists 3 things you'd like to accomplish one day.

//8. Create a loop that prints out each of the things you'd like to accomplish listed in your #7 array.  The loop should print out three
//separate sentences, like this:
//One day, I'd like to _element 1_.
//One day, I'd like to _element 2_.
//One day, I'd like to _element 3_.

//9. Create an array that lists 3 places you'd like to visit one day.

//10. Create a function (with a loop) that prints out each of the places you'd like to visit listed in your #9 array.  The function
//should print out three separate sentences, like this:
//One day, I'd like to go to _element 1_.
//One day, I'd like to go to _element 2_.
//One day, I'd like to go to _element 3_.
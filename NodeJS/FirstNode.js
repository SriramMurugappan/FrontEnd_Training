var firstName = "Sriram";
var lastName = "M";
//First Name is the label
console.log('First Name:',firstName);
console.log('Last Name:',lastName);
var cities=['Banglore','Chennai','Lucknow','Delhi','Hyderabad'];
for(i in cities){
    console.log(cities[i]); // we can retrieve index of arrays
console.log('---------------------------\n');
for(j of cities){ // we can get element
    console.log(j);
}
console.log(cities.find);
console.log(("Chennai" in cities)?"Found":"Not Found");
}


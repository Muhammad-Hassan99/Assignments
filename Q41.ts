// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


function show_magicians1(name1:string[]):void{
    for (let magician of name1){
    console.log(magician);
}
}
let  name1:string[]=["Ali","Zayan","Farhan","Hassan"]
show_magicians1(name1)

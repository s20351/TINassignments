class Person{
constructor(proffesion, name, age){
    this.proffesion = proffesion
    this.name = name
    this.age = age
}

getName() {
    return this.name;
}
setName(newName) {
    newName = newName.trim();
    if (newName === '') {
        throw 'The name cannot be empty';
    }
    this.name = newName;
}

getProffesion(){
    return this.proffesion
}
setProffesion(newProffesion) {
    newProffesion = newProffesion.trim();
    if (newProffesion === '') {
        throw 'Proffesion cannot be empty';
    }
    this.proffesion = newProffesion;
}


getAge(){
    return this.proffesion
}


getDetails(){
    console.log(this.name + " is " + this.age + "years old. His proffesion is: " + this.proffesion)
}
}

class Guide extends Person{
    constructor(name, age, specialization){
        super("Guide", name, age)
        this.specialization = specialization
    }
}

let tripGuide = new Guide("John", 25, "Urban")

tripGuide.getDetails();

console.log(tripGuide.getName());

tripGuide.setName("Jerry")

console.log(tripGuide.getName());

tripGuide.setProffesion("Historican")

tripGuide.getDetails();
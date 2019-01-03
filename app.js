//tomagatchi
let food = 1;


class Pets {
	constructor(name){
		this.name = name;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 1;
	}
	feedPet(){
		this.hunger +=1
	}

	
}


let pet1 = new Pets("Mack")



pet1.feedPet()
console.log(pet1)
pet1.feedPet()
console.log(pet1)




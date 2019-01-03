//tomagatchi



class Pets {
	constructor(name){
		this.name = name;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 1;
	}
	feedPet(){
		this.hunger -=1
	}
	petRest(){
		this.sleepiness -=1
	}
	petAge(){
		this.age +=1
		this.sleepiness +=2
		this.hunger +=2
	}
}


let pet1 = new Pets("Mack")










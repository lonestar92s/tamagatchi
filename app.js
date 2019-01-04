//tomagatchi



class Pets {
    constructor(name) {
        this.name = name;
        this.hunger = 10;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }
    feedPet() {
        this.hunger -= 1
        console.log("nom nom")
        document.getElementById("counter").innerHTML = this.hunger;

    }
    petPlay() {
    	this.boredom -= 1
    	console.log("weeee")
    }
    petRest() {
        this.sleepiness -= 1
        console.log("zzz")
    }
    petAge() {
        this.age += 2
        this.sleepiness += 1
        this.hunger += 1
        this.boredom += 1
        if(pet1.hunger >= 10)
	alert("GAME OVER");
        


    }
}


let pet1 = new Pets("Mack");



//timer function
//setInterval(function(){ pet1.petAge(); }, 1000);


//jquery

/*$( "#feed" ).click(function() {
  pet1.feedPet();
});*/


$( "#play" ).click(function() {
  pet1.petPlay();
});

$( "#sleep" ).click(function() {
  pet1.petRest();
});



    
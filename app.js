//tomagatchi



class Pets {
    constructor(name) {
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }
    feedPet() {
        this.hunger -= 1
        console.log("nom nom")
        //targeted counter id 
        document.getElementById("counter").innerHTML = this.hunger;

    }
    petPlay() {
    	this.boredom -= 1
    	console.log("weeee")
    	document.getElementById("player").innerHTML = this.boredom;
    }
    petRest() {
        this.sleepiness -= 1
        console.log("zzz")
        document.getElementById("sleepy").innerHTML = this.sleepiness;
    }
    petAge() {
        this.age += 2
        $('#age').replaceWith('<a id ="age">' + pet1.age + '</a>')
        this.sleepiness += 1
        $('#sleepy').replaceWith('<a id ="sleepy">' +pet1.sleepiness + '</a>')
        this.hunger += 1
        $('#counter').replaceWith('<a id ="counter">' +pet1.hunger + '</a>')
        this.boredom += 1
         $('#player').replaceWith('<a id ="player">' +pet1.boredom + '</a>')
        if(pet1.hunger === 10 || pet1.sleepiness === 10 || pet1.boredom === 10)
	alert(pet1.name + " has died.");
        


    }
}


let pet1 = new Pets("Mack");



//timer function
setInterval(function(){ pet1.petAge(); }, 5000);


//jquery

/*$( "#feed" ).click(function() {
  pet1.feedPet();
});*/


/*$( "#play" ).click(function() {
  pet1.petPlay();
});

$( "#sleep" ).click(function() {
  pet1.petRest();
});*/



    
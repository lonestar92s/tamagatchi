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
        // targets age id in html replaces with pet 1 age
        $('#age').replaceWith('<a id ="age">' + pet1.age + '</a>')
        this.sleepiness += 1
        $('#sleepy').replaceWith('<a id ="sleepy">' +pet1.sleepiness + '</a>')
        this.hunger += 1
        $('#counter').replaceWith('<a id ="counter">' +pet1.hunger + '</a>')
        this.boredom += 1
         $('#player').replaceWith('<a id ="player">' +pet1.boredom + '</a>')
        if(pet1.hunger === 11 || pet1.sleepiness === 11 || pet1.boredom === 11)
	alert("Your pet has died.");
        


    }
}

//light switch
let gameOn = true

$('#light-switch').click(function() { $('.blackout').css("background-color","black" ); });


//name input
$('#add-name-button').click(function(){
	let name = $('#add-name-input').val()

	if(name === ""){
		alert("Name cannot be blank")
	}else
	console.log(name)
	let petName = $('<a id="name">' + name +'</a>')
	$("#name").append(petName)
	$("#add-name-input").val("")
})

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



    
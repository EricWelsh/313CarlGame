#pragma strict
//attached to the arms for the rotation

var rvar = 100;
static var speed : float;

var ArmTime : float;


// Declare lastAmount and set it to 0 initially
//	lastAmount = 0;
var lastAmount : int;
// Declare scumPointValue and set it to 25 initially
//	scumPointValue = 25;
static var scumPointValue : int;

function Start () {
speed = 1;
InvokeRepeating ("ChangeArmSpeed", 5, 1);

ArmTime=Time.time;

lastAmount = 0;
scumPointValue = 100;
}

function Update () {
	if (LevelTimer.seconds > 0){
		
		transform.Rotate(Vector3.forward * (Time.deltaTime*speed) * rvar);
		//speed decreases the speed of the arms by x for however much scum is cleaned up
	//	if (speed <
	
	//if(gameObject.tag == "Scum") { scum counter
	
	}
	
	else {
//		print ("stopped");
    }
    //stops the arms from spinning when the timer reaches zero
}

/*
function ChangeArmSpeed () {
		if (Spawning.ScumAmount >5 && Time.time-ArmTime>5){
		speed=speed*0.9;
		ArmTime=Time.time;
		
		}
		
		else if (Spawning.ScumAmount <5) {	
		speed=1;
		}
		
		else {
		}
}
*/

function ChangeArmSpeed () {

	if (lastAmount < Spawning.ScumAmount && Time.time-ArmTime > 4 ){
	       // There is more scum now than the last time checked -> decrease speed and point value
		speed=speed*0.9;
		scumPointValue = scumPointValue*0.95;
	}

	else if (lastAmount > Spawning.ScumAmount && Time.time-ArmTime > 4) {
	       // There is fewer scum now than the last time checked -> increase speed and point value
		speed=speed*1.1;
		scumPointValue = scumPointValue * 1.05;
	}
	
	ArmTime=Time.time;
	lastAmount = Spawning.ScumAmount;
	
}
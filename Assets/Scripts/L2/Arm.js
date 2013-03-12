#pragma strict
//attached to the arms for the rotation

var rvar = 100;
static var speed : float;

function Start () {
speed = 1;
}

function Update () {
	if (LevelTimer.seconds > 0){	
		transform.Rotate(Vector3.forward * (Time.deltaTime*speed) * rvar);
		//speed decreases the speed of the arms by x for however much scum is cleaned up
	//	if (speed <
	}
	
	else {
//		print ("stopped");
    }
    //stops the arms from spinning when the timer reaches zero
}

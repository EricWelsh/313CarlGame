#pragma strict
//attached to the camera

var prefab : Transform;
var gos: GameObject[];
static var ScumAmount : int;

function Start () {
	ScumAmount=1;
	while (true) {
//		if (LevelTimer.seconds > 0){
	yield WaitForSeconds (Random.Range (1.0, 1.7));
	
	gos = GameObject.FindGameObjectsWithTag("Scum");
	if(gos.Length < 21){
		//sets the cap of spawning scum (has to subtract one due to original)

		if (LevelTimer.seconds > 0){
		Instantiate (prefab, Vector3(Random.Range(-20.0, 20.0), 0, Random.Range(-20.0, 20.0)), Quaternion.identity);	
		//Random.Range does the min and max float values.
		//vector3 = x-axis, y-axis, then z-axis
			//flat game
			
			ScumAmount+=1;
		}
		//if statement stops spawning
			    
    	else {
// 			print ("none");

    	}
    //will make the menu pop up that gives the player the choice to repeat the level or continue on
    
		}
	}
}

// Instantiate a rigidbody then set the velocity


function Update () {
	// Instantiates 10 copies of prefab each 2 units apart from each other
//	for(var i:int=0; i <10; i++) {
//		Instantiate (prefab, Vector3(i * 2.0, 0, 0), Quaternion.identity);
//	}

}

function OnTriggerEnter () {
//		if (LevelTimer.seconds > 0){
    Instantiate (prefab);
    }
/*    
    else {
    print ("none");
    }
}
*/



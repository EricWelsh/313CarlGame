#pragma strict

// Attach this script to an orthographic camera.

private var object : Transform;     // The object we will move.
private var offSet : Vector3;       // The object's position relative to the mouse position.
var cameraVar : Camera;

var normalCollisionCount = 1;
var moveLimit = .5;
var collisionMoveFactor = .01;
var addHeightWhenClicked = 0.0;
var freezeRotationOnDrag = true;
var cam : Camera;
private var myRigidbody : Rigidbody;
private var myTransform : Transform;
private var canMove = false;
private var yPos : float;
private var gravitySetting : boolean;
private var freezeRotationSetting : boolean;
private var sqrMoveLimit : float;
private var collisionCount = 0;
private var camTransform : Transform;
var originalPosition : Vector3;

//reference the score from the spawning script

function Start () {
	myRigidbody = rigidbody;
	myTransform = transform;
	if (!cam) {
		cam = Camera.main;
	}
	if (!cam) {
		Debug.LogError("Can't find camera tagged MainCamera");
		return;
	}
	camTransform = cam.transform;
	sqrMoveLimit = moveLimit * moveLimit;	// Since we're using sqrMagnitude, which is faster than magnitude
	
	originalPosition = transform.position;
	//for setting the original position of any axis that is specified later
}

function Update () {
    var ray = cameraVar.ScreenPointToRay(Input.mousePosition);     // Gets the mouse position in the form of a ray.
    if (Input.GetButtonDown("Fire1")) {     // If we click the mouse...
        if (!object) {      // And we are not currently moving an object...
            var hit : RaycastHit;
            if (Physics.Raycast(ray, hit, Mathf.Infinity)) {        // Then see if an object is beneath us using raycasting.
                object = hit.transform;     // If we hit an object then hold on to the object.
                offSet = object.position-ray.origin;        // This is so when you click on an object its center does not align with mouse position.
            }
        }
    }
    else if (Input.GetButtonUp("Fire1")) {
        object = null;      // Let go of the object.
    }
	if (object == this.gameObject.transform) {
//		"this" meaning the object that the script is attached to
		object.position = Vector3(ray.origin.x+offSet.x, object.position.y, ray.origin.z+offSet.z);     // Only move the object on a 2D plane.
	}
	
	transform.position = Vector3.Lerp(this.transform.position, Vector3(0,transform.position.y,0), Time.deltaTime); //(Time.time - startTime) / duration);
	//center gravity pull
	//the y keeps it set in original the positiong

/*
	if(this.position.x^2 + this.position.y^2 >= tankRadius^2){
		//move to edge of tank
	}
*/

}

function OnMouseDown () {
	canMove = true;
	myTransform.Translate(Vector3.up*addHeightWhenClicked);
	gravitySetting = myRigidbody.useGravity;
	freezeRotationSetting = myRigidbody.freezeRotation;
	myRigidbody.useGravity = false;
	myRigidbody.freezeRotation = freezeRotationOnDrag;
	yPos = myTransform.position.y;
	
	
}

function OnMouseUp () {
	canMove = false;
	myRigidbody.useGravity = gravitySetting;
	myRigidbody.freezeRotation = freezeRotationSetting;
	if (!myRigidbody.useGravity) {
		myTransform.position.y = yPos-addHeightWhenClicked;
	}
	
	
}
 
function OnCollisionEnter (collider:Collision) {
	if (collider.gameObject.tag == "Hands") {
	//	if the object with selected tag is hit, then does stuff
	Destroy(this.gameObject);
	//	going need to use to destroy almost anything

	score=score+10;
	
	}
	
	if (collider.gameObject.tag == "Scum") {
	//	print  ("Scum hit scum??");
	}
	//causes stuff to happen when scum hits other scum
}
 
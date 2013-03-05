#pragma strict

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
}

function Update () {

}

function OnMouseDown () {
//	print ("This Box is Clicked!");

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
	}
}
 
//function OnCollisionExit () {
//	collisionCount--;
//}

 
function FixedUpdate () {
	if (!canMove) return;
 
	myRigidbody.velocity = Vector3.zero;
	myRigidbody.angularVelocity = Vector3.zero;
	myTransform.position.y = yPos;
	var mousePos = Input.mousePosition;
	var move = cam.ScreenToWorldPoint(Vector3(mousePos.x, mousePos.y, camTransform.position.y - myTransform.position.y)) - myTransform.position;
	move.y = 0.0;
	if (collisionCount > normalCollisionCount) {
		move = move.normalized*collisionMoveFactor;
	}
	else if (move.sqrMagnitude > sqrMoveLimit) {
		move = move.normalized*moveLimit;
	}
 
    myRigidbody.MovePosition(myRigidbody.position + move);
}
//controls actual ability to move scum

//@script RequireComponent(Rigidbody)
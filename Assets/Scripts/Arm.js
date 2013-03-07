#pragma strict
//attached to the arms for the rotation

var rvar = 100;
static var speed : float;

function Start () {
speed = 1;
}

function Update () {
	transform.Rotate(Vector3.forward * (Time.deltaTime*speed) * rvar);
	//speed decreases the speed of the arms by x for however much scum is cleaned up
}

#pragma strict
//attached to the arms for the rotation

var rvar = 100;

function Start () {

}

function Update () {
	transform.Rotate(Vector3.forward * Time.deltaTime * rvar);
}

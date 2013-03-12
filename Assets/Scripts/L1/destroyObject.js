#pragma strict

function Start () {

}

function Update () {
	if(this.gameObject.transform.position.x > 132)
	{
		Destroy(this.gameObject, 0);
	}
}
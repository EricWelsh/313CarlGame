#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (collider: Collider)
	{
 
	if (collider != null && collider.gameObject.tag == "Player"){
 
	Destroy(this.gameObject, 2);
		}
	}
//http://docs.unity3d.com/Documentation/ScriptReference/Object.Destroy.html?from=BoxCollider
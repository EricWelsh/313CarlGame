#pragma strict

function Start () {

}

function Update () {
	if(this.gameObject.transform.position.z < 40 && this.gameObject.transform.position.z > -60)
	{
 		if(this.gameObject.transform.position.x>-110)
 		{
 			this.gameObject.transform.position = Vector3.Lerp(this.gameObject.transform.position, Vector3(-110,this.gameObject.transform.position.y,this.gameObject.transform.position.z), Time.deltaTime);
 		}
	}
	if(this.gameObject.transform.position.z < -70 && this.gameObject.transform.position.z > -95)
	{
		this.gameObject.transform.position.x+=.95;
	}
 
}
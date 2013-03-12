#pragma strict
var gameboy : Transform;
var baseball : Transform;
var tincan : Transform;
var ring : Transform;
var wallet : Transform;
var toy : Transform;
var dentures : Transform;
var brush : Transform;
function Start () 
{
	while (true) 
	{
		yield WaitForSeconds (Random.Range (1.0, 2.0));
		Instantiate (gameboy, Vector3(130,0, Random.Range(-70.0, 30.0)), Quaternion.identity);
	}
}
function Update () {

}
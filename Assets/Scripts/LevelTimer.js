#pragma strict

var seconds = 45;
private var textMesh : TextMesh;

function Start () {
	textMesh = GameObject.Find ("Timer").GetComponent(TextMesh);
	textMesh.text = seconds.ToString();
	InvokeRepeating ("Countdown", 1.0, 1.0);
}

function Update () {

}

function Countdown () {
	if (--seconds == 0) CancelInvoke ("Countdown");
	textMesh.text = seconds.ToString();
}

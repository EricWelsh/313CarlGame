#pragma strict

static var seconds = 5;
private var textMesh : TextMesh;

function Start () {
	textMesh = GameObject.Find ("Timer").GetComponent(TextMesh);
	textMesh.text = seconds.ToString();
	InvokeRepeating ("Countdown", 1.0, 1.0);

	var myTextMesh = (GetComponent(TextMesh) as TextMesh);
	renderer.material.color = Color.black;
	
	
}

function Update () {
//	var myTextMesh = (GetComponent(TextMesh) as TextMesh);
//	renderer.material.color = Color.black;
}

function Countdown () {
	if (--seconds == 0) CancelInvoke ("Countdown");
	textMesh.text = seconds.ToString();
}

#pragma strict

static var points : int = 0;
static var scumPointValue : int = 25;
private var textMesh : TextMesh;

function Start () {
//	points=0;
	textMesh = GameObject.Find ("ScoreKeeper").GetComponent(TextMesh);
	textMesh.text = points.ToString();
	//textMesh.text = Arm.scumPointValue.ToString();
	InvokeRepeating ("ScoreIncrease", 1.0, 0.3);
	
	var myTextMesh = (GetComponent(TextMesh) as TextMesh);
	renderer.material.color = Color.black;
}

function Update () {

}

function ScoreIncrease () {
//	if (--seconds == 0) CancelInvoke ("Countdown");

		textMesh.text = points.ToString();
	//	textMesh.text = Arm.scumPointValue.ToString();
}
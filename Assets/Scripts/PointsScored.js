#pragma strict

static var points : int = 0;
private var textMesh : TextMesh;

function Start () {
//	points=0;
	textMesh = GameObject.Find ("ScoreKeeper").GetComponent(TextMesh);
	textMesh.text = points.ToString();
	InvokeRepeating ("ScoreIncrease", 1.0, 1.0);
}

function Update () {

}

function ScoreIncrease () {
//	if (--seconds == 0) CancelInvoke ("Countdown");
	textMesh.text = points.ToString();
}
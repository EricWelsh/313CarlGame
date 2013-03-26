#pragma strict

//var Replay_button : Texture;
var NextLevelButtonUp : Texture;
var NextLevelButtonDown : Texture;
var NextLevelSkin : GUIStyle;

function Start () {

}

function Update () {

}

function OnGUI () {
if (LevelTimer.seconds <= 0){
	//GUI.Label (Rect (25, 25, 100, 30), "Label");
	
		//if (GUI.Button (Rect ((Screen.width-NextLevelButtonUp.width)/2, 125, NextLevelButtonUp.width, NextLevelButtonUp.height), NextLevelButtonUp, NextLevelSkin)) {
		if (GUI.Button (Rect ((Screen.width-NextLevelButtonUp.width)/2, 125, NextLevelButtonUp.width, NextLevelButtonUp.height), GUIContent.none, NextLevelSkin)) {
	
			
		// (x placement, y placement, name-of-texture.width, name-of-texture.height), name-of-texture, GUIStyle;
			//this.guiTexture; 
			
			//Application.LoadLevel("level3");
		}
		// This code is executed when the Button is clicked
	}
}
#pragma strict

var scrollSpeed : float = 10;
var speed:Vector2;
function Start(){
}
function Update () {
        speed = Vector2(Time.time * scrollSpeed, 0);
        Debug.Log(speed);
        Debug.Log("updating");
        renderer.material.SetTextureOffset("_MainTex", speed);

}
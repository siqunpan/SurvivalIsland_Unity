#pragma strict

var winSequence : GameObject;
var fader : GUITexture;
var winClip : AudioClip;

function Start () {

}

function Update () {

}
function GameOver(){

	CoconutWin_Javascript.haveWon = false;
	CoconutWin_Javascript.targets = 0;

	AudioSource.PlayClipAtPoint(winClip, transform.position);
	Instantiate(winSequence);
	yield WaitForSeconds(8.0);
	Instantiate(fader);
}
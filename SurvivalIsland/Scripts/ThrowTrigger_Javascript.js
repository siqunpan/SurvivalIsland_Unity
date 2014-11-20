#pragma strict

var crosshair : GUITexture;
var textHints : GUIText;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider) {
	if(col.gameObject.tag == "Player") {
		if(!CoconutWin_Javascript.haveWon) {
			textHints.SendMessage("ShowHint", 
		 	 "\n\n\n\n\n There's a power cell attached to this game, \n" +
		 	 "maybe I'll win it if I can knock down all the targets...");
		}
		CoconetThrower_Javascript.canThrow = true;
		crosshair.enabled = true;
	}
}

function OnTriggerExit(col : Collider) {
	if(col.gameObject.tag == "Player") {
		CoconetThrower_Javascript.canThrow = false;
		crosshair.enabled = false;
	}
}
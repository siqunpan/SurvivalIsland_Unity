#pragma strict

var loadGUI : GUITexture;

function Start () {
	var currentRes : Rect = 
	  Rect(-Screen.width * 0.5, -Screen.height * 0.5,
		Screen.width, Screen.height);
	guiTexture.pixelInset = currentRes;
}

function Update () {

}

function LoadAnim(){
	Instantiate(loadGUI);
}
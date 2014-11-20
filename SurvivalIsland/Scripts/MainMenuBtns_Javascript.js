#pragma strict

var levelToLoad : String;
var normalTexture : Texture2D;
var rollOverTexture : Texture2D;
var beep : AudioClip;
var quitButton : boolean;

function Start (){

}

function Update (){

}

function OnMouseEnter(){
	guiTexture.texture = rollOverTexture;
}

function OnMouseExit(){
	guiTexture.texture = normalTexture;
}

function OnMouseUp(){
	audio.PlayOneShot(beep);
	yield new WaitForSeconds(0.35);
	if(quitButton){
		Application.Quit();
		Debug.Log("This part works!");
	}
	else{
		Application.LoadLevel(levelToLoad);
	}
}

@script RequireComponent(AudioSource)
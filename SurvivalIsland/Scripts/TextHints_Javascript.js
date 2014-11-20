#pragma strict

private var timer : float = 0.0;

function Start () {

}

function Update () {
	if(guiText.enabled) {
		timer += Time.deltaTime;
	}
	if(timer >= 4) {
		guiText.enabled = false;
		timer = 0.0;
	}
}

function ShowHint(message : String) {
	guiText.text = message;
	if(!guiText.enabled) {
		guiText.enabled = true;
	}
}
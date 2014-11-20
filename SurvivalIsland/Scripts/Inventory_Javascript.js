#pragma strict

static var charge : int = 0;
var collectSound : AudioClip;
var textHints : GUIText;
private var fireIsLit : boolean = false;

//HUD
var hudCharge : Texture2D[];
var chargeHudGUI : GUITexture;

//Generator
var meterCharge : Texture2D[];
var meter : Renderer;

//Matches
private var haveMatches = false;
var matchGUIprefab : GUITexture;
private var matchGUI : GUITexture;

var winObj : GameObject;

function Start () {
	charge = 0;
}

function Update () {
	
}

function CellPickup() {
	HUDon();
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	charge++;
	chargeHudGUI.texture = hudCharge[charge];
	meter.material.mainTexture = meterCharge[charge];
}

function HUDon() {
	if(!chargeHudGUI.enabled){
		chargeHudGUI.enabled = true;
	}
}

function MatchPickup() {
	haveMatches = true;
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	var matchHUD : GUITexture = Instantiate(matchGUIprefab,
	  Vector3(0.15, 0.1, 0), transform.rotation);
	matchGUI = matchHUD;
}

function OnControllerColliderHit(col : ControllerColliderHit) {
	if(col.gameObject.name == "campfire") {
		if(haveMatches) {
			LightFire(col.gameObject);
			fireIsLit = true;
			winObj.SendMessage("GameOver");
		}
	else if(!haveMatches && !fireIsLit) {
			textHints.SendMessage("ShowHint", "I could use " +
			  "this campfire to signal for help.. " +
			  "if only I could light it..");
		}
	}
}

function LightFire(campfire : GameObject) {
	var fireEmitters : ParticleEmitter[];
	fireEmitters = campfire.GetComponentsInChildren(ParticleEmitter);
	
	for(var emitter : ParticleEmitter in fireEmitters) {
		emitter.emit = true;
	}	
	campfire.audio.Play();
	Destroy(matchGUI);
	haveMatches = false;
}
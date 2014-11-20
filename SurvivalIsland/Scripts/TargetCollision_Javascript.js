#pragma strict

private var beenHit : boolean = false;
private var targetRoot : Animation;
var hitSound : AudioClip;
var resetSound : AudioClip;
var resetTime : float = 3.0;

function Start () {
	targetRoot = transform.parent.transform.parent.animation;
}

function Update () {

}

function OnCollisionEnter(theObject : Collision) {
	if(beenHit==false && theObject.gameObject.name=="coconut") {
		StartCoroutine("targetHit");
	}	
}

function targetHit() {
	audio.PlayOneShot(hitSound);
	targetRoot.Play("down");
	beenHit = true;
	CoconutWin_Javascript.targets++;
	
	yield new WaitForSeconds(resetTime);
	
	audio.PlayOneShot(resetSound);
	targetRoot.Play("up");
	beenHit = false;
	if(CoconutWin_Javascript.targets > 0){
		CoconutWin_Javascript.targets--;
	}
}

@script RequireComponent(AudioSource)
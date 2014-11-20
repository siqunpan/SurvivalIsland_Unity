﻿#pragma strict

private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0;
private var currentDoor : GameObject;

var doorOpenTime : float = 3.0;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;


function Start () {

}

function Update () {
	if(doorIsOpen) {
		doorTimer += Time.deltaTime;
		
		if(doorTimer > doorOpenTime) {
			//ShutDoor(currentDoor);
			Door(doorShutSound, false, "doorshut", currentDoor);
			doorTimer = 0.0;
		}
	}
}

function OnControllerColliderHit(hit : ControllerColliderHit) {
	if(hit.gameObject.tag == "playerDoor" && doorIsOpen == false) {
		currentDoor = hit.gameObject;	
		//OpenDoor(hit.gameObject);	
		Door(doorOpenSound, true, "dooropen", currentDoor);
	}
}

function OpenDoor(door : GameObject) {
	doorIsOpen = true;
	door.audio.PlayOneShot(doorOpenSound);
	door.transform.parent.animation.Play("dooropen");
}

function ShutDoor(door : GameObject) {
	doorIsOpen = false;
	door.audio.PlayOneShot(doorShutSound);
	door.transform.parent.animation.Play("doorshut");
}

function Door(aClip : AudioClip, openCheck : boolean, 
  animName : String, thisDoor : GameObject) {
	thisDoor.audio.PlayOneShot(aClip);
	doorIsOpen = openCheck;
	thisDoor.transform.parent.animation.Play(animName);
}
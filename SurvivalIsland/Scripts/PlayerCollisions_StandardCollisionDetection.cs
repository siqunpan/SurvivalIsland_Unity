using UnityEngine;
using System.Collections;

public class PlayerCollisions_StandardCollisionDetection : MonoBehaviour {

	bool doorIsOpen = false;
	float doorTimer = 0.0f;
	GameObject currentDoor;
	public float doorOpenTime = 3.0f;
	public AudioClip doorOpenSound;
	public AudioClip doorShutSound;
	
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(doorIsOpen) {
			doorTimer += Time.deltaTime;
			
			if(doorTimer > doorOpenTime) {
				//ShutDoor(currentDoor);
				Door(doorShutSound, false, "doorshut", currentDoor);
				doorTimer = 0.0f;
			}
		}
	}
	/*
	void OnControllerColliderHit(ControllerColliderHit hit) {
		if(hit.gameObject.tag == "playerDoor" && doorIsOpen == false) {
			currentDoor = hit.gameObject;
			//OpenDoor(hit.gameObject);
			Door(doorOpenSound, true, "dooropen", currentDoor);
		}
	}
	*/
	void OpenDoor(GameObject door) {
		doorIsOpen = true;
		door.audio.PlayOneShot(doorOpenSound);
		door.transform.parent.animation.Play("dooropen");
	}
	
	void ShutDoor(GameObject door) {
		doorIsOpen = false;
		door.audio.PlayOneShot(doorShutSound);
		door.transform.parent.animation.Play("doorshut");
	}
	
	void Door(AudioClip aClip, bool openCheck, string animName,
	  GameObject thisDoor) {
		thisDoor.audio.PlayOneShot(aClip);
		doorIsOpen = openCheck;
		thisDoor.transform.parent.animation.Play(animName);
	}
}

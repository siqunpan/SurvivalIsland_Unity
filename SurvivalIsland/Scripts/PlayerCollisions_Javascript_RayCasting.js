#pragma strict

private var currentDoor : GameObject;

function Update () {
	var hit : RaycastHit;
	
	if(Physics.Raycast(transform.position, transform.forward,
	  hit, 3)) {
		if(hit.collider.gameObject.tag == "playerDoor") {
			currentDoor = hit.collider.gameObject;
			currentDoor.SendMessage("DoorCheck");
		}
	}
}
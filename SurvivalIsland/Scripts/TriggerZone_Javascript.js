#pragma strict

var lockedSound : AudioClip;
var doorLight : Light;
var textHints : GUIText;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider) {
	if(col.gameObject.tag == "Player") {
		if(Inventory_Javascript.charge == 4) {
			transform.FindChild("door").SendMessage("DoorCheck");
			if(GameObject.Find("PowerGUI")) {
				Destroy(GameObject.Find("PowerGUI"));
				doorLight.color = Color.green;
			}
		}
		else if(Inventory_Javascript.charge > 0 && Inventory_Javascript.charge < 4) {
			textHints.SendMessage("ShowHint", "This door won't budge..\n" +
			  "guess it needs fully charging\n - maybe more power cells" +
			  "will help...");
			transform.FindChild("door").audio.PlayOneShot(lockedSound);
		}
		else {
			transform.FindChild("door").audio.PlayOneShot(lockedSound);
			col.gameObject.SendMessage("HUDon");
			textHints.SendMessage("ShowHint", "This is seems locked.. \nmaybe that " +
			  "generator nees power...");
		}
	}
		/*
		 * We can also use the following lines.
		 * if(col.gameObject.name == "First Person ") {
		 * 	  transform.FindChild("door").SendMessage("DoorCheck");
		 * }
		 * 
		 * */
}
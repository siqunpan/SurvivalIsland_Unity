#pragma strict

var throwSound : AudioClip;
var coconutPrefab : Rigidbody;
var throwSpeed : float = 30.0;
static var canThrow : boolean = false;

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Fire1") && canThrow) {
		audio.PlayOneShot(throwSound);	
		
		var newCoconut = Instantiate(coconutPrefab, 
		  transform.position, transform.rotation);
		if(newCoconut.rigidbody == null) {
			newCoconut.rigidbody.gameObject.AddComponent("Rigidbody");
		}
		newCoconut.name = "coconut";
		newCoconut.velocity = transform.forward * throwSpeed;
		Physics.IgnoreCollision(transform.root.collider, newCoconut.collider, true);
	}
}

@script RequireComponent(AudioSource)
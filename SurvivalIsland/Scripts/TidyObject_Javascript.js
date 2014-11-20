#pragma strict

var removeTime : float = 3.0;

function Start () {
	Destroy(gameObject, removeTime);
}


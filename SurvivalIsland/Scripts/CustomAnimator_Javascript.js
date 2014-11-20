#pragma strict

var xStartPosition : float = -1.0;
var xEndPosition : float = 0.5;
var speed : float = 1.0;
private var startTime : float;

function Start () {
	startTime = Time.time;
}

function Update () {
	transform.position.x = 
	  Mathf.Lerp(xStartPosition, xEndPosition,
	    (Time.time-startTime)*speed);
}
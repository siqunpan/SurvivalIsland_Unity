using UnityEngine;
using System.Collections;

[RequireComponent(typeof(AudioSource))]

public class TargetCollision : MonoBehaviour {
	
	bool beenHit = false;
	Animation targetRoot;
	public AudioClip hitSound;
	public AudioClip resetSound;
	public float resetTime = 3.0f;
	
	// Use this for initialization
	void Start () {
		targetRoot = transform.parent.transform.parent.animation;
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	
	void OnCollisionEnter(Collision theObject) {
		if(beenHit==false && theObject.gameObject.name=="coconut") {
			StartCoroutine("targetHit");
		}
	}
	
	IEnumerator targetHit() {
		audio.PlayOneShot(hitSound);
		targetRoot.Play("down");
		beenHit = true;
		CoconutWin.targets++;
		
		Debug.Log ("BeforeCol_start: "+"targets:"+CoconutWin.targets);
		
		yield return new WaitForSeconds(resetTime);
		
		audio.PlayOneShot(resetSound);
		targetRoot.Play("up");
		beenHit = false;
		if(CoconutWin.targets > 0){
			CoconutWin.targets--;
		}
		Debug.Log ("AfterCol_start: "+"targets:"+CoconutWin.targets);
	}
}

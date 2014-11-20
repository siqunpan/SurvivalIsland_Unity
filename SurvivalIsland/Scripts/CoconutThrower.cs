﻿using UnityEngine;
using System.Collections;

[RequireComponent(typeof(AudioSource))]

public class CoconutThrower : MonoBehaviour {
	
	public AudioClip throwSound;
	public Rigidbody coconutPrefab;
	public float throwSpeed = 30.0f;
	public static bool canThrow = false;
	
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetButtonDown("Fire1") && canThrow) {
			audio.PlayOneShot(throwSound);
			
			Rigidbody newCoconut = Instantiate(coconutPrefab,
			  transform.position, transform.rotation) as Rigidbody;
			if(newCoconut.rigidbody == null) {
				newCoconut.rigidbody.gameObject.AddComponent("Rigidbody");
			}
			newCoconut.name = "coconut";
			newCoconut.velocity = transform.forward * throwSpeed;
			Physics.IgnoreCollision(transform.root.collider, newCoconut.collider, true);
		}
	}
}

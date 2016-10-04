#pragma strict

var rb: Rigidbody;
var com: Vector3;

function Start () {
 rb = GetComponent.<Rigidbody>();
 rb.centerOfMass = com;
}

function Update () {
 if (Input.GetButtonDown("back"))
 {
 rb.angularDrag = 0.8;
 }
 else {
 rb.angularDrag = 0;
 }
}
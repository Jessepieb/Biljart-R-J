#pragma strict

var forceAmount : Vector3;
var removeForce : Vector3;

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Jump"))
		GetComponent.<Rigidbody>().AddForce(forceAmount);
	if(Input.GetButtonDown("Fire1"))
		GetComponent.<Rigidbody>().AddForce(removeForce);
}
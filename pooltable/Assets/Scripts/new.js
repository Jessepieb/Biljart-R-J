#pragma strict
var ForceAmount : Vector3;
function Start () {

}

function Update () {
 if (Input.GetButtonDown("Forward"))
 GetComponent.<Rigidbody>().AddForce(ForceAmount * 10);

}


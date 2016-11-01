#pragma strict
var maxAngle : int;
maxAngle = 90;
function OnCollisionEnter(theCollision : Collision){
var normal : Vector3;
normal = theCollision.contacts[0].normal;
var vel : Vector3;
vel = GetComponent.<Rigidbody>().velocity;
Debug.Log(vel);
if (theCollision.gameObject.tag == "Floor"){
Debug.Log("Hit the Floor");
}
else if (theCollision.gameObject.tag == "Tableside"){
Debug.Log("hit tableside");
}
if (Vector3.Angle(vel, -normal) > maxAngle){
GetComponent.<Rigidbody>().velocity = Vector3.Reflect(vel, normal);
}
}
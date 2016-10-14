#pragma strict
function start(){
var bc : BoxCollider;
var bounds : Bounds;
var center : Vector3;
var size : Vector3;
GetComponent.<Collider>().bounds.center.x = 0;
GetComponent.<Collider>().bounds.center.y = 0;
GetComponent.<Collider>().bounds.center.z = 0;
GetComponent.<Collider>().bounds.size.x = 13.5;
GetComponent.<Collider>().bounds.size.y = 3;
GetComponent.<Collider>().bounds.size.z = 26;
}
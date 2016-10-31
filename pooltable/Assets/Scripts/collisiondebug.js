#pragma strict
function OnCollisionEnter(theCollision : Collision){
if (theCollision.gameObject.name == "TableTop"){
Debug.Log("Hit the Floor");
}

if (theCollision.gameObject.tag == "TableSide"){
Debug.Log("hit tableside");
}
if (theCollision.gameObject.tag == "TableSide") {
/*var angle;
angle = (Vector3.Angle);
Debug.Log(Vector3.Angle);*/
transform.Rotate (Vector3.right,180);
}
if (theCollision.gameObject.tag == "sphere") {
/*var angle;
angle = (Vector3.Angle);
Debug.Log(Vector3.Angle);*/
transform.Rotate (Vector3.right,180);
}
}

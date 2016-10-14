#pragma strict

function OnCollisionEnter(theCollision : Collision){
if (theCollision.gameObject.name == "TableTop"){
Debug.Log("Hit the Floor");
}
else if (theCollision.gameObject.name == "TableSidde4"){
Debug.Log("hit tableside4");
}
}

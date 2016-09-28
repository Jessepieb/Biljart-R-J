#pragma strict

var forceAmount : Vector3;

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Jump"))
		GetComponent.<Rigidbody>().AddForce(forceAmount);
	
}

function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.name == "TableSide1" || col.gameObject.name == "TableSide2" || col.gameObject.name == "TableSide3" || col.gameObject.name == "TableSide4") {
		GetComponent.<Rigidbody>().AddForce((-(forceAmount))*2);
    }
}
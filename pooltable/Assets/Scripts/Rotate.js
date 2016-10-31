#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Z)){
		GetComponent.<Renderer>().enabled = true;
	}
	if(Input.GetKeyDown(KeyCode.X)){
		GetComponent.<Renderer>().enabled = false;
	}
}
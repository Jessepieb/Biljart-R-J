#pragma strict


function Start () {

}

function Update() {
    if(Input.GetMouseButtonDown(0)){
       move();
    }
}

function move(){
	for(var i = 0; i < 60; i++){
        	transform.position += Vector3(0,0,0.12);
        }
        GetComponent.<Renderer>().enabled = false;
        yield WaitForSeconds(1);
        transform.position = ((GameObject.Find("Ball1").transform.position) - Vector3(0, -1, 9));
        transform.Rotate = Vector3(181.5, 0.0, 90.0, Space.Self);
}
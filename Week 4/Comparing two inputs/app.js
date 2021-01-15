function check(){
	var email1 = document.getElementById('email_add');
	var email2 = document.getElementById('email_rep');

	if(email1.value != email2.value){
		alert("Email did not match");
		return false;
	}
}
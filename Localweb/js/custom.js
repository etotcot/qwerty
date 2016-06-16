(function($) {

    
	/* Image Base 64 */
	
	function EL(id) { return document.getElementById(id); };

	$(document).on('click', "#reg_upload", function () {
			$('#reg_upload_input').click();
			EL("reg_upload_input").addEventListener("change", readFile, false);
		});
	
	function readFile() {
		if (this.files && this.files[0]) {
			FR = new FileReader();
			FR.onload = function(e) {
				EL("reg_img").src = e.target.result;
				EL("b64").value = e.target.result;
			};       
			FR.readAsDataURL( this.files[0] );
		}
	}

	/* Registration */
	
	function sessionSave() {
		var username = $('input[name="username"]').val();
    	localStorage.setItem('Username', username);
    	var password = $('input[name="password"]').val();
    	localStorage.setItem('Password', password);
    	var email = $('input[name="email"]').val();
    	localStorage.setItem('Email', email);
    	var country = $('input[name="country"]').val();
    	localStorage.setItem('Country', country);
    	var state = $('input[name="state"]').val();
    	localStorage.setItem('State', state);
    	var city = $('input[name="city"]').val();
    	localStorage.setItem('City', city);
    	var zip = $('input[name="zip"]').val();
    	localStorage.setItem('Zip', zip);
    	var name = $('input[name="name"]').val();
    	localStorage.setItem('Full name', name);
    	var contact = $('input[name="contact"]').val();
    	localStorage.setItem('Contact', contact);
    	var base64 = $('input[name="imagebase"]').val();
    	localStorage.setItem('Image', base64);
	}
	
	$(document).on('click', "#reg_submit", function () {
    	sessionSave();
    });
	
	/* Log In Validation */

	$(document).on('click', "#start_login", function () {
    	var start_username = $('input[name="start_username_name"]').val();
    	var start_password = $('input[name="start_password_name"]').val();
    	var username_t = "test";
		var password_t = "test";
		var username_c = localStorage.getItem('Username');
        var password_c = localStorage.getItem('Password');
        if ((start_username == username_t)&&(start_password == password_t)) {
        	$("#start_form").attr("action", "test.html");
        	$("#start_form").submit();
        }	
        else if ((start_username == username_c) && (start_password == password_c)) {
        	$("#start_form").attr("action", "user.html");
        	$("#start_form").submit();
        }
        else if (((start_username != username_t)||(start_password != password_t))&&((start_username != username_c) || (start_password != password_c))) {
        	alert("Wrong username or password");
        };
    });
    

    
})(jQuery);
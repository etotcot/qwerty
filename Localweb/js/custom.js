(function($) {

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
	
	function start_check() {
		var start_username = $('input[name="start_username_name"]').val();
    	var start_password = $('input[name="start_password_name"]').val();
    	var username_t = "test";
		var password_t = "test";
		var username_c = sessionStorage.getItem('Username');
        var password_c = sessionStorage.getItem('Password');
        alert(username_c);
        if ((start_username == username_t)&&(start_password == password_t)) {
        	$("#start_form").attr("action", "test.html");
        	$("#start_form").submit();
        };	
        else if ((start_username == username_c) && (start_password == password_c)) {
        	$("#start_form").attr("action", "user.html");
        	$("#start_form").submit();
        };
        else {
        	alert("Wrong username or password");
        };
	}

	$(document).on('click', "#start_login", function () {
    	start_check();
    });

	function sessionSave() {
		var username = $('input[name="username"]').val();
    	sessionStorage.setItem('Username', username);
    	var password = $('input[name="password"]').val();
    	sessionStorage.setItem('Password', password);
    	var email = $('input[name="email"]').val();
    	sessionStorage.setItem('Email', email);
    	var country = $('input[name="country"]').val();
    	sessionStorage.setItem('Country', country);
    	var state = $('input[name="state"]').val();
    	sessionStorage.setItem('State', state);
    	var city = $('input[name="city"]').val();
    	sessionStorage.setItem('City', city);
    	var zip = $('input[name="zip"]').val();
    	sessionStorage.setItem('Zip', zip);
    	var name = $('input[name="name"]').val();
    	sessionStorage.setItem('Full name', name);
    	var contact = $('input[name="contact"]').val();
    	sessionStorage.setItem('Contact', contact);
    	var base64 = $('input[name="imagebase"]').val();
    	sessionStorage.setItem('Image', base64);
	}
	
	$(document).on('click', "#reg_submit", function () {
    	sessionSave();
    });


    
})(jQuery);
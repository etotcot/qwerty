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
 
 	/* Currency generator */
 	
 	$(document).ready( function () {
 		var rand = Math.floor((Math.random() * 10) + 1);
 		var usd = Math.floor(rand * 693.73);
 		var eu = Math.floor(rand * 610.17);
 		var pnd = Math.floor(rand * 469.88);
 		$("#btc").attr("value", rand);
 		$("#pnd").attr("value", pnd);
 		$("#eu").attr("value", eu);
 		$("#usd").attr("value", usd);
	});
	
	/* Orientation test */
	
	$(document).on('click', "#yes_f", function () {
		localStorage.setItem('Football', "1");
		$("#orientation_question").attr("value", "Do you vape?");
		$("#yes_f").attr("id", "yes_v");
		$("#no_f").attr("id", "no_v");
		return false;
	});
	
	$(document).on('click', "#no_f", function () {
		localStorage.setItem('Football', "0");
		$("#orientation_question").attr("value", "Do you vape?");
		$("#yes_f").attr("id", "yes_v");
		$("#no_f").attr("id", "no_v");
		return false;
	});
	
	$(document).on('click', "#yes_v", function () {
		localStorage.setItem('Vape', "1");
		$("#orientation_question").attr("value", "Did you have homosexual contact?");
		$("#yes_v").attr("id", "yes_c");
		$("#no_v").attr("id", "no_c");
		return false;
	});
	
	$(document).on('click', "#no_v", function () {
		localStorage.setItem('Vape', "0");
		$("#orientation_question").attr("value", "Did you have homosexual contact?");
		$("#yes_v").attr("id", "yes_c");
		$("#no_v").attr("id", "no_c");
		return false;
	});
	
	$(document).on('click', "#yes_c", function () {
		localStorage.setItem('Sex', "1");
		window.location.replace("user.html");
	});
	
	$(document).on('click', "#no_c", function () {
		localStorage.setItem('Sex', "0");
		window.location.replace("user.html");
	});
	
	/* APM test */
	
	$(document).on('click', "#apm_start", function () {
		$("#apm_start").attr("id", "apm_end");
		var time_counter = 0;
		var click_counter = 0;
		$(document).on('click', "#clicky", function () {
			click_counter++;
			$("#apm_real_counter").attr("value", click_counter);
		});
		var loop = setInterval(function() {
			if (time_counter <= 60) {
				$("#bar_1_counter").attr("style", "height: " + time_counter * 1.67 + "%;");
				$("#bar_2_counter").attr("style", "height: " + time_counter * 1.67 + "%;");
				$("#bar_3_counter").attr("style", "width: " + time_counter * 1.67 + "%;");
				time_counter++;
			}
			else {
				clearInterval(loop);
				localStorage.setItem('APM', click_counter);
				window.location.replace("user.html");
			};
		}, 1000);
	});

    
})(jQuery);
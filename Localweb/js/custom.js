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
		$("#orientation_question").attr("value", "Do you following any religion?");
		$("#yes_v").attr("id", "yes_r");
		$("#no_v").attr("id", "no_r");
		return false;
	});
	
	$(document).on('click', "#no_v", function () {
		localStorage.setItem('Vape', "0");
		$("#orientation_question").attr("value", "Do you following any religion?");
		$("#yes_v").attr("id", "yes_r");
		$("#no_v").attr("id", "no_r");
		return false;
	});
	
	$(document).on('click', "#yes_r", function () {
		localStorage.setItem('Religion', "1");
		$("#orientation_question").attr("value", "Did you have homosexual contact?");
		$("#yes_r").attr("id", "yes_c");
		$("#no_r").attr("id", "no_c");
		return false;
	});
	
	$(document).on('click', "#no_r", function () {
		localStorage.setItem('Religion', "0");
		$("#orientation_question").attr("value", "Did you have homosexual contact?");
		$("#yes_r").attr("id", "yes_c");
		$("#no_r").attr("id", "no_c");
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
			if (time_counter <= 10) {
				$("#bar_1_counter").attr("style", "height: " + time_counter * 10 + "%;");
				$("#bar_2_counter").attr("style", "height: " + time_counter * 10 + "%;");
				$("#bar_3_counter").attr("style", "width: " + time_counter * 10 + "%;");
				time_counter++;
			}
			else {
				clearInterval(loop);
				localStorage.setItem('APM', click_counter);
				window.location.replace("user.html");
			};
		}, 1000);
	});
	
	/* BMI Calculator */
	
	function bmi_save() {
		var gender = $('#bmi_gender').val();
    	localStorage.setItem('Gender', gender);
    	var age = $('#bmi_age').val();
    	localStorage.setItem('Age', age);
    	var weight = $('#bmi_weight').val();
    	localStorage.setItem('Weight', weight);
    	var height = $('#bmi_height').val();
    	localStorage.setItem('Height', height);
	}
	
	$(document).on('click', "#submit_bmi", function () {
		bmi_save();
	});
	
	/* IQ Test */
	
	var IQ_results = 0;
	
	$(document).on('click', "#iq_11", function () {
		IQ_results++;
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_2");
		return false;
	});
	
	$(document).on('click', "#iq_12", function () {
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_2");
		return false;
	});

	$(document).on('click', "#iq_13", function () {
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_2");
		return false;
	});
	
	
	$(document).on('click', "#iq_21", function () {
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_3");
		return false;
	});
	
	$(document).on('click', "#iq_22", function () {
		IQ_results++;
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_3");
		return false;
	});

	$(document).on('click', "#iq_23", function () {
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_3");
		return false;
	});


	$(document).on('click', "#iq_31", function () {
		IQ_results++;
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_4");
		return false;
	});
	
	$(document).on('click', "#iq_32", function () {
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_4");
		return false;
	});

	$(document).on('click', "#iq_33", function () {
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_4");
		return false;
	});
	
	
	$(document).on('click', "#iq_41", function () {
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_5");
		return false;
	});
	
	$(document).on('click', "#iq_42", function () {
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_5");
		return false;
	});

	$(document).on('click', "#iq_43", function () {
		IQ_results++;
		localStorage.setItem('IQ_test', IQ_results);
		$(".query_mark").empty();
		$(".query_mark").load("iq_temp.html #id_query_mark_5");
		return false;
	});
	

	$(document).on('click', "#iq_51", function () {
		localStorage.setItem('IQ_test', IQ_results);
		window.location.replace("user.html");
		return false;
	});
	
	$(document).on('click', "#iq_52", function () {
		IQ_results++;
		localStorage.setItem('IQ_test', IQ_results);
		window.location.replace("user.html");
		return false;
	});

	$(document).on('click', "#iq_53", function () {
		localStorage.setItem('IQ_test', IQ_results);
		window.location.replace("user.html");
		return false;
	});	
    
    /* Userpage */
    
    $(document).ready( function () {
 		var user_age = parseInt(localStorage.getItem("Age"));
 		$("#user_age").attr("value", user_age);
 		var user_weight = parseInt(localStorage.getItem("Weight"));
 		$("#user_weight").attr("value", user_weight);
 		var user_height = parseInt(localStorage.getItem("Height"));
 		$("#user_height").attr("value", user_height);
 		var user_gender = localStorage.getItem("Gender");
 		$("#user_gender").attr("value", user_gender);
 		var user_iq = parseInt(localStorage.getItem("IQ_test")) * 10 + 80 + Math.floor((Math.random() * 10) + 1) ;
 		$("#user_iq").attr("value", user_iq);
 		var user_apm = parseInt(localStorage.getItem("APM")) * 5;
 		$("#user_apm").attr("value", user_apm);
 		var user_bmi = Math.floor(parseFloat(user_weight) / ((parseFloat(user_height) / 100) ^ 2));
 		$("#user_bmi").attr("value", user_bmi);
 		var user_religion = localStorage.getItem("Religion");
 		if (user_religion == "1") {
 			$("#user_religion").attr("value", "+");
 		}
 		else if (user_religion == "0") {
 			$("#user_religion").attr("value", "-");
 		}
 		else {
			$("#user_religion").attr("value", "undefined"); 		
 		}
 		var user_football = localStorage.getItem("Football");
 		var user_sex = localStorage.getItem("Vape");
 		var user_vape = localStorage.getItem("Sex");
 		var user_orientation = 0;
 		if (user_football == "1" || user_sex == "1" || user_vape =="1") {
 			user_orientation = 1;
 			$("#user_orientation").attr("value", "Homosexual");
 		}
 		else if (user_football == "0" || user_sex == "0" || user_vape == "0") {
 			$("#user_orientation").attr("value", "Heterosexual");
 		}
 		else {
 			$("#user_orientation").attr("value", "undefined");
 		}
 		var user_img = localStorage.getItem("Image");
 		$("#profile_user_img").attr("src", user_img);
 		var user_name = localStorage.getItem("Full name");
 		$("#profile_user_name").html(user_name);
 		var user_address = localStorage.getItem("Country") + ", " + localStorage.getItem("State");
 		$("#profile_user_address").html(user_address);
 		if (user_bmi < 18) {
 			var BMI_Diff = 18 - user_bmi;
 		}
 		else if (user_bmi > 24) {
 			var BMI_Diff = user_bmi - 24;
 		}
 		else {
 			var BMI_Diff = 0;
 		}
 		if (user_height < 150) {
 			var Height_Diff = 150 - user_height;
 		}
 		else if (user_height > 190) {
 			var Height_Diff = user_height - 200;
 		}
 		else {
 			var Height_Diff = 0;
 		}
 		if (user_weight < 50) {
 			var Weight_Diff = 50 - user_weight;
 		}
 		else if (user_weight > 90) {
 			var Weight_Diff = user_weight - 90;
 		}
 		else {
 			var Weight_Diff = 0;
 		}
 		var user_death = (((user_iq + user_apm / 7) / (user_age + BMI_Diff + Weight_Diff + Height_Diff)) - 10) * -10;
 		if (user_gender == "Male" || user_gender == "male") {
 			user_death *= 1.2;
 		}
 		else if (user_gender == "Female" || user_gender == "female") {
 			user_death /= 1.2;
 		}
 		else {
 			user_death *= 1;
 		}
 		if (user_orientation == 1) {
 			user_death *= 1.2;
 		}
 		else {
 			user_death /= 1.2;
 		}
 		if (user_religion == "1") {
 			user_death /= 1.2;
 		}
 		else if (user_religion == "0") {
 			user_death *= 1.2;
 		}
 		else {
 			user_death *= 1;
 		}
 		$("#user_death").attr("style", "width: " + user_death + "%;");
	});
    
})(jQuery);
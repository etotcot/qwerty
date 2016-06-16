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



    
})(jQuery);
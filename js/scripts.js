Y.use('jquery-noconflict', function() {	
	jQuery(document).ready(function($){

		$('#user_session').change(function(){
			if($(this).val() === "1") {
				$('#lLogonForm').hide();
			} else {
				$('#lLogonForm').show();
			}
		})

		$('#show_sidebar').change(function(){
			if($(this).val() === "1") {
				$('#sidebar').show();
			} else {
				$('#sidebar').hide();
			}
		})

    }); //end jQuery(document).ready()
}); //end Y.use('jquery-noconflict')

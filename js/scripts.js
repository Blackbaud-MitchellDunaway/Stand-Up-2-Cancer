Y.use('jquery-noconflict', function() {	
	jQuery(document).ready(function($){


		/* 	placeholder text
			on focus: if the value matches the title, clear it
			on blur: if the value is empty, populate with the title
		------------------------------------------------------------ */
		$("input[type=text], input[type=password]").focusin(function(){  
			var title = $(this).attr("title");  
			if (title == $(this).val()) {  
				$(this).val("");  
			}  
		});  
		$("input[type=text], input[type=password]").focusout(function(){  
			var title = $(this).attr("title"); 
			if ($(this).val() == "") {  
				$(this).val(title);  
			}  
		});


		/* 	panel show/hide
			when the hamburger button is clicked
				if not active
					add active state
					add click handler to body to close panel
				if active
					remove active state
					remove body click handler
		------------------------------------------------------------ */

		$('#nav_reveal, #nav_reveal::after').click(function(e){
			e.preventDefault();
			var elements = $('#header_utilities, #nav_reveal');
			if (elements.hasClass('active')) {
				panel_hide(elements);
			} else {
				panel_show(elements);
			}
		})

		function panel_show(elements){
			elements.addClass('active');
			$('body').bind('click touchstart',function(e){
				if (!$(e.target).closest(elements).length) {
					panel_hide(elements);
				}
			});
		}

		function panel_hide(elements){
			elements.removeClass('active');
			$('body').unbind('click touchstart');
		}

		/* 	GIGYA wrangling
		------------------------------------------------------------ */
		$('#gigya_widget').ready(function(){
			$('.loginText .loginHref').html('Login Using <img src="../EIF/su2c/images/gigya.gif" class="loginLinks" alt="Gigya">');
			$('[id$="loginLinks"]').remove();

		});
		


    }); //end jQuery(document).ready()
}); //end Y.use('jquery-noconflict')

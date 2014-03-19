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


		$('#nav_reveal, .loginHref').click(function(e){
			e.preventDefault();
			var elements = $('#header_utilities, #nav_reveal');
			if (elements.hasClass('active')) {				
				panel_hide(elements);
			} else {
				panel_show(elements);
			}
		});


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
			$('.loginText .loginHref').html('Login Using');
		});
		

		/* 	Donation Level Selecting
		------------------------------------------------------------ */
		
		$("input:[name='level_flexibleexpanded']").each(function() {
			if($(this).is(':checked')){
				$(this).parent().next('label').addClass('active');
			}
		});

		$('.donation-level-input-container label, .donation-level-input-container input').click(function(e){
			
			$('.donation-level-input-container label').each(function(){
				$(this).removeClass('active');
			});
			
			$(this).closest('.donation-level-input-container').find('label').addClass('active');
			
		});

		$('.donation-level-container:eq(3)').find('label:eq(0)').addClass('donor-entered-label');


		/* 	Honor/memorial checkbox click function
		------------------------------------------------------------ */
		
//		if ($('#tribute_show_honor_fieldsname').is(':checked')){
//			$('#tribute_show_honor_fields_row .form-content').addClass('active');			
//		}
		
//		$('#tribute_show_honor_fieldsname').click(function(e) {
//			$('#tribute_show_honor_fields_row .form-content').removeClass('active');
//			if ($('#tribute_show_honor_fieldsname').is(':checked')){
//				$('#tribute_show_honor_fields_row .form-content').addClass('active');
//			}
//			else {
//				$('#tribute_show_honor_fields_row .form-content').removeClass('active');
//			}
//
//		});

		/* 	Append SU2C acknowledgement letter 
			language in Donation form honor field area
		------------------------------------------------------------ */

		//$('#tribute_type_row').after('<p>SU2C will send an acknowledgement letter in recognition of your donation if you choose to provide an address below.</p>');
		$('#tribute_type_row').append('<p>SU2C will send an acknowledgement letter in recognition of your donation if you choose to provide an address below.</p>');

		/* 	Reorder credit card icons
		------------------------------------------------------------ */
		var credit_card_icons_closure = function () {
			var cardList = [];

			return function() {
				$('.radio-array-list li').each(function(){
				  cardList.push(this);  
				});
				cardList.unshift(cardList.pop());
				$('.radio-array-list').html(cardList);

			}();
		}();

        /* Add required asterisk to Gift Type and Expiration Date fields
		------------------------------------------------------------*/
		jQuery('#level_flexiblegift_type_Row fieldset legend').prepend('<span class="field-required"></span>');
		jQuery('#responsive_payment_typecc_exp_date_row .form-content label:first span.label-text').prepend('<span class="field-required"></span>&nbsp;');


    }); //end jQuery(document).ready()
}); //end Y.use('jquery-noconflict')

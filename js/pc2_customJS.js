//YAHOO.Convio.PC2.Utils.LoadingMessage="Loading, please wait.";
//YAHOO.Convio.PC2.Utils.LoadingMessage_en_US="Loading, please wait.";

var loadCustomHandlers = function() {
    /*
     * This is an example for subscribing to the registrationLoaded event.
     * The single argument passed is the Registration object, which is also
     * saved to YAHOO.Convio.PC2.Data.Registration
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:registrationLoaded", function(registration) {
    //    YAHOO.log("registrationId: " + registration.registrationId, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the constituentLoaded event.
     * The single argument passed is the user object, which is also
     * saved to YAHOO.Convio.PC2.Data.User
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:constituentLoaded", function(user) {
    //    YAHOO.log("name: " + user.name.first + ' ' + user.name.last, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the wrapperLoaded event.
     * The single argument passed is the wrapper object.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:wrapperLoaded", function(wrapper) {
    //    YAHOO.log("personal page URL: " + wrapper.personalPageUrl, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the configurationLoaded event.
     * The single argument passed is the config object, which is also
     * saved to YAHOO.Convio.PC2.Data.TeamraiserConfig
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:configurationLoaded", function(config) {
    //    YAHOO.log("Accepting donations: " + config.acceptingDonations, "debug", "custom.js");
	//    YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.showAdminNewsFeed = false;
	//    YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.feedCount = 1;
	//    YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.cycleInterval = 0;
	// 	  YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.maxTextLength = 50;
	// 	  YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.showBelowProgress = true;
    //});
    
    /*
     * This is an example for subscribing to the participantProgressLoaded event.
     * The single argument passed is the progressData object, which is also
     * saved to YAHOO.Convio.PC2.Data.ProgressData
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:participantProgressLoaded", function(progressData) {
    //    YAHOO.log("Days left: " + progressData.daysLeft, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the viewChanged event.
     * The single argument passed is the viewChange object, which has 
     * these attributes.
     * 
     * oldView: the name of the old primary view.
     * oldSubview: the name of the old subview.
     * view: the name of the new primary view.
     * subview: the name of the new subview.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:viewChanged", function(viewChange) {
    //    YAHOO.log("View changed. Old was: " + viewChange.oldView + "-" + viewChange.oldSubview 
    //            + ". New is: " + viewChange.view + "-" + viewChange.subview + ".", "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the contactAdded event.
     * The single argument passed is the contact, or array of contacts, added
     * by an explicit API call.
     * 
     * Note that this event will not fire if a contact is added as a 
     * side effect of another action such as processing an offline gift.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:contactAdded", function(contacts) {
    //    contacts = YAHOO.Convio.PC2.Utils.ensureArray(contacts);
    //    YAHOO.log("Number of contacts added: " + contacts.length, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the emailSent event.
     * The single argument passed is the JSON object containing a 
     * success flag.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:emailSent", function(response) {
    //    YAHOO.log("Email sent: " + response.success, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the personalPageUpdated event.
     * The single argument passed is the JSON object containing a 
     * success flag.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:personalPageUpdated", function(response) {
    //    YAHOO.log("Personal page updated: " + response.success, "debug", "custom.js");
    //});
	
	/*
     * This is an example for subscribing to the suggestionLoaded event.
     * The single argument passed is the Suggestion object.
     */
//    YAHOO.Convio.PC2.Utils.publisher.on("pc2:suggestionLoaded", function(suggestion) {
//    	
//        YAHOO.log("Loaded default 'what next?' suggestion: " + suggestion.success, "debug", "custom.js");
//        
//        // resolve a self-donation URL
//        var personalDonationUrl = YAHOO.Convio.PC2.Data.personalDonationUrl;
//        
//        // if users has self-donation URL and is not already a self-donor
//        if (personalDonationUrl && YAHOO.Convio.PC2.Data.Registration.selfDonor == 'false') {
//        	
//        	var el = YAHOO.util.Dom.get("what-next-answer");
//        	el.innerHTML = "<a href=\"" + personalDonationUrl + "\"> Make a self-donation.</a>";
//        	
//        	YAHOO.log("Overwrote default 'what next?' suggestion; self-donation message", "debug", "custom.js");
//        }
//        
//    });
}

/* Executes after new JS is dynamically loaded, 
 * and before new view load begins. */
var loadOverrides = function(view, subview) {
    // Override functions defined in external JS files
}


var showPersonalUploadBtn = function() {
	if (jQuery('#personal-photo-permission').is(':checked')){
		jQuery('#msg_cat_photo_upload_button_label').show();
	}
	else{
		jQuery('#msg_cat_photo_upload_button_label').hide();
	}
}

var showTeamUploadBtn = function() {
	if (jQuery('#team-photo-permission').is(':checked')){
		jQuery('#msg_cat_team_photo_upload_button_label').show();
	}
	else{
		jQuery('#msg_cat_team_photo_upload_button_label').hide();
	}
}
		
var loadCustom = function() {
    /*
     * You can execute a function once all of the specified
     * events have fired with the YAHOO.Convio.PC2.Utils.require
     * function. 
     */
    YAHOO.Convio.PC2.Utils.require("pc2:registrationLoaded", "pc2:constituentLoaded", "pc2:configurationLoaded", "pc2:wrapperLoaded", function() {
    //    YAHOO.log("Registration, Constituent, Configuration, and Wrapper are all loaded.", "debug", "custom.js");

		Y.use('jquery',function(){
			(function($) {
			/* do all the jQuery you want! */
			jQuery('#gift-content #msg_cat_gift_label').after('<p class="note"><b>Note</b>: Remember to send in checks you enter as offline gifts so that your progress indicators will include them.</p>');
			
			jQuery('#msg_cat_photo_upload_button_label').hide();
			jQuery('#msg_cat_team_photo_upload_button_label').hide();
			
		    jQuery('#personalpage-media-content .caption').after('<div id="personal_photo_permission_container"></div>');
			jQuery('#personal_photo_permission_container').append('<input type="checkbox" name="personal-photo-permission" id="personal-photo-permission" onclick="showPersonalUploadBtn()" />  <label for="personal-photo-permission">I have permission to use this photo.</label>');
		
			jQuery('#teampage-content .caption').after('<div id="team_photo_permission_container"></div>');
			jQuery('#team_photo_permission_container').append('<input type="checkbox" name="team-photo-permission" id="team-photo-permission" onclick="showTeamUploadBtn()" />  <label for="team-photo-permission">I have permission to use this photo.</label>');

	
			})(jQuery);
		});
		
    });
    
    /*
    var leftNav = document.createElement("div");
    leftNav.id = "custom_left_nav";
    
    var leftNavContent = document.createElement("p");
    leftNavContent.appendChild(document.createTextNode("Hello left nav"));
    leftNav.appendChild(leftNavContent);
    
    YAHOO.util.Dom.addClass(leftNav, "custom-left-nav");
    
    var firstChild = YAHOO.util.Dom.getFirstChild("yui-main");
    YAHOO.util.Dom.insertBefore(leftNav, firstChild);
    */
};


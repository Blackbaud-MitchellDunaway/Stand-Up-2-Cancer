TO DO

* need to add and style widgets
	* gigya
* need to check logged in state of login widget
* Facebook widget is not showing up
* When viewing the donation page, I’m seeing some security warnings, so something(s) is coming in insecure. Looks like that’s why Facebook is not showing up.
* Verisign logo (donation right rail) is not displaying. Looks like maybe some code is commented out for that?
* Check across browsers!
* At the smaller sizes, when you invoke the “log-in as” functionality from the navigation, the panel pops up behind the menu.
* In IE8, it looks like your script to change the text of the Gigya link is not working.
* In the logged-in area, the Profile link should read “Manage Profile” and it and the Participant Center link should be below the welcome message and Log Out button. Here’s the basic comp for that area
* The Participant Center link will only show up if the logged-in user is registered for the TeamRaiser in session, but you can always temporarily remove the conditional there to check on the position and appearance of that link.




-	The font for the acknowledgement letter is too large compared to the rest of the form or else the font for the form is too small. Compare your stylesheet settings with the donation form settings to make sure font is consistent. You may need some overrides for the form elements.
-	Let’s give the form fields a bit more breathing room. They seem very crowded.
-	The div.html-caption-container that contains captions like the one at the top of the form – “You have the power to …” – is unnecessarily narrow at smaller sizes. Can you set the width for that to auto at phone sizes?
-	In IE8, I notice that the final “other amount” donation level is floated instead of below the dollar amounts. Can that be corrected? 
-	See what you can do to get the boxes around the radio buttons and the honor/memorial checkbox to have rounded corners in IE8. I know you can’t do gradients and radius on the same element in IE8, but one trick I have used is to set a surrounding div to be the exact same size (no margins or padding) and put the radius style on the surrounding div with overflow hidden. 

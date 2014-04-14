#TO DO

## Header


* Check across browsers
- The Participant Center link should only show up if the logged-in user is registered for the TeamRaiser in session. Check the conditional.
* link navigation
- fix pipe divider when cons isn't registered for TR


## TR Greeting page
- remove padding from content
- set correct widths for content at all breakpoints
- add and style social media buttons
- ask Jean if the button on the search box should be an arrow instead of a mag glass
- add test data to TR 
- style the Team Honor Roll and Top Fundaisers boxes
- increase spacing between reg buttons

## TR Registration process
- check outline on next step button when active (can that be changed?)
- style section head and sub head to match h1 and h2
- either remove background and border from returning user box, or make it uniform and padded correctly
- check active state on complete registration button (maybe C color)
- billing information page (review) and process transaction do not have a responsive layout. how should I style?



## Donation Form

- body background and navigation are missing. check if this is intentional. If it is, then the pop out menu at smaller sizes may need some additinoal styling
* honor /mem button still not showin red when selected
* hon/mem hit area is very small. try to make it the whole 'button'

## Milestones
* fundraising goal AR has wrong envelope
- large badge image in AR is broken

---------------------------------------------------------------

- Add some jQuery to put a required asterisk on the Team Fundraising Goal and Your Fundraising Goal fields during registration.
- On the thank-you page, update the participant center button styles to remove the underline on hover.
- Do not put the share reusable in the page. Hide it in the wrapper. That way it’s harder to remove by accident and available for use on the Team and Personal pages.
- Replace search button in tabbed search interface on entry page and search page with arrow button (see entry page comp).
- In log-in area, remove border from Manage Profile link when logged in and maybe add it to the Participant Center link? It shows up even if I have no registration yet.
- Create reusable for greeting page content.
- Style default Team Page
- Style default Personal Page
* Cross browser testing if possible!

Note: Need to isolate the styles for personal and team pages and add those either via a stylesheet or a reusable in the HTML areas of the Team and Personal pages so that they will apply when you preview the pages. Ditto for any jQuery. 


Jean

* Investigate Facebook weirdness
* Cross-browser testing
* Remove phrase from personal gift achievement badge. Leave title only. Same for milestones.
* Update social share component with appropriate information from the implementation document.
* Update su2c_reus_facebook_meta reusable to include su2c logo path where indicated.
* Set all participation types to have minimum fundraising goal of 1.00. -- Done.
* Set log-in page to be at step 1 rather than step 3 -- Done.
* Set security category of participation types to Stand Up to Cancer. – Done.
* Update participation type email opt-in text to match that on donation forms – Done.
* Set TeamRaiser search option to search this TeamRaiser and others of the same type – Done.
* Default content on personal page should go in the page content not in footer. -- Moved

TO DO

- Let’s keep the reusable names specific to su2c throughout. See the implementation guide.
 
- Based on the way you have the footer set up, I would suggest creating separate reusables for the footer copyright statement, footer navigation, and footer EIF statement. That way they can be separately edited without anyone accidentally breaking the page structure by removing <div> tags and the like.
 
- You can move the TR ID session variable to the end of the head tag and put the Facebook/meta one first. I would use a single reusable for that since in general the content is all related.
 
- To protect the structure of the wrapper, wherever possible plan to have the reusables include the contents of the divs in question but not the divs themselves. So this: 

<nav id="main_navigation">
Reusable starts here
      <ul>              
            <li><a href="#">Event Home</a></li>
            <li><a href="#">About Events</a></li>
            <li><a href="#">Contact Us</a></li>
      </ul>
Reusable end here
</nav>

Rather than this:

Reusable starts here
<nav id="main_navigation">
      <ul>              
            <li><a href="#">Event Home</a></li>
            <li><a href="#">About Events</a></li>
            <li><a href="#">Contact Us</a></li>
      </ul>
</nav>
Reusable ends here
 
-          Font throughout needs to be Arial, Helvetica, sans-serif
 
-          I’m getting horizontal scrollbars at larger than phone sizes.
 
-          Link the SU2C logo and tagline to http://www.standup2cancer.org/
 
-          Facebook like is not appearing in Chrome and IE and sometimes in Firefox (this may be just due to the page not being on the web yet)
 
-          The main navigation font should be bold for both regular and hover states.
 
-          The contextual navigation
 
-          At less than desktop sizes, hide the donation sidebar.
 
-          In the footer, check phone vertical size. It may be that we should turn off the float on the Blackbaud logo at that size so that both of the other two logos go below it instead of just one.
 
-          Test in IE8 because the entire layout is pretty broken there.



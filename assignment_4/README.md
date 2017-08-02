- # FEWD Week #4: JavaScript Basics

  <br>

  ------

  ### Description

  The team from Relaxr is back...again! They want their page to be more interactive and asked you to add JavaScript to their source code. You've been given the HTML and CSS but will need to create a JavaScript file and add a few different pieces of interactivity:  

  Users should be able to click a link and have the remainder of the blog articles' content slide down and appear on the page; users should also be able hide the content when they are finished reading. 

  See a detailed technical explanation below.

  <br>

  ![](example_solution.png)

  ------

  ### Real-World Applications

  - Practice programmatic thinking to plan before writing code
  - Use basic JavaScript to create an interactive page based on a user action
  - Link an external JavaScript file from HTML

  <br>

  ------

  ### Technical Requirements

  - Prevent a page-refresh (when any of the "read more/read less" links are clicked) with the ```event.preventDefault()``` function

  - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded

  - Select the appropriate DOM elements with CSS selectors upon a user's click, using the ```$.click()``` handler

  - If a user clicks "Read More" on the first blog post

    - Have the text in the ` <p>` tag (with `id="first-read-more-text"` ) slide down along with a "Read Less" link in the blog post using ```$.slideDown()``` and `$.show()`
    - Hide the relevant "Read More" link using ```$.hide()```

  - If a user clicks "Read Less" on the first post:

    - Have the `<p>`  (with `id="first-read-more-text"`) slide up and hide the "Read Less" link using `$.slideUp()` and ```$.hide()```
    - Show the relevant "Read More" link using ```$.show()```

  - If a user clicks "Read More" on the second blog post

    - Have the text in the ` <p>` tag (with `id="second-read-more-text"`) slide down along with a "Read Less" link in the blog post using ```$.slideDown()``` and `$.show()`
    - Hide the relevant "Read More" link using ```$.hide()```

  - If a user clicks "Read Less" on the second post:

    - Have the `<p>`  (with `id="second-read-more-text"`) slide up and hide the "Read Less" link using `$.slideUp()` and ```$.hide()```
    - Show the relevant  "Read More" link using ```$.show()```

    ​

  <br>

  **BONUS**

  How might you [use the `$(this)` keyword] (~ 1/3 of the way down the page)(http://www.tutorialsteacher.com/jquery/jquery-event)`IDs` in your HTML, and the amount of JavaScript in your JavaScript file?

  ------

  ### Resources

  - [Starter Code](starter_code)
  - [Cheat-sheet of jQuery selectors, methods, and events](http://oscarotero.com/jquery/)
  - [Get more practice with jQuery DOM selectors](jquery_dom_selector_practice)

  <br>

  ------

  ### Evaluation / Submission

  Please use the same folder and GitHub repository that you used for the previous project ("homework-landingpage"). When ready for evaluation, please push your code to that repository and notify me via slack with the link. 

  I will evaluate against the solution code, and your use of technical elements. I will provide a numeric grade on a scale: does not meet expectations (0); meets expectations (1); exceeds expectations (2).  

  The maximum possible score on this assignment is 22/22. Bonus materials are completely optional.

  ### Final Project Milestone 1

  ------

  The first Milestone for the Final Project is due by Sunday, August 6th, 2017  Please hand in a wireframe (via Slack) with notes directly on it, or as an additional page.  Combined, the two components should convey: 

  - the topic/idea that you are interested in focusing on
  - enough insight into scale/scope that I can help gauge feasibility in the scope of this class
  - a general sense of how the various technical requirements will be met (how you may use JavaScript or what features you are thinking)

  Remeber, there is an example wireframe in the class repo.  

  ​

  ​

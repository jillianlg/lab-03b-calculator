# lab-03b-calculator
Alchemy: Dev 101

*Outcome*
===
- User should be able to calulate the value of two numbers.
    - They will select what type of output based on where enter the input values.
    - There should be two inputs and a button
    - When the button is clicked, the sum of the value in the two inputs shows up on the page

*Write HTML*
===
1) Four different boxes that can calculate (+, - , * and /) user input.
1) Two inputs with IDs per box.
1) A button with an ID per box.
1) A span with and ID per box.

*Get DOM*
===
1) Grab the two inputs
    - Validate by logging them out
1) Grab the sum `span`: the place where we will inject the sum
    - Validate by logging it out
1) Grab the button
    - Validate by logging it out

*Event Listener (user interaction)*
===
1) Have 'event listener' deploy on the 'click' of the button
    - Validate that the event listener is wired up by logging something ('hello!') out on click
1) When the user clicks the button the 'event listener' will: 
    - Get the values of the two inputs
    - Add together the VALUE of the two inputs
    - Inject the sum into our sum `span`
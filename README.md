# cypress-viewport

Run Locally 🚀

git clone : https://github.com/prasanthvb/cypress-viewport.git

npm install

Update the credentials in credentials.json in fixtures folder

npm run cy-test


API TEST :
1. Add User , POST API - https://thinking-tester-contact-list.herokuapp.com/users

body => {
    "firstName": string,
    "lastName": string,
    "email": string,
    "password": string
     }
	 
2. Fetch User , GET API  - https://thinking-tester-contact-list.herokuapp.com/users/me

   header:
   Authorization : Bearer {{token}}

###Tasks

1. Validate firstName,lastName and email fields value returned by Fetch User api is same as provided while adding a user.
2. Validate that no field has value as undefined or empty value.
3. Validate user is not able to fetch user details with invalid token.

#Accessibility Testing

Step 1 Install Dependencies 
 npm install cypress-axe axe-core

Step 2 Include the commands. Update cypress/support/index.js file to include the cypress-axe commands by adding:
import 'cypress-axe'

Step 3 cy.injectAxe() - This will inject the axe-core runtime into the page under test. You must run this after a call to cy.visit() and before you run the checkA11y command.

Step 4 cy.checkA11y() - This will run axe against the document at the point in which it is called. This means you can call this after interacting with your page and uncover accessibility issues introduced as a result of rendering in response to user actions.

cy.checkA11y(arg1, arg2, agr3)
arg1 - Selector (Default is Document, Select a specific Selector, Exclude a specific Selector)
arg2 - Change the default rules
agr3 - Callback to work with violations
## BASIC AUTHENTICATION FLOW OF ANY WEB APP. HERE GOOGLE OAUTH CAN BE REPLACED BY A NORMAL BACKEND ALSO

1. Initially Login Button will be visible on the navbar of the home page.
2. On Clicking Login button  an API request will be made
3. Then API will check our ID from GOOGLE using Google OAuth 
4. and It will save/set our data (using localStorage.setItem method) in the Browser Local storage
5. Then it will render the Logout button and hide the Login button based on if local storage has data or null value
6. After clicking the Logout button, we will again redirect to the initial page.

## HOW TO DO OAUTH IN REACT APP
1. XYZ

Feature: Authenication

Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user submit credentials "demo01@demo.com" and "Welcome1" 
    Then the user should be redirected to the dashboard

Scenario: Cannot login with invalid credentials
    Given the user is on the login page
    When the user submit credentials "demo02@demo.com" and "Welcome1" 
    Then the user should see an error message "Unauthorized"

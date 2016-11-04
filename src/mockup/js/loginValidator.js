
// Validation (Makes use of validate.js library, http://rickharrison.github.io/validate.js/)
var login_validator = new FormValidator('login_form', [{
    name: 'login_user',
    display: 'Username/Email',
    rules: 'required'
}, {
    name: 'login_password',
    display: 'password',
    rules: 'required'
}], function(errors, event) {
    if (errors.length > 0) {
        // Show the errors
        var errorString = '';

        for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
            errorString += errors[i].message + '<br />';
        }

        $('#login_validation_errors').show(250);
        $('#login_validation_errors').html(errorString);

    }
});
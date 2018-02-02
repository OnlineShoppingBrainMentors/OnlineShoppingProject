app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        Create_Account: 'Create Account',
        Name: 'Name',
        Userid: 'Userid',
        Password:'Password',
        ReenterPassword:'Re-enter Password',
        Phoneno:'Phone no',
        DOB:'DOB',
        Photo:'Photo',
        UploadPhoto:'Photo',
        Signature:'Signature',
        UploadSignature:'Signature',
        Submit: 'Submit',
        Reset: 'Reset',
        Login: 'Login'
       
    });
    $translateProvider.translations('hi', {
        Create_Account: 'खाता बनाएं',
        Name: 'नाम',
        Userid: 'यूज़र आईडी',
        Password:'पासवर्ड',
        ReenterPassword:'पासवर्ड फिर से दर्ज करें',
        Phoneno:'फोन नंबर',
        DOB:'जन्म तिथि',
        Photo:'फ़ोटो',
        UploadPhoto:'फोटो अपलोड करें',
        Signature:'हस्ताक्षर',
        UploadSignature:'हस्ताक्षर अपलोड करें',
        Submit: 'सब्मिट',
        Reset: 'रीसेट',
        Login: 'लॉग इन'
    });  $translateProvider.preferredLanguage('hi');
});
app.controller("Ctrl", function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
});

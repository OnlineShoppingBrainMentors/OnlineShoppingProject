app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
       shop:"shop",
       help:"help ",
       contact:"contact",
       account:"account",
       privacypolicy:"privacypolicy",
       termuse:"term of use",
       faq:"FAQ's",
       BUTTON_TEXT_EN: 'english',
       BUTTON_TEXT_DE: 'hindi'


    });
    $translateProvider.translations('hi', {
        shop:"shop in hindi",
        help:"help in hindi",
        contact:"contact in hindi",
        account:"account in hindi",
        privacypolicy:"privacypolicy in hindi",
        termuse:"term of use in hindi",
        faq:"FAQ's in hindi",
        BUTTON_TEXT_EN: 'english in hindi',
        BUTTON_TEXT_DE: 'hindi in hindi'
    });  
    $translateProvider.preferredLanguage('hi');
});
app.controller("Ctrl", function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
});

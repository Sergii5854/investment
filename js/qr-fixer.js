/**
 * Created by OKyianovskyi on 23.11.2016.
 */

$(document).ready(function() {
    setInterval(function(){
        $("#AcceptAgreement").styler(); //stylisation of checkbox
    }, 200)
});

/*************** Vertical alignment of error message block and close btn **************/

$(document).ready(function() {
    $('#registration_error_tech').css({
        position:'absolute',
        top: ($("._w-form").outerHeight() - $('#registration_error_tech').outerHeight())/2
    });
    $('#close_registration_error').css({
        position:'absolute',
        top: ($("._w-form").outerHeight() - $('#registration_error_tech').outerHeight())/2
    });
});

$(window).resize(function(){
    $('#registration_error_tech').css({
        position:'absolute',
        top: ($("._w-form").outerHeight() - $('#registration_error_tech').outerHeight())/2
    });
    $('#close_registration_error').css({
        position:'absolute',
        top: ($("._w-form").outerHeight() - $('#registration_error_tech').outerHeight())/2
    });

});
// Для запуска функции:
$(window).resize();

/*************** Linking checkbox wrapper to checkbox **************/

setInterval(function() {
    if ($(".jq-checkbox").hasClass("checked")) {
        $("#AcceptAgreement").attr("value", "true" )
    } else {
        $("#AcceptAgreement").attr("value", "false" )
    }
    if (bowser.msie) {
        $(".jq-checkbox").css("top", "3px");
    }
}, 200);

// /************  Fixing checkbox in AR  ****************/
// $(document).ready(function () {
//     if ($( "body" ).hasClass( "ar" )) {
//         setInterval(function() {
//             $(".jq-checkbox input").css("position", "relative");
//         }, 200);
//     }
// });





// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';

    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

const form = document.querySelector("#checkout-form");
// const verifyForm = document.querySelector("#verify-form");

form.addEventListener("submit", function (event) {
    // stop form submission
    event.preventDefault();

    let ccPhone = form.elements["cc-phone"].value;
    payVerify(form)
    $('#payVerifyModal').modal('show')

});

function verifyOTP(OTP) {
    let expected = localStorage.getItem("otpCode");
    if (OTP == expected){
        localStorage.removeItem("otpCode");
        alert("Payment Verified, Order Successful");
    } else {
        alert("Payment Verified failed, Order aborted due to Security Red Flags");
    }
}

$(document).ready(function(){

    $('#payVerifyModal').on('click','#verifysubmit', function (e) {
        console.log($('#verify-otp').val());
        let OTP = $('#verify-otp').val();
        verifyOTP(OTP)
        //console.log(e);
    });

})

// function verifyForm() {
//     // let verify = document.getElementById(verify-otp);
//     let OTP = $('#verify-otp').val();
//     alert(OTP);
//     verifyOTP(OTP)
// }



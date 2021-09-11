
function generateOTP() {
    let code = (localStorage.getItem("otpCode")) ? localStorage.getItem("otpCode") : Math.floor((Math.random() * 999999));
    localStorage.setItem("otpCode", code.toString());
    return code;
}

function sendOTP(code, phone) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.ikelvin.co/sms/send",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Basic Og=="
        },
        "processData": false,
        "data": "{\n\t\"api_key\": \"709d65740b1ca881b60e077062810354\",\n\t\"source\": \"PayVerify\",\n\t\"destination\": \""+phone+"\",\n\t\"message\": \"Your OTP Code is: "+ code +" Use this Code To verify your payment\",\n\t\"type\": \"0\",\n\t\"report\": \"1\"\n}"
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}


function payVerify(form) {

    let ccPhone = form.elements["cc-phone"].value;
    let ccNumber = form.elements["cc-number"].value;
    let otpCode = generateOTP();
    sendOTP(otpCode, ccPhone);
}
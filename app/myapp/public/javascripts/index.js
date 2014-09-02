
function ready() {
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

	var btn = document.querySelector("#btn");
    var inputText = document.querySelector("#email").value = "";

	btn.onclick = function() {
        var that = this;
		var inputText = document.querySelector("#email");

		var text = inputText.value;

        if(validateEmail(text)){
            $.ajax({
                url: 'saveEmail',
                type: 'POST',
                data: {
                    email: text
                }
            }).done(function(res) {
                gaEvents.track.call(that,'click');
            }).done(function(res) {
                $(".sendEmailDiv").addClass("hide");
                $(".emailSentDiv").removeClass("hide");
            });
        }
	}
}

window.addEventListener("load",ready,false);
window.onload = ready;

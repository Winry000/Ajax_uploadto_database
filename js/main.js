
$('input[type=password]').keyup(function() {
	var pswd = $(this).val();
	if ( pswd.length < 7 || pswd.length >20 ) {
		$('#notice1').html('Sorry,the length of password should between 7~20').css('color', 'red');
    } else {
	     $('#notice1').html('The length of password is valid').css('color', 'GREEN');
    }
	if ( pswd.match(/[a-z]/) ) {
		$('#letter').removeClass('cancel').addClass('accept');
	} else {
		$('#letter').removeClass('accept').addClass('cancel');
	}
	if ( pswd.match(/[A-Z]/) ) {
	    $('#capital').removeClass('cancel').addClass('accept');
	} else {
	    $('#capital').removeClass('accept').addClass('cancel');
	}

	if ( pswd.match(/[0-9]/) ) {
	    $('#number').removeClass('cancel').addClass('accept');
	} else {
	    $('#number').removeClass('accept').addClass('cancel');
	}

	if ( pswd.match(/[^a-zA-Z\d，@,_,-,(.) ]/) ){
	    $('#Character').removeClass('accept').addClass('cancel');
	} else {
	    $('#Character').removeClass('cancel').addClass('accept');
	}

	if ( pswd == $('#userid').val()) {
	    $('#same').removeClass('accept').addClass('cancel');
	} else {
	    $('#same').removeClass('cancel').addClass('accept');
	}


}).focus(function() {
	$('#pswd_info').show();
}).blur(function() {
	$('#pswd_info').hide();
});

//var a =document.getElementById("progressbar");

$('input[type=password]').focus(function() {
	$('#progressbar').show();
	$('#passwordstrength').show();
 }).blur(function() {
	$('#progressbar').hide();
	$('#passwordstrength').hide();
});

function passwordStrength(password)
{
	
	var desc = new Array();
	desc[0] = "Very Weak";
	desc[1] = "Weak";
	desc[2] = "Better";
	desc[3] = "Medium";
	desc[4] = "Strong";
	desc[5] = "Strongest";

	var score   = 0;

	//if password bigger than 6 give 1 point
	if (password.length > 6) score++;

	if (password.match(/[A-Z]/)) score++;
	if (password.match(/[a-z]/)) score++;
	if (password.match(/\d+/)) score++;
	if (password.match(/.[@,_,-,(.)]/) )score++;
	if (password.length > 10) score++;
	if (password.length > 16) score++;


	//if password has both lower and uppercase characters give 1 point	
     //document.write(a);
     document.getElementById("passwordstrength").innerHTML = desc[score];
	 document.getElementById("progressbar").value = score;
}

function resetForm(form) {
    // clearing inputs
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i<inputs.length; i++) {
        switch (inputs[i].type) {
            case 'hidden':
            case 'text':
                inputs[i].value = '';
                break;
            case 'password':
            	inputs[i].value = '';
            	break;
            case 'email':
            	inputs[i].value = '';
            	break;	
 			case 'tel':
            	inputs[i].value = '';
            	break;
        }
    }
    
    
    // clearing textarea
    var t= form.getElementsByTagName('textarea');
    for (var i = 0; i<t.length; i++) {
        t[i].innerHTML= '';
    }
    
}


function myFunction() {
	var userid = document.getElementById("userid").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var security1 = document.getElementById("security1").value;
	var security2 = document.getElementById("security2").value;
	var telnumber = document.getElementById("telnumber").value;
	var comment = document.getElementById("comment").value;
	// Returns successful data submission message when the entered information is stored in database.
	// AJAX code to submit form.
	var dataString = 'userid='+userid+'&email='+email+'&password='+password+'&security1='+security1+'&security2='+security2+'&telnumber='+telnumber+'&comment'+comment; 
	$.ajax({
		type: "POST",
		url: "db/connect.php",
		data: dataString,
		cache: false,
		success: function(html) {
			alert(html);
		}
	});
return false;
}

// $('input#button').on('click', function(){
// 	// window.location = "./save.html"
// 	//window.location.href='./save.html'
// 	var userid = $("input#userid").val();
// 	var password = $("#password").val();
// 	var email = $("#email").val();
// 	var security1 = $("#security1").val();
// 	var security2 = $("#security2").val();
// 	var mobile = $("#tel").val();
// 	var comment = $("#comment").val();
// 	$.post('ajax/name.php',{userid: userid},function(data) {
// 		  $( "div#userid" ).text(data);
// 	});

// })



// function save_settings(){
// 	;
// 	localStorage.setItem("userid", $("#userid").val()); 
// 	localStorage.setItem("password", $("#password").val()); 
// 	localStorage.setItem("email", $("#email").val());
// 	localStorage.setItem("security1", $("#security1").val());
// 	localStorage.setItem("security2", $("#security2").val());
// 	localStorage.setItem("mobile", $("#tel").val());
// 	localStorage.setItem("comment", $("#comment").val());
// 	var userid = $("#userid").val();
// 	var password = $("#password").val();
// 	var email = $("#email").val();
// 	var security1 = $("#security1").val();
// 	var security2 = $("#security2").val();
// 	var mobile = $("#tel").val();
// 	var comment = $("#comment").val();
// }


<?php
// if the url field is empty, but the message field isn't
if(isset($_POST['url']) && $_POST['url'] == '' && $_POST['message'] != ''){
	// put your email address here
	$youremail = 'don.juncos@gmail.com';
	// prepare a "pretty" version of the message
	// Important: if you added any form fields to the HTML, you will need to add them here also
	$body = "This is the form that was just submitted:
	Name:  $_POST[name]
	E-Mail: $_POST[email]
	Asunto: $_POST[asunto]
	Message: $_POST[message]";
	// Use the submitters email if they supplied one
	// (and it isn't trying to hack your form).
	// Otherwise send from your email address.
	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}
	// finally, send the message
	mail($youremail, 'Consultas VermiBA', $body, $headers );
}
// otherwise, let the spammer think that they got their message through
// uncomment these lines to redirect instead of displaying HTML
//header('Location: http://www.mysite.com/thankyou.html');
//exit('Redirecting you to http://www.mysite.com/thankyou.html');
?>
<!DOCTYPE HTML>
<html>
<head>

<title>Thanks!</title>

</head>
<body>

<h1>GRACIAS POR LA CONSULTA</h1>
<p>Intentaremos contestar a las brevedad!</p>
<a href="https://vermiba.000webhostapp.com/" title="">Volver al sitio</a>

</body>
</html>
<?php

// Define contact information
define( 'RECIPIENT_NAME', 'John Smith' );
define( 'RECIPIENT_EMAIL', 'john@example.com' );

// Define response markup classNames
define('NAME_ERROR', '.is-name');
define('EMAIL_ERROR', '.is-email');
define('SUBJECT_ERROR', '.is-subject');
define('MESSAGE_ERROR', '.is-message');
define('AJAX_ERROR', '.is-ajax');
define('SUCCESS', '.is-success');

// Read and filter the form values
$success = false;
$name = isset( $_POST['name'] ) ? filter_var($_POST['name'], FILTER_SANITIZE_STRING): '';
$email = isset( $_POST['email'] ) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL): '';
$subject = isset( $_POST['subject'] ) ? filter_var($_POST['subject'], FILTER_SANITIZE_STRING): '';
$message = isset( $_POST['message'] ) ? filter_var($_POST['message'], FILTER_SANITIZE_STRING): '';

// Additional php validation: on error return in json className of message to show
// If length is less than 1 or greater than 100 it will respond JSON error.
if(strlen($name)<2 || strlen($name)>100){
	$response = json_encode(array('type'=>'error', 'className' => NAME_ERROR));
	die($response);
}
// Email validation
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
	$response = json_encode(array('type'=>'error', 'className' => EMAIL_ERROR));
	die($response);
}
// Check for emtpy or too short subject
if(strlen($subject)<3){
	$response = json_encode(array('type'=>'error', 'className' => SUBJECT_ERROR));
	die($response);
}
// Check for emtpy or too short message
if(strlen($message)<3){
	$response = json_encode(array('type'=>'error', 'className' => MESSAGE_ERROR));
	die($response);
}

// If all values exist, send the email
if ( $name && $email && $subject && $message ) {
  $recipient = RECIPIENT_NAME . ' <' . RECIPIENT_EMAIL . '>';
  $headers = 'From: ' . $name . ' <' . $email . '>';
  $mail = mail( $recipient, $subject, $message, $headers );
}

// Return an appropriate response to the browser
if ( isset($_GET['ajax']) ) {
	$response = json_encode(array('type'=>'success', 'className' => SUCCESS));
	die($response);
} else {	
	$response = json_encode(array('type'=>'error', 'className' => AJAX_ERROR));
	die($response);
}
?>
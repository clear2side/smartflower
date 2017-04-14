<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "d@dizaap.com";
    $sendfrom   = "smartflower.com.ua@gmail.com";
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData<br> <b>User-name:</b> $name <br><b>Telephone:</b> $phone";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center><p class="success">Thanks for the massege!</p></center>';
    }
    else 
    {
    echo '<center><p class="fail"><b>What wrong. Check your connection!</b></p></center>';
    }
} else {
    http_response_code(403);
    echo "Try again";
}
?>
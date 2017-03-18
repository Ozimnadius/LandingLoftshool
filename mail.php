<?php

//echo "<PRE>";
//print_r ($_POST['name']);
//echo "</PRE>";
//die();


//require "PHPMailer-master/PHPMailerAutoload.php";
//
//
//$data = $_POST;
//$mail = new PHPMailer;
//
////$mail->SMTPDebug = 3;                               // Enable verbose debug output
//
//$mail->isSMTP();                                      // Set mailer to use SMTP
//$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
//$mail->SMTPAuth = true;                               // Enable SMTP authentication
//$mail->Username = 'ozimnadius';                       // SMTP username
//$mail->Password = 'A7rty49Z82';                           // SMTP password
//$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
//$mail->Port = 465;                                    // TCP port to connect to
//
//$mail->setFrom('ozimnadus@mail.ru', 'Строительная компания');
//$mail->addAddress('ozimnadus@mail.ru', 'Mikhail Seregin');     // Add a recipient
//$mail->isHTML(true);                                  // Set email format to HTML
//
//$mail->Subject = 'Тестовое письмо от ' .$data['name'];
//$mail->Body = 'Test' .$data['textarea'];
//$mail->AltBody = 'Test' .$data['textarea'];
//
//$result = $mail->send();
//if (!$result) {
//    echo json_encode(['status' => false, 'error' => 1, 'message' => $mail->ErrorInfo]);
////        echo 'Mailer Error: ' . $mail->ErrorInfo;
//} else {
//    echo json_encode(['status' => true, 'error' => 0, 'message' => 'Ваше сообщение было отправлено']);
//}


$data = $_POST;
$result = mail('ozimnadius@mail.ru, swat-727@yandex.ru', 'Привет от ' . $data['name'], $data['textarea']);

if (!$result) {
    echo json_encode(['status' => false, 'error' => 1, 'message' => 'Ваше сообщение НЕ было отправлено']);
//        echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo json_encode(['status' => true, 'error' => 0, 'message' => 'Ваше сообщение было отправлено']);
}





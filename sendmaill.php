<?php
// Подключаем PHPMailer
require './php-mailer\PHPMailer-6.8.0\src\PHPMailer.php';
require './php-mailer\PHPMailer-6.8.0\src\SMTP.php';
require './php-mailer\PHPMailer-6.8.0\src\Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $phone = $_POST["phone"];
  $mail = $_POST["mail"];
  $comment = $_POST["comment"];

  $mail = new PHPMailer(true);

  try {
    // Настройки для отправки письма через SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Укажите адрес вашего SMTP-сервера
    $mail->SMTPAuth = true;
    $mail->Username = 'ab1246440@gmail.com'; // Укажите ваш email для авторизации на SMTP-сервере
    $mail->Password = 'Abpar3636@'; // Укажите пароль от вашего email
    $mail->SMTPSecure = 'tls'; // Используйте 'tls' или 'ssl', в зависимости от настроек вашего SMTP-сервера
    $mail->Port = 465; // Укажите порт вашего SMTP-сервера

    // Задаем параметры письма
    $mail->setFrom('ваш_email@example.com', 'Ваше имя'); // Адрес отправителя и имя
    $mail->addAddress('res123kargo@gmail.com'); // Адрес получателя (замените на свой адрес)
    $mail->Subject = 'Запись на пробный урок'; // Тема письма
    $mail->Body = "Имя: {$name}\nТелефон: {$phone}\nEmail: {$mail}\nКомментарий: {$comment}"; // Содержание письма

    // Отправляем письмо
    $mail->send();
    echo 'success';
  } catch (Exception $e) {
    echo "error: {$mail->ErrorInfo}";
  }
}
?>

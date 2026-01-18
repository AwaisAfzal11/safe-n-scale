<?php
// Set headers to allow cross-origin requests and define JSON content type
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // --- Get data from JSON payload ---
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    if ($data === null) {
        echo json_encode(["status" => "error", "message" => "Invalid JSON data."]);
        exit;
    }

    // --- Sanitize and retrieve form data ---
    $name = isset($data['name']) ? htmlspecialchars(trim($data['name'])) : '';
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $company = isset($data['company']) ? htmlspecialchars(trim($data['company'])) : 'Not provided';
    $message = isset($data['message']) ? htmlspecialchars(trim($data['message'])) : '';

    // --- Validation ---
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields (Name, Email, Message)."]);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }
    
    // --- Email Configuration ---
    $to = "afzalawais353@gmail.com, info@safenscale.com"; 
    $subject = "New Contact Form Submission from: " . $name;
    
    // Construct the email message
    $email_content = "You have received a new message from the website contact form.\n\n"
                   . "===========================================\n"
                   . " SENDER DETAILS\n"
                   . "===========================================\n"
                   . "Full Name:    {$name}\n"
                   . "Email:        {$email}\n"
                   . "Company:      {$company}\n\n"
                   
                   . "===========================================\n"
                   . " MESSAGE\n"
                   . "===========================================\n"
                   . "{$message}\n";
    
    // Set email headers
    $headers = "From: no-reply@localhost\r\n" .
               "Reply-To: {$email}\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // --- Send Email ---
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(["status" => "success", "message" => "Thank you! Your message has been sent successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Server error: Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
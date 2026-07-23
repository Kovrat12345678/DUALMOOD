<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if ($data) {
        $name = $data['customer_name'] ?? '';
        $email = $data['customer_email'] ?? '';
        $phone = $data['customer_phone'] ?? '';
        $zip = $data['customer_zip'] ?? '';
        $city = $data['customer_city'] ?? '';
        $address = $data['customer_address'] ?? '';
        $items = $data['cart_items'] ?? [];
        $total = $data['total_price'] ?? 0;

        // Format items string
        $itemsStr = "";
        foreach ($items as $item) {
            $itemsStr .= "- " . $item['name'] . " (Méret: " . $item['size'] . ") - " . $item['price'] . "\n";
        }

        // Email to Admin (byekovrat@gmail.com)
        $to_admin = "byekovrat@gmail.com";
        $subject_admin = "Új DUALMOOD Rendelés - " . $name;
        $message_admin = "Új rendelés érkezett a weboldalról!\n\n" .
                         "Rendelő adatai:\n" .
                         "Név: $name\n" .
                         "Email: $email\n" .
                         "Telefon: $phone\n" .
                         "Cím: $zip $city, $address\n\n" .
                         "Rendelt termékek:\n" .
                         $itemsStr . "\n" .
                         "Végösszeg: " . number_format($total, 0, '', ' ') . " Ft\n";
        $headers_admin = "From: no-reply@dualmood.hu\r\n" .
                         "Reply-To: $email\r\n" .
                         "Content-Type: text/plain; charset=UTF-8\r\n";

        // Email to Customer
        $to_customer = $email;
        $subject_customer = "Rendelés visszaigazolás - DUALMOOD";
        $message_customer = "Kedves $name!\n\n" .
                           "Köszönjük a rendelésedet a DUALMOOD webshoptól!\n\n" .
                           "A rendelésed részletei:\n" .
                           $itemsStr . "\n" .
                           "Végösszeg: " . number_format($total, 0, '', ' ') . " Ft\n\n" .
                           "A csomagodat hamarosan összekészítjük és átadjuk a futárszolgálatnak, amiről újabb értesítést fogsz kapni.\n\n" .
                           "Üdvözlettel,\nA DUALMOOD csapata\n";
        $headers_customer = "From: no-reply@dualmood.hu\r\n" .
                            "Content-Type: text/plain; charset=UTF-8\r\n";

        // Send email to Admin (byekovrat@gmail.com) via FormSubmit
        $admin_payload = [
            "Name" => $name,
            "Email" => $email,
            "Phone" => $phone,
            "Address" => "$zip $city, $address",
            "Products" => str_replace("\n", ", ", trim($itemsStr)),
            "Total Value" => number_format($total, 0, '', ' ') . " Ft",
            "_subject" => "Új DUALMOOD Rendelés - " . $name
        ];
        
        $ch = curl_init('https://formsubmit.co/ajax/byekovrat@gmail.com');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($admin_payload));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        $response_admin = curl_exec($ch);
        $http_code_admin = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $mail_admin_sent = ($http_code_admin === 200);

        // Send email to Customer via FormSubmit
        $customer_payload = [
            "Name" => $name,
            "Message" => "Kedves $name! Köszönjük a rendelésedet a DUALMOOD webshopban! A végösszeg: " . number_format($total, 0, '', ' ') . " Ft. A csomagodat hamarosan összekészítjük és átadjuk a futárszolgálatnak.",
            "Products Ordered" => str_replace("\n", ", ", trim($itemsStr)),
            "Total" => number_format($total, 0, '', ' ') . " Ft",
            "_subject" => "Rendelés visszaigazolás - DUALMOOD"
        ];

        $ch2 = curl_init('https://formsubmit.co/ajax/' . $email);
        curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch2, CURLOPT_POST, true);
        curl_setopt($ch2, CURLOPT_POSTFIELDS, json_encode($customer_payload));
        curl_setopt($ch2, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        $response_customer = curl_exec($ch2);
        $http_code_customer = curl_getinfo($ch2, CURLINFO_HTTP_CODE);
        curl_close($ch2);

        $mail_customer_sent = ($http_code_customer === 200);

        // Save order to local orders.txt file for local testing
        $log_entry = "=== RENDELÉS: " . date("Y-m-d H:i:s") . " ===\n" .
                     "Név: $name\n" .
                     "Email: $email\n" .
                     "Telefon: $phone\n" .
                     "Cím: $zip $city, $address\n" .
                     "Termékek:\n" . $itemsStr .
                     "Végösszeg: $total Ft\n" .
                     "Email küldés státusz: Admin: " . ($mail_admin_sent ? "SIKERES (FormSubmit)" : "MEGHIÚSULT") . 
                     ", Vásárló: " . ($mail_customer_sent ? "SIKERES (FormSubmit)" : "MEGHIÚSULT") . "\n" .
                     "====================================\n\n";
        
        file_put_contents('orders.txt', $log_entry, FILE_APPEND);

        echo json_encode([
            "success" => true,
            "message" => "Rendelés sikeresen rögzítve!",
            "mail_admin" => $mail_admin_sent,
            "mail_customer" => $mail_customer_sent
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Érvénytelen adatok."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Csak POST kérések engedélyezettek."]);
}
?>

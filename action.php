<html>
<head>
  <title>Sending SMS using PHP</title>
</head>
<body>


<form method="post">
  <label>Mobile NUMBER</label>
  <input type="text" name="num">
  <br><br>
<!--  <label>Country Code</label>-->
<!--  <select name="Code">-->
<!--    <option value="">SELECT Here...</option>-->
<!--    <option value="1">USA - +1</option>-->
<!--    <option value="233">Ghana - +233</option>-->
<!--    <option value="234">Nigeria - +234</option>-->
<!--    <option value="44">United Kingdom - +44</option>-->
<!--  </select>-->
  <br><br>
  <label>Enter Message</label>
  <input type="text" name="message">

  <input type="submit" name="submit">

</form>

</body>
</html>

<?php

  if (isset($_POST["submit"])) {

      $num = $_POST['num'];
      $message = $_POST['message'];


      $curl = curl_init();

      curl_setopt_array($curl, [
          CURLOPT_URL => "https://api.ikelvin.co/sms/send",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "POST",
          CURLOPT_POSTFIELDS => "{\n\t\"api_key\": \"709d65740b1ca881b60e077062810354\",\n\t\"source\": \"PayVerify\",\n\t\"destination\": \"$num\",\n\t\"message\": \"$message\",\n\t\"type\": \"2\",\n\t\"report\": \"1\"\n}",
          CURLOPT_HTTPHEADER => [
              "Authorization: Basic Og==",
              "Content-Type: application/json"
          ],
      ]);

      $response = curl_exec($curl);
      $err = curl_error($curl);

      curl_close($curl);

  if ($err) {
      echo "cURL Error #:" . $err;
    ?>
    <script>alert('message not sent!')</script>
  <?php
}
else{
  #print the final result
    echo $response;
?>
<script>alert('message sent!')</script>
<?php
}
}
?>
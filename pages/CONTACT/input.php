<?php

  
  //SERVERNAME
$servername = "sql104.epizy.com";
$username = "epiz_34253465";
$password = "aVhJRO3kHPN";
$dbname = "epiz_34253465_data";



/// DATA INPUT 
$uname = $_POST['uname'];
$number = $_POST['unumber'];
$email = $_POST['uemail'];
$msg = $_POST['umsg'];



// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

//SUBMIT DATA
$sql = "INSERT INTO msg (id, name, number, email,message)
VALUES ('','$uname','$number','$email','$msg')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
  header("location:javascript://history.go(-1)");
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>
    

    














</body>

<script>


function swms(){
    document.getElementById('ms').style.display= "none";
}

</script>


</html>
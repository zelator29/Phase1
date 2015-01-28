
    <?php
    
        $wsdl = "https://e16060aa4099466ea16291a5c0d782ee.cloudapp.net/aggregator.asmx?WSDL";
    
        $client = new SoapClient($wsdl, array(
                                "login"=>"hoc0016-mobile",
                                "password"=>"devPassw0rd"));
        $HostSystemId = "9999";
        $username = $_POST["username"];
        $password = $_POST["password"];

    
        $parameters= array("HostSystemId"=>$HostSystemId,
        					"username"=>$username,
        					"password"=>$password);
    
        $value = $client->AuthenticateVolunteerNew($parameters);
    
        echo $value->AuthenticateVolunteerNewResult;

    
    ?>
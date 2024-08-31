<?php
    $car = array("volvo","bmw");
    echo $car[1], "<br>";

    $car = array(
        "volvo",
        "bmw",
        "toyota",
    );

    $motors = [
        "honda",
        "yamaha",
        "dukati",
    ];
    echo $motors[2], "<br>";
    $car2 = array(
        "ford" => "mustang",
        "maserati" => "unknow",
        "bmw" => "e3",
    );
    echo $car2["bmw"], "<br>";

    $user = array(
        "firsname" => "sher joshua",
        "lastname" => "mendoza",
        "middlename" => "francisco",
    );
    echo $user["middlename"];

?>
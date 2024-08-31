<h1> Hands-on Activity</h1>
<?php
$table = array(
    "header" => array(
        "Student ID",
        "Lastname",
        "Middlename",
        "Firstname",
        "Course",
        "Section"
    ),
    "body" => array(
        array(
            "lastname" => "lastname",
            "middlename" => "middlename",
            "firstname" => "firstname",
            "course" => "BSIT",
            "section" => "section"
        ),
        array(
            "lastname" => "lastname",
            "middlename" => "middlename",
            "firstname" => "firstname",
            "course" => "BSIT",
            "section" => "section"
        ),
        array(
            "lastname" => "lastname",
            "middlename" => "middlename",
            "firstname" => "firstname",
            "course" => "BSIT",
            "section" => "section"
        ),
        array(
            "lastname" => "lastname",
            "middlename" => "middlename",
            "firstname" => "firstname",
            "course" => "BSIT",
            "section" => "section"
        ),
        array(
            "lastname" => "lastname",
            "middlename" => "middlename",
            "firstname" => "firstname",
            "course" => "BSIT",
            "section" => "section"
        ),
        array(
            "lastname" => "lastname",
            "middlename" => "middlename",
            "firstname" => "firstname",
            "course" => "BSIT",
            "section" => "section"
        ),
        array(
            "lastname" => "lastname",
            "middlename" => "middlename",
            "firstname" => "firstname",
            "course" => "BSIT",
            "section" => "section"
        ),
        array(
            "lastname" => "lastname",
            "middlename" => "middlename",
            "firstname" => "firstname",
            "course" => "BSIT",
            "section" => "section"
        ),
        array(
            "lastname" => "lastname",
            "middlename" => "middlename",
            "firstname" => "firstname",
            "course" => "BSIT",
            "section" => "section"
        ),
        array(
            "lastname" => "lastname",
            "middlename" => "middlename",
            "firstname" => "firstname",
            "course" => "BSIT",
            "section" => "section"
        )
        
        

    )

    
)
    
?>
<?php
?>

<table border = "2">
    <thead>
    <?php

for($i = 0; $i<6 ; $i++ ){

?>
    
        <th><?php echo $table["header" ][$i] ?></th>
<?php
}
?>
      </thead> 
      <tbody>
    <?php

    for($i= 0; $i <= count($table["body"]) -1; $i++){
        echo "<tr>";
        echo "<td>".$i."</td>";
        echo "<td>".$table["body"][$i]["firstname"]."</td>";
        echo "<td>".$table["body"][$i]["lastname"]."</td>";
        echo "<td>".$table["body"][$i]["middlename"]."</td>";
        echo "<td>".$table["body"][$i]["section"]."</td>";
        echo "<td>".$table["body"][$i]["course"]."</td>";
        echo "</tr>";
?>
<!-- <tr><?php echo  $c ?></tr>
<tr><?php echo  $fname ?></Tr>
<tr><?php echo  $mname ?></Tr>
<tr><?php echo  $lname ?></Tr>
<tr><?php echo  $sec ?></Tr>
<tr><?php echo  $course ?></Tr> -->
    
<?php
};

?>
<
</th>
</tbody>

</table>
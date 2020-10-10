<?php 

class db {
    private $dbhost = "localhost";
    private $dbuser = "root";
    private $dbpass = "";
    private $dbname = "star_wars";

    // connect 
    public function connect() {
        $my_sql = "mysql:host=$this->dbhost;dbname=$this->dbname";
        $dbConnection = new PDO ($my_sql, $this->dbuser, $this->dbpass);
        $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $dbConnection;
    }
}

?>
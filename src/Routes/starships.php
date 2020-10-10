<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;


// Get all Ships
$app->get('/api/all', function(Request $request, Response $response) {
    
    $sql = "SELECT * FROM ships";
    try {
        // Get databse object
        $db = new db();
        $db = $db->connect();
        $stmt = $db->query($sql);
        $songs = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        return $response->withJson($songs);

    }catch(PDOException $e) {
        return $response->getBody()->write($e->getMessage());
    }
    
});


// Get single ship
$app->get('/api/ships/{name}', function(Request $request, Response $response) {

    $nameObj = $request->getAttribute("name");
    $nameLike = $nameObj."%";
    
    $sql = "SELECT * FROM ships WHERE name LIKE :names ";
    try {
        // Get databse object
        $db = new db();
        $db = $db->connect();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':names', $nameObj );
        $stmt->execute();
        $ship = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        if (empty($ship) ) {
            $object = new stdClass();
            $object->message = 'Ship is not in our database yet';
            return $response->withJson($object);
        }else {
           return $response->withJson($ship);
        }

    }catch(PDOException $e) {
        return $response->getBody()->withJson($e->getMessage());
    }
    
});


// Add a single ship
$app->post('/api/ships/add', function(Request $request, Response $response) {
    $post = (array)$request->getParsedBody();

    $message = '{"message":"Ship [] is required"}';

    if(empty($post['name'])){
        return $response->withJson(str_replace("[]", "name", $message))->withStatus(400);
    }elseif(empty($post['model'])){
        return $response->withJson(str_replace("[]", "model", $message))->withStatus(400);
    }elseif(empty($post['manufacturer'])){
        return $response->withJson(str_replace("[]", "manufacturer", $message))->withStatus(400);
    }elseif(empty($post['length'])){
        return $response->withJson(str_replace("[]", "length", $message))->withStatus(400);
    }elseif(empty($post['cost_in_credits'])){
        return $response->withJson(str_replace("[]", "cost_in_credits number", $message))->withStatus(400);
    }elseif(empty($post['crew'])){
        return $response->withJson(str_replace("[]", "crew capacity number", $message))->withStatus(400);
    }elseif(empty($post['passengers'])){
        return $response->withJson(str_replace("[]", "passengers capacity number", $message))->withStatus(400);
    }elseif(empty($post['cargo_capacity'])){
        return $response->withJson(str_replace("[]", "cargo capacity number", $message))->withStatus(400);
    }elseif(empty($post['hyperdrive_rating'])){
        return $response->withJson(str_replace("[]", "hyperdrive rating", $message))->withStatus(400);
    }elseif(empty($post['starship_class'])){
        return $response->withJson(str_replace("[]", "starship class", $message))->withStatus(400);
    }

    $row = [
        'name' => $post['name'],
        'model' => $post['model'],
        'manufacturer' => $post['manufacturer'],
        'length' => $post['length'],
        'cost_in_credits' => $post['cost_in_credits'],
        'crew' => $post['crew'],
        'passengers' => $post['passengers'],
        'cargo_capacity' => $post['cargo_capacity'],
        'hyperdrive_rating' => $post['hyperdrive_rating'],
        'starship_class' => $post['starship_class']
    ];

    $sql = "INSERT INTO ships (name, model, manufacturer, cost_in_credits, length, crew, passengers, cargo_capacity, hyperdrive_rating, starship_class) VALUES ( :name, :model, :manufacturer, :cost_in_credits, :length, :crew, :passengers, :cargo_capacity, :hyperdrive_rating, :starship_class)";
    try {
        // Get databse object
        $db = new db();
        $db = $db->connect();
        $stmt = $db->prepare($sql);
        $stmt->execute($row);

        $message = '{"notice": {"text":"Starship Added"}}';
        return $response->withJson($message);

    }catch(PDOException $e) {
        return $response->getBody()->withJson($e->getMessage());
    }
    
});


?>
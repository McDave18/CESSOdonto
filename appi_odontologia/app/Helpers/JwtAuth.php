<?php
namespace App\Helpers;

use Firebase\JWT\JWT;
use Illuminate\Support\Facades\DB;
use App\Doctores;

class JwtAuth{
    public $key;
    public function __construct() {
        $this->key = 'quik_clave_secret-9912323';
    }
    public function signup($email,$password,$getToken=null){
         //buscar si existe el usuario con su credenciales
        $user = Doctores::where([
            'Id_MatriculaD' => $email,
            'psswdE' => $password
            ])->first();
        //Comprobar si sn correctas
        $signup=false;
        if(is_object($user))
        {
            $signup = true;
        }
        //General el token con sus datos
        if($signup){
            $token = array(
                'sub' =>$user->id,
                'email' => $user->Id_MatriculaD,
                'name' => $user->NombreD,
                'surname' => $user->PaternoD,
                'iat' => time(),
                'exp' => time() + (7*24*60*60)
                
            );
            $jwt = JWT::encode($token,$this->key,'HS256');
            $decode = JWT::decode($jwt, $this->key,['HS256']);
            if(is_null($getToken)){
                $data = $jwt;
            }else{
                $data = $decode;
            }
        }else{
            $data = array(
                'status' => 'error',
                'message' => 'Login incorrecto',
                'Id_MatriculaD' => $email,
                'psswdE' => $password,
                'usuario' => $user
                
            );
        }
        return $data;
    }
    
    public function checkToken($jwt,$getIdentity=false) {
        $auth = false;
        try{
            $jwt= str_replace('"', '', $jwt);
            $decoded = JWT::decode($jwt, $this->key,['HS256']);
        
        } catch (\UnexpectedValueException $ex) {
            $auth = false;
        } catch (\DomainException $ex){
            $auth = false;
        }if(!empty($decoded)&& is_object($decoded) && isset($decoded->sub)){
            $auth = true;
        }else{
            $auth = false;
        }
        if($getIdentity){
            return $decoded;
        }
        return $auth;
    }
   
    
    
    //Devolver los datos decodificados o el token
}




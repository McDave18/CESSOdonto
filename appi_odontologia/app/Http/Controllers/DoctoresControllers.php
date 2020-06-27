<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Doctores;
use Illuminate\Http\Response;

class DoctoresControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function store(Request $request){
        $json = $request->input('json',null);
       $params = json_decode($json,true);
        if(!empty($params)){

            // cra las demas relaciones que se hacen en te formulario

            $doctores= new Doctores();
            // $doctores->Id_Doctor = "12i";
            $doctores->NombreD=$params["nombre"];
            $doctores->PaternoD=$params["paterno"];
            $doctores->MaternoD=$params["materno"];
            $doctores->RFC_Dr=$params["rfc"];
            $doctores->Estudiante= $params["tipoD"]; //es boleano, es para ver si es doctor o estudiante ok
            $doctores->Id_MatriculaD= $params["numid"];
            $passwd = $params["psswd"];
            $psswdE=hash("sha256",$passwd);
            $doctores->psswdE=$psswdE;
            $doctores->save();


            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'formulario2' => $params
            );
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'formulario2' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }

    public function login (Request $request){
        $jwtAuth = new \JwtAuth();
        //recibir datos
        $json = $request->input('json',null);
        $params = json_decode($json);
        $params_array = json_decode($json,true);
         $validate = \Validator::make($params_array,[
               'password' => 'required'

            ]);
         if($validate->fails()){
              $signup = array(
                'status' => 'error',
                'code'=> 404,
                'pass'  =>$params,
                'message' =>'El usuario no se ha podido autentificar',
                  'errors' => $validate->errors()
                ) ;
         }
         else{
              $pass=hash('sha256',$params->password );  
              
              $signup =$jwtAuth->signup($params->NumIDM,$pass);
               if(!empty($params->gettoken)){
                   $signup = $jwtAuth->signup($params->NumIDM,$pass,true);
               }
         }
        
              
        return response()->json($signup,200);
    }
    
}
    

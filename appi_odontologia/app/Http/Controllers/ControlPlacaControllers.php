<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sesiones;

class ControlPlacaControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $controlplacadb = Sesiones::where("Id_Paciente",$id)->get(); 
        if(is_object($controlplacadb)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'Sesiones' => $controlplacadb
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'Sesiones' => 'La Sesiones no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $controlplacadb = new Sesiones();
            $controlplacadb->Id_Paciente=$params["Id_Pacient"];;
            $controlplacadb->FechaCPDB=$params["fechacpdb"];
            $controlplacadb->Sesion=$params["sesion"];
            $controlplacadb->Porc_P=$params["porcentaje"];
            $controlplacadb->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'controlplacadb' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'controlplacadb' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

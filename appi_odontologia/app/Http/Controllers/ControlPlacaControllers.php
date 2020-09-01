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
        $control_placadb = Sesiones::where("Id_Paciente",$id)->get(); 
        if(is_object($control_placadb)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'Sesiones' => $control_placadb
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

            $control_placadb = new Sesiones();
            $control_placadb->Id_Paciente=$params["Id_Pacient"];;
            $control_placadb->FechaCPDB=$params["fechacpdb"];
            $control_placadb->Sesion=$params["sesion"];
            $control_placadb->Porc_P=$params["porcentaje"];
            $control_placadb->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'control_placadb' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'control_placadb' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

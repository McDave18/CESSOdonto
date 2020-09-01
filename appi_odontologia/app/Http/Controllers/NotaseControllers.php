<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notas;

class NotaseControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $notasevolucion = Notas::where("Id_Paciente",$id)->get(); //tengo que hacer esto de nuevo para lo de Exploracion?
        if(is_object($notasevolucion)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'Notas' => $notasevolucion
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'Notas' => 'La Notas no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            // crea las demas relaciones que se hacen en este formulario

            $notasevolucion = new Notas();
            $notasevolucion->Id_Paciente=$params["Id_Pacient"];;
            $notasevolucion->FechaE=$params["fechanota"];
            $notasevolucion->NoDiente=$params["nodiente"];
            $notasevolucion->Tratamiento=$params["trata"];
            $notasevolucion->NombreDr=$params["nombredr"];
            $notasevolucion->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'notasevolucion' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'notasevolucion' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

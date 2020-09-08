<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlacaAct7;

class PlacaAct7Controllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $placaact7 = PlacaAct7::where("Id_Paciente",$id)->get(); 
        if(is_object($placaact7)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'PlacaAct7' => $placaact7
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'PlacaAct7' => 'La PlacaAct7 no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $placaact7 = new PlacaAct7();
            $placaact7->Id_Paciente=$params["Id_Pacient"];
            $placaact7->A7DDS18=$params["AdDS18"];
            $placaact7->A7DDS17=$params["AdDS17"];
            $placaact7->A7DDS16=$params["AdDS16"];
            $placaact7->A7DDS15=$params["AdDS15"];
            $placaact7->A7DDS14=$params["AdDS14"];
            $placaact7->A7DDS13=$params["AdDS13"];
            $placaact7->A7DDS12=$params["AdDS12"];
            $placaact7->A7DDS11=$params["AdDS11"];
            
            $placaact7->A7DIS28=$params["AdIS28"];
            $placaact7->A7DIS27=$params["AdIS27"];
            $placaact7->A7DIS26=$params["AdIS26"];
            $placaact7->A7DIS25=$params["AdIS25"];
            $placaact7->A7DIS24=$params["AdIS24"];
            $placaact7->A7DIS23=$params["AdIS23"];
            $placaact7->A7DIS22=$params["AdIS22"];
            $placaact7->A7DIS21=$params["AdIS21"];
            
            $placaact7->A7DDI48=$params["AdDI48"];
            $placaact7->A7DDI47=$params["AdDI47"];
            $placaact7->A7DDI46=$params["AdDI46"];
            $placaact7->A7DDI45=$params["AdDI45"];
            $placaact7->A7DDI44=$params["AdDI44"];
            $placaact7->A7DDI43=$params["AdDI43"];
            $placaact7->A7DDI42=$params["AdDI42"];
            $placaact7->A7DDI41=$params["AdDI41"];
            
            $placaact7->A7DII38=$params["AdII38"];
            $placaact7->A7DII37=$params["AdII37"];
            $placaact7->A7DII36=$params["AdII36"];
            $placaact7->A7DII35=$params["AdII35"];
            $placaact7->A7DII34=$params["AdII34"];
            $placaact7->A7DII33=$params["AdII33"];
            $placaact7->A7DII32=$params["AdII32"];
            $placaact7->A7DII31=$params["AdII31"];
            
            $placaact7->TotalPlacaActual7=$params["totala"];
            $placaact7->A7Obser=$params["AObser"];

            $placaact7->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'placaact7' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'placaact7' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

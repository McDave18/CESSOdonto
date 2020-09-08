<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlacaAct3;

class PlacaAct3Controllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $placaact3 = PlacaAct3::where("Id_Paciente",$id)->get(); 
        if(is_object($placaact3)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'PlacaAct3' => $placaact3
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'PlacaAct3' => 'La PlacaAct3 no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $placaact3 = new PlacaAct3();
            $placaact3->Id_Paciente=$params["Id_Pacient"];
            $placaact3->A3DDS18=$params["AdDS18"];
            $placaact3->A3DDS17=$params["AdDS17"];
            $placaact3->A3DDS16=$params["AdDS16"];
            $placaact3->A3DDS15=$params["AdDS15"];
            $placaact3->A3DDS14=$params["AdDS14"];
            $placaact3->A3DDS13=$params["AdDS13"];
            $placaact3->A3DDS12=$params["AdDS12"];
            $placaact3->A3DDS11=$params["AdDS11"];
            
            $placaact3->A3DIS28=$params["AdIS28"];
            $placaact3->A3DIS27=$params["AdIS27"];
            $placaact3->A3DIS26=$params["AdIS26"];
            $placaact3->A3DIS25=$params["AdIS25"];
            $placaact3->A3DIS24=$params["AdIS24"];
            $placaact3->A3DIS23=$params["AdIS23"];
            $placaact3->A3DIS22=$params["AdIS22"];
            $placaact3->A3DIS21=$params["AdIS21"];
            
            $placaact3->A3DDI48=$params["AdDI48"];
            $placaact3->A3DDI47=$params["AdDI47"];
            $placaact3->A3DDI46=$params["AdDI46"];
            $placaact3->A3DDI45=$params["AdDI45"];
            $placaact3->A3DDI44=$params["AdDI44"];
            $placaact3->A3DDI43=$params["AdDI43"];
            $placaact3->A3DDI42=$params["AdDI42"];
            $placaact3->A3DDI41=$params["AdDI41"];
            
            $placaact3->A3DII38=$params["AdII38"];
            $placaact3->A3DII37=$params["AdII37"];
            $placaact3->A3DII36=$params["AdII36"];
            $placaact3->A3DII35=$params["AdII35"];
            $placaact3->A3DII34=$params["AdII34"];
            $placaact3->A3DII33=$params["AdII33"];
            $placaact3->A3DII32=$params["AdII32"];
            $placaact3->A3DII31=$params["AdII31"];
            
            $placaact3->TotalPlacaActual3=$params["totala"];
            $placaact3->A3Obser=$params["AObser"];

            $placaact3->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'placaact3' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'placaact3' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

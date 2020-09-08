<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlacaAct6;

class PlacaAct6Controllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $placaact6 = PlacaAct6::where("Id_Paciente",$id)->get(); 
        if(is_object($placaact6)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'PlacaAct6' => $placaact6
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'PlacaAct6' => 'La PlacaAct6 no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $placaact6 = new PlacaAct6();
            $placaact6->Id_Paciente=$params["Id_Pacient"];
            $placaact6->A6DDS18=$params["AdDS18"];
            $placaact6->A6DDS17=$params["AdDS17"];
            $placaact6->A6DDS16=$params["AdDS16"];
            $placaact6->A6DDS15=$params["AdDS15"];
            $placaact6->A6DDS14=$params["AdDS14"];
            $placaact6->A6DDS13=$params["AdDS13"];
            $placaact6->A6DDS12=$params["AdDS12"];
            $placaact6->A6DDS11=$params["AdDS11"];
            
            $placaact6->A6DIS28=$params["AdIS28"];
            $placaact6->A6DIS27=$params["AdIS27"];
            $placaact6->A6DIS26=$params["AdIS26"];
            $placaact6->A6DIS25=$params["AdIS25"];
            $placaact6->A6DIS24=$params["AdIS24"];
            $placaact6->A6DIS23=$params["AdIS23"];
            $placaact6->A6DIS22=$params["AdIS22"];
            $placaact6->A6DIS21=$params["AdIS21"];
            
            $placaact6->A6DDI48=$params["AdDI48"];
            $placaact6->A6DDI47=$params["AdDI47"];
            $placaact6->A6DDI46=$params["AdDI46"];
            $placaact6->A6DDI45=$params["AdDI45"];
            $placaact6->A6DDI44=$params["AdDI44"];
            $placaact6->A6DDI43=$params["AdDI43"];
            $placaact6->A6DDI42=$params["AdDI42"];
            $placaact6->A6DDI41=$params["AdDI41"];
            
            $placaact6->A6DII38=$params["AdII38"];
            $placaact6->A6DII37=$params["AdII37"];
            $placaact6->A6DII36=$params["AdII36"];
            $placaact6->A6DII35=$params["AdII35"];
            $placaact6->A6DII34=$params["AdII34"];
            $placaact6->A6DII33=$params["AdII33"];
            $placaact6->A6DII32=$params["AdII32"];
            $placaact6->A6DII31=$params["AdII31"];
            
            $placaact6->TotalPlacaActual6=$params["totala"];
            $placaact6->A6Obser=$params["AObser"];

            $placaact6->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'placaact6' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'placaact6' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

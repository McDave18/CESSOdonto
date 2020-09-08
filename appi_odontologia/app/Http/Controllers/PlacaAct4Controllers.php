<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlacaAct4;

class PlacaAct4Controllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $placaact4 = PlacaAct4::where("Id_Paciente",$id)->get(); 
        if(is_object($placaact4)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'PlacaAct4' => $placaact4
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'PlacaAct4' => 'La PlacaAct4 no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $placaact4 = new PlacaAct4();
            $placaact4->Id_Paciente=$params["Id_Pacient"];
            $placaact4->A4DDS18=$params["AdDS18"];
            $placaact4->A4DDS17=$params["AdDS17"];
            $placaact4->A4DDS16=$params["AdDS16"];
            $placaact4->A4DDS15=$params["AdDS15"];
            $placaact4->A4DDS14=$params["AdDS14"];
            $placaact4->A4DDS13=$params["AdDS13"];
            $placaact4->A4DDS12=$params["AdDS12"];
            $placaact4->A4DDS11=$params["AdDS11"];
            
            $placaact4->A4DIS28=$params["AdIS28"];
            $placaact4->A4DIS27=$params["AdIS27"];
            $placaact4->A4DIS26=$params["AdIS26"];
            $placaact4->A4DIS25=$params["AdIS25"];
            $placaact4->A4DIS24=$params["AdIS24"];
            $placaact4->A4DIS23=$params["AdIS23"];
            $placaact4->A4DIS22=$params["AdIS22"];
            $placaact4->A4DIS21=$params["AdIS21"];
            
            $placaact4->A4DDI48=$params["AdDI48"];
            $placaact4->A4DDI47=$params["AdDI47"];
            $placaact4->A4DDI46=$params["AdDI46"];
            $placaact4->A4DDI45=$params["AdDI45"];
            $placaact4->A4DDI44=$params["AdDI44"];
            $placaact4->A4DDI43=$params["AdDI43"];
            $placaact4->A4DDI42=$params["AdDI42"];
            $placaact4->A4DDI41=$params["AdDI41"];
            
            $placaact4->A4DII38=$params["AdII38"];
            $placaact4->A4DII37=$params["AdII37"];
            $placaact4->A4DII36=$params["AdII36"];
            $placaact4->A4DII35=$params["AdII35"];
            $placaact4->A4DII34=$params["AdII34"];
            $placaact4->A4DII33=$params["AdII33"];
            $placaact4->A4DII32=$params["AdII32"];
            $placaact4->A4DII31=$params["AdII31"];
            
            $placaact4->TotalPlacaActual4=$params["totala"];
            $placaact4->A4Obser=$params["AObser"];

            $placaact4->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'placaact4' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'placaact4' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

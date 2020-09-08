<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlacaAct5;

class PlacaAct5Controllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $placaact5 = PlacaAct5::where("Id_Paciente",$id)->get(); 
        if(is_object($placaact5)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'PlacaAct5' => $placaact5
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'PlacaAct5' => 'La PlacaAct5 no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $placaact5 = new PlacaAct5();
            $placaact5->Id_Paciente=$params["Id_Pacient"];
            $placaact5->A5DDS18=$params["AdDS18"];
            $placaact5->A5DDS17=$params["AdDS17"];
            $placaact5->A5DDS16=$params["AdDS16"];
            $placaact5->A5DDS15=$params["AdDS15"];
            $placaact5->A5DDS14=$params["AdDS14"];
            $placaact5->A5DDS13=$params["AdDS13"];
            $placaact5->A5DDS12=$params["AdDS12"];
            $placaact5->A5DDS11=$params["AdDS11"];
            
            $placaact5->A5DIS28=$params["AdIS28"];
            $placaact5->A5DIS27=$params["AdIS27"];
            $placaact5->A5DIS26=$params["AdIS26"];
            $placaact5->A5DIS25=$params["AdIS25"];
            $placaact5->A5DIS24=$params["AdIS24"];
            $placaact5->A5DIS23=$params["AdIS23"];
            $placaact5->A5DIS22=$params["AdIS22"];
            $placaact5->A5DIS21=$params["AdIS21"];
            
            $placaact5->A5DDI48=$params["AdDI48"];
            $placaact5->A5DDI47=$params["AdDI47"];
            $placaact5->A5DDI46=$params["AdDI46"];
            $placaact5->A5DDI45=$params["AdDI45"];
            $placaact5->A5DDI44=$params["AdDI44"];
            $placaact5->A5DDI43=$params["AdDI43"];
            $placaact5->A5DDI42=$params["AdDI42"];
            $placaact5->A5DDI41=$params["AdDI41"];
            
            $placaact5->A5DII38=$params["AdII38"];
            $placaact5->A5DII37=$params["AdII37"];
            $placaact5->A5DII36=$params["AdII36"];
            $placaact5->A5DII35=$params["AdII35"];
            $placaact5->A5DII34=$params["AdII34"];
            $placaact5->A5DII33=$params["AdII33"];
            $placaact5->A5DII32=$params["AdII32"];
            $placaact5->A5DII31=$params["AdII31"];
            
            $placaact5->TotalPlacaActual5=$params["totala"];
            $placaact5->A5Obser=$params["AObser"];

            $placaact5->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'placaact5' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'placaact5' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

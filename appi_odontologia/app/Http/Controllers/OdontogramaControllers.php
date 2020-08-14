<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Odontograma;

class OdontogramaControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $odontograma = new Odontograma();
            $odontograma->Id_Paciente="12i";
            $odontograma->DDS18=$params["dDS18"];
            $odontograma->DDS17=$params["dDS17"];
            $odontograma->DDS16=$params["dDS16"];
            $odontograma->DDS15=$params["dDS15"];
            $odontograma->DDS14=$params["dDS14"];
            $odontograma->DDS13=$params["dDS13"];
            $odontograma->DDS12=$params["dDS12"];
            $odontograma->DDS11=$params["dDS11"];
            $odontograma->DDS55=$params["dDS55"];
            $odontograma->DDS54=$params["dDS54"];
            $odontograma->DDS53=$params["dDS53"];
            $odontograma->DDS52=$params["dDS52"];
            $odontograma->DDS51=$params["dDS51"];
            $odontograma->DIS28=$params["dIS28"];
            $odontograma->DIS27=$params["dIS27"];
            $odontograma->DIS26=$params["dIS26"];
            $odontograma->DIS25=$params["dIS25"];
            $odontograma->DIS24=$params["dIS24"];
            $odontograma->DIS23=$params["dIS23"];
            $odontograma->DIS22=$params["dIS22"];
            $odontograma->DIS21=$params["dIS21"];
            $odontograma->DIS65=$params["dIS65"];
            $odontograma->DIS64=$params["dIS64"];
            $odontograma->DIS63=$params["dIS63"];
            $odontograma->DIS62=$params["dIS62"];
            $odontograma->DIS61=$params["dIS61"];
            $odontograma->DDI48=$params["dDI48"];
            $odontograma->DDI47=$params["dDI47"];
            $odontograma->DDI46=$params["dDI46"];
            $odontograma->DDI45=$params["dDI45"];
            $odontograma->DDI44=$params["dDI44"];
            $odontograma->DDI43=$params["dDI43"];
            $odontograma->DDI42=$params["dDI42"];
            $odontograma->DDI41=$params["dDI41"];
            $odontograma->DDI85=$params["dDI85"];
            $odontograma->DDI84=$params["dDI84"];
            $odontograma->DDI83=$params["dDI83"];
            $odontograma->DDI82=$params["dDI82"];
            $odontograma->DDI81=$params["dDI81"];
            $odontograma->DII38=$params["dII38"];
            $odontograma->DII37=$params["dII37"];
            $odontograma->DII36=$params["dII36"];
            $odontograma->DII35=$params["dII35"];
            $odontograma->DII34=$params["dII34"];
            $odontograma->DII33=$params["dII33"];
            $odontograma->DII32=$params["dII32"];
            $odontograma->DII31=$params["dII31"];
            $odontograma->DII75=$params["dII75"];
            $odontograma->DII74=$params["dII74"];
            $odontograma->DII73=$params["dII73"];
            $odontograma->DII72=$params["dII72"];
            $odontograma->DII71=$params["dII71"];
            $odontograma->ObserOdonto=$params["Obser"];

            $odontograma->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'odontograma' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'odontograma' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlacaAct;

class PlacaActControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $placaact = new PlacaAct();
            $placaact->Id_Paciente=$params["Id_Pacient"];
            $placaact->ADDS18=$params["AdDS18"];
            $placaact->ADDS17=$params["AdDS17"];
            $placaact->ADDS16=$params["AdDS16"];
            $placaact->ADDS15=$params["AdDS15"];
            $placaact->ADDS14=$params["AdDS14"];
            $placaact->ADDS13=$params["AdDS13"];
            $placaact->ADDS12=$params["AdDS12"];
            $placaact->ADDS11=$params["AdDS11"];
            
            $placaact->ADIS28=$params["AdIS28"];
            $placaact->ADIS27=$params["AdIS27"];
            $placaact->ADIS26=$params["AdIS26"];
            $placaact->ADIS25=$params["AdIS25"];
            $placaact->ADIS24=$params["AdIS24"];
            $placaact->ADIS23=$params["AdIS23"];
            $placaact->ADIS22=$params["AdIS22"];
            $placaact->ADIS21=$params["AdIS21"];
            
            $placaact->ADDI48=$params["AdDI48"];
            $placaact->ADDI47=$params["AdDI47"];
            $placaact->ADDI46=$params["AdDI46"];
            $placaact->ADDI45=$params["AdDI45"];
            $placaact->ADDI44=$params["AdDI44"];
            $placaact->ADDI43=$params["AdDI43"];
            $placaact->ADDI42=$params["AdDI42"];
            $placaact->ADDI41=$params["AdDI41"];
            
            $placaact->ADII38=$params["AdII38"];
            $placaact->ADII37=$params["AdII37"];
            $placaact->ADII36=$params["AdII36"];
            $placaact->ADII35=$params["AdII35"];
            $placaact->ADII34=$params["AdII34"];
            $placaact->ADII33=$params["AdII33"];
            $placaact->ADII32=$params["AdII32"];
            $placaact->ADII31=$params["AdII31"];
            
            $placaact->TotalPlacaActual=$params["totala"];
            $placaact->AObser=$params["AObser"];

            $placaact->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'placaact' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'placaact' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

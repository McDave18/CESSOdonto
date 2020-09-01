<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlacaAnt;

class PlacaAntControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $placaant = PlacaAnt::where("Id_Paciente",$id)->get(); 
        if(is_object($placaant)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'PlacaAnt' => $placaant
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'PlacaAnt' => 'La PlacaAnt no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $placaant = new PlacaAnt();
            $placaant->Id_Paciente=$params["Id_Pacient"];
            $placaant->IDDS18=$params["IdDS18"];
            $placaant->IDDS17=$params["IdDS17"];
            $placaant->IDDS16=$params["IdDS16"];
            $placaant->IDDS15=$params["IdDS15"];
            $placaant->IDDS14=$params["IdDS14"];
            $placaant->IDDS13=$params["IdDS13"];
            $placaant->IDDS12=$params["IdDS12"];
            $placaant->IDDS11=$params["IdDS11"];
            
            $placaant->IDIS28=$params["IdIS28"];
            $placaant->IDIS27=$params["IdIS27"];
            $placaant->IDIS26=$params["IdIS26"];
            $placaant->IDIS25=$params["IdIS25"];
            $placaant->IDIS24=$params["IdIS24"];
            $placaant->IDIS23=$params["IdIS23"];
            $placaant->IDIS22=$params["IdIS22"];
            $placaant->IDIS21=$params["IdIS21"];
            
            $placaant->IDDI48=$params["IdDI48"];
            $placaant->IDDI47=$params["IdDI47"];
            $placaant->IDDI46=$params["IdDI46"];
            $placaant->IDDI45=$params["IdDI45"];
            $placaant->IDDI44=$params["IdDI44"];
            $placaant->IDDI43=$params["IdDI43"];
            $placaant->IDDI42=$params["IdDI42"];
            $placaant->IDDI41=$params["IdDI41"];
            
            $placaant->IDII38=$params["IdII38"];
            $placaant->IDII37=$params["IdII37"];
            $placaant->IDII36=$params["IdII36"];
            $placaant->IDII35=$params["IdII35"];
            $placaant->IDII34=$params["IdII34"];
            $placaant->IDII33=$params["IdII33"];
            $placaant->IDII32=$params["IdII32"];
            $placaant->IDII31=$params["IdII31"];
            
            $placaant->TotalPlacaAnterior=$params["totali"];
            $placaant->IObser=$params["IObser"];

            $placaant->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'placaant' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'placaant' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tratamiento;

class TratamientoControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $ptratamiento = Tratamiento::where("Id_Paciente",$id)->get(); //tengo que hacer esto de nuevo para lo de Exploracion?
        if(is_object($ptratamiento)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'ptratamiento' => $ptratamiento
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'Tratamiento' => 'La Tratamiento no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $ptratamiento = new Tratamiento();
            $ptratamiento->Id_Paciente=$params["Id_Pacient"];
            $ptratamiento->TDDS18=$params["TdDS18"];
            $ptratamiento->TDDS17=$params["TdDS17"];
            $ptratamiento->TDDS16=$params["TdDS16"];
            $ptratamiento->TDDS15=$params["TdDS15"];
            $ptratamiento->TDDS14=$params["TdDS14"];
            $ptratamiento->TDDS13=$params["TdDS13"];
            $ptratamiento->TDDS12=$params["TdDS12"];
            $ptratamiento->TDDS11=$params["TdDS11"];
            
            $ptratamiento->TDIS28=$params["TdIS28"];
            $ptratamiento->TDIS27=$params["TdIS27"];
            $ptratamiento->TDIS26=$params["TdIS26"];
            $ptratamiento->TDIS25=$params["TdIS25"];
            $ptratamiento->TDIS24=$params["TdIS24"];
            $ptratamiento->TDIS23=$params["TdIS23"];
            $ptratamiento->TDIS22=$params["TdIS22"];
            $ptratamiento->TDIS21=$params["TdIS21"];
            
            $ptratamiento->TDDI48=$params["TdDI48"];
            $ptratamiento->TDDI47=$params["TdDI47"];
            $ptratamiento->TDDI46=$params["TdDI46"];
            $ptratamiento->TDDI45=$params["TdDI45"];
            $ptratamiento->TDDI44=$params["TdDI44"];
            $ptratamiento->TDDI43=$params["TdDI43"];
            $ptratamiento->TDDI42=$params["TdDI42"];
            $ptratamiento->TDDI41=$params["TdDI41"];
            
            $ptratamiento->TDII38=$params["TdII38"];
            $ptratamiento->TDII37=$params["TdII37"];
            $ptratamiento->TDII36=$params["TdII36"];
            $ptratamiento->TDII35=$params["TdII35"];
            $ptratamiento->TDII34=$params["TdII34"];
            $ptratamiento->TDII33=$params["TdII33"];
            $ptratamiento->TDII32=$params["TdII32"];
            $ptratamiento->TDII31=$params["TdII31"];
            
            $ptratamiento->TObser=$params["TObser"];

            $ptratamiento->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'tratamiento' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'tratamiento' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

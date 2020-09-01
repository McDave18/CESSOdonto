<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ihos;

class FormularioIHOSControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $ihos = Ihos::where("Id_Paciente",$id)->get(); //tengo que hacer esto de nuevo para lo de Exploracion?
        if(is_object($ihos)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'Ihos' => $ihos
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'Ihos' => 'La Ihos no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            // cra las demas relaciones que se hacen en te formulario

            $ihos = new Ihos();
            $ihos->Id_Paciente=$params["Id_Pacient"];
            $ihos->ID16y17_Placa=$params["ID16y17_Pl"];
            $ihos->ID11y21_Placa=$params["ID11y21_Pl"];
            $ihos->ID26y27_Placa=$params["ID26y27_Pl"];
            $ihos->ID36y37_Placa=$params["ID36y37_Pl"];
            $ihos->ID31y41_Placa=$params["ID31y41_Pl"];
            $ihos->ID46y47_Placa=$params["ID46y47_Pl"];
            $ihos->ID16y17_Sarro=$params["ID16y17_Sa"];
            $ihos->ID11y21_Sarro=$params["ID11y21_Sa"];
            $ihos->ID26y27_Sarro=$params["ID26y27_Sa"];
            $ihos->ID36y37_Sarro=$params["ID36y37_Sa"];
            $ihos->ID31y41_Sarro=$params["ID31y41_Sa"];
            $ihos->ID46y47_Sarro=$params["ID46y47_Sa"];
            $ihos->InPlacaTotal=$params["InPlT"];
            $ihos->InSarroTotal=$params["InSaT"];
            $ihos->TotalInIHOS=$params["TotalInIH"];
            $ihos->Higiene=$params["higiene"];
            $ihos->ObservacionesIHOS=$params["Obser"];
            $ihos->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'formularioihos' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'formularioihos' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

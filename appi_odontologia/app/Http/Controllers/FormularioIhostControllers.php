<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ihost;

class FormularioIHOSTControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $ihost = Ihost::where("Id_Paciente",$id)->get(); //tengo que hacer esto de nuevo para lo de Exploracion?
        if(is_object($ihost)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'Ihost' => $ihost
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'Ihost' => 'La Ihost no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $ihost = new Ihost();
            $ihost->Id_Paciente=$params["Id_Pacient"];
            $ihost->TD16y17_Placa=$params["TD16y17_Pl"];
            $ihost->TD11y21_Placa=$params["TD11y21_Pl"];
            $ihost->TD26y27_Placa=$params["TD26y27_Pl"];
            $ihost->TD36y37_Placa=$params["TD36y37_Pl"];
            $ihost->TD31y41_Placa=$params["TD31y41_Pl"];
            $ihost->TD46y47_Placa=$params["TD46y47_Pl"];
            $ihost->TD16y17_Sarro=$params["TD16y17_Sa"];
            $ihost->TD11y21_Sarro=$params["TD11y21_Sa"];
            $ihost->TD26y27_Sarro=$params["TD26y27_Sa"];
            $ihost->TD36y37_Sarro=$params["TD36y37_Sa"];
            $ihost->TD31y41_Sarro=$params["TD31y41_Sa"];
            $ihost->TD46y47_Sarro=$params["TD46y47_Sa"];
            $ihost->TerPlacaTotal=$params["TerPlT"];
            $ihost->TerSarroTotal=$params["TerSaT"];
            $ihost->TotalTerIHOS=$params["TotalTerIH"];
            $ihost->ObservacionesIHOS=$params["Obser"];
            $ihost->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'formularioihost' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'formularioihost' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

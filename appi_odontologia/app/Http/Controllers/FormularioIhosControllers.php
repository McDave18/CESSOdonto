<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ihos;

class FormularioIHOSControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            // cra las demas relaciones que se hacen en te formulario

            $ihos = new Ihos();
            $ihos->Id_Paciente="12i";
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
            $ihos->TD16y17_Placa=$params["TD16y17_Pl"];
            $ihos->TD11y21_Placa=$params["TD11y21_Pl"];
            $ihos->TD26y27_Placa=$params["TD26y27_Pl"];
            $ihos->TD36y37_Placa=$params["TD36y37_Pl"];
            $ihos->TD31y41_Placa=$params["TD31y41_Pl"];
            $ihos->TD46y47_Placa=$params["TD46y47_Pl"];
            $ihos->TD16y17_Sarro=$params["TD16y17_Sa"];
            $ihos->TD11y21_Sarro=$params["TD11y21_Sa"];
            $ihos->TD26y27_Sarro=$params["TD26y27_Sa"];
            $ihos->TD36y37_Sarro=$params["TD36y37_Sa"];
            $ihos->TD31y41_Sarro=$params["TD31y41_Sa"];
            $ihos->TD46y47_Sarro=$params["TD46y47_Sa"];
            $ihos->InPlacaTotal=$params["InPlT"];
            $ihos->InSarroTotal=$params["InSaT"];
            $ihos->TotalInIHOS=$params["TotalInIH"];
            $ihos->TerPlacaTotal=$params["TerPlT"];
            $ihos->TerSarroTotal=$params["TerSaT"];
            $ihos->TotalTerIHOS=$params["TotalTerIH"];
            $ihos->ObservacionesIHOS=$params["Obser"];
            $ihos->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'formulario2' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'formulario2' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pagos;

class ControlPagosControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            // crea las demas relaciones que se hacen en este formulario

            $control_pagos = new Pagos();
            $control_pagos->Id_Paciente="12i";
            $control_pagos->Fecha_Trat=$params["fecha1"];
            $control_pagos->CostoT=$params["costo"];
            $control_pagos->Abono_T=$params["abono"];
            $control_pagos->SaldoT=$params["saldo"];
            $control_pagos->FolioT=$params["folio"];
            $control_pagos->Doctor_T="9";
            $control_pagos->save();

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
    

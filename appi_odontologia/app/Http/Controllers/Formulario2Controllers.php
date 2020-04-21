<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Formulario2Controllers extends Controller
{
    public function store(Resquest $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){
            // $formulario2 = new Formulario2();
            // $formulario2->save($params);
            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'formulario2' => $params
            );
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'formulario2' => $params
            );
        }
        return response() ->json($data,$data['code']);

    }
}
    

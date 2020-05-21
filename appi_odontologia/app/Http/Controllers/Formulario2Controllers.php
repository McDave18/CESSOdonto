<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exploracion;

class Formulario2Controllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            // cra las demas relaciones que se hacen en te formulario



            //aqui solamente guardamos la ultima parte del formulario
            $exploracion = new Exploracion(); // aqui llamamos a la conexion que te mensione anterior
            $exploracion->Id_Paciente="12i";  //estos datos  $exploracion este es la variable  ->Id_Paciente este en base a como sellama el campo en la tabla
            $exploracion->Cara=$params["cara"];//$params["cara"]   aqui estrais los datos que se envan y lo relaciones en base al nombre q fue asignado
            $exploracion->Labios=$params["labios"];
            $exploracion->Piso_boca=$params["boca"];
            $exploracion->Cuello =$params["cuello"];
            $exploracion->Lengua=$params["lengua"];
            $exploracion->PBlando=$params["blando"];
            $exploracion->PDuro=$params["duro"];
            $exploracion->GSalivales=$params["salivales"];
            $exploracion->Carrillos=$params["carrillos"];
            $exploracion->Amigdalas=$params["amigdalas"];
            //asi se realiza la union con las tablas
            $exploracion->save();//aqui se guarda 
            //m... jaja espero que entendiste. pos creo que si, sino, ahi te estare chingando :3 xD sale pues pues ahi me dices xD simon, muchas gracias we, ahi luego saco al menos los tacos xd
            //sale pues ahi tienes para entretenerte un rato jaja ahi me dices si tienes dudas asi recuerda q si no jala algo puede ser q tengas q crear la relacion como hice en este q tenia 3 relaciones xD ah ya, si, pues espero no tener que estarte chingando mucho xd
            //sale entos ahi me avisas si tienes dudas. Simon, muchas gracias :3 sake
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
    

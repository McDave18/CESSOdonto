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

            $interrogacion = new Interrogacion();
            $interrogacion->Id_Paciente="12";
            $interrogacion->1_Enfermedades=$params["enfermedades"];
            $interrogacion->2_Diagnosticos=$params["diagnosticos"];
            $interrogacion->3_Alergia_Penicilina=$params["penicilina"];
            $interrogacion->3_1_Alergia_Otros=$params["pen_otros"];
            $interrogacion->3_2_Cuales=$params["pen_cuales"];
            $interrogacion->4_Anestesia=$params["anestesia"]; 
            $interrogacion->4_1_Problema_Anestesia=$params["prom_anestesia"];
            $interrogacion->4_2_Descripcion=$params["des_anestesia"];
            $interrogacion->5_SangraMucho=$params["sangra"];
            $interrogacion->5_1_HemorragiaFrec=$params["hemorragia"];
            $interrogacion->6_UsaAnti=$params["usa_anti"];
            $interrogacion->6_1_UsaTranqui=$params["usa_tranqui"];
            $interrogacion->6_2_Descripcion=$params["usa_tranqui_descrip"];
            $interrogacion->6_3_Otros_Med=$params["otros_met"];
            $interrogacion->6_4_Descripcion=$params["otros_med_des"];
            $interrogacion->7_ParienteDiabetico=$params["diabetico"];
            $interrogacion->7_1_Cuales=$params["par_cual"];
            $interrogacion->save();

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
    

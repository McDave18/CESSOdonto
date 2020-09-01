<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exploracion; //aqui se agrega la de interrogacion o como?
use App\Interrogacion;

class Formulario2Controllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    //cual es el de pagos
    public function show($id) {
        $interrogacion = Interrogacion::where("Id_Paciente",$id)->get(); 
        if(is_object($interrogacion)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'Interrogacion' => $interrogacion
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'Interrogacion' => 'La Interrogacion no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function showex($id) {
        $exploracion = Exploracion::where("Id_Paciente",$id)->get(); 
        if(is_object($exploracion)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'Exploracion' => $exploracion
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'Exploracion' => 'La Exploracion no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            
            $interrogacion = new Interrogacion();
            $interrogacion->Id_Paciente=$params["Id_Pacient"];
            $interrogacion->Enfermedades=$params["enfermedades"]; 
            $interrogacion->Diagnosticos=$params["diagnosticos"];
            $interrogacion->Alergia_Penicilina=$params["penicilina"];
            $interrogacion->Alergia_Otros=$params["pen_otros"];
            $interrogacion->Cuales=$params["pen_cuales"];
            $interrogacion->Anestesia=$params["anestesia"]; 
            $interrogacion->Problema_Anestesia=$params["prom_anestesia"];
            $interrogacion->Descripcion_4=$params["des_anestesia"];
            $interrogacion->SangraMucho=$params["sangra"];
            $interrogacion->HemorragiaFrec=$params["hemorragia"];
            $interrogacion->UsaAnti=$params["usa_anti"];
            $interrogacion->UsaTranqui=$params["usa_tranqui"];
            //$interrogacion->6_2_Descripcion=$params["usa_tranqui_descrip"];
            $interrogacion->Otros_Med=$params["otros_med"];
            $interrogacion->Descripcion_6_4=$params["otros_med_des"];
            $interrogacion->ParienteDiabetico=$params["diabetico"];
            $interrogacion->Cuales_7_1=$params["par_cual"];
            $interrogacion->save();

            //aqui solamente guardamos la ultima parte del formulario
            $exploracion = new Exploracion(); // aqui llamamos a la conexion que te mensione anterior
            $exploracion->Id_Paciente=$params["Id_Pacient"];  //estos datos  $exploracion este es la variable  ->Id_Paciente este en base a como sellama el campo en la tabla
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
           


            // $odontograma = new Odontograma();
            // $odontograma->Id_Paciente="12i";
            // $odontograma->DDS18=$params["dDS18"];
            // $odontograma->DDS17=$params["dDS17"];
            // $odontograma->DDS16=$params["dDS16"];
            // $odontograma->DDS15=$params["dDS15"];
            // $odontograma->DDS14=$params["dDS14"];
            // $odontograma->DDS13=$params["dDS13"];
            // $odontograma->DDS12=$params["dDS12"];
            // $odontograma->DDS11=$params["dDS11"];
            // $odontograma->DDS55=$params["dDS55"];
            // $odontograma->DDS54=$params["dDS54"];
            // $odontograma->DDS53=$params["dDS53"];
            // $odontograma->DDS52=$params["dDS52"];
            // $odontograma->DDS51=$params["dDS51"];
            // $odontograma->DIS28=$params["dIS28"];
            // $odontograma->DIS27=$params["dIS27"];
            // $odontograma->DIS26=$params["dIS26"];
            // $odontograma->DIS25=$params["dIS25"];
            // $odontograma->DIS24=$params["dIS24"];
            // $odontograma->DIS23=$params["dIS23"];
            // $odontograma->DIS22=$params["dIS22"];
            // $odontograma->DIS21=$params["dIS21"];
            // $odontograma->DIS65=$params["dIS65"];
            // $odontograma->DIS64=$params["dIS64"];
            // $odontograma->DIS63=$params["dIS63"];
            // $odontograma->DIS62=$params["dIS62"];
            // $odontograma->DIS61=$params["dIS61"];
            // $odontograma->DDI48=$params["dDI48"];
            // $odontograma->DDI47=$params["dDI47"];
            // $odontograma->DDI46=$params["dDI46"];
            // $odontograma->DDI45=$params["dDI45"];
            // $odontograma->DDI44=$params["dDI44"];
            // $odontograma->DDI43=$params["dDI43"];
            // $odontograma->DDI42=$params["dDI42"];
            // $odontograma->DDI41=$params["dDI41"];
            // $odontograma->DDI85=$params["dDI85"];
            // $odontograma->DDI84=$params["dDI84"];
            // $odontograma->DDI83=$params["dDI83"];
            // $odontograma->DDI82=$params["dDI82"];
            // $odontograma->DDI81=$params["dDI81"];
            // $odontograma->DII38=$params["dII38"];
            // $odontograma->DII37=$params["dII37"];
            // $odontograma->DII36=$params["dII36"];
            // $odontograma->DII35=$params["dII35"];
            // $odontograma->DII34=$params["dII34"];
            // $odontograma->DII33=$params["dII33"];
            // $odontograma->DII32=$params["dII32"];
            // $odontograma->DII31=$params["dII31"];
            // $odontograma->DII75=$params["dII75"];
            // $odontograma->DII74=$params["dII74"];
            // $odontograma->DII73=$params["dII73"];
            // $odontograma->DII72=$params["dII72"];
            // $odontograma->DII71=$params["dII71"];

            // $odontograma->save();

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
    

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Health;

class Formulario1Controllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            // cra las demas relaciones que se hacen en te formulario

            $health_history = new Health();
            $health_history->Id_Paciente="12i";
            $health_history->P1=$params["Iask1"];
            $health_history->P2=$params["iask2"];
            $health_history->P3=$params["iask3"];
            $health_history->P3_1=$params["iask31"];
            $health_history->P5=$params["iask5"];
            $health_history->P4=$params["iask4"];
            $health_history->P4_1=$params["iask41"];
            $health_history->P4_2=$params["iask42"];
            $health_history->P4_3=$params["iask43"];
            $health_history->P7=$params["IIask7"];
            $health_history->P8=$params["IIask8"];
            $health_history->P9=$params["IIask9"];
            $health_history->P10=$params["IIask10"];
            $health_history->P11=$params["IIask11"];
            $health_history->P12=$params["IIask12"];
            $health_history->P13=$params["IIask13"];
            $health_history->P14=$params["IIask14"];
            $health_history->P15=$params["IIask15"];
            $health_history->P16=$params["IIask16"];
            $health_history->P17=$params["IIask17"]; 
            $health_history->P18=$params["IIask18"];
            $health_history->P19=$params["IIask19"];
            $health_history->P20=$params["IIask20"];
            $health_history->P21=$params["IIask21"];
            $health_history->P22=$params["IIask22"];
            $health_history->P23=$params["IIask23"];
            $health_history->P24=$params["IIask24"];
            $health_history->P25=$params["IIask25"];
            $health_history->P26=$params["IIask26"];
            $health_history->P27=$params["IIask27"];
            $health_history->P28=$params["IIask28"];
            $health_history->P29=$params["IIIask29"];
            $health_history->P30=$params["IIIask30"];
            $health_history->P31=$params["IIIask31"];
            $health_history->P32=$params["IIIask32"];
            $health_history->P33=$params["IIIask33"];
            $health_history->P34=$params["IIIask34"];
            $health_history->P35=$params["IIIask35"];
            $health_history->P36=$params["IIIask36"];
            $health_history->P37=$params["IIIask37"];
            $health_history->P38=$params["IIIask38"];
            $health_history->P39=$params["IIIask39"];
            $health_history->P40=$params["IIIask40"];
            $health_history->P41=$params["IIIask41"];
            $health_history->P42=$params["IIIask42"];
            $health_history->P43=$params["IIIask43"];
            $health_history->P44=$params["IIIask44"];
            $health_history->P45=$params["IIIask45"];
            $health_history->P46=$params["IIIask46"];
            $health_history->P47=$params["IIIask47"];
            $health_history->P48=$params["IIIask48"];
            $health_history->P49=$params["IIIask49"];
            $health_history->P50=$params["IIIask50"];
            $health_history->P51=$params["IVask51"];
            $health_history->P52=$params["IVask52"];
            $health_history->P53=$params["IVask53"];
            $health_history->P54=$params["IVask54"];
            $health_history->P55=$params["IVask55"];
            $health_history->P56=$params["IVask56"];
            $health_history->P57=$params["IVask57"];
            $health_history->P58=$params["IVask58"];
            $health_history->P59=$params["IVask59"];
            $health_history->P60=$params["IVask60"];
            $health_history->P61=$params["Vask61"];
            $health_history->P62=$params["Vask62"];
            $health_history->P62_1=$params["Vask641"];
            $health_history->P63=$params["Vask63"];
            $health_history->P64=$params["Vask64"];
            $health_history->P65=$params["VIask65"];
            $health_history->P66=$params["VIask66"];
            $health_history->P67=$params["VIIask67"];
            $health_history->P67_1=$params["VIIask671"];
            $health_history->fecha_hh=$params["firma"];
            $health_history->FirmaP=$params["fecha2"];
            $health_history->save();

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
    

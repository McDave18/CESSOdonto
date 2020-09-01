<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Health;

class Formulario1Controllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/ esta web funciona";
    }
    public function show($id) {
        $healthhistory = Health::where("Id_Paciente",$id)->get();
        if(is_object($healthhistory)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'Health' => $healthhistory
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'Health' => 'La Health no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            $healthhistory = new Health();
            $healthhistory->Id_Paciente=$params["Id_Pacient"];
            $healthhistory->P1=$params["Iask1"];
            $healthhistory->P2=$params["iask2"];
            $healthhistory->P3=$params["iask3"];
            $healthhistory->P3_1=$params["iask31"];
            $healthhistory->P5=$params["Iask5"];
            $healthhistory->P4=$params["iask4"];
            $healthhistory->P4_1=$params["iask41"];
            $healthhistory->P4_2=$params["iask42"];
            $healthhistory->P4_3=$params["iask43"];
            $healthhistory->P7=$params["IIask7"];
            $healthhistory->P8=$params["IIask8"];
            $healthhistory->P9=$params["IIask9"];
            $healthhistory->P10=$params["IIask10"];
            $healthhistory->P11=$params["IIask11"];
            $healthhistory->P12=$params["IIask12"];
            $healthhistory->P13=$params["IIask13"];
            $healthhistory->P14=$params["IIask14"];
            $healthhistory->P15=$params["IIask15"];
            $healthhistory->P16=$params["IIask16"];
            $healthhistory->P17=$params["IIask17"]; 
            $healthhistory->P18=$params["IIask18"];
            $healthhistory->P19=$params["IIask19"];
            $healthhistory->P20=$params["IIask20"];
            $healthhistory->P21=$params["IIask21"];
            $healthhistory->P22=$params["IIask22"];
            $healthhistory->P23=$params["IIask23"];
            $healthhistory->P24=$params["IIask24"];
            $healthhistory->P25=$params["IIask25"];
            $healthhistory->P26=$params["IIask26"];
            $healthhistory->P27=$params["IIask27"];
            $healthhistory->P28=$params["IIask28"];
            $healthhistory->P29=$params["IIIask29"];
            $healthhistory->P30=$params["IIIask30"];
            $healthhistory->P31=$params["IIIask31"];
            $healthhistory->P32=$params["IIIask32"];
            $healthhistory->P33=$params["IIIask33"];
            $healthhistory->P34=$params["IIIask34"];
            $healthhistory->P35=$params["IIIask35"];
            $healthhistory->P36=$params["IIIask36"];
            $healthhistory->P37=$params["IIIask37"];
            $healthhistory->P38=$params["IIIask38"];
            $healthhistory->P39=$params["IIIask39"];
            $healthhistory->P40=$params["IIIask40"];
            $healthhistory->P41=$params["IIIask41"];
            $healthhistory->P42=$params["IIIask42"];
            $healthhistory->P43=$params["IIIask43"];
            $healthhistory->P44=$params["IIIask44"];
            $healthhistory->P45=$params["IIIask45"];
            $healthhistory->P46=$params["IIIask46"];
            $healthhistory->P47=$params["IIIask47"];
            $healthhistory->P48=$params["IIIask48"];
            $healthhistory->P49=$params["IIIask49"];
            $healthhistory->P50=$params["IIIask50"];
            $healthhistory->P51=$params["IVask51"];
            $healthhistory->P52=$params["IVask52"];
            $healthhistory->P53=$params["IVask53"];
            $healthhistory->P54=$params["IVask54"];
            $healthhistory->P55=$params["IVask55"];
            $healthhistory->P56=$params["IVask56"];
            $healthhistory->P57=$params["IVask57"];
            $healthhistory->P58=$params["IVask58"];
            $healthhistory->P59=$params["IVask59"];
            $healthhistory->P60=$params["IVask60"];
            $healthhistory->P61=$params["Vask61"];
            $healthhistory->P62=$params["Vask62"];
            $healthhistory->P62_1=$params["Vask641"];
            $healthhistory->P63=$params["Vask63"];
            $healthhistory->P64=$params["Vask64"];
            $healthhistory->P65=$params["VIask65"];
            $healthhistory->P66=$params["VIask66"];
            $healthhistory->P67=$params["VIIask67"];
            $healthhistory->P67_1=$params["VIIask671"];
            $healthhistory->fecha_hh=$params["fecha2"];
            $healthhistory->FirmaP=$params["firma"];
            $healthhistory->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'formulario1' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'formulario1' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }

    public function contador($id,$pregunta) {
            $enero = Health::whereMonth("created_at","1")->where($pregunta,"Si")->count();
            $febrero = Health::whereMonth("created_at","2")->where($pregunta,"Si")->count();
            $marzo = Health::whereMonth("created_at","3")->where($pregunta,"Si")->count();
            $abril = Health::whereMonth("created_at","4")->where($pregunta,"Si")->count();
            $mayo = Health::whereMonth("created_at","5")->where($pregunta,"Si")->count();
            $junio = Health::whereMonth("created_at","6")->where($pregunta,"Si")->count();
            $julio = Health::whereMonth("created_at","7")->where($pregunta,"Si")->count();
            $agosto = Health::whereMonth("created_at","8")->where($pregunta,"Si")->count();
            $sep = Health::whereMonth("created_at","9")->where($pregunta,"Si")->count();
            $oct = Health::whereMonth("created_at","10")->where($pregunta,"Si")->count();
            $nov = Health::whereMonth("created_at","11")->where($pregunta,"Si")->count();
            $dic = Health::whereMonth("created_at","12")->where($pregunta,"Si")->count(); //
            // if(is_object($interrogacion)){
                $data = [
                'code' => 200, //
                'status' => 'success',
                'en' => $enero , //asi?yes
                'fe' => $febrero,
                'mar'=> $marzo,
                'ab'=> $abril,
                'may'=> $mayo,
                'jun'=> $junio,
                'jul'=> $julio,
                'ago'=> $agosto,
                'sept'=> $sep,
                'octb'=> $oct,
                'novi'=> $nov,
                'dici'=> $dic,
                ];
            // }else{
            //     $data = [
            //     'code' => 404,
            //     'status' => 'error',
            //     'contador' => 'el conteo no existe'
            //     ];
            // }
            return response()->json($data,$data['code']);
        }
    








}
    

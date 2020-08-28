<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Atm;

class FormularioAtmControllers extends Controller
{
    public function index(){
        echo "hola checa http://odon.com.devel/";
    }
    public function show($id) {
        $atm_exfisico = Atm::where("Id_Paciente",$id)->get();
        if(is_object($atm_exfisico)){
            $data = [
            'code' => 200,
            'status' => 'success',
            'Atm' => $atm_exfisico
            ];
        }else{
            $data = [
            'code' => 404,
            'status' => 'error',
            'Atm' => 'La Atm no existe'
            ];
        }
        return response()->json($data,$data['code']);
    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            // cra las demas relaciones que se hacen en te formulario

            $atm_exfisico = new Atm();
            $atm_exfisico->Id_Paciente=$params["Id_Pacient"];
            $atm_exfisico->Mov_Mand_Dim_Aper=$params["ATMMov_Mand_Dim_Aper"];
            $atm_exfisico->Mov_Mand_Dim_Vert1=$params["ATMMov_Mand_Dim_Vert1"];
            $atm_exfisico->Mov_Mand_Dim_Vert2=$params["ATMMov_Mand_Dim_Vert2"];
            $atm_exfisico->Mov_Mand_Desv_Mand_Apertura=$params["ATMMov_Mand_Desv_Mand_Apertura"];
            $atm_exfisico->Mov_Mand_Desv_Mand_Cierre=$params["ATMMov_Mand_Desv_Mand_Cierre"];
            $atm_exfisico->R_Art_Chasquido=$params["ATMR_Art_Chasquido"];
            $atm_exfisico->R_Art_Apertura=$params["ATMR_Art_Apertura"];
            $atm_exfisico->R_Art_Cierre=$params["ATMR_Art_Cierre"];
            $atm_exfisico->R_Art_Der=$params["ATMR_Art_Der"];
            $atm_exfisico->R_Art_Izq=$params["ATMR_Art_Izq"];
            $atm_exfisico->R_Art_Bilateral=$params["ATMR_Art_Bilateral"];
            $atm_exfisico->R_Art_Inicial=$params["ATMR_Art_Inicial"];
            $atm_exfisico->R_Art_Medio=$params["ATMR_Art_Medio"];
            $atm_exfisico->R_Art_Tardio=$params["ATMR_Art_Tardio"];
            $atm_exfisico->R_Art_Reciproco=$params["ATMR_Art_Reciproco"];
            $atm_exfisico->Crepitacion=$params["ATMCrepitacion"];
            $atm_exfisico->Crep_Der=$params["ATMCrep_Der"];
            $atm_exfisico->Crep_Izq=$params["ATMCrep_Izq"];
            $atm_exfisico->Crep_Bi=$params["ATMCrep_Bi"];
            $atm_exfisico->Luxacion=$params["ATMLuxacion"];
            $atm_exfisico->Lux_Der=$params["ATMLux_Der"];
            $atm_exfisico->Lux_Izq=$params["ATMLux_Izq"];
            $atm_exfisico->Lux_Bi=$params["ATMLux_Bi"];
            $atm_exfisico->Dolor=$params["ATMDolor"];
            $atm_exfisico->Dolor_Der=$params["ATMDolor_Der"];
            $atm_exfisico->Dolor_Izq=$params["ATMDolor_Izq"];
            $atm_exfisico->Dolor_Bi=$params["ATMDolor_Bi"];
            $atm_exfisico->SDP=$params["ATMSDP"];
            $atm_exfisico->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'formularioatm' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'formularioatm' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

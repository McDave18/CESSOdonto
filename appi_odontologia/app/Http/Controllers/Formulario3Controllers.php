<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Paciente;

class Formulario3Controllers extends Controller
{
    public function index(){
        // echo "hola checa http://odon.com.devel/";
        $pacientes = Paciente::all();
        return response()->json([
            'code' => 200,
            'status' => 'success',
            'pacientes' => $pacientes
            ]);

    }
    public function store(Request $request){
        $json = $request->input('json',null);
        $params = json_decode($json,true);
        if(!empty($params)){

            // cra las demas relaciones que se hacen en te formulario 
            //aqui se guarda a los pacientes sus datos personales

            $datos_personales = new Paciente();
            $datos_personales->Fecha_alta=$params["fecha"];
            $datos_personales->DOB=$params["fechadob"];
            $datos_personales->RFC=$params["rfc"];
            $datos_personales->NombreP=$params["nombre"];
            $datos_personales->PaternoP=$params["paterno"];
            $datos_personales->MaternoP=$params["materno"];
            $datos_personales->Edad=$params["edad"];
            $datos_personales->Genero=$params["sexo"];
            $datos_personales->Calle=$params["calle"];
            $datos_personales->Colonia=$params["colonia"];
            $datos_personales->Ciudad=$params["ciudad"];
            $datos_personales->cp=$params["cp"];
            $datos_personales->Tel_casa=$params["celcasa"];
            $datos_personales->Tel_Celu=$params["celular"];
            $datos_personales->Doctor_Alta=$params["Altas"];
            $datos_personales->Poblacion=$params["poblacion"];
            $datos_personales->Facultad=$params["poblacion1"];
            $par1=substr($params["nombre"], 0,2);  
            $par2=substr($params["paterno"], 0,2); 
            $par3=substr($params["materno"], 0,2);
            $par4=substr($params["fechadob"], 0,4);
            $Id_Paciente=$par1.$par2.$par3.$par4;
            $datos_personales->Id_Paciente=$Id_Paciente;
            $datos_personales->save();

            $data = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'El formulario se ha creado correctamente',
                'formulario3' => $params
            );
            //envia si todo sale bien
        }
        else{
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El formulario no se ha creado',
                'formulario3' => $params
            );
            //aqui por si mandas algun dato mal
        }
        return response() ->json($data,$data['code']);

    }
}
    

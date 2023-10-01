<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\RequestException;

class ChatApiController extends Controller
{

    public function prompt(Request $request){ 

        $data =  ['mensaje' => $request->input('mensaje')];
        $response = $this->query($data);
        
        // Manejar la respuesta de tu API según tus necesidades
        if (isset($response['error'])) {
            // Hubo un error en la solicitud, manejarlo apropiadamente
            return response()->json(['error' => $response['error']], 500);
        } else {
            // La solicitud fue exitosa, hacer algo con la respuesta completa
            return response()->json(['response' => $response]);
        }
    }

    private function query($data)
    {



        $client = new Client();

        try {
            $response = $client->post('https://www.stack-inference.com/run_deployed_flow?flow_id=6518e668bfdd8c32f7d8070c&org=b5ba3cd9-d054-4228-804e-877ee64e7b21', [
                'headers' => [
                    'Authorization' => 'Bearer 570cd5d8-f8d6-4fbb-951e-7653763cb340',
                    'Content-Type' => 'application/json',
                ],
                'json' => $data,
            ]);

            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            // Manejar el error de la solicitud HTTP aquí
            // Por ejemplo, puedes lanzar una excepción o devolver un mensaje de error
            return ['error' => $e->getMessage()];
        }
    }
}

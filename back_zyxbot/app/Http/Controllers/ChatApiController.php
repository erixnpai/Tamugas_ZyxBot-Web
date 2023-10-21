<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\RequestException;

class ChatApiController extends Controller
{

    public function prompt(Request $request)
    {

        $data =  ['in-0' => $request->json('mensaje')];
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
            $response = $client->post(env("API_STACK_URL"), [
                'headers' => [
                    'Authorization' => env('API_STACK_BEARER'),
                    'Content-Type' => 'application/json',
                ],
                'json' => $data,
            ]);

            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            // Manejar el error de la solicitud HTTP aquí
            
            return ['error' => $e->getMessage()];
        }
    }
}

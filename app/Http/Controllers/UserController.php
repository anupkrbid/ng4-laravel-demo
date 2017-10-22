<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exceptions\HttpBadRequestException;
use App\User;
use Tymon\JWTAuth\Exception\JWTException;
use JWTAuth;

class UserController extends Controller
{
    public function signup(Request $request)
    {
      $this->validate($request, [
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'password' => 'required'
      ]);
      $user = new User([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password)
      ]);

      if($user->save()) {
        return response()->json([
          'success' => true,
          'message' => 'New User Successfully Added!'
        ], 201);
      } else {
        return response()->json([
          'success' => false,
          'message' => 'Something Went Wrong!'
        ], 500);
      }

    }

    public function signin(Request $request)
    {
      $this->validate($request, [
        'email' => 'required|email',
        'password' => 'required'
      ]);
      $credentials = $request->only('email', 'password');
      try {
        if(!$token = JWTAuth::attempt($credentials)){
          return response()->json([
            'success' => false,
            'message' => 'Invalide Credentials!'
          ], 401);
        } else {
          return response()->json([
            'success' => true,
            'message' => 'User Successfully Logged In!',
            'token' => $token
          ], 200);
        }
      } catch(JWTException $e) {
        return response()->json([
          'success' => false,
          'message' => 'Some Thing Went Wrong!'
        ], 500);
      }
    }

    public function signout(Request $request)
    {
       try {
           JWTAuth::invalidate($request->input('token'));
           return response()->json([
               'success' => true,
               'message' => 'User Logged Out Successfully!'
           ], 200);
       } catch (Exception $e) {
           return response()->json([
               'success' => false,
               'message' => $e->getMessage(),
           ], 500);
       }
   }

    public function isEmailExist(Request $request) {
        try {
            $email = $request->input('email');
            $emailExists = User::where('email',$email)->count();
            if($emailExists > 0){
                $response = [
                    'status' => false,
                    'message' => 'Email already taken.'
                ];
                $responseCode = 200;
            } else {
                $response = [
                    'status' => true,
                    'message' => 'Email is available.'
                ];
                $responseCode = 200;
            }

        } catch (HttpBadRequestException $httpBadRequestException) {
            $response = [
                'status'    => false,
                'error'     => $httpBadRequestException->getMessage()
            ];
            $responseCode = 400;
        }
        return response()->json($response, $responseCode);
    }
}

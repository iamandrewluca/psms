<?php
/**
 * Created by PhpStorm.
 * User: andreiluca
 * Date: 1/12/18
 * Time: 05:00
 */

namespace App\Http\Controllers\Consumer;


use App\Eloquent\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class AuthenticationController extends ConsumerBaseController
{
    public function signIn(Request $request)
    {
//        $this->validate($request, [
//            'email' => 'required|email',
//            'password' => 'required|min:8',
//        ]);
//
//        $admin = Admin::where([
//            'email' => $request->input('email')
//        ])->first();
//
//        if ($admin && Hash::check($request->input('password'), $admin->password)) {
//            $admin->api_token = bin2hex(random_bytes(30));
//            $admin->save();
//
//            return [
//                'status' => 'SUCCESS',
//                'api_token' => $admin->api_token,
//            ];
//        } else {
//            return [
//                'status' => 'FAILURE',
//                'message' => 'Username or password wrong.',
//            ];
//        }
    }

    public function signOut()
    {
        $user = User::find(Auth::guard('api')->id());
        $user->api_token = null;
        $user->save();

        return [
            'status' => 'SUCCESS',
            'message' => 'User signed out.',
        ];
    }

    public function signUp(Request $request)
    {
//        $this->validate($request, [
//            'name' => 'required',
//            'email' => 'required|email|unique:users',
//            'password' => 'required|min:8',
//        ]);
//
//        $user = new User($request->only(['name', 'email']));
//        $user->password = Hash::make($request->input('password'));
//        $user->api_token = str_random(60);
//
//        $user->save();
//
//        return $user;

        return RedirectResponse::create('/api/v1/webhooks/provider');
    }}

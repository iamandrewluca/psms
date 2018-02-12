<?php
/**
 * Created by PhpStorm.
 * User: andreiluca
 * Date: 1/12/18
 * Time: 05:00
 */

namespace App\Http\Controllers\Consumer;


use App\Eloquent\NumberProvider;
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
        $this->validate($request, [
            'mcc' => 'required',
            'mnc' => 'required',
            'number' => 'required',
        ]);

        $provider = NumberProvider
            ::where('mnc', $request->input('mnc'))
            ->where('mcc', $request->input('mcc'))
            ->firstOrFail();

        $user = new User($request->only(['number']));
        $user->validated = false;
        $user->api_token = str_random(60);

        $user->provider()->associate($provider);
        $user->saveOrFail();

        return JsonResponse::create([
            'user' => $user,
            'token' => $user->api_token,
        ]);
    }

    public function status(Request $request)
    {
        if (!$request->input('token')) {
            return JsonResponse::create([
                'STATUS' => 'ERROR',
                'ERROR' => 'INVALID_TOKEN'
            ]);
        }

        return User::where('api_token', $request->input('token'))->firstOrFail();
    }
}

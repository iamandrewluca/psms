<?php
/**
 * Created by PhpStorm.
 * User: andreiluca
 * Date: 1/12/18
 * Time: 05:00
 */

namespace App\Http\Controllers\Admin;


use App\Eloquent\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthenticationController extends AdminBaseController
{
    public function signIn(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $admin = Admin::where([
            'email' => $request->input('email')
        ])->first();

        if ($admin && Hash::check($request->input('password'), $admin->password)) {
            $admin->api_token = bin2hex(random_bytes(30));
            $admin->save();

            return [
                'status' => 'SUCCESS',
                'api_token' => $admin->api_token,
            ];
        } else {
            return [
                'status' => 'FAILURE',
                'message' => 'Username or password wrong.',
            ];
        }
    }

    public function signOut()
    {
        $user = Admin::find(Auth::guard('admin-api')->id());
        $user->api_token = null;
        $user->save();

        return [
            'status' => 'SUCCESS',
            'message' => 'User signed out.',
        ];
    }
}

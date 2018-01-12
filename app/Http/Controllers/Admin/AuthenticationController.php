<?php
/**
 * Created by PhpStorm.
 * User: andreiluca
 * Date: 1/12/18
 * Time: 05:00
 */

namespace App\Http\Controllers\Admin;


class AuthenticationController extends AdminBaseController
{
    public function signIn()
    {
        return [self::class, __FUNCTION__];
    }

    public function signOut()
    {
        return [self::class, __FUNCTION__];
    }
}

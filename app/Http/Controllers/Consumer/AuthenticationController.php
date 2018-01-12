<?php

namespace App\Http\Controllers\Consumer;


class AuthenticationController extends ConsumerBaseController
{
    public function signIn()
    {
        return [self::class, __FUNCTION__];
    }

    public function signUp()
    {
        return [self::class, __FUNCTION__];
    }

    public function signOut()
    {
        return [self::class, __FUNCTION__];
    }
}

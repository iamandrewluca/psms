<?php

namespace App\Providers;

use App\Eloquent\Admin;
use App\Eloquent\User;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Boot the authentication services for the application.
     *
     * @return void
     */
    public function boot()
    {
        /** @var AuthManager $authManager */
        $authManager = $this->app['auth'];

        $users = [
            'api' => User::class,
            'admin-api' => Admin::class,
        ];

        foreach ($users as $driver => $user) {
            $authManager->viaRequest($driver, function ($request) use ($user) {
                /** @var Request $request */
                $apiToken = $request->header('Api-Token');
                if ($apiToken) {
                    return call_user_func(array($user, 'where'), ['api_token', $apiToken])->first();
                }

                return null;
            });
        }
    }
}

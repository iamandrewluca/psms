<?php
/**
 * Created by PhpStorm.
 * User: andreiluca
 * Date: 3/1/18
 * Time: 03:52
 */

namespace App\Services;


use App\Eloquent\NumberProvider;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class NumberProviders
{
    public function update()
    {
        // get new providers
        $providersXmlUrl = config('merchant.fortumo.providersXml');
        $xml = simplexml_load_file($providersXmlUrl);

        $allProviders = [];

        $countries = $xml->service->countries->country;
        foreach ($countries as $country) {
            $providers = $country->prices->price->message_profile->operator;
            foreach ($providers as $provider) {

                $code = $provider->codes->code[0];
                $mnc = (string)$code["mnc"];
                $mcc = (string)$code["mcc"];

                $numberProvider = new NumberProvider();
                $numberProvider->network = (string)$provider["name"];
                $numberProvider->country = (string)$country["name"];
                $numberProvider->mcc = $mcc;
                $numberProvider->iso = (string)$country["code"];
                $numberProvider->country_code = $mcc;
                $numberProvider->mnc = $mnc;
                $numberProvider->flow = 'SMS';
                $allProviders[] = $numberProvider;
            }
        }

        // clear database
        DB::table('number_providers')->delete();

        // insert new one
        foreach ($allProviders as $provider) {
            $provider->save();
        }

        return $allProviders;
    }
}

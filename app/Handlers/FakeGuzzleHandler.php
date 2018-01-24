<?php
/**
 * Created by PhpStorm.
 * User: andreiluca
 * Date: 1/15/18
 * Time: 01:45
 */

namespace App\Handlers;


use GuzzleHttp\Promise\Promise;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\JsonResponse;
use Psr\Http\Message\RequestInterface;

class FakeGuzzleHandler
{
    /**
     * @param RequestInterface $request
     * @param $options
     * @return Promise
     */
    public function __invoke(RequestInterface $request, $options)
    {
        $promise = new Promise(function () use ($request, &$promise) {
            $promise->resolve($this->getResponse($request));
        });

        return $promise;
    }

    /**
     * @param RequestInterface $request
     * @return Response|string
     */
    private function getResponse(RequestInterface $request)
    {
        $path = $request->getUri()->getPath();

        switch ($path)
        {
            // WEB
            case '/webAuthorize': return $this->webAuthorize();
            case '/smsAuthorize': return $this->smsAuthorize();
            case '/webValidatePin': return $this->webValidatePin();
            // MOBILE
            case '/wapIdentifyUser': return $this->wapIdentifyUser();
            case '/getUser': return $this->getUser();
            case '/wapAuthorize': return $this->wapAuthorize();
            // SOME COUNTRIES
            case '/paymentAuthorize': return $this->paymentAuthorize();
            // COMMON
            case '/checkStatus': return $this->checkStatus();
            case '/preparePayment': return $this->preparePayment();
            case '/commitPayment': return $this->commitPayment();
            case '/getSubscription': return $this->getSubscription();
            case '/closeSubscription': return $this->closeSubscription();
            default: return JsonResponse::create(["Nothing to see here"]);
        }
    }

    // WEB
    private function webAuthorize() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
            'sessionId' => '123',
            'redirectURL' => '/webhooks/redirect',
            'operatorCode' => ''
        ]);
    }

    private function smsAuthorize() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
            'sessionId' => '123',
            'redirectURL' => '/webhooks/redirect',
            'operatorCode' => ''
        ]);
    }

    private function webValidatePin() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
        ]);
    }

    // MOBILE
    private function wapIdentifyUser() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
            'uid' => 1,
            'redirectURL' => '/webhooks/redirect',
            'operatorCode' => ''
        ]);
    }

    private function wapAuthorize() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
            'sessionId' => '123',
            'redirectURL' => '/webhooks/redirect',
            'operatorCode' => ''
        ]);
    }

    private function getUser() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
            'user' => [
                'status' => '',
                'userIP' => '',
                'msisdn' => '',
                'operatorCode' => '',
            ]
        ]);
    }

    // SOME
    private function paymentAuthorize() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
            'sessionId' => '123',
            'redirectURL' => '/webhooks/redirect',
            'operatorCode' => ''
        ]);
    }

    // COMMON
    private function checkStatus() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
            'statusNumber' => 1,
            'statusText' => ''
        ]);
    }

    private function preparePayment() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
            'trid' => 1,
        ]);
    }

    private function commitPayment() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
            'msisdn' => '1234',
        ]);
    }

    private function getSubscription() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
            'subscription' => [
                'subscriptionId' => '',
                'msisdn' => '',
                'operatorCode' => '',
                'statusNumber' => 100,
                'statusText' => '',
                'recurrent' => 1,
                'paymentType' => '',
                'timeOpen' => 123,
                'timeAuthorized' => 123,
                'timeRenewal' => 123,
            ],
        ]);
    }

    private function closeSubscription() {
        return JsonResponse::create([
            'resultCode' => 100,
            'resultText' => '',
        ]);
    }

}

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
            case '/getUser':
                return $this->getUser();
            default:
                return JsonResponse::create(["Nothing to see here"]);
        }
    }

    private function getUser() {
        return JsonResponse::create(['user' => 123]);
    }
}

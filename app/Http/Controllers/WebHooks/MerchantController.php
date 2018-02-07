<?php

namespace App\Http\Controllers\WebHooks;


use Illuminate\Http\JsonResponse;
use App\Http\Controllers\BaseController;
use App\Log\MongoLog;
use Illuminate\Http\Request;

class MerchantController extends BaseController
{
    /**
     * Create a new controller instance.
     */
    public function __construct() {}

    public function report(Request $request, MongoLog $logger)
    {
        $logger->log('INFO', (string)$request);
        return JsonResponse::create();
    }

    public function callback(Request $request)
    {
        $billing_reports_enabled = false;

        // check that the request comes from Fortumo server
//        if(!in_array($_SERVER['REMOTE_ADDR'],
//            array('1.2.3.4', '2.3.4.5'))) {
//            header("HTTP/1.0 403 Forbidden");
//            die("Error: Unknown IP");
//        }

        // check the signature
        $secret = ''; // insert your secret between ''
        if(empty($secret) || !$this->check_signature($_GET, $secret)) {
            header("HTTP/1.0 404 Not Found");
            die("Error: Invalid signature");
        }

        $sender = $_GET['sender'];
        $message = $_GET['message'];
        $message_id = $_GET['message_id'];//unique id

        //hint:use message_id to log your messages
        //additional parameters: country, price, currency, operator, keyword, shortcode
        // do something with $sender and $message
        $reply = 'Thank you for using our service.';

        // print out the reply
        echo($reply);

        // only grant virtual credits to account, if payment has been successful.
        if (preg_match("/OK/i", $_GET['status'])
            || (preg_match("/MO/i", $_GET['billing_type']) && preg_match("/pending/i", $_GET['status']))) {
            // add_credits($message);
        }
    }

    private function check_signature($params_array, $secret) {
        ksort($params_array);

        $str = '';
        foreach ($params_array as $k=>$v) {
            if($k != 'sig') {
                $str .= "$k=$v";
            }
        }
        $str .= $secret;
        $signature = md5($str);

        return ($params_array['sig'] == $signature);
    }
}

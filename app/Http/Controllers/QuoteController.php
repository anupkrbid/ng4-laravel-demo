<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quote;
use JWTAuth;

class QuoteController extends Controller
{
    public function getQuotes()
    {
        $quotes = Quote::all();
        if($quotes) {
            return response()->json([
                'success' => true,
                'data' => $quotes
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Something Went Wrong!'
            ], 500);
        }
    }

    public function addQuote(Request $request)
    {
        // $user = JWTAuth::parseToken()->toUser();
        $quote = new Quote();
        $quote->content = $request->content;
        if($quote->save()) {
            return response()->json([
                'success' => true,
                'message' => 'New Quote Added!'
            ], 201);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Something Went Wrong!'
            ], 500);
        }
    }

    public function editQuote(Request $request, $id)
    {
        $quote = Quote::find($id);
        if($quote) {
            $quote->content = $request->content;
            $quote->save();
            return response()->json([
                'success' => true,
                'message' => 'Quote Updated!'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Quote Not Found!'
            ], 404);
        }
    }

    public function deleteQuote($id)
    {
        $quote = Quote::find($id);
        if($quote) {
            if($quote->delete()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Quote Deleted!'
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Something Went Wrong!'
                ], 500);
            }
        } else {
            return response()->json([
                    'success' => false,
                    'message' => 'Quote Not Found!'
                ], 404);
        }

    }
}

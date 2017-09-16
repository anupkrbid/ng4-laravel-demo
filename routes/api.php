<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/get-quotes', [
    'uses' => 'QuoteController@getQuotes'
]);

Route::post('/add-quote', [
    'uses' => 'QuoteController@addQuote',
    'middleware' => 'jwt.auth'
]);

Route::put('/edit-quote/{id}', [
    'uses' => 'QuoteController@editQuote',
    'middleware' => 'jwt.auth'
]);

Route::delete('/delete-quote/{id}', [
    'uses' => 'QuoteController@deleteQuote',
    'middleware' => 'jwt.auth'
]);

Route::post('/sign-up', [
    'uses' => 'UserController@signup'
]);

Route::post('/sign-in', [
    'uses' => 'UserController@signin'
]);

Route::post('/sign-out', [
    'uses' => 'UserController@signout'
]);

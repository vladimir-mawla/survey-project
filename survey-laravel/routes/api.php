<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});

Route::group(['prefix' => 'surveys'], function(){
    Route::post('/addsurvey', [SurveyController::class, 'addSurvey']);
    Route::post('/searchsurvey', [SurveyController::class, 'searchSurvey']);
    Route::post('/getsurveybyid', [SurveyController::class, 'getSurveyById']);
    Route::post('/getsurveys', [SurveyController::class, 'getSurveys']);
    Route::post('/deletesurveys', [SurveyController::class, 'deleteSurveys']);
    Route::post('/getsurveyanswers', [SurveyController::class, 'getSurveyAnswers']);
});
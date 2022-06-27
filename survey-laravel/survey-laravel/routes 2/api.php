<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\QuestionTypeController;
use App\Http\Controllers\QuestionOptionController;


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
Route::group(['prefix' => 'v1'], function(){
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
        Route::get('/getsurveys', [SurveyController::class, 'getSurveys']);
        Route::post('/deletesurveys', [SurveyController::class, 'deleteSurveys']);
        Route::post('/getsurveyanswers', [SurveyController::class, 'getSurveyAnswers']);
    });

    Route::group(['prefix' => 'questions'], function(){
        Route::post('/addquestion', [QuestionController::class, 'addQuestion']);
        Route::post('/getquestionsofsurveys', [QuestionController::class, 'getQuestionsOfSurveys']);
        Route::post('/deletequestion', [QuestionController::class, 'deleteQuestion']);
    });

    Route::group(['prefix' => 'answers'], function(){
        Route::post('/addanswer', [AnswerController::class, 'addAnswer']);
        Route::post('/getanswerofquestion', [AnswerController::class, 'getAnswerOfQuestion']);
    });

    Route::group(['prefix' => 'questiontypes'], function(){
        Route::post('/addquestiontype', [QuestionTypeController::class, 'addQuestionType']);
    });

    Route::group(['prefix' => 'questionoptions'], function(){
        Route::post('/addquestionoption', [QuestionOptionController::class, 'addQuestionOption']);
        Route::post('/getquestionoptions', [QuestionOptionController::class, 'getQuestionOptions']);
    });
});
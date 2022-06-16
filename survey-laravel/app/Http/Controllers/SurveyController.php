<?php

namespace App\Http\Controllers;
use App\Models\Survey;
use App\Models\Question;
use App\Models\Answer;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function addSurvey(Request $request){

        $survey = new Survey;
        $survey->name = $request->name;
        $survey->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
    public function searchSurvey(Request $request){
        $name = $request->name;
        $survey = Survey::where("name", "LIKE", "%$name%")->get();
        
        return response()->json([
            "status" => "Success",
            "result" => $survey
        ], 200);
    }
    public function getSurveyById(Request $request){
        $survey_id = $request->survey_id;
        $survey = Survey::find($survey_id);
        return response()->json([
            "status" => "Success",
            "survey" => $survey,
        ], 200);
    }
    public function getSurveys(){
        $surveys = Survey::all();
        
        return response()->json([
            "status" => "success",
            "surveys" => $surveys,
        ], 200);
    }
    public function deleteSurveys(Request $request){
        
        Survey::where('id',$request->survey_id)->delete();
        return response()->json([
            "survey" => "Deleted Survey",
        ], 200);
    }
    public function getSurveyAnswers(Request $request){
        $survey_id = $request->survey_id;
        $survey = Survey::find($survey_id);
        $questions = Question::where('survey_id', $survey_id)->get();
        $answers = Answer::where('survey_id', $survey_id)->get();
        return response()->json([
            "status" => "Success",
            "survey" => $survey,
            "questions" => $questions,
            "answers" => $answers,
        ], 200);
    }
}

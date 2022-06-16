<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function addQuestion(Request $request){

        $question = new Question;
        $question->question_type_id = $request->question_type_id;
        $question->question_option_id = $request->question_option_id;
        $question->content = $request->content;
        $question->survey_id = $request->survey_id;
        $question->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
    public function getQuestionsOfSurveys(Request $request){
        $survey_id = $request->survey_id;
        $question = Question::where('survey_id', $survey_id)->get();
        return response()->json([
            "status" => "Success",
            "question" => $question,
        ], 200);
    }
    public function deleteQuestion(Request $request){
        
        Question::where('question_id',$request->question_id)->delete();
        return response()->json([
            "success" => "Deleted Question",
        ], 200);
    }
}

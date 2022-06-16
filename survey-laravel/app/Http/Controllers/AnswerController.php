<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnswerController extends Controller
{
    public function addAnswer(Request $request){
        $answer = new Answer;
        $answer->answer = $request->answer;
        $answer->question_id = $request->question_id;
        $answer->user_id = $request->user_id;
        $answer->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
    public function getAnswerOfQuestion(Request $request){
        $question_id = $request->question_id;
        $answer = Answer::where('question_id', $question_id)->get();
        return response()->json([
            "status" => "Success",
            "answer" => $answer,
        ], 200);
    }
}

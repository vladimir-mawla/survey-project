<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionOptionController extends Controller
{
    public function addQuestionOption(Request $request){

        $question_option = new QuestionOption;
        $question_option->question_id = $request->question_id;
        $question_option->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
}

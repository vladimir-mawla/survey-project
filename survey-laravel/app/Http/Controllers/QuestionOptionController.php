<?php

namespace App\Http\Controllers;
use App\Models\QuestionOption;
use Illuminate\Http\Request;

class QuestionOptionController extends Controller
{
    public function addQuestionOption(Request $request){

        $question_option = new QuestionOption;
        $question_option->question_id = $request->question_id;
        $question_option->option = $request->option;

        $question_option->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
    public function getQuestionOptions(Request $request){

        $question_id = $request->question_id;

        $options = QuestionOption::where('question_id', $question_id)->get();
        
        return response()->json([
            "status" => "success",
            "surveys" => $options,
        ], 200);
    }
}

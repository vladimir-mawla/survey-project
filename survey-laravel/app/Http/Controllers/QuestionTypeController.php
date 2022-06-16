<?php

namespace App\Http\Controllers;
use App\Models\QuestionType;
use Illuminate\Http\Request;

class QuestionTypeController extends Controller
{
    public function addQuestionType(Request $request){

        $question_type = new QuestionType;
        $question_type->question_id = $request->question_id;
        $question_type->save();

        return response()->json([
            "status" => "Success",
        ], 200);
    }
}

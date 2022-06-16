<?php

namespace App\Http\Controllers;

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
}

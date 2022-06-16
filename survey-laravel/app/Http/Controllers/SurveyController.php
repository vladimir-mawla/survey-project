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
    public function searchSurvey(Request $request){
        $name = $request->name;
        $survey = Item::where("name", "LIKE", "%$name%")->get();
        
        return response()->json([
            "status" => "Success",
            "result" => $survey
        ], 200);
    }
}

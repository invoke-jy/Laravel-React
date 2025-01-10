<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(User $user)
    {
        $users = $user->paginate(10);

        return response()->json($users);
    }

    public function show(User $user, $id)
    {
        $user = $user->find($id);
        
        return response()->json($user);
    }
}

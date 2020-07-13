<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('/api/formulario','Formulario2Controllers');
Route::resource('/api/doctores','DoctoresControllers');
Route::post('/api/login','DoctoresControllers@login');
Route::resource('/api/formulariohealth','Formulario1Controllers');
Route::resource('/api/formularioihos','FormularioIhosControllers');
Route::resource('/api/formularioatm','FormularioAtmControllers');
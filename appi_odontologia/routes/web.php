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
Route::resource('/api/formulario1','Formulario1Controllers');
Route::resource('/api/formularioihos','FormularioIhosControllers');
Route::resource('/api/formularioatm','FormularioAtmControllers');
Route::resource('/api/odontograma','OdontogramaControllers');
Route::resource('/api/formulario3','Formulario3Controllers');
Route::resource('/api/formularioihost','FormularioIhostControllers');
Route::resource('/api/controlpagos','ControlPagosControllers');
Route::resource('/api/tratamiento','TratamientoControllers');
Route::resource('/api/placaant','PlacaAntControllers');
Route::resource('/api/placaact','PlacaActControllers');
Route::get('/api/formularioex/{filename}','Formulario2Controllers@showex');
Route::get('/api/contador/{filename}/{tipo}','Formulario1Controllers@contador');
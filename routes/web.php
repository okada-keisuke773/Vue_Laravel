<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', fn() => view('index'))->where('any', '.+');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

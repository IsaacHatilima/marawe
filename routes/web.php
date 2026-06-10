<?php

use App\Http\Controllers\StorefrontController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/marken/tifoo', 'brands/tifoo')->name('brands.tifoo');
Route::inertia('/marken/goldanalytix', 'brands/goldanalytix')->name('brands.goldanalytix');
Route::inertia('/marken/tobolin', 'brands/tobolin')->name('brands.tobolin');

Route::get('/produkte', [StorefrontController::class, 'index'])->name('products.index');
Route::get('/produkte/{product}', [StorefrontController::class, 'show'])->name('products.show');
Route::get('/warenkorb', [StorefrontController::class, 'cart'])->name('cart');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

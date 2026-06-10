<?php

use Inertia\Testing\AssertableInertia as Assert;

it('renders the product list page', function () {
    $this->get(route('products.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('products/index')
            ->has('products', 44)
            ->has('filters.brands', 3)
            ->has('filters.categories', 3)
            ->has('filters.categories.Tifoo', 7)
            ->has('filters.categories.Goldanalytix', 3)
            ->has('filters.categories.Tobolin', 5)
        );
});

it('renders product details with similar products', function () {
    $this->get(route('products.show', ['product' => 'goldscreensensor']))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('products/show')
            ->where('product.slug', 'goldscreensensor')
            ->where('product.name', 'GoldScreenSensor')
            ->has('similarProducts', 4)
        );
});

it('returns not found for unknown products', function () {
    $this->get(route('products.show', ['product' => 'missing-product']))
        ->assertNotFound();
});

it('renders the cart page', function () {
    $this->get(route('cart'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('cart')
        );
});

<?php

use Inertia\Testing\AssertableInertia as Assert;

it('renders the product list page', function () {
    $this->get(route('products.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('products/index')
            ->has('products', 12)
            ->has('filters.brands', 3)
            ->has('filters.categories', 3)
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
            ->has('items', 3)
            ->has('summary.subtotal')
            ->where('summary.shipping', 'Kostenlos')
        );
});

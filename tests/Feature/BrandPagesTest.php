<?php

use Inertia\Testing\AssertableInertia as Assert;

it('renders the brand pages', function (string $routeName, string $component) {
    $response = $this->get(route($routeName));

    $response->assertOk();
    $response->assertInertia(fn (Assert $page) => $page->component($component));
})->with([
    'tifoo' => ['brands.tifoo', 'brands/tifoo'],
    'goldanalytix' => ['brands.goldanalytix', 'brands/goldanalytix'],
    'tobolin' => ['brands.tobolin', 'brands/tobolin'],
]);

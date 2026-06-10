<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class StorefrontController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('products/index', [
            'products' => $this->products(),
            'filters' => [
                'brands' => ['Tifoo', 'Goldanalytix', 'Tobolin'],
                'categories' => [
                    'Oberflächentechnik',
                    'Edelmetallprüfung',
                    'Bauwerksabdichtung',
                ],
            ],
        ]);
    }

    public function show(string $product): Response
    {
        $selectedProduct = collect($this->products())
            ->firstWhere('slug', $product);

        abort_if($selectedProduct === null, 404);

        $similarProducts = collect($this->products())
            ->reject(fn (array $item): bool => $item['slug'] === $product)
            ->filter(fn (array $item): bool => $item['brand'] === $selectedProduct['brand'] || $item['category'] === $selectedProduct['category']);

        $fallbackProducts = collect($this->products())
            ->reject(fn (array $item): bool => $item['slug'] === $product)
            ->reject(fn (array $item): bool => $similarProducts->contains('slug', $item['slug']));

        return Inertia::render('products/show', [
            'product' => $selectedProduct,
            'similarProducts' => $similarProducts
                ->concat($fallbackProducts)
                ->take(4)
                ->values()
                ->all(),
        ]);
    }

    public function cart(): Response
    {
        $products = collect($this->products());
        $items = collect([
            ['slug' => 'goldscreensensor', 'quantity' => 1],
            ['slug' => 'tifoo-galvanik-set-gold', 'quantity' => 2],
            ['slug' => 'tobolin-horizontalsperre-set', 'quantity' => 1],
        ])->map(function (array $cartItem) use ($products): array {
            $product = $products->firstWhere('slug', $cartItem['slug']);

            return [
                'product' => $product,
                'quantity' => $cartItem['quantity'],
                'lineTotal' => $this->formatPrice($product['priceCents'] * $cartItem['quantity']),
            ];
        })->all();

        $subtotalCents = collect($items)->sum(fn (array $item): int => $item['product']['priceCents'] * $item['quantity']);
        $shippingCents = 0;

        return Inertia::render('cart', [
            'items' => $items,
            'summary' => [
                'subtotal' => $this->formatPrice($subtotalCents),
                'shipping' => 'Kostenlos',
                'taxNote' => 'Alle Preise inkl. gesetzlicher Mehrwertsteuer.',
                'total' => $this->formatPrice($subtotalCents + $shippingCents),
            ],
        ]);
    }

    /**
     * @return array<int, array{
     *     slug: string,
     *     name: string,
     *     brand: string,
     *     category: string,
     *     price: string,
     *     priceCents: int,
     *     image: string,
     *     productNumber?: string,
     *     deliveryTime?: string,
     *     badge: string,
     *     excerpt: string,
     *     description: string,
     *     descriptionBody?: array<int, string>,
     *     highlights: array<int, string>,
     *     scopeOfDelivery?: array<int, string>,
     *     downloads?: array<int, string>,
     *     safetyInfo?: array<int, string>,
     *     manufacturer?: array{name: string, address: array<int, string>, phone: string, email: string},
     *     reviewNote?: string,
     *     specifications: array<string, string>
     * }>
     */
    private function products(): array
    {
        return [
            [
                'slug' => 'tifoo-galvanik-set-gold',
                'name' => 'Tifoo Galvanik-Set Gold',
                'brand' => 'Tifoo',
                'category' => 'Oberflächentechnik',
                'price' => '249,00 €',
                'priceCents' => 24900,
                'image' => '/tifoo/galvanisieren.webp',
                'productNumber' => 'TIF-GLD-SET',
                'deliveryTime' => '2-5 days',
                'badge' => 'DIY Galvanik',
                'excerpt' => 'Komplettes Set zum Vergolden und Veredeln kleiner Metallteile.',
                'description' => 'Ein kompaktes Einstiegssystem für dekorative Beschichtungen, Reparaturen und hochwertige Oberflächen im Werkstatt- oder Hobbyumfeld.',
                'highlights' => ['Badgalvanik und Stiftgalvanik', 'Für Schmuck, Werkstücke und Musterteile', 'Mit klarer Schritt-für-Schritt-Anwendung'],
                'specifications' => [
                    'Anwendung' => 'Vergolden und Metallveredelung',
                    'Zielgruppe' => 'Einsteiger, Bastler, Gewerbe',
                    'Marke' => 'Tifoo',
                ],
            ],
            [
                'slug' => 'tifoo-eloxal-starter',
                'name' => 'Tifoo Eloxal Starter',
                'brand' => 'Tifoo',
                'category' => 'Oberflächentechnik',
                'price' => '89,90 €',
                'priceCents' => 8990,
                'image' => '/tifoo/eloxieren.webp',
                'productNumber' => 'TIF-ELX-001',
                'deliveryTime' => '2-5 days',
                'badge' => 'Aluminium',
                'excerpt' => 'Eloxieren und Einfärben von Aluminiumteilen im kleinen Maßstab.',
                'description' => 'Für Aluminiumteile wie Werkzeuge, Fahrradteile oder Hifi-Komponenten: vorbereiten, eloxieren, färben und schützen.',
                'highlights' => ['Farbige Schutzschicht', 'Für Kleinteile aus Aluminium', 'Passend zur Tifoo Vorbehandlung'],
                'specifications' => [
                    'Anwendung' => 'Eloxieren',
                    'Material' => 'Aluminium',
                    'Marke' => 'Tifoo',
                ],
            ],
            [
                'slug' => 'goldscreensensor',
                'name' => 'GoldScreenSensor',
                'brand' => 'Goldanalytix',
                'category' => 'Edelmetallprüfung',
                'price' => '1.749,00 €',
                'priceCents' => 174900,
                'image' => '/marawe/marawe_gold.jpg',
                'productNumber' => 'G-01-0008',
                'deliveryTime' => '2-5 days',
                'badge' => 'Münzen & Barren',
                'excerpt' => 'Zerstörungsfreie Echtheitsprüfung für Edelmetallmünzen und Barren.',
                'description' => 'Der Sensor erkennt gängige Fälschungen bei Anlagemünzen und Barren schnell, diskret und ohne Beschädigung des Prüfobjekts.',
                'highlights' => ['Erkennt Wolfram, Molybdän und weitere Fälschungen', 'Schnelle Ergebnisausgabe', 'Für Händler und Privatinvestoren'],
                'specifications' => [
                    'Prüfobjekte' => 'Münzen und Barren',
                    'Methode' => 'Elektronische Prüfung',
                    'Marke' => 'Goldanalytix',
                ],
            ],
            [
                'slug' => 'caratscreenpen',
                'name' => 'CaratScreenPen V2',
                'brand' => 'Goldanalytix',
                'category' => 'Edelmetallprüfung',
                'price' => '945,00 €',
                'priceCents' => 94500,
                'image' => 'https://www.gold-analytix.de/thumbnail/83/a9/0e/1780917118/int-produktbild-g-01-0012-002-1-800x800.webp',
                'productNumber' => 'G-01-0012',
                'deliveryTime' => '2-5 days',
                'badge' => 'Schmuck',
                'excerpt' => 'Goldgehalt von Schmuck direkt am Objekt bestimmen.',
                'description' => 'Das handliche Prüfgerät unterstützt den An- und Verkauf von Goldschmuck und hilft, Unterlegierungen sowie dünn vergoldete Stücke zu erkennen.',
                'descriptionBody' => [
                    'Would you like to know how much the family gold jewellery is really worth? Are you sure that your wedding ring is really made of 14 carat gold? The CaratScreenPen is a proven testing device for reliably checking the authenticity of gold jewellery of all shapes and colours.',
                    'The sophisticated electrochemical measuring system makes it possible to determine the fineness of almost any item containing gold. Objects made of platinum or palladium as well as rhodium-plated jewellery can also be identified.',
                    'The CaratScreenPen is suitable for commercial and private users: metal dealers, antique markets, pawn shops, private gold purchases and anyone who wants to protect themselves from counterfeits.',
                    'Please note: the CaratScreenPen is not suitable for testing silver jewellery and is based on a purely superficial measurement. For further information, please refer to the instruction manual.',
                    'The perfect solution when buying and selling gold jewellery: use the CaratScreenPen for more security during evaluation and purchase conversations.',
                ],
                'highlights' => [
                    'Quickly and easily determine the carat number on the surface of gold jewellery',
                    'Immediately identify gold-plated counterfeits in combination with the glass fibre pen',
                    'Determine the gold content of unstamped objects and recognize stamp fraud',
                    'Mobile use and long battery life',
                    'No test acids or expensive X-ray fluorescence devices required',
                ],
                'scopeOfDelivery' => [
                    'CaratScreenPen',
                    'Measuring pen V2 (consumable item)',
                    'Jack cable',
                    'USB-C charger',
                    'Glass fibre pen',
                    'File',
                    'Detailed instruction manual',
                    'Practical, padded carrying case',
                    'Shipping carton',
                ],
                'downloads' => [
                    'Instruction Manual CaratScreenPen V2',
                    'Application information for CaratScreenPen V2',
                    'Product safety information',
                    'Shipping and returns information',
                ],
                'safetyInfo' => [
                    'The information on the product label must always be followed.',
                    'The measuring pen is a consumable item and must be replaced with the compatible V2 replacement pen.',
                    'The measurement is a surface measurement; in case of doubt, additional testing methods are recommended.',
                ],
                'manufacturer' => [
                    'name' => 'MARAWE GmbH & Co. KG',
                    'address' => ['An d. Irler Höhe 3B', '93055 Regensburg, Deutschland'],
                    'phone' => '+49 941 29020439',
                    'email' => 'info@marawe.de',
                ],
                'reviewNote' => 'No reviews found yet. Product review submission is reserved for logged-in customers.',
                'specifications' => [
                    'Prüfobjekte' => 'Goldschmuck',
                    'Methode' => 'Oberflächenmessung',
                    'Marke' => 'Goldanalytix',
                ],
            ],
            [
                'slug' => 'replacement-pen-v2-caratscreenpen',
                'name' => 'Replacement pen V2 for CaratScreenPen V2',
                'brand' => 'Goldanalytix',
                'category' => 'Edelmetallprüfung',
                'price' => '39,90 €',
                'priceCents' => 3990,
                'image' => 'https://www.gold-analytix.de/thumbnail/39/c6/c0/1780917113/int-produktbild-g-01-0013-001-1-800x800.webp',
                'productNumber' => 'G-01-0013',
                'deliveryTime' => '2-5 days',
                'badge' => 'Zubehör',
                'excerpt' => 'Only compatible with CaratScreenPen V2.',
                'description' => 'Replacement measuring pen V2 for continued use of the CaratScreenPen V2.',
                'highlights' => ['Consumable measuring pen', 'Only compatible with CaratScreenPen V2', 'For reliable follow-up measurements'],
                'specifications' => [
                    'Anwendung' => 'Ersatzteil',
                    'Kompatibilität' => 'CaratScreenPen V2',
                    'Marke' => 'Goldanalytix',
                ],
            ],
            [
                'slug' => 'glass-fibre-pen-eraser',
                'name' => 'Glass fibre pen / eraser with 10 replacement tips',
                'brand' => 'Goldanalytix',
                'category' => 'Edelmetallprüfung',
                'price' => '10,90 €',
                'priceCents' => 1090,
                'image' => 'https://www.gold-analytix.de/thumbnail/7b/b6/09/1780917087/int-produktbild-g-01-0014-001-1-800x800.webp',
                'productNumber' => 'G-01-0014',
                'deliveryTime' => '2-5 days',
                'badge' => 'Zubehör',
                'excerpt' => 'Replacement fibreglass pen for gentle surface cleaning before testing.',
                'description' => 'Glass fibre pen with replacement tips for preparing jewellery surfaces before CaratScreenPen measurements.',
                'highlights' => ['Gentle surface cleaning', '10 replacement tips', 'Useful accessory for CaratScreenPen workflows'],
                'specifications' => [
                    'Anwendung' => 'Oberflächenvorbereitung',
                    'Lieferumfang' => 'Glass fibre pen and 10 tips',
                    'Marke' => 'Goldanalytix',
                ],
            ],
            [
                'slug' => 'gold-silver-platinum-testing-kit',
                'name' => 'Gold, silver and platinum testing kit',
                'brand' => 'Goldanalytix',
                'category' => 'Edelmetallprüfung',
                'price' => '67,90 €',
                'priceCents' => 6790,
                'image' => '/marawe/marawe_gold.jpg',
                'productNumber' => 'G-03-0001',
                'deliveryTime' => '2-5 days',
                'badge' => 'Prüfsäuren',
                'excerpt' => 'Assay acids for testing authenticity and determining the carat number of gold.',
                'description' => 'Classic assay acid kit for gold, silver and platinum testing workflows.',
                'highlights' => ['For gold, silver and platinum', 'Authenticity testing', 'Carat number support'],
                'specifications' => [
                    'Anwendung' => 'Prüfsäuren',
                    'Metalle' => 'Gold, Silber, Platin',
                    'Marke' => 'Goldanalytix',
                ],
            ],
            [
                'slug' => 'gold-testing-kit',
                'name' => 'Gold testing kit',
                'brand' => 'Goldanalytix',
                'category' => 'Edelmetallprüfung',
                'price' => '35,90 €',
                'priceCents' => 3590,
                'image' => '/marawe/marawe_gold.jpg',
                'productNumber' => 'G-03-0002',
                'deliveryTime' => '2-5 days',
                'badge' => 'Prüfsäuren',
                'excerpt' => 'Gold testing acids included for 8, 14, 18 and 21 carat.',
                'description' => 'Compact kit for classic gold testing by assay acids.',
                'highlights' => ['8 carat', '14 carat', '18 carat', '21 carat'],
                'specifications' => [
                    'Anwendung' => 'Goldprüfung',
                    'Methode' => 'Prüfsäuren',
                    'Marke' => 'Goldanalytix',
                ],
            ],
            [
                'slug' => 'silver-testing-kit',
                'name' => 'Silver testing kit',
                'brand' => 'Goldanalytix',
                'category' => 'Edelmetallprüfung',
                'price' => '25,90 €',
                'priceCents' => 2590,
                'image' => '/marawe/marawe_gold.jpg',
                'productNumber' => 'G-03-0003',
                'deliveryTime' => '2-5 days',
                'badge' => 'Prüfsäuren',
                'excerpt' => 'For the reliable authentication of silver.',
                'description' => 'Classic silver testing kit for a reliable first authentication.',
                'highlights' => ['Silver authentication', 'Compact kit', 'Useful for comparison checks'],
                'specifications' => [
                    'Anwendung' => 'Silberprüfung',
                    'Methode' => 'Prüfsäuren',
                    'Marke' => 'Goldanalytix',
                ],
            ],
            [
                'slug' => 'test-acid-gold',
                'name' => 'Test acid gold',
                'brand' => 'Goldanalytix',
                'category' => 'Edelmetallprüfung',
                'price' => '10,90 €',
                'priceCents' => 1090,
                'image' => '/marawe/marawe_gold.jpg',
                'productNumber' => 'G-03-0004',
                'deliveryTime' => '2-5 days',
                'badge' => 'Prüfsäuren',
                'excerpt' => 'Gold testing acids for 8, 14, 18 and 21 carat.',
                'description' => 'Selectable gold test acid variants for classic gold testing workflows.',
                'highlights' => ['8 carat (333)', '14 carat (585)', '18 carat (750)', '21 carat (875)'],
                'specifications' => [
                    'Content' => '0.02 Liter',
                    'Variants' => '8, 14, 18, 21 carat',
                    'Marke' => 'Goldanalytix',
                ],
            ],
            [
                'slug' => 'tobolin-horizontalsperre-set',
                'name' => 'Tobolin Horizontalsperre Set',
                'brand' => 'Tobolin',
                'category' => 'Bauwerksabdichtung',
                'price' => '189,00 €',
                'priceCents' => 18900,
                'image' => 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
                'productNumber' => 'TOB-HS-SET',
                'deliveryTime' => '2-5 days',
                'badge' => 'Feuchteschutz',
                'excerpt' => 'Systemlösung gegen kapillar aufsteigende Feuchtigkeit im Mauerwerk.',
                'description' => 'Die Horizontalsperre schützt Mauerwerk vor Feuchtigkeit und Folgeschäden wie Schimmel oder Salz-Ausblühungen.',
                'highlights' => ['Einfach selbst anzubringen', 'Für Bestandsgebäude und Sanierung', 'Dauerhafter Schutz'],
                'specifications' => [
                    'Anwendung' => 'Mauerwerksabdichtung',
                    'Einsatz' => 'Innen und Sanierung',
                    'Marke' => 'Tobolin',
                ],
            ],
            [
                'slug' => 'tobometer-hy',
                'name' => 'TOBOMETER HY',
                'brand' => 'Tobolin',
                'category' => 'Bauwerksabdichtung',
                'price' => '69,90 €',
                'priceCents' => 6990,
                'image' => 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
                'productNumber' => 'TOB-HY-001',
                'deliveryTime' => '2-5 days',
                'badge' => 'Feuchtemessung',
                'excerpt' => 'Schnelle Messung zur Einschätzung von Feuchtigkeit in Wandflächen.',
                'description' => 'Ein kompaktes Messgerät für die erste Prüfung, Verlaufskontrolle und Dokumentation von Feuchtigkeit im Sanierungsprozess.',
                'highlights' => ['Schnelle Messwerte', 'Einfache Anwendung', 'Für Sanierung und Kontrolle'],
                'specifications' => [
                    'Anwendung' => 'Feuchtemessung',
                    'Einsatz' => 'Wände und Baustoffe',
                    'Marke' => 'Tobolin',
                ],
            ],
        ];
    }

    private function formatPrice(int $priceCents): string
    {
        return number_format($priceCents / 100, 2, ',', '.').' €';
    }
}

<center><H1>Ban - Debugging Client</H1></center>

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/janyksteenbeek/ban)](https://github.com/janyksteenbeek/ban/releases)
[![GitHub](https://img.shields.io/github/license/janyksteenbeek/ban)](LICENSE.md)
[![GitHub issues](https://img.shields.io/github/issues/janyksteenbeek/ban)](https://github.com/janyksteenbeek/ban/issues)

Ban is an open-source client for Ray, a powerful and easy-to-use debugging [library](https://github.com/spatie/ray). Ban
provides a
user-friendly interface to interact with Ray and visualize debugging data sent from your applications.

- Visualize debugging data in a well-organized and easy-to-navigate interface.
- Support for multiple languages and frameworks, including PHP, JavaScript, Python, and more.
- Display logs, dumps, queries, and other debugging information.
- Easy to use interface with light and dark themes.

## Getting Started

### Prerequisites

- PHP 8.2
- Composer
- Node.js (latest LTS version)
- npm (latest stable version)

### Installation for development

1. Clone the repository:

```bash
git clone git@github.com:janyksteenbeek/ban.git
```

2. Install the dependencies:

```bash
composer install --dev
npm install
php artisan native:migrate
```

3. Run the application:

```bash
php artisan native:serve
```

**The application will now start the underlying API & websocket server running
on [http://localhost:23517/](http://localhost:23517/) and the desktop application automatically open.**

### Usage

To use Ban with your application, you'll need to install the Ray library and integrate it into your project. Follow the
documentation for your specific language or framework:

- [Ray for PHP](https://spatie.be/docs/ray)
- [Ray for JavaScript](https://github.com/permafrost-dev/node-ray)
- [Ray for Python](https://github.com/luetmich/python-ray)
- [Ray for Laravel](https://github.com/spatie/laravel-ray)

Once you've integrated Ray, you can start sending debugging data to the Ban client by following the instructions in the
documentation.

### Example: Using Ban with PHP

To use Ban with your PHP application, you'll need to install the `spatie/ray` package. Follow these steps:

#### Installation

1. Install the `spatie/ray` package using Composer:

```bash
composer require spatie/ray --dev
```

This command will install the Ray package as a development dependency in your project.

#### Usage

2. In your PHP code, use the `ray()` function to send debugging data to the Ban client:

```php
<?php

require_once 'vendor/autoload.php';

ray('Hello, Ban!');

// Your application code...
```

This code will send the message `Hello, Ban!` to the Ban client. You can now use the `ray()` function to send various
types of debugging data, such as variables, objects, and queries, to the Ban client.

For more information on the `spatie/ray` package and its usage, refer to
the [official Ray documentation](https://spatie.be/docs/ray).

Once you've integrated Ray into your PHP application, you'll be able to send debugging data to the Ban client, where
you can analyze and inspect it in a user-friendly interface.

## License

Ban is released under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Security

If you discover any security-related issues, please email [ban@janyk.dev](mailto:ban@janyk.dev) instead of using the
issue tracker. All security vulnerabilities will be promptly addressed.

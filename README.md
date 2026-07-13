<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sxsy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Subtract elements of a single-precision floating-point strided array `y` from the corresponding elements of a single-precision floating-point strided array `x` and assign the results to `y`.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:xsy" align="center" raw="\mathbf{y} = \mathbf{x} - \mathbf{y}" alt="Equation for xsy operation."> -->

```math
\mathbf{y} = \mathbf{x} - \mathbf{y}
```

<!-- </equation> -->

This API is a specialized version of the package [`@stdlib/blas-ext/base/saxpby`][@stdlib/blas/ext/base/saxpby] with `α = 1` and `β = -1` and performs element-wise subtraction between two vectors.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-sxsy
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sxsy = require( '@stdlib/blas-ext-base-sxsy' );
```

#### sxsy( N, x, strideX, y, strideY )

Subtracts elements of a single-precision floating-point strided array `y` from the corresponding elements of a single-precision floating-point strided array `x` and assigns the results to `y`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );

sxsy( x.length, x, 1, y, 1 );
// y => <Float32Array>[ -1.0, -2.0, -3.0, -4.0, -5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to subtract every other element of `y` from every other element of `x`:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

sxsy( 3, x, 2, y, 2 );
// y => <Float32Array>[ -6.0, 8.0, -6.0, 10.0, -6.0, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

sxsy( 3, x1, 1, y1, 1 );
// y0 => <Float32Array>[ 7.0, 8.0, -7.0, -7.0, -7.0, 12.0 ]
```

#### sxsy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Subtracts elements of a single-precision floating-point strided array `y` from the corresponding elements of a single-precision floating-point strided array `x` and assigns the results to `y` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );

sxsy.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Float32Array>[ -1.0, -2.0, -3.0, -4.0, -5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to subtract the last three elements of `y` from the last three elements of `x`:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

sxsy.ndarray( 3, x, 1, x.length-3, y, 1, y.length-3 );
// y => <Float32Array>[ 6.0, 7.0, -5.0, -5.0, -5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var sxsy = require( '@stdlib/blas-ext-base-sxsy' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( x );

var y = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( y );

sxsy( x.length, x, 1, y, 1 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/sxsy.h"
```

#### stdlib_strided_sxsy( N, \*X, strideX, \*Y, strideY )

Subtracts elements of a single-precision floating-point strided array `y` from the corresponding elements of a single-precision floating-point strided array `x` and assigns the results to `y`.

```c
const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
float y[] = { 2.0f, 3.0f, 4.0f, 5.0f };

stdlib_strided_sxsy( 4, x, 1, y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[inout] float*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
void stdlib_strided_sxsy( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, float *Y, const CBLAS_INT strideY );
```

<!--lint disable maximum-heading-length-->

#### stdlib_strided_sxsy_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY )

<!--lint enable maximum-heading-length-->

Subtracts elements of a single-precision floating-point strided array `y` from the corresponding elements of a single-precision floating-point strided array `x` and assigns the results to `y` using alternative indexing semantics.

```c
const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
float y[] = { 2.0f, 3.0f, 4.0f, 5.0f };

stdlib_strided_sxsy_ndarray( 4, x, 1, 0, y, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[inout] float*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
void stdlib_strided_sxsy_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/sxsy.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };
    float y[] = { 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f, 9.0f };

    // Specify the number of indexed elements:
    const int N = 8;

    // Specify strides:
    const int strideX = 1;
    const int strideY = 1;

    // Subtract elements of `y` from the corresponding elements of `x`:
    stdlib_strided_sxsy( N, x, strideX, y, strideY );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "y[ %i ] = %f\n", i, y[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-sxsy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-sxsy

[test-image]: https://github.com/stdlib-js/blas-ext-base-sxsy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-sxsy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-sxsy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-sxsy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-sxsy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-sxsy/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-sxsy/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-sxsy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-sxsy/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-sxsy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-sxsy/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-sxsy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-sxsy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-sxsy/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/blas/ext/base/saxpby]: https://github.com/stdlib-js/blas-ext-base-saxpby

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->

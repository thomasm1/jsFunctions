/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/3rdpartylicenses.txt","c662f1e7910fa9b896bddabb86615fcf"],["/assets/images/a.png","efc1127383113025ceb8683a5d889ed6"],["/assets/images/b.png","63d1cffbb6b9e4e705a35a7611e943f4"],["/assets/images/c.png","df6747934f6d6ffa056f8d07019cf227"],["/assets/images/d.png","2e7ccfb1e085b0d20ca65f6d23f67450"],["/assets/images/e.png","2f5f98081f6c7a56f19bf5e5a99785cd"],["/assets/images/e1.png","406968f5628701831ab6c4ec0e39563e"],["/assets/images/f.png","eccd83219b454620b823b4f782609347"],["/assets/images/g.png","ccb46ed58b813673a4371559e6882e65"],["/assets/images/h.png","2718e11bae23b5a525c67628f3429fe3"],["/assets/images/i.png","87d628b1f86b54dd87c46470e0905856"],["/assets/images/j.png","da99794fe577c68b3670c41039891fda"],["/assets/images/k.png","28c38df5db8522a3e47f31858b183d2c"],["/assets/images/l.png","4b6241df0fa21bcff2c1d50d2608cfd0"],["/assets/images/m.png","54aa682432e43d4da91aa570af412eb8"],["/assets/images/n.png","811f6a448aaffe0cd91ef64edb9be69c"],["/assets/images/o.png","406968f5628701831ab6c4ec0e39563e"],["/assets/images/p.png","c0a57b8f0a167849ee28c7c156ac68c6"],["/assets/images/patterns/bluechipTile.jpg","d4a2ea433ccbd91d91b3c9785c83712f"],["/assets/images/patterns/bluechipTile.png","1ae063e656e7a2f628be7af2c0b86107"],["/assets/images/patterns/green.jpg","855c58f9db045f44779f02f041e92059"],["/assets/images/patterns/greeninvert.png","596d4f61615de1bf36f7d31e6dd8dcf9"],["/assets/images/patterns/silverchip.jpg","d9aeea619a1f8fee982f24b2131b5220"],["/assets/images/patterns/silverchip.png","b1fa8c83373da7d95dfb6fb385dc1db6"],["/assets/images/q.png","61352681efb88ab2a76da57966422bf9"],["/assets/images/r.png","75e7747df10e2e168cc6d248d855f823"],["/assets/images/s.png","b0c3d604f4eed6bc5702ebc68a675ea2"],["/assets/images/tmm.png","1ddfb8feabe203e469c831504473b54c"],["/favicon.ico","247d47b7d0c289a8e384e78e8dddfa65"],["/glyphicons-halflings-regular.448c34a56d699c29117a.woff2","448c34a56d699c29117adc64c43affeb"],["/glyphicons-halflings-regular.89889688147bd7575d63.svg","89889688147bd7575d6327160d64e760"],["/glyphicons-halflings-regular.e18bbf611f2a2e43afc0.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/glyphicons-halflings-regular.f4769f9bdb7466be6508.eot","f4769f9bdb7466be65088239c12046d1"],["/glyphicons-halflings-regular.fa2772327f55d8198301.woff","fa2772327f55d8198301fdb8bcfc8158"],["/greeninvert.596d4f61615de1bf36f7.png","596d4f61615de1bf36f7d31e6dd8dcf9"],["/index.html","195b8b6ad0d1e7379215b0bb5fe22d43"],["/inline.bdafda4e27a58f4c11c7.bundle.js","871cb792b3ec40b5adf36512f0d51758"],["/main.5fcc4278abe4c35e54c2.bundle.js","dd3001139195de5c75b77571093180de"],["/polyfills.1bbb66c3654897ec0427.bundle.js","7e0c984aeb220ad3385a094dc8340b9f"],["/styles.30243b982b937441caea.bundle.css","30243b982b937441caea1ed1ab2028b7"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








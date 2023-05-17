'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f51f0ce4b13322c8106283b52b6fc2f1",
"index.html": "e78b2dea82cad6e08fa84838501f9508",
"/": "807da840b306a0ed8fa22e5272a0cbf0",
"main.dart.js": "8ffaefe5b712f980e4e7e1610fb0ff01",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"docs/version.json": "f51f0ce4b13322c8106283b52b6fc2f1",
"docs/index.html": "807da840b306a0ed8fa22e5272a0cbf0",
"docs/main.dart.js": "9a39ad6430d32de8a761329faa8a616b",
"docs/flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"docs/README.md": "c4b7cba8a8ee6c58e60d927a91b8426d",
"docs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"docs/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"docs/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"docs/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"docs/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"docs/manifest.json": "4479e238dc40b6f9982ef5bed04a0066",
"docs/.git/config": "3c13c00f68f6b8e36967d79c7d2334c8",
"docs/.git/objects/03/22b88990b08a58e04aaf5a013b7336ff6a6a0e": "8ddae249731bfd12ae781d957ec5082b",
"docs/.git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
"docs/.git/objects/6a/5ad1769941ecb9af645466bf6d5456cd98c785": "add8f6cf2ad03fb77f28a62c828255c7",
"docs/.git/objects/32/fbe0372c114633503837c5b6a556abf3228734": "3c962ad9f3d339bc30aefcc44f79fda0",
"docs/.git/objects/3d/10ebe75e893b968f88223d5566ad326b104d03": "13389ca12b181bb13579343f4971e5f4",
"docs/.git/objects/3d/9e202ab510864b40b19174310abe1529dd1c74": "4267f4c2a83711f42d4d84e48854999e",
"docs/.git/objects/0b/fba71b32f4335eb3753ab0d1bc34271cd94a43": "5485aa3830b57c2c11a19a3f23c7e052",
"docs/.git/objects/9d/8801e184b04d9635db8b153cfaff47e9eb539c": "7d8f33210058a10212ba787665a52567",
"docs/.git/objects/02/a2af00c08657c59b1063fdbb3aa3f50a41eb4a": "b48acdbc205ad5cc08cf194732409f62",
"docs/.git/objects/ac/8588b489a83b194cc04ec3e9d06718926f65d0": "517b53b5304105d5224de425c9ed1186",
"docs/.git/objects/d7/8017badd40b7f9cee129035ddcb3f045a16218": "0000ee706e0ff0c48839ba941c4c4b08",
"docs/.git/objects/b3/8652b2e040836e84f4a4e15e414c0c2d36d0b6": "e3a62f7d4fc532a0b83549e5ef939fae",
"docs/.git/objects/b3/838ef57def4b27865a6a5a588f368979293ddb": "9a06e9487e95784ae187a48b68bb97aa",
"docs/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"docs/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"docs/.git/objects/fc/946be4e5d6151e6b0c957756604bc5b9d608f5": "719d51aac14b2abec0955cb35d937e26",
"docs/.git/objects/ec/5f17dce2222df5fddb45d3dd9d96aff8ff8c0f": "6e99efcec27dc640b4cbd49f8bf5281e",
"docs/.git/objects/ec/e7ff9a13df144c5bd663ea5f73f7a2209114bb": "0b2b186a3086dafabbd2e23221b655a9",
"docs/.git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
"docs/.git/objects/73/edc3373baafdfb786b35efe8be6da5f492e816": "4079f4920c827c48816d4e62d578db54",
"docs/.git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
"docs/.git/objects/80/df0d4cc899e0f8239ea8253de17044b91ac2c6": "675b1fc3b1c8a91a67286bad0ff8f47c",
"docs/.git/objects/1a/623dfc277e4eb3d31c78ce4777b454740f8d61": "d605d260a04c93fefa2cda72992aa103",
"docs/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"docs/.git/objects/43/d9a78934bdc053e450e4b664d1f82ab0e6f1b6": "23b917564421052bb2ba8cf04e6244ed",
"docs/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"docs/.git/objects/3a/af4b012a4fd5f6c7a359416354b165577c66c6": "934784b9207b998c1cb3719d6f80e4fb",
"docs/.git/objects/5e/7242b83eae2d005f1c441253bcc0546939b749": "6802d1ecd02ea16ca0f47a7c25769003",
"docs/.git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
"docs/.git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
"docs/.git/objects/bf/3f7340181d7c676243076cfa47d27dc3b46586": "d4492de286f95cb9547fdac3714bf4a1",
"docs/.git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
"docs/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"docs/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"docs/.git/objects/ea/2ac6b71ded629f2bcae3632ff1377ac1a72c9b": "f6bbffcdc57f26a0344fac93371a33c6",
"docs/.git/objects/e1/e940e696aa46ca90f1f7517594d81f21429938": "d6e1c6ea76cfd608d24ea49169adf2f4",
"docs/.git/objects/fa/ad883fb45524ebf175bde4415fe689c211bde9": "8d67f54f68bab445b554ab6883744fa9",
"docs/.git/objects/ce/05c42c23b47b9a93b699c3d7091bbf264f07ae": "9bc0f2b1240f32ef5336ececf802fed6",
"docs/.git/objects/46/2ab0cbe7a81e2335fd52a2b0ca6af52dd9a46c": "4ab681ee2eb509fceeb3d326c76dd737",
"docs/.git/objects/2d/13bbc32fa60354b80e9ae8e354bac7043a57d5": "83c4b2315fda8a7174b652b07357d4c5",
"docs/.git/objects/1b/91f491198b2c0ab99784ab9f47634608dc6d92": "ae26a02154253e430acbd71f6fe649f1",
"docs/.git/objects/4a/e3f4df87def1511b8d803a0bfabcf9a4f233f8": "a8cf47f71e57678ba8bfb62d486110b1",
"docs/.git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
"docs/.git/objects/12/8ae56527800da70732790e67ea343345fc064b": "004d264d1613b2e423f5d32f8faab4e1",
"docs/.git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
"docs/.git/objects/85/67be42c20803ac22bc7f1b6ebecfcc57202394": "e3b1352db44ab31b6b336e0be56e39c8",
"docs/.git/objects/49/9ff27dbc438e7a7029fbbe7745c31705f91b2a": "b67308040b21a995b9b42117ae7e893b",
"docs/.git/objects/2e/3c91b35fcd7b8d57c2401b94deb7cc7985e856": "ed7f286a0bd90dfdaa83ee150b7c5df9",
"docs/.git/objects/2e/2ce24cfd0d89cc641e92775fa76adb59abeed7": "69c83067f16453fe6dbdf5547f829fcd",
"docs/.git/objects/7a/c3658e0fb812a9a2650f02e64a27fbf342eadd": "1dd31c7b4c9f17ad223139dc4c0b2a94",
"docs/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"docs/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"docs/.git/logs/HEAD": "00278472c037cbb16731d3a4cb4159c6",
"docs/.git/logs/refs/heads/main": "890c8e60d55fe698bb34276880433348",
"docs/.git/logs/refs/remotes/origin/main": "7fcabe84104bf21683034e3ade5b52bf",
"docs/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"docs/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"docs/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"docs/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"docs/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"docs/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"docs/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"docs/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"docs/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"docs/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"docs/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"docs/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"docs/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"docs/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"docs/.git/refs/heads/main": "2fad6f112994c28109f0cf20493a6593",
"docs/.git/refs/remotes/origin/main": "2fad6f112994c28109f0cf20493a6593",
"docs/.git/index": "49673579cfe5fb037fe75f28c39a89f7",
"docs/.git/COMMIT_EDITMSG": "fb18b17c02a9351c6a947db9e9df254d",
"docs/assets/AssetManifest.json": "181e2b7aad453a2ea849cd9c99b4b826",
"docs/assets/NOTICES": "93590383b579c4eb8859f01040eb4ffd",
"docs/assets/FontManifest.json": "4ac27faf384de9ae32a131b16ab9cc5e",
"docs/assets/packages/settings_screen/images/dark-mode.png": "becaca429a216eee7cb00b45e57ff9c6",
"docs/assets/packages/settings_screen/images/light-mode.png": "d9e871c9ae59441e498646a1f17e9900",
"docs/assets/fonts/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"docs/assets/fonts/Explora-Regular.ttf": "05fe98ac86a1fc130cc3cd7c7116e14d",
"docs/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"docs/assets/fonts/Raleway-Italic.ttf": "b88299f8225ae49ce121b1f6aa456dbc",
"docs/assets/fonts/Raleway-Bold.ttf": "88079335418f389bfb2d86bc4f1ced64",
"docs/assets/assets/images/income_sources.png": "d342f34b64a6570cae179cdd1125c2b6",
"docs/assets/assets/images/model.png": "070b2cb363bad028950962e5edb33600",
"docs/assets/assets/images/income.png": "3dcd1ada8fc0ebf7f4f6b40835ed5e8e",
"docs/assets/assets/images/client.png": "78790d2f4f1c3747eb988c70b0ae3c3c",
"docs/canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"docs/canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"docs/canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"docs/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4479e238dc40b6f9982ef5bed04a0066",
"assets/AssetManifest.json": "181e2b7aad453a2ea849cd9c99b4b826",
"assets/NOTICES": "93590383b579c4eb8859f01040eb4ffd",
"assets/FontManifest.json": "4ac27faf384de9ae32a131b16ab9cc5e",
"assets/packages/settings_screen/images/dark-mode.png": "becaca429a216eee7cb00b45e57ff9c6",
"assets/packages/settings_screen/images/light-mode.png": "d9e871c9ae59441e498646a1f17e9900",
"assets/fonts/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"assets/fonts/Explora-Regular.ttf": "05fe98ac86a1fc130cc3cd7c7116e14d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Raleway-Italic.ttf": "b88299f8225ae49ce121b1f6aa456dbc",
"assets/fonts/Raleway-Bold.ttf": "88079335418f389bfb2d86bc4f1ced64",
"assets/assets/images/income_sources.png": "d342f34b64a6570cae179cdd1125c2b6",
"assets/assets/images/model.png": "070b2cb363bad028950962e5edb33600",
"assets/assets/images/income.png": "3dcd1ada8fc0ebf7f4f6b40835ed5e8e",
"assets/assets/images/client.png": "78790d2f4f1c3747eb988c70b0ae3c3c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

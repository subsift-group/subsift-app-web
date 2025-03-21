'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "c93b2d280bae3e84ab06cb2b8837f93c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e669f6c04c58709c35f454cb0de01ead",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b1b841503a1ee77d060dd75ff89a866d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4d745e876e22fd5822e2b162bc634f30",
".git/logs/refs/heads/master": "4d745e876e22fd5822e2b162bc634f30",
".git/logs/refs/remotes/origin/master": "4e35208bd04dcd84ba615470b29d6731",
".git/objects/04/3b4e9cb43a2f9a9f4d6ecc5e3cc5cfe7fbbc68": "b803a9972443ab003d2c2c7811cacf42",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0f/e517275074acd407f0fc24dab6b5ca0cddbac8": "2703f5ed58a0f19c7b7489b70b6ef1a7",
".git/objects/1c/e7f25385a6feab7dd77f2f04e608379b9bed71": "a6fef3d2d54c68d2f1c2f3dbc8a8b998",
".git/objects/1d/334476ea64ccfa19e40faaafa9b562838f71e3": "92ce71e8df408ed4638c5e6a89484736",
".git/objects/1e/ffc99d15aa051e80a32314e102ed0f30be7a70": "c9a686ba55ffabb422a6f9025c0e1d32",
".git/objects/1f/18f731ff15dc2b01a41fab23ebad7b0d3dc313": "4267c76d2e8588a7e49737cc647614e9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/06e0fc6aa8dc87223aab37546a295366e21ec1": "1b02e2bc78881dc4a691dc417c1b7f95",
".git/objects/21/2c0d7eee37e3105242c69104897ae49ed5c337": "12a924e486b28e91b56874beda4aa408",
".git/objects/24/670a67c75e0c0cf748015f916767f7939ae34d": "1959f496b81a4322ecc337013f4308f4",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/fe57a557f82b092a042e65c1f1c9fa1c77b600": "ecbbb6e419e14a46b7443c497b5d783a",
".git/objects/2c/ffd496f2a8e3af800e6a0a3478aae836152b6f": "271771f9ebef6214cdec83c0e0d3073d",
".git/objects/2e/7dfa9833d2fb942bacb88e387b216497c2e168": "ad40f9880db44a1e860aa1cf154416b5",
".git/objects/32/668c862b20bfc2a134fdf6812e29cab68d02a2": "593daba072fe607414bd9778adf64537",
".git/objects/4f/9a84ed415cddf67849a0bd065ab9ab8bf5fd74": "22888c947b3286a9d3865d615c53aa23",
".git/objects/55/9c49d61f84d79b06c7e4064c99e7ffc1c950db": "b2fa5212df665782bc0f8c84cd39a5c9",
".git/objects/60/34eaf838e526784e7b434ced40be0e6c8522f9": "8301763f1b8a321fad990651c91fa0ec",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/b77c23b59c8a1e9e52a886524c1e99bed96750": "f086bbeb5989b221ffcee7394b2597a1",
".git/objects/66/410324f1c66c9baa6192e3ba8a479ed6095ddb": "01ff69bd05b786418f19e5e886085d7f",
".git/objects/6a/484f452a04f9fea4272ec1ed671c1f3574d7d4": "2da012b485778858415935ef407b315f",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/b4a06739857d9a8d95a50efb8531c5242d2c40": "8179dd6378ffbbb895135a3584de94ef",
".git/objects/6d/eee3df24b1ea6382db8d9f1a1f5167c66551a0": "bbf6e0bf93050e264fe211b620adfe38",
".git/objects/6e/01995771f341624f0e9eb4ff5a429283121e29": "d853ab4450e16a9274416faa09a54d34",
".git/objects/6f/2e9d1858c2d13e2c3321b9afac296ec44d4c99": "c9e4aa224601ed67e909e381e3e705db",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7b/bff42f0388da9c2a0ebf3a9138b3b7a3a5909b": "afa2addd81ee8abb650a781f340d5b7a",
".git/objects/7b/da9432f5b5962656e71c32bb7214f1b67d909e": "9578db353fc3b26218d8cfc18231353d",
".git/objects/7f/797ebdbc0743245658726502b2f0fa166fae5e": "74a18b638dc5969c6c9dd5a84920d20f",
".git/objects/82/fa9cfb1ced31c91816c8e0ea10c013090384b7": "489ade1ef046117f8abd7aa6e56eb6de",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8b/70e2350e083be74e86dff1af545d32ab89afd3": "0ebd98bdce4f540fb23d7a27ae07b86e",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/d94bcb88f4fc3944c353babd83ff201acfa367": "ad14defe593f1099f1ffe2bda5080e22",
".git/objects/92/8753b8a2d58d44cbf7e97561d0a5bec88374a4": "8005988b9e26e3b5e16ae25125eff0b1",
".git/objects/92/d1862d6f78680e173671e56c646f1ee3f2c30d": "26d1140c89d71286852f254211cf13a9",
".git/objects/97/0f184ee13e43996c2469f5d08145f21886142b": "abee268afb783f6f82a3e7f030ef47be",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/4407c24259386b77a173342ba12f5092843fa4": "5dd42f0b0550000c8475d872d4256dbb",
".git/objects/a0/a569e8ed07f83eca1ed6613b7a66b88d0395ba": "e79d8dd0634ead4be558e7f6e66ac043",
".git/objects/a1/9ba346f4dc075bb8e0c61ddeea0f07b8c900d9": "a4d1b8a191a63d369f1aab1d35caef45",
".git/objects/a1/f296262c24db52c3945189d2e01c4dd4ae50c7": "2d7fb1b8045e6b233dd565adbd787f88",
".git/objects/a7/4b4da733269e7baddba89311a91dcfc3814e4b": "01ee86db0b8d3128ca450a12bb89538c",
".git/objects/a8/f852783b7ba0ac99984d1edcfaa6dd36f4acff": "73689d0ed10bb03d6a7149a08b17adbe",
".git/objects/a9/4af011a076123823c5503a03177471c2f4685e": "18bc3dde4d3cd4f0acc7aa4d0b1d6f37",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/de42544c3ec7191295d9a920b4b5b521be3269": "9541f7f697b3afc425a0efdfda96be22",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/c65a959ab0bae8d3ff6c54c619684b22fc633e": "9652957e3932ab876721780c97b8985a",
".git/objects/b4/208ac61c4700274d9a672f849d0dd8baf3b26e": "abef5d9824ef8e4f5137c877547b95dd",
".git/objects/b5/7790454c489e7d4ecf13468d24ec6efae3e3bc": "017b0eae05e018ac7e3a05cc184fb6c2",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/a5a5621377bbe5e30f6d864fd19370048ddea4": "b2d395606362e06ed3e8ad592a16efa1",
".git/objects/bd/b1b6768e38e0c2909852d4fa3ac9ca41223512": "2cde92158d79d4a07e34bb45a83ab5b6",
".git/objects/c2/97d80f4faf59b7e894cddf5cdb29f7fee524ef": "ce7c89201a173bf7d48ffdc3fe7bb863",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/4b43ebf16bd96061834f1631f494efdf53c71e": "471fbf51aa0056fad0f9ae55b77a86b2",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/53c53c83d45403a7c4e61760e27c876d57da9b": "4de93e9e9ad0bab8d69b72d11a2db01c",
".git/objects/ce/5b361dfe9b1795c01a4dd531deaad996d896fe": "83f645262c478f6c7d6d2559a0b9259f",
".git/objects/cf/41a27aeda02e009e12208a3f1a0e711f3a6f02": "17bf6ffe70ed1b3cd6e63568f67ae0b9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/e0d83f1d4b9fb137d0eb98ff96934d06cdc225": "c665a0474e0adc2be4b886d955c4327e",
".git/objects/dd/3702a2e98f64e78329336acc6fcf42a3287dc0": "af389fef9e246c44d2a3b78b60a6e678",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e3/fe81d0de7460f395ee040658238bd1f79203a0": "b89c9a5095c9b3041b850e86e2c8cc0c",
".git/objects/e7/bca60396e0167eac35fcf7aa85a639f6a219b0": "f2b6d55ee80a4168da693e526a91a9fc",
".git/objects/e8/cef6db6724cca825cf651b2522bea3c5fc3c2c": "16e247f116e6d272479b863093c5f298",
".git/objects/e9/d089c90c4a9b9bb6c0efb0a2f871a77f59248a": "9442f528c6e3b5aa28a3f7307fd88be7",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f0/6fe5431a582c5d379e13893e34ae5317e460a8": "aec9377b4c2b1fb3ab3ced9f74c4ddf7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/87f9b278712cecb0081e5f4775ee9bb674e5e8": "f44e8c6ec6dbadfe08938cbd8065958f",
".git/objects/f5/b68e6d086ffc3c28b190f735e5a19ebff12508": "efd1ed5cc6e9a695d0cdfa7de0f76a2a",
".git/objects/f6/3dde43bf4f74c0722b87a37a668e5ffd849aa1": "9c078025d844adba364bc34f76c7791b",
".git/objects/fe/34298a4df8a1f7225ff08fce9603df764377e1": "02c1697796a36936e68c002b5a05e936",
".git/objects/fe/89d164a76a2a7313f3ddc79bd6f9bc364f9f53": "e6acef6bda3382b7c71d5e7ad6e64c50",
".git/objects/fe/bc81499f855117ba1c704be4d2af6debdffdb9": "f53ce5840f33c39d1e76bfa70d439133",
".git/ORIG_HEAD": "8e240af19b08a39f6d040d83b316666c",
".git/refs/heads/master": "1a68d83685f0f8475b6ed72f9377efb1",
".git/refs/remotes/origin/master": "1a68d83685f0f8475b6ed72f9377efb1",
"assets/AssetManifest.bin": "334f4d4d504eecfb343cb5af1ae977a7",
"assets/AssetManifest.bin.json": "0e486ecad59b6dc45006774cf083285a",
"assets/AssetManifest.json": "725bcbd864f100c5848a2e2ed693a484",
"assets/assets/profile.png": "b48519351be92099287efcdcf19cfdb1",
"assets/FontManifest.json": "804c25bc7bc351b1926e59e29bf000bc",
"assets/fonts/MaterialIcons-Regular.otf": "8fd613fb913a37b629a8b4001a3b75da",
"assets/NOTICES": "36a84909ae0861d104a9f07c7e9a21d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "951666de3af1f280c221695d4c6702b1",
"assets/packages/shadcn_ui/fonts/Geist-Black.otf": "cf003c4f85b590cf60bec1e111ebaaf5",
"assets/packages/shadcn_ui/fonts/Geist-Bold.otf": "d3e1d3dc690224fd330969af598a9c31",
"assets/packages/shadcn_ui/fonts/Geist-Light.otf": "21f434e8c2b53240a0c459b9d119f22f",
"assets/packages/shadcn_ui/fonts/Geist-Medium.otf": "f7ceaf00b58d396cf93ff1ea43740027",
"assets/packages/shadcn_ui/fonts/Geist-Regular.otf": "4d02716b4f2f2e4d9c568c8d24e8e74d",
"assets/packages/shadcn_ui/fonts/Geist-SemiBold.otf": "2c0b1d3e7b1c71bedc2eecf78f7a1d1d",
"assets/packages/shadcn_ui/fonts/Geist-Thin.otf": "8603d0fe0def4273ebeee670eedcfb86",
"assets/packages/shadcn_ui/fonts/Geist-UltraBlack.otf": "f3591a030925294b2bb427e6a6c9b0d8",
"assets/packages/shadcn_ui/fonts/Geist-UltraLight.otf": "b64b37fbec0a925067cbf530e4962fec",
"assets/packages/shadcn_ui/fonts/GeistMono-Black.otf": "d72857791f93bbf88629ab9601ebfa14",
"assets/packages/shadcn_ui/fonts/GeistMono-Bold.otf": "fce632a1c87f36e92fb23ae5618176ce",
"assets/packages/shadcn_ui/fonts/GeistMono-Light.otf": "92c6dfb1c2854b6b0fd3f63ab5af9b7a",
"assets/packages/shadcn_ui/fonts/GeistMono-Medium.otf": "b1f17a06e50fba3f1e9695c2a8ae0783",
"assets/packages/shadcn_ui/fonts/GeistMono-Regular.otf": "42af0dfdb5e9e272e7ac28868b5b99fb",
"assets/packages/shadcn_ui/fonts/GeistMono-SemiBold.otf": "02036797116901c5db4a3a629561e588",
"assets/packages/shadcn_ui/fonts/GeistMono-Thin.otf": "cbf62a8e76578e03404b0314787d9477",
"assets/packages/shadcn_ui/fonts/GeistMono-UltraBlack.otf": "cfad4eb45ce5dff853a6c84c8a7d441b",
"assets/packages/shadcn_ui/fonts/GeistMono-UltraLight.otf": "45ea4a4ba1034f7fa081c8b7ee958734",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"CNAME": "a06b59061ef156da57ed5db0557dba18",
"favicon.png": "1d05e468db0fc4ac9e6f8da5601d9083",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "416dbb2b9b2ebd64d7613c1861bb3004",
"icons/Icon-192.png": "97acf86f7becc4b998ac56f8e562801c",
"icons/Icon-512.png": "517dcdc19e9b1a842b6a0a4663908ee5",
"icons/Icon-maskable-192.png": "97acf86f7becc4b998ac56f8e562801c",
"icons/Icon-maskable-512.png": "517dcdc19e9b1a842b6a0a4663908ee5",
"index.html": "fb4433fc13b6f0eac38ad75434712e83",
"/": "fb4433fc13b6f0eac38ad75434712e83",
"main.dart.js": "39c466c0ab32067c9132d628f088ea4e",
"manifest.json": "6b53447448f68ae679c3f1af3514762f",
"version.json": "e034e699924365d47edbcdb28a0ea8ac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

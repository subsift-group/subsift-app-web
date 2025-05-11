'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e8deb514b42cd27d9fb452376fcccc3",
".git/config": "15f7c5f39bca39470982c48850cdd8a2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0201544a4ab7dffcd488962f7ee94c2b",
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
".git/index": "1090f0db152bb73425d34bdb02f5bd83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5bb7e044bc684bdaf26eb575de3ae130",
".git/logs/refs/heads/master": "5bb7e044bc684bdaf26eb575de3ae130",
".git/logs/refs/remotes/origin/HEAD": "741635dd291a82d728a5a9f75e955748",
".git/logs/refs/remotes/origin/master": "11b5996167b82cbbbc8705dc306e499d",
".git/objects/00/64e47a5499d86130ea5ce2ec4fc9551751565b": "0f0e765d945f5a99b36d55053cdbce5e",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/f0551318cd82ca68d3a90444d0fbf6a83acc09": "dbb246925df22f8368fd5ec7d1a376ea",
".git/objects/04/3b4e9cb43a2f9a9f4d6ecc5e3cc5cfe7fbbc68": "b803a9972443ab003d2c2c7811cacf42",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/3d1fa111d5f71be90aeb81e4374907cdf0e193": "3ccdc37ec03d1c17fa026c3896109f3d",
".git/objects/07/6ff081f39cb9eac605baab9f333d5ad51e2535": "77966c7e2bf8797c3abb58c0459f931c",
".git/objects/0a/b3aac759bb8825063d2a94e16cedcfb369dda5": "7e560e7292e4e23ade693800f1b06293",
".git/objects/0f/e517275074acd407f0fc24dab6b5ca0cddbac8": "2703f5ed58a0f19c7b7489b70b6ef1a7",
".git/objects/12/19bdcdcc391a53882a5280d00c29e2cc4e8318": "bee25ce8d248b2e0b5259f2c12e049ce",
".git/objects/19/17e252b9e429386b9d9bce51ab3e9eb7a85cfc": "8736e3ed844bf1218e477c9f8cbd41ef",
".git/objects/1c/e7f25385a6feab7dd77f2f04e608379b9bed71": "a6fef3d2d54c68d2f1c2f3dbc8a8b998",
".git/objects/1d/334476ea64ccfa19e40faaafa9b562838f71e3": "92ce71e8df408ed4638c5e6a89484736",
".git/objects/1e/ffc99d15aa051e80a32314e102ed0f30be7a70": "c9a686ba55ffabb422a6f9025c0e1d32",
".git/objects/1f/18f731ff15dc2b01a41fab23ebad7b0d3dc313": "4267c76d2e8588a7e49737cc647614e9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/5799daf4178a26a2153b3429e7eeed8fa886f4": "8e5d0c66cb9e2440af718ab8c753aed1",
".git/objects/20/45eeb78d1b64d6e723238155b87b857dcaad28": "a2d33c8eb5b6a79d8963537bd5c36f4b",
".git/objects/21/06e0fc6aa8dc87223aab37546a295366e21ec1": "1b02e2bc78881dc4a691dc417c1b7f95",
".git/objects/21/2c0d7eee37e3105242c69104897ae49ed5c337": "12a924e486b28e91b56874beda4aa408",
".git/objects/23/1bb9d06e06c385499fbd0199bf4ed2db42c28b": "73dc1eb2ef4f9a413fe5d0bc4c9c969b",
".git/objects/23/6d1f9842bea342842776572fff590065b4d9d2": "7a9e9e622d7790574236796e2fc398b7",
".git/objects/24/670a67c75e0c0cf748015f916767f7939ae34d": "1959f496b81a4322ecc337013f4308f4",
".git/objects/25/f0ffb89470b558413072f8402e11bf84dd680e": "05d8e9a541642d0ec0bc85271547ce94",
".git/objects/27/4535214b7a5b0ae21e8b50e3613d330b3bdca1": "824c3d17326debcaa786cb833440c7b3",
".git/objects/27/81b29177a297109cc1e88e7139b66f2a543701": "3003480089039fe5e204a29a4eb65791",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/f793e7250b689a684c83925cc0e77bc32f9436": "b789e40c6adfc372278f335017e45b7d",
".git/objects/2b/fe57a557f82b092a042e65c1f1c9fa1c77b600": "ecbbb6e419e14a46b7443c497b5d783a",
".git/objects/2c/ffd496f2a8e3af800e6a0a3478aae836152b6f": "271771f9ebef6214cdec83c0e0d3073d",
".git/objects/2e/7dfa9833d2fb942bacb88e387b216497c2e168": "ad40f9880db44a1e860aa1cf154416b5",
".git/objects/2e/976e24945b3d223e8a1cca8eb890524986ccd3": "fbdcaea90ab186f7d306cb938e17de0a",
".git/objects/32/668c862b20bfc2a134fdf6812e29cab68d02a2": "593daba072fe607414bd9778adf64537",
".git/objects/34/7e78dca74241fcbdd774387fcb28e4a97addc3": "3a308861d67ee44cf9aea9d2c14715a7",
".git/objects/34/9e687f239daff2fff5499f5f309c3fd16f5737": "3b907a12ca3c8e154f78627ec9084037",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/0f9a54dd879cebaad4cc3a1e8971f95c19686e": "6eab6e8f80122a40c8be1d52325b6115",
".git/objects/3f/14e3c395e700ee3dcf9f2076a05990144b1643": "a325cb0820957a9c906b958162f2a764",
".git/objects/3f/5300413065f487e22b79c628ba4d934bef82cc": "ef7d550a47aeefecacd6bf108e95b79b",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/48/0c1089c0c0f2ce0693454b6ae5aae91bfe31e5": "de852265aa6fc5fa651e96339212547f",
".git/objects/4b/99bb1eee83b6f5a44ec854cfbe98b28d2df469": "bce288c589aa8c61ca4828d2ad3fa6e4",
".git/objects/4d/65f159e0290ec85d9471a6777f42947f8e3084": "520c96502fb3316ab4ddc8f1f014c73b",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/9a84ed415cddf67849a0bd065ab9ab8bf5fd74": "22888c947b3286a9d3865d615c53aa23",
".git/objects/50/864ce828b43ae1664d2fbcc76a053992d141e2": "72261216ba5ce1490436305fbea55d1e",
".git/objects/55/9c49d61f84d79b06c7e4064c99e7ffc1c950db": "b2fa5212df665782bc0f8c84cd39a5c9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5d/1f123197ebc7479a8b56fd4d642f336972c9c7": "b07393f663264bc553a9bb87634f62d5",
".git/objects/5d/8c8faccace076dc8eee86e6dd73d09473ec930": "21496b967449f5912b26547c09673ba1",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/34eaf838e526784e7b434ced40be0e6c8522f9": "8301763f1b8a321fad990651c91fa0ec",
".git/objects/61/2d4815134fb2203574e01f73d8ad56ef8de6ca": "e5ef41eb46020ffad465bbec8d7a258e",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/731e76513ec0a940cd83ec0a4af6379e288d8d": "031070ac41643d5b42f6f244300c009c",
".git/objects/65/72043828b69d4355e01d4ab2a3df27533b9350": "c02fa4b86c7890b10a173479d171d536",
".git/objects/65/b77c23b59c8a1e9e52a886524c1e99bed96750": "f086bbeb5989b221ffcee7394b2597a1",
".git/objects/66/410324f1c66c9baa6192e3ba8a479ed6095ddb": "01ff69bd05b786418f19e5e886085d7f",
".git/objects/68/323bf8245cee17c6901f74837830e16c4d01b4": "63670857ced238f5884a073c73fab4b0",
".git/objects/6a/484f452a04f9fea4272ec1ed671c1f3574d7d4": "2da012b485778858415935ef407b315f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/67bc9f5e7b13902c914177f177249f48745b12": "9f98c6e4a64549cb27c52d62123d5944",
".git/objects/6d/b4a06739857d9a8d95a50efb8531c5242d2c40": "8179dd6378ffbbb895135a3584de94ef",
".git/objects/6d/eee3df24b1ea6382db8d9f1a1f5167c66551a0": "bbf6e0bf93050e264fe211b620adfe38",
".git/objects/6e/01995771f341624f0e9eb4ff5a429283121e29": "d853ab4450e16a9274416faa09a54d34",
".git/objects/6f/2e9d1858c2d13e2c3321b9afac296ec44d4c99": "c9e4aa224601ed67e909e381e3e705db",
".git/objects/71/6bc8fbfbecbd0464d25e12849aeb7de266fa75": "5265e4375a195155616268ac6a3d0d55",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/2846784214ef3daa0991a68a08b504eafd1ff2": "b8d3e4a7696a32cdda8f7e263c3587f0",
".git/objects/7b/bff42f0388da9c2a0ebf3a9138b3b7a3a5909b": "afa2addd81ee8abb650a781f340d5b7a",
".git/objects/7b/da9432f5b5962656e71c32bb7214f1b67d909e": "9578db353fc3b26218d8cfc18231353d",
".git/objects/7c/67eed3bcc8aa5ed0f2fe5e31fa87ef4ca78c2e": "3f52be654a0950c110c214a884aa26f3",
".git/objects/7f/797ebdbc0743245658726502b2f0fa166fae5e": "74a18b638dc5969c6c9dd5a84920d20f",
".git/objects/81/6f6a356e0bbcf31f6390ac86795bceb639de6b": "173360fe4a6839a479bc857919901eec",
".git/objects/82/fa9cfb1ced31c91816c8e0ea10c013090384b7": "489ade1ef046117f8abd7aa6e56eb6de",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/72be1dec503f4b8f2074acc09da6f68d6ab33e": "cc25c43d670ef4606a2f18eaba23a705",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/70e2350e083be74e86dff1af545d32ab89afd3": "0ebd98bdce4f540fb23d7a27ae07b86e",
".git/objects/8b/894acec63cb3c5f46997df83ce0819e7a39bef": "88c1b30a5c299e76cc0e197ff87a7bd4",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/bb849bfd8ae17d28bcbaa3410f788cffb7d8eb": "0dabff16cdb6bb62ca94e5fe9023beb7",
".git/objects/8e/d94bcb88f4fc3944c353babd83ff201acfa367": "ad14defe593f1099f1ffe2bda5080e22",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/98c492b995f73aa6e26bbd433680105fd3c710": "2c907a9302af3639158a8797c72afb20",
".git/objects/92/8753b8a2d58d44cbf7e97561d0a5bec88374a4": "8005988b9e26e3b5e16ae25125eff0b1",
".git/objects/92/d1862d6f78680e173671e56c646f1ee3f2c30d": "26d1140c89d71286852f254211cf13a9",
".git/objects/97/0f184ee13e43996c2469f5d08145f21886142b": "abee268afb783f6f82a3e7f030ef47be",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/4407c24259386b77a173342ba12f5092843fa4": "5dd42f0b0550000c8475d872d4256dbb",
".git/objects/9c/02bcda255cae8dce82ddbb002684b790ee6f5e": "f4ec3d1da3326c0c74fa90bf071aefb4",
".git/objects/a0/a569e8ed07f83eca1ed6613b7a66b88d0395ba": "e79d8dd0634ead4be558e7f6e66ac043",
".git/objects/a1/9ba346f4dc075bb8e0c61ddeea0f07b8c900d9": "a4d1b8a191a63d369f1aab1d35caef45",
".git/objects/a1/f296262c24db52c3945189d2e01c4dd4ae50c7": "2d7fb1b8045e6b233dd565adbd787f88",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/38993b8225309c33bcc3beb6691a8322660363": "fd45a38d23f3cacd812409aafe476f75",
".git/objects/a7/4b4da733269e7baddba89311a91dcfc3814e4b": "01ee86db0b8d3128ca450a12bb89538c",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/f852783b7ba0ac99984d1edcfaa6dd36f4acff": "73689d0ed10bb03d6a7149a08b17adbe",
".git/objects/a9/4af011a076123823c5503a03177471c2f4685e": "18bc3dde4d3cd4f0acc7aa4d0b1d6f37",
".git/objects/a9/4dbfde4db0c03d624dee0cc3e2fb680d0ec1c4": "35ab92c24016664fd296eeacaa1d9710",
".git/objects/aa/18f806d1dcbeb649425facaedcf3150271acb2": "4b70817b6ccacf9adb2f1b1744b9aa45",
".git/objects/ae/8abd58208453adce08c45c4bf47d46e06908e8": "22fdb5997a9d18b878932aef5462370f",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/de42544c3ec7191295d9a920b4b5b521be3269": "9541f7f697b3afc425a0efdfda96be22",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/c65a959ab0bae8d3ff6c54c619684b22fc633e": "9652957e3932ab876721780c97b8985a",
".git/objects/b4/208ac61c4700274d9a672f849d0dd8baf3b26e": "abef5d9824ef8e4f5137c877547b95dd",
".git/objects/b5/7790454c489e7d4ecf13468d24ec6efae3e3bc": "017b0eae05e018ac7e3a05cc184fb6c2",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/67df630ae6902930266fbde20ac5ba59248182": "da26a891dbcc5e464339ff027777e117",
".git/objects/bb/a5a5621377bbe5e30f6d864fd19370048ddea4": "b2d395606362e06ed3e8ad592a16efa1",
".git/objects/bd/b1b6768e38e0c2909852d4fa3ac9ca41223512": "2cde92158d79d4a07e34bb45a83ab5b6",
".git/objects/c2/97d80f4faf59b7e894cddf5cdb29f7fee524ef": "ce7c89201a173bf7d48ffdc3fe7bb863",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/4b43ebf16bd96061834f1631f494efdf53c71e": "471fbf51aa0056fad0f9ae55b77a86b2",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/1b52a4119d90da23958144ede40a58d908750f": "6d033e4ef4d82e9ecdecfffe7676d0b6",
".git/objects/ca/53c53c83d45403a7c4e61760e27c876d57da9b": "4de93e9e9ad0bab8d69b72d11a2db01c",
".git/objects/ca/c5ce1dc0e731be79e60fec94811914e1cae68a": "5092f4d81d8631b5796a649a25862b16",
".git/objects/cb/5568b704bb7eee57966bb3c4f1d189f7b3018d": "47782d235c3c642a9c21da6c86f11397",
".git/objects/cb/945b124c7466f99141793801b8f38ecc5b4363": "65e17a9b69a6be171c967b7e2b325173",
".git/objects/ce/5b361dfe9b1795c01a4dd531deaad996d896fe": "83f645262c478f6c7d6d2559a0b9259f",
".git/objects/cf/41a27aeda02e009e12208a3f1a0e711f3a6f02": "17bf6ffe70ed1b3cd6e63568f67ae0b9",
".git/objects/d1/5bbd269b1c6be6c77091a123fc9cfef8bd65e4": "6c6c40fc73aaba454b0ddcd177250efa",
".git/objects/d1/ca3e29c3809829552304a3a50518da4f08802a": "10ecbe88eefb1bf812f181d6aef62ad0",
".git/objects/d3/847d4a184fa201397e87b0451fad800891050e": "998e8cf2413da574a7a172927a69a2a1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/1b68f638ab97adef2ece4d10b6faad108ab079": "f9676c6843e96786bff9086fae91370c",
".git/objects/d8/e0d83f1d4b9fb137d0eb98ff96934d06cdc225": "c665a0474e0adc2be4b886d955c4327e",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/a42e59bad7d35588cf6d20a74eb31340f025a4": "0b8eddf7debebf5e4b8cb58f11eb7480",
".git/objects/dd/3702a2e98f64e78329336acc6fcf42a3287dc0": "af389fef9e246c44d2a3b78b60a6e678",
".git/objects/df/6669b6f8ab42e5a7e7c4017eeaaceeaeaaed49": "db14dcafa78577466e281802a1dff46e",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e3/fe81d0de7460f395ee040658238bd1f79203a0": "b89c9a5095c9b3041b850e86e2c8cc0c",
".git/objects/e4/3b9c8b87ded5ea49fc3f499725d77bb7825b0f": "cb7b96599da5686d06d2d3b300b0153e",
".git/objects/e6/1761ad002ffdb155ac49e43cbe2c4da6880cd1": "e42aa46d4d491700147e05b50ca5854b",
".git/objects/e7/9bba73bef2fc7f219bbd64826e0c72b5acf30e": "f4aeeb7395691946cc908014d41a6d6b",
".git/objects/e7/bca60396e0167eac35fcf7aa85a639f6a219b0": "f2b6d55ee80a4168da693e526a91a9fc",
".git/objects/e8/cef6db6724cca825cf651b2522bea3c5fc3c2c": "16e247f116e6d272479b863093c5f298",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/d089c90c4a9b9bb6c0efb0a2f871a77f59248a": "9442f528c6e3b5aa28a3f7307fd88be7",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/6fe5431a582c5d379e13893e34ae5317e460a8": "aec9377b4c2b1fb3ab3ced9f74c4ddf7",
".git/objects/f1/c9e24b4a8804c133c5b6a2d88a1c898c433cfb": "2ad33e65aefc6c9e654b88cfb7e9cc1f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/87f9b278712cecb0081e5f4775ee9bb674e5e8": "f44e8c6ec6dbadfe08938cbd8065958f",
".git/objects/f4/9e2662124f69d1c93efa9520a7ef354623560f": "165532a39b39ac88fe927f451f15ffbe",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/b68e6d086ffc3c28b190f735e5a19ebff12508": "efd1ed5cc6e9a695d0cdfa7de0f76a2a",
".git/objects/f6/3dde43bf4f74c0722b87a37a668e5ffd849aa1": "9c078025d844adba364bc34f76c7791b",
".git/objects/fe/34298a4df8a1f7225ff08fce9603df764377e1": "02c1697796a36936e68c002b5a05e936",
".git/objects/fe/89d164a76a2a7313f3ddc79bd6f9bc364f9f53": "e6acef6bda3382b7c71d5e7ad6e64c50",
".git/objects/fe/bc81499f855117ba1c704be4d2af6debdffdb9": "f53ce5840f33c39d1e76bfa70d439133",
".git/ORIG_HEAD": "8e240af19b08a39f6d040d83b316666c",
".git/refs/heads/master": "c31354733cf1188dd2cd6f86486acb6f",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "c31354733cf1188dd2cd6f86486acb6f",
"assets/AssetManifest.bin": "334f4d4d504eecfb343cb5af1ae977a7",
"assets/AssetManifest.bin.json": "0e486ecad59b6dc45006774cf083285a",
"assets/AssetManifest.json": "725bcbd864f100c5848a2e2ed693a484",
"assets/assets/profile.png": "b48519351be92099287efcdcf19cfdb1",
"assets/FontManifest.json": "804c25bc7bc351b1926e59e29bf000bc",
"assets/fonts/MaterialIcons-Regular.otf": "ab49374186e12b46a7759701cfeb73b7",
"assets/NOTICES": "3e5b5f791505aae51e798b77e06f0b84",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "5a3f94f5a4cbe35f2ae3bbc430b110e4",
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
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"CNAME": "a06b59061ef156da57ed5db0557dba18",
"favicon.png": "1d05e468db0fc4ac9e6f8da5601d9083",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "252e6ca7e8de4582c04ee85b4c427c29",
"icons/Icon-192.png": "97acf86f7becc4b998ac56f8e562801c",
"icons/Icon-512.png": "517dcdc19e9b1a842b6a0a4663908ee5",
"icons/Icon-maskable-192.png": "97acf86f7becc4b998ac56f8e562801c",
"icons/Icon-maskable-512.png": "517dcdc19e9b1a842b6a0a4663908ee5",
"index.html": "5f35bbff137f7738ff62d4bc3d681887",
"/": "5f35bbff137f7738ff62d4bc3d681887",
"main.dart.js": "9130de42edb6cb39fc9f159ff513ceea",
"manifest.json": "6b53447448f68ae679c3f1af3514762f",
"version.json": "089b1b85791111fa30f94a54cdaeb63c"};
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/aboutme/index.html","0676b466b0238acf27770feeaadd8523"],["/blog/archives/2013/05/index.html","7ad93288f6b187352aae896b1330ec2f"],["/blog/archives/2013/index.html","a48ceb646a01947c97d590fb2c99d0ba"],["/blog/archives/2015/07/index.html","b7362e0bf5acc963fd27d03827f482b1"],["/blog/archives/2015/index.html","0978ebca506d86ac3784c93f0f87d25e"],["/blog/archives/2016/05/index.html","bf124690bbae56fda023c681a4bf291c"],["/blog/archives/2016/10/index.html","4eba7f2c55650149ee92ccf323c47750"],["/blog/archives/2016/11/index.html","2cd6ddbfffc05ef54660a93b596b7414"],["/blog/archives/2016/12/index.html","ad7749d8654edfc3abf33a3cb77cb793"],["/blog/archives/2016/index.html","dd0db7232b03d0533c32dee8636db0da"],["/blog/archives/2017/01/index.html","90d4f032fd6c6ce6d0bba80619fc9390"],["/blog/archives/2017/02/index.html","c2b48eae21a1f6d3a09d8e0304e55e98"],["/blog/archives/2017/06/index.html","00b6684bc5b9fa6963d80a6de931d0e8"],["/blog/archives/2017/07/index.html","dbc5d64dd9644908db31eda04af3a55d"],["/blog/archives/2017/08/index.html","88a553d8dba7e1fc1f3ef4e01b99df9f"],["/blog/archives/2017/09/index.html","7c25e088ee87947b571be58b12230936"],["/blog/archives/2017/11/index.html","1f1ad6a5bb11a52a55717bfbc3caa80c"],["/blog/archives/2017/index.html","65bf3ecbe028393a36ca51e8b75dd271"],["/blog/archives/2017/page/2/index.html","ed0db211e9e2861638f9d980b9edd764"],["/blog/archives/2018/01/index.html","305f7c52ad5e2b3aed61ea2983948853"],["/blog/archives/2018/02/index.html","6ddb7d39a719154cb4d712d623962223"],["/blog/archives/2018/04/index.html","74740245b193f79071cdd7ff525b2beb"],["/blog/archives/2018/06/index.html","d76bd10e9c6f20b4c72279c78b524e41"],["/blog/archives/2018/07/index.html","1d3b26b481ba21225afb1928975328e1"],["/blog/archives/2018/08/index.html","166ac22073e2f8a48d9dfc61d868441b"],["/blog/archives/2018/09/index.html","ec99657bda2be5ad9ed1122b59cb42cd"],["/blog/archives/2018/10/index.html","df627132d4f773e10c8389dc07e716cc"],["/blog/archives/2018/11/index.html","8995adebfafedabc38c5697d6f63a891"],["/blog/archives/2018/12/index.html","03ccf62ad7b3d1859550ac149c85fb0f"],["/blog/archives/2018/index.html","2529ee380e828a8349ae61cbdfbd939a"],["/blog/archives/2018/page/2/index.html","2ba052931121d7502d674223a9d4fa2c"],["/blog/archives/2019/01/index.html","0b8326bc33f7182de61427ceca700797"],["/blog/archives/2019/02/index.html","177195a3b15c87a21a074e61db4dc5a6"],["/blog/archives/2019/06/index.html","bf6e482ae85221911127c40b3b5a825e"],["/blog/archives/2019/07/index.html","fd018f0c355af5dc030ff41982152c5a"],["/blog/archives/2019/08/index.html","2d08905a23b6ff49f76870520e83aecf"],["/blog/archives/2019/10/index.html","85b3a7e1d5480140c4fbf8432c7d6e87"],["/blog/archives/2019/11/index.html","e8ecb437c4da64219ce40fc521eed7c6"],["/blog/archives/2019/index.html","c826abd3a134d025127019cfbc69c30b"],["/blog/archives/2020/01/index.html","e1a491e2898c583f1b1e141c3fa9e4c7"],["/blog/archives/2020/02/index.html","0e9c472dcf2990449ff2873566b9d3f9"],["/blog/archives/2020/03/index.html","c39f362831ac48d61d79417f1f247f75"],["/blog/archives/2020/04/index.html","875467b7c3de389f72111319c065d5fe"],["/blog/archives/2020/09/index.html","c3081af6efc60b94d281efffca249dd6"],["/blog/archives/2020/10/index.html","26b82d61be386c0a2b0b29dc8752886b"],["/blog/archives/2020/11/index.html","a611b2b9f1dcfeb7c7c9c11bb7e124da"],["/blog/archives/2020/index.html","990bc216b8e6faffd680070adc6cf250"],["/blog/archives/2021/01/index.html","a08845e17c92b9043e6e34f37414c2b4"],["/blog/archives/2021/05/index.html","2b3feff1722e10a7227c608b3b53d9a4"],["/blog/archives/2021/06/index.html","9497220a31d171d16ca23ab68af098b4"],["/blog/archives/2021/07/index.html","316b7e256ba0974f292553c9112b59b0"],["/blog/archives/2021/09/index.html","106bcc9cea03cd96fa8aee5c45502f36"],["/blog/archives/2021/12/index.html","b4e241eca59d58de2334aac36595d82d"],["/blog/archives/2021/index.html","e65290a13cc0011c7eabbbd85766df78"],["/blog/archives/2021/page/2/index.html","7aa373ea7f9bb73c39e5ab68defb2ea8"],["/blog/archives/2022/01/index.html","7628f49f14def5ae0e7edb48208911e4"],["/blog/archives/2022/02/index.html","19c6ef246eabfc619e4d26bebfb04dbb"],["/blog/archives/2022/05/index.html","3028de1c6d4e6404c18cfa17988b6032"],["/blog/archives/2022/06/index.html","c32074db8b4d22ad70deefe2b2c3e1e8"],["/blog/archives/2022/07/index.html","727135f7f003d7aa14ce79e7476de41b"],["/blog/archives/2022/08/index.html","837ae35709a69ec4a2936dbd1518db9c"],["/blog/archives/2022/09/index.html","f22aa865f8626103087a4c233735c9cf"],["/blog/archives/2022/10/index.html","77b85b3183d51dae9c5906c2775dbaa4"],["/blog/archives/2022/index.html","ea44f11403750207fc2afa38c55225e2"],["/blog/archives/2022/page/2/index.html","7755608ffe0c9fb96759c296a337e4ec"],["/blog/archives/2022/page/3/index.html","10a36fbf4a259dc6ce690decfb0a2df2"],["/blog/archives/index.html","1f6b787527f4ed9017013f75b4bb3bff"],["/blog/archives/page/10/index.html","5f5eec0352b9ec6ebc6cf7dbb0cdf7b4"],["/blog/archives/page/2/index.html","a267a70825f7bc410e0d6e138ad0794f"],["/blog/archives/page/3/index.html","c19b72dd2779dd453dbadc95b9c9e476"],["/blog/archives/page/4/index.html","a250777e2011636291acfdcf81249a40"],["/blog/archives/page/5/index.html","c1abe51321ed7bf0e293745697511fa6"],["/blog/archives/page/6/index.html","51e131d8fa36afb00fd3898e6c0adaa7"],["/blog/archives/page/7/index.html","34ef50ed93873c2e61cacff1683a209e"],["/blog/archives/page/8/index.html","6210e0462d2a42ecf5969e5aa7bb1824"],["/blog/archives/page/9/index.html","9838b0d9d03a3008fc0bad6d2271e749"],["/blog/bangumis/index.html","5986a406d7abd468c156c3cc68d555c0"],["/blog/categories/index.html","a34b56a172cbfea05979d66980e97ade"],["/blog/categories/个人作品/index.html","e3b8b8e5b4c1e9ac04be605778aa7506"],["/blog/categories/个人作品/page/2/index.html","e147dbe3bddff6898de28aceb7409b57"],["/blog/categories/个人作品/page/3/index.html","6f3e9c6f77389ff7e569412866b92620"],["/blog/categories/个人作品/page/4/index.html","b0ff26ca3bc852f1d9ce0c6fed438d17"],["/blog/categories/其他/index.html","fd6f158a9870008466f6fc361fcbf48a"],["/blog/categories/前端与网站/index.html","eb099f0a1ab74589f23330c0e46f1653"],["/blog/categories/前端与网站/page/2/index.html","6f5bfa183ad5e973999647da40ac27c6"],["/blog/categories/前端与网站/page/3/index.html","4269a3c3c9c8a30ec5e0289c1c73c205"],["/blog/categories/工具资源/index.html","a8c626b31508415ce69e1cdbc53a91ba"],["/blog/categories/感想与安利/index.html","7f0d3830da9271ea0d6b7e17e62fec30"],["/blog/categories/游戏评测/index.html","f23e68ab8d99fa01fc290c4e381077b9"],["/blog/categories/游戏资源整理/index.html","cc4f9444cd3ea112a7a6f7f5f4de4348"],["/blog/categories/游戏资源整理/page/2/index.html","0c8f8a11628ff043626f5a72fda09000"],["/blog/categories/生活随记/index.html","46001eb92925732f8d54342094cc3c08"],["/blog/css/custom.css","5ab92e5ec94dd6a44146bf1512055e84"],["/blog/css/dist/custom.css","655ef318257eae827323e759b8f63bad"],["/blog/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/blog/css/index.css","d2100032521223662fe8af285fed75c4"],["/blog/css/other.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog/css/other/btns.css","ffb2c4537aae8b4f54978364a248799f"],["/blog/css/other/checkbox.css","3bd9b3c418b016dcd827efb5473a9a9c"],["/blog/css/other/dist/poem.css","a32bc491e03f82b52c3d59736ba7757d"],["/blog/css/other/dist/steamgame.css","24d3450b26b9a2c0135f4c5493184c70"],["/blog/css/other/folding.css","114576e352fbc89f99ab2f4bb2c8c14e"],["/blog/css/other/ghcard.css","aed6830bde846082373c214695fe7b25"],["/blog/css/other/inline-labels.css","ea48fad760d90cdf6d721d60e3f934b3"],["/blog/css/other/link.css","370457e2e1a7d7b943a2ab4d31b76c80"],["/blog/css/other/poem.css","a32bc491e03f82b52c3d59736ba7757d"],["/blog/css/other/progress.css","b5f0c014aefe019b19df428c2b16b778"],["/blog/css/other/site-card.css","63ffa1f36f9462b9a3d8d79025da56b8"],["/blog/css/other/span.css","e4ede5c60dcb4131856651894080e9f8"],["/blog/css/other/steamgame.css","b26eab338cfae4cb0765e5f5f26048fa"],["/blog/css/other/tip.css","653eaa2cede4b5d8417bb8a3617d7e2a"],["/blog/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/blog/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/blog/img/loading.gif","a994cd022cdff0a80c6cf57173c0454d"],["/blog/img/pwa/README.html","d9f6279903645828791289d9a3048e31"],["/blog/img/pwa/android-chrome-144x144.png","24bb5615d3a949a4fea48c727d4be7f0"],["/blog/img/pwa/android-chrome-192x192.png","79cd9c75f2cf9a259e37372b824f6b15"],["/blog/img/pwa/android-chrome-36x36.png","ca5937b9accbe2078ca8a4f28ae4da34"],["/blog/img/pwa/android-chrome-384x384.png","b5167aa58888fee7e92c39135ceab7f5"],["/blog/img/pwa/android-chrome-48x48.png","71900d9333e17756925dcaaed562d5cc"],["/blog/img/pwa/android-chrome-512x512.png","1fb51da2e51c3b90fdbbf83f1b926e22"],["/blog/img/pwa/android-chrome-72x72.png","6c645c9d3df27719177da63037a2dc8b"],["/blog/img/pwa/android-chrome-96x96.png","be2b46c6d92ce50a2cb44338620e5c5a"],["/blog/img/pwa/android-chrome56x256.png","c921b0f90de400a03a75da72fc569e6c"],["/blog/img/pwa/apple-touch-icon.png","e887118b6556821684979cdb66152cc4"],["/blog/img/pwa/favicon-16x16.png","474d131f049b41e196ff06d2ec21b09a"],["/blog/img/pwa/favicon-32x32.png","a2f130922d6943f7ff863a6c051fa871"],["/blog/img/pwa/mstile-150x150-2.png","a8404e348d000bd4878a98dd67abadfb"],["/blog/img/pwa/safari-pinned-tab.svg","ef798fd152af24916c51dd971f5674c5"],["/blog/index.html","a5b8f29d8ee1df64a1db139b9d4d0c4d"],["/blog/js/carousel-touch.js","9f8e9d56da9bff28c1485574a1ad7a89"],["/blog/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/blog/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/blog/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/blog/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/blog/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/blog/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/blog/links/index.html","cbc303c66981eb777625b4238a2bfa6d"],["/blog/message/index.html","e108e0d566b2afc7bb6a8a55d1c559b4"],["/blog/music/index.html","c367eafeb3f3e1498840e7dcef638a8d"],["/blog/page/10/index.html","c3c0ccf9f0d221f259df5c22a5a80462"],["/blog/page/2/index.html","c86c2b318e6985177a7e24f23f5fdb64"],["/blog/page/3/index.html","aa81fcbc0dc20e73a15b3811239dd676"],["/blog/page/4/index.html","1e83f04716bcdf9fadcff6622852c683"],["/blog/page/5/index.html","4625468d11c20c97c0a776cddadd37bf"],["/blog/page/6/index.html","333a3c63173d9960272aedded881528f"],["/blog/page/7/index.html","b41ef6d854d036645b27eecd1f33a38b"],["/blog/page/8/index.html","4037d9ef50db8931f07e1e8ed3050a58"],["/blog/page/9/index.html","70e379d5b4b46982e805179006a485be"],["/blog/posts/10224.html","f324a748cf908806734dcd07bcc5a2b8"],["/blog/posts/12369.html","0fdcbe54d6cc07e026c7b954b1522623"],["/blog/posts/1270.html","c3c41e927075c5417129143c4eb22180"],["/blog/posts/12770.html","8d1455b49824a3195e0f87f4d51b6cf0"],["/blog/posts/14177.html","d97d88f2de380877c28e454f256ae541"],["/blog/posts/14580416.html","9d9e2ae8be1a46eafb8ee6e81e6953ef"],["/blog/posts/15663.html","3cc420a7ef82dd6a815df76d801d889a"],["/blog/posts/15904.html","e5df2b6bc55db800f707ba25592470d4"],["/blog/posts/15929.html","cbca5930283266ba1aaa1c049e09cbd7"],["/blog/posts/15959.html","150a0f0ecc647c5969d791b9114da151"],["/blog/posts/173.html","b5dbdd2fdda61bb5b15dd4eb17d77c00"],["/blog/posts/18647.html","36359b52f9331fe9580241b14f204d01"],["/blog/posts/18807.html","453889f46b75337a128d3e6a07582427"],["/blog/posts/19368.html","d98c3605cd39dc538e6da6a105feebb7"],["/blog/posts/19549.html","10d19bcfc643fd0a3d54b8ae3fcc92fa"],["/blog/posts/1dbec013.html","143ac9683b271c25ffdfdd93cf0984d4"],["/blog/posts/20133.html","898813b700347addbbea8a9de18625e3"],["/blog/posts/20731.html","03de2952c0a6b8c4d2ad08adb1d4c391"],["/blog/posts/20764.html","6a55900fbe58f3216ef3962c655cb8be"],["/blog/posts/20832.html","6f60b3e0944d211d25e6ad441546fc37"],["/blog/posts/2137.html","7393867ab04f8deb1620311bed045599"],["/blog/posts/23807.html","1e481c0dedab14719d6c189b1af4da9f"],["/blog/posts/24482.html","c7faa38c3356efb87766414631930488"],["/blog/posts/26417.html","cd98664546092ed2863dfbb3df7e516e"],["/blog/posts/2686.html","47737876ae53805b61241ef14d228066"],["/blog/posts/27247.html","e825987febce2f9af8a7f47d266af9f6"],["/blog/posts/27452.html","19a88de08a62073efff3ccc7a3f0cf8a"],["/blog/posts/27650.html","75eca01a08c3cf490376a3750b0ac211"],["/blog/posts/28180.html","5b76461be1b4808c6a605058154f9228"],["/blog/posts/31d725ea.html","350257160e08e69ae55749a5bd3881bc"],["/blog/posts/32669.html","7b1a004a5abb3a883e534a5862c2c7ae"],["/blog/posts/34771.html","a8cce9ef40d5cc37aa25a4f590410779"],["/blog/posts/34806.html","25adc44f7d2ef7c85c80f4a032145b34"],["/blog/posts/35192.html","c3b8d2904ca3b57ac1043e47b158dad2"],["/blog/posts/35671.html","204aa93ec32fd23a393815dee6151bc4"],["/blog/posts/35755.html","641a67f92243953d9b84796cba6564c1"],["/blog/posts/364.html","d03aa336b2011e913172d05d2e57a9bb"],["/blog/posts/37028.html","54de98ce8d39e8f24839b56d99e15e2a"],["/blog/posts/3761.html","a775fe5a57348fcc2b4dac9e0414dd5e"],["/blog/posts/38726.html","391731174a5b6a6bf67397f4843bc600"],["/blog/posts/3a730d01.html","b9c711499593f297c9126f7cdcc127f6"],["/blog/posts/41083.html","a338a63ec1247384f2eb9796899f583b"],["/blog/posts/41415.html","7a4ed095e1536e89bdf9095bcbdf4c57"],["/blog/posts/42198.html","32e6549cea7f734a9226bceec1b589fb"],["/blog/posts/4325.html","0f55cc2a7c69aefd1ab1562f2afaf38b"],["/blog/posts/44082.html","ff7b38c06df74cd6f3b9999d14b8f66e"],["/blog/posts/4425.html","d55185861056736c5a804e7469534b17"],["/blog/posts/45026.html","3ec73ff205a7d0927f5248fa386628ea"],["/blog/posts/46972.html","45a9fff081217b7754092c0b4e8aadf2"],["/blog/posts/48037.html","7357de8cc8db9499365b5de80316bbd6"],["/blog/posts/491b225d.html","38562f5a48f9965733c96dba67d8dece"],["/blog/posts/49836.html","9f891265d1a70b70ab9eaf5113a309a4"],["/blog/posts/50123.html","e8ea129b75956ba3b9a379eefa30ab73"],["/blog/posts/504.html","94b86443462a56fd84eee03f6df165eb"],["/blog/posts/50615.html","fb64dfca412631c47cb3a0865d80ecaa"],["/blog/posts/51793.html","6bead3b027f178f16a5770617cf139a4"],["/blog/posts/51888.html","114fedb1ad9b0f50bb1ebbd61d50abda"],["/blog/posts/51993.html","8237f4bfca3291c785ae09022dae95ff"],["/blog/posts/52627.html","0229a0013c83ee07411788905df24c14"],["/blog/posts/53405.html","76d1b1e7ae55aa2ab1bb0b830a24e654"],["/blog/posts/535faed9.html","3799ca02caeb095ccf3c358b15d1c8a4"],["/blog/posts/53700.html","fa31c1adfafaf56906058aef714f9136"],["/blog/posts/537344b2.html","6d44f40656eec6ff6e5f158e7652b96a"],["/blog/posts/55032.html","6ac433246e75912373454bb10d2c3db9"],["/blog/posts/55741.html","565f26e4398d1be3020af1e53542e853"],["/blog/posts/57a901f0.html","903bc90dcc9b416f1fcaa7826ddd7558"],["/blog/posts/59848.html","4b1371a7a9561fa6d8121a210bc4f936"],["/blog/posts/59ca7e41.html","a789cd2efe7f617d8916330cc38829bd"],["/blog/posts/5fd82dbe.html","9f4291452685c165eadd11a7bbc19e73"],["/blog/posts/61832.html","2e52ea10b4184bfc270150ede27b38ab"],["/blog/posts/61891.html","91ec27eb9e88026f45929a3ca5270bc0"],["/blog/posts/62550.html","ce32b59d6db45a7c0d1fc02497b49895"],["/blog/posts/62581.html","bd4adcbd24600a9f6cd956485f604898"],["/blog/posts/64031.html","468d47fc2b07efcfd263dd4897390ce2"],["/blog/posts/64777.html","514a16099a7f0b57227c1e08cf63da4f"],["/blog/posts/64850.html","5e886c7a416b239d7a53cac0e128fae3"],["/blog/posts/65e843f4.html","a223685143ca85dac41efe5c0bb9228c"],["/blog/posts/7e3d2d4.html","b859e3d22045e22c27d3b3693aa85f83"],["/blog/posts/845ca7c4.html","7d5b64e59d37a1430665262a4b472968"],["/blog/posts/8569.html","034d9678e67d5ba65a8835e7e1c06869"],["/blog/posts/898c3bb3.html","fade659bc47a96b4a325a647a77830dc"],["/blog/posts/953.html","69f12e8026c472ce0af765ce043e964c"],["/blog/posts/964d468f.html","c983b97472a3a834993be055375c9ebb"],["/blog/posts/969abdb8.html","e7f55edb5dd8d9be0ceba351beaa0f1d"],["/blog/posts/afcf312e.html","98932778558c1fc01f181e5cd50b8a96"],["/blog/posts/bc1c3bac.html","6f6826d026aa98c3d5c08bc54684d598"],["/blog/posts/be1f2db7.html","2fef4b2ea904e36e3ddbe4bb56f9237d"],["/blog/posts/c0404e49.html","891c9cb61d28a7529dc353e793696021"],["/blog/posts/cafe661f.html","014f73dc8934e1c4b3e4fc6e5dbf80aa"],["/blog/posts/dc17b247.html","55e53b729e82be55d75eb2fa231e90e2"],["/blog/posts/ddef8e37.html","bfe5d27f7420a0238e66372032fce5b1"],["/blog/posts/eb9d5593.html","3350e5d856f395f3fe118e6462daf7f4"],["/blog/posts/edbff87d.html","88bb5880e4280821f01e5c0f478d136b"],["/blog/posts/ee58e1ae.html","b2e21d3c7cb2fec353bf8b7b6b436734"],["/blog/service-worker.js","f3649e7aae568aad8ba7a4ee72adb37e"],["/blog/shuoshuo/index.html","9326c92ca24f46058361fd462e2f6425"],["/blog/steamgames/index.html","a910cd238ede934fea4bf4fa7b598fe6"],["/blog/sw-register.js","edcdb604a2bf5a10affa7c6c8d952970"],["/blog/tags/2019随意链接大赛/index.html","d170c0ab1435c29f7721b563780ea526"],["/blog/tags/2D表情/index.html","8b3fd77762d401ae7928e7c2539a0d3e"],["/blog/tags/AI/index.html","7f181411a3a08bf9f42bb71394cd369c"],["/blog/tags/AMV/index.html","1f8549b1890fe0760379b77eba543cf0"],["/blog/tags/AVS/index.html","04a894aba97bbf6ba5ec0bad7699c360"],["/blog/tags/Aviutl/index.html","360dfbbc95fde7c1798ec7aa9d6b6ff2"],["/blog/tags/Backblaze/index.html","82248e40ebc66f2e7f08bf0324248e22"],["/blog/tags/B站/index.html","03ead9f29a39c1e75f2e174c39573afb"],["/blog/tags/CDN/index.html","d20901d7a3e0f220d90cc83ecf8ef39c"],["/blog/tags/CLANNAD/index.html","68d95c7c8df7b7bc924e5ac698d5db3c"],["/blog/tags/CSS/index.html","30a35c45e72992a77703bad033d88f9e"],["/blog/tags/Cloudflare/index.html","2f29a5cbc08d35c265a57c98bae6abcf"],["/blog/tags/DNS/index.html","dc470ac68d228c6bc9471ccb205f7b9c"],["/blog/tags/Electron/index.html","c771ffe299e260eb6ab443d5a3a6e6f5"],["/blog/tags/FLAC/index.html","4074aa784c7c3c53e5f2dbd9a367e215"],["/blog/tags/Faith-Of-Danschant/index.html","bc29f836f05dc641e7a8b361324c5cfc"],["/blog/tags/Hexo/index.html","4166de932d3895d28085d03d27d8bc28"],["/blog/tags/Key/index.html","ffd5dcff4c1ce3e25b0760e4ac04094b"],["/blog/tags/Let-s-encrypt/index.html","9a30fdad817b3d62e27d3bb307822404"],["/blog/tags/Little-Witch-in-the-Woods/index.html","f533f73ea3ebf1fbe38f80b4507ce16d"],["/blog/tags/MAD/index.html","8e5b556dadb13cf56c736b59b84ec982"],["/blog/tags/MD/index.html","63af7e19a492c256c9b3ec2822f6c6a7"],["/blog/tags/Markdown/index.html","381f4d6083fd4c5f55baf409889adb62"],["/blog/tags/Namesilo/index.html","d74a8475683ca851d8b5a079969a118c"],["/blog/tags/Navigation/index.html","e123c8becfad74bbf0bd98173d212e8c"],["/blog/tags/Node-js/index.html","ad6fd78cc9c8cb193a4790dd3db310dd"],["/blog/tags/OCR/index.html","5b3129d24ef960705453d96c870c5423"],["/blog/tags/OGG/index.html","b05fad74e211591428c8ff47c129023d"],["/blog/tags/PR/index.html","7d664ea330c4c350dfb136914bc2cfc1"],["/blog/tags/Premiere/index.html","dada6d72619eeb2f9ac6c78540d6b71b"],["/blog/tags/RPG-maker-MV/index.html","8f0a88bbcbe1c674878a85a70329f1dc"],["/blog/tags/SSL/index.html","ec33a076e3b162cba60165bfbda5e2c4"],["/blog/tags/Spleeter/index.html","cc9638bf2c36e93632d7809b829c55b6"],["/blog/tags/Topaz-AI-Gigapixel/index.html","9bdf6adfa7ae805b956114197f690c44"],["/blog/tags/UE4/index.html","8061921b48850964eb7d8d4c3f9c0757"],["/blog/tags/Valine/index.html","21c5bdd936a358122953d8851e81d45f"],["/blog/tags/Waifu2x/index.html","44fc9038a87955deeb7aeb49d9a4c143"],["/blog/tags/Windows/index.html","b0b377f561383dcd8aed67f77ad8188e"],["/blog/tags/bilibili/index.html","c82d93e36abb1860cd300a26162beaca"],["/blog/tags/blog/index.html","342d0fa93e65c016c9b52854a608a6cf"],["/blog/tags/butterfly/index.html","346d74a6e5ae3d7db8bad988ef8a5dd7"],["/blog/tags/email/index.html","b1de8545172c622e2235728a3e8034a8"],["/blog/tags/exe/index.html","809a50a97f4b4dd0bc6c883ffe8decc5"],["/blog/tags/git/index.html","2a440d5e3dc135770ba1e645b61eab4f"],["/blog/tags/gulp/index.html","3ae70e2e8e59a0b5b5145b4a7b40322a"],["/blog/tags/index.html","df51ab442f4b5c2503a4c8da40ead702"],["/blog/tags/jsdelivr/index.html","0a4440f1b31e8612e73fcc8da19d7136"],["/blog/tags/npm/index.html","ebe66d3be3382889f36c31e1591e77ff"],["/blog/tags/steam/index.html","762a1fcd2f38e5741724554ba5307375"],["/blog/tags/typecho/index.html","dcde384e0ffae88e60f05dbb83e26f76"],["/blog/tags/unreal4/index.html","bc81cf13279db4084a3ce432d52ec964"],["/blog/tags/vegas/index.html","ae75ae4d5ab52f94ad5c4421532f8b18"],["/blog/tags/waline/index.html","19170f7de55260fd1434fcaaed91a45a"],["/blog/tags/web/index.html","42f83f8889744ac3c17fbc0593484e4e"],["/blog/tags/wiki/index.html","f4743afb289851307637c0dea48d76ef"],["/blog/tags/个人介绍/index.html","bf4a9972ffce4b51bd2492540c6ebb9e"],["/blog/tags/个人作品/index.html","9478179bf9cdefc35bcafa264609e00c"],["/blog/tags/个人作品/page/2/index.html","4a0188898863c9cf935ff3430916477d"],["/blog/tags/个人作品/page/3/index.html","4e10141bb0b08a78d090ebe98b03a4b2"],["/blog/tags/主机壳/index.html","051e22d4789bea3a58b06fb4cfc4e679"],["/blog/tags/乔振宇/index.html","85ecd83c9a86c0be96ff12254f1cd5ce"],["/blog/tags/习烟儿/index.html","a0f0154b84de04a1d19dfe672fa6a8cc"],["/blog/tags/书签/index.html","08e4bf740346be627e1cfc3da781cdc4"],["/blog/tags/五周年/index.html","3beb1ea2030a6e00addda607ff0a1a1b"],["/blog/tags/仙剑/index.html","764eefeb308b3984292152cb53c22e48"],["/blog/tags/仙剑七/index.html","8479593e6a5a7dd39ea843ef54972afa"],["/blog/tags/仙剑三外传/index.html","84a999f9c02e81fb8b1e49e27df4fff1"],["/blog/tags/仙剑五/index.html","e80abee4b676f74165070f9f925614e6"],["/blog/tags/仙剑五前传/index.html","b00b93fa42c03e4e3f701a02e32e79bb"],["/blog/tags/仙剑六/index.html","7a9c0e23ecfce5f9aa668c65d1652f7d"],["/blog/tags/仙剑剧情对话/index.html","14193d9bd04880df177cf2dcfae933bb"],["/blog/tags/仙剑奇侠传/index.html","178246b7982932b1318bc9b88aa1592d"],["/blog/tags/仙剑奇侠传/page/2/index.html","ce2bf3df6af8308a7a8653a41b180bae"],["/blog/tags/仙剑奇侠传七/index.html","11e1535b3faf70aab5cd6ae366f788c6"],["/blog/tags/仙剑奇侠传三/index.html","832eafe6562d387fe00bcbbc4a6f9c7e"],["/blog/tags/仙剑奇侠传三外传/index.html","a01a28d637e97571a83f5ed5277a5482"],["/blog/tags/仙剑奇侠传二/index.html","019979262df97a9890caea352c0cab50"],["/blog/tags/仙剑奇侠传五/index.html","6c9a9c4d49a2f324dd8edbdc82f16baf"],["/blog/tags/仙剑奇侠传五前传/index.html","563e2f9ffd76fcdf9e5cc91f58a340bc"],["/blog/tags/仙剑奇侠传六/index.html","233010028fad9eda57abce3754f77bd0"],["/blog/tags/仙剑奇侠传四/index.html","ee2be19e7d06e9a56cd402cf27d6e154"],["/blog/tags/仙剑奇侠传幻璃镜/index.html","cf8ef39cc0fe360d9e6bec95ce91a89c"],["/blog/tags/仙剑手游/index.html","6584f11cfc516524579fb7d40910d26e"],["/blog/tags/仙剑春晚/index.html","581af2a5965735d9315bd2115477546c"],["/blog/tags/仙剑最惨女配剧场/index.html","b93f5a5a83fc570a46c684b2da117118"],["/blog/tags/仙剑混剪/index.html","c3cd4774c37d39cd24e938b845316de8"],["/blog/tags/仙梦长留/index.html","70106f16ae23af3924e59ea422e1ee36"],["/blog/tags/傅红雪/index.html","1b0a0dd1f407e75a2e6a71fcca5677a1"],["/blog/tags/冽红角/index.html","d9cfd2a796be730dcfb3bb1736e7730f"],["/blog/tags/刘亦菲/index.html","0bbd0e90a0044b8d2f3d1dbde46e5030"],["/blog/tags/刘学义/index.html","7372a6d6ba1a8d7382c97447f5ca82f1"],["/blog/tags/前端/index.html","612c24ccf249582ae097cb248c9d90f2"],["/blog/tags/动态壁纸/index.html","9d6c1b01ce6179b4dfc11eee8a62bc14"],["/blog/tags/单机/index.html","f56b8fa17ee3ff119c5074ce71aa5d61"],["/blog/tags/博客/index.html","5ae82c35151f9dc12224050ba4e3cb6d"],["/blog/tags/卷积神经算法/index.html","968f11bd871ca3affcd0b6469c467cea"],["/blog/tags/去水印/index.html","58d0f67e93e2fa359c4dbcb0aa90661a"],["/blog/tags/古剑奇谭/index.html","5310c1dd15d9ec3053544c453614724c"],["/blog/tags/古龙/index.html","3ab9696f589fa779612e6b4905624775"],["/blog/tags/叶青/index.html","27a1a251ef64b499680e5c8c54e1585d"],["/blog/tags/哔哩哔哩/index.html","ff0cc2979a1b8787a6f9e09f9e234f07"],["/blog/tags/唐雨柔/index.html","f1f5f1f407293e8503d7ae24c316ae3e"],["/blog/tags/图床/index.html","cc50b6995302e32a80ffd6cc531ae55d"],["/blog/tags/图片识别/index.html","99940222a0b6aa6d5000704537fcd940"],["/blog/tags/在线文档/index.html","83e5c1a168e9759ec85855cd4657649b"],["/blog/tags/域名/index.html","c3defe3d2b381bc0a4e410d591b6bcc9"],["/blog/tags/声之形/index.html","a1eac0c6e4bd7f6c88a9e206bec35997"],["/blog/tags/女高中生的虚度日常/index.html","8cc42c4f6319898019602984537a5b3d"],["/blog/tags/姜世离/index.html","0a9f5e50567c814ed279bfea55949d7e"],["/blog/tags/姜云凡/index.html","30cc319eb6e021e0fea4579a59dea271"],["/blog/tags/姜承/index.html","f75610246f2624210fac62b473cf0dd6"],["/blog/tags/孙蝶/index.html","ce6ee148a62b40c6135c6ab1392f4f15"],["/blog/tags/孟星魂/index.html","124417ac123411703213a4fef12fc3e2"],["/blog/tags/封装/index.html","8bfcdbcdec10ed071e0fad46de6bb05d"],["/blog/tags/巽芳/index.html","063b2a1ccc15f46e903bd10973078c07"],["/blog/tags/帮助文档/index.html","82855bc26a51aff44539f2e79cf0646b"],["/blog/tags/年终总结/index.html","f074d7df6f567f80d5630d46426025cd"],["/blog/tags/广播剧/index.html","c98dc5a59c7695074324b91c5116e842"],["/blog/tags/开源导航/index.html","ddc83ad3db46791c9caec162b370d80c"],["/blog/tags/张睿/index.html","de3a41b7165a0fddf6c0feff17ad49e1"],["/blog/tags/当时明月/index.html","155a6e4cfe1a61776f9c55960232c598"],["/blog/tags/彭小苒/index.html","df51fa86c874d6ff98a076e8fa9458b6"],["/blog/tags/心が叫びたがってるんだ。/index.html","6d27ed56200235c42fe179ef84ba7a92"],["/blog/tags/心灵想要大声呼喊/index.html","984553df9c1da8bff4c6193374f93d97"],["/blog/tags/感想/index.html","fb0c4134378209da4a94083ec41c609d"],["/blog/tags/战斗吧！球球/index.html","54d4219a3df70284e285a4ef0e1551ce"],["/blog/tags/扣图素材/index.html","9c185ebdc8a896a1d0c861d73526b02e"],["/blog/tags/抠图素材/index.html","69cbe0bc1dc342f9b57b7c6c04c04fd3"],["/blog/tags/拉郎/index.html","b2e35f261d6aacd8fda6e9be2061f02d"],["/blog/tags/文本提取/index.html","3e262511b1fb810fe794c11558ed77cf"],["/blog/tags/新仙剑OL/index.html","dc93053d69e03d04f609df9a11182900"],["/blog/tags/新仙剑奇侠传online/index.html","b8417294e45ad21e8a6c1a44e5e31978"],["/blog/tags/新边城浪子/index.html","784566ebab553226d7931470c1e41bba"],["/blog/tags/星蝶/index.html","2cc35a9ba3875abc058459f35dd5e9fb"],["/blog/tags/最惨女配是衬托/index.html","d7c8ef84369437ab967a6c0866b30df7"],["/blog/tags/月无缺/index.html","92f8c0d1e7bd43781a06fa1ec66e75bb"],["/blog/tags/月梦/index.html","e8508bb558e8c3f02a6557174b367d70"],["/blog/tags/月玲珑/index.html","4ef8892576b20d0f274fdba461c6572c"],["/blog/tags/月玲珑十周年/index.html","53b93ca96ea0a0eb35fee53cf915a230"],["/blog/tags/月玲珑小剧场游戏/index.html","710ea0ab9695c60c448cfabb3bdb848c"],["/blog/tags/月玲珑配音社/index.html","f573095f7feee6baf6f20b83a333d5a3"],["/blog/tags/朱一龙/index.html","6e44cc3bfe80020045af1b5478f2958d"],["/blog/tags/林中小女巫/index.html","6d43fbc67d9362350bebb829969eefac"],["/blog/tags/样式/index.html","28f018ac5b7792d585128ccb87b925a5"],["/blog/tags/梦丹青/index.html","8eb02f5ab5a83ceb7c1c901235630009"],["/blog/tags/椒瓜椒/index.html","d56bb1e37ca8cb14f7df986a31c6cde1"],["/blog/tags/欧阳少恭/index.html","d751b577c7ee2a17f7f44902bdb92478"],["/blog/tags/沈晓海/index.html","3f1653c50c64e953c474bf95bee24581"],["/blog/tags/流星蝴蝶剑/index.html","3b8920c3382e5a47ffd1f4740a454e79"],["/blog/tags/浩气参天/index.html","402ba67df943fa8fb13c3fed807aafe8"],["/blog/tags/游戏对话/index.html","dc1e89e53a100455a77ad7057887665d"],["/blog/tags/游戏整理/index.html","5a6cc6007c1a1fd74317ff3a918be4bc"],["/blog/tags/游戏识别/index.html","d4aa90dae8e0b10f2622734b7f0a2ecd"],["/blog/tags/燎日/index.html","6d1fb01966f326de498e2e361188ae2e"],["/blog/tags/王楚然/index.html","883246c8764030f7be5b58ed72dab678"],["/blog/tags/甜蜜蜜/index.html","647cb7734512821037c3c9e633a7d40e"],["/blog/tags/真人/index.html","13c939c06151373c6a5c7038b3fa1aa0"],["/blog/tags/知识管理/index.html","b9304460ea93f36e2232af0e729f7565"],["/blog/tags/祝有涯/index.html","32057b5a749dc757ed914ca45fb584c1"],["/blog/tags/神舞幻想/index.html","3caff710a756b8f0485fc53c66626673"],["/blog/tags/穹之扉/index.html","6d81fb2292cb3d879d6ce6e056663f2a"],["/blog/tags/笔记/index.html","a7e7d0058062d1a6e1373562bf72ffe7"],["/blog/tags/素材整理/index.html","c7987848624de43741cd8bf956c40977"],["/blog/tags/网站/index.html","9a90a5fb617d27b3044f649aaee77264"],["/blog/tags/羽裳/index.html","1a9abf809f959c14d0f407725fa26ddc"],["/blog/tags/聲の形/index.html","be7a86370b61edf45dd53643b2d711e2"],["/blog/tags/蕙卿/index.html","c3b48ac421cb43689fdc98f9e51746b4"],["/blog/tags/虹七/index.html","6da6ec01be7f73a36eef4fb424f8cb07"],["/blog/tags/虹猫蓝兔七侠传/index.html","045c6430dca5aea241ef4e8d8a869b82"],["/blog/tags/视频/index.html","a1f1405209b6f5093ef9adf67435703a"],["/blog/tags/视频剪辑/index.html","ac3b9cfd7d65971460652484b31a20dc"],["/blog/tags/视频剪辑/page/2/index.html","bad9c314ec633a59690b5a9f588a085b"],["/blog/tags/视频剪辑/page/3/index.html","7c0fc4e800a23ec31407def9c0453dc3"],["/blog/tags/视频字幕提取/index.html","5a33896f3f9020409da45165dab1b200"],["/blog/tags/评论系统/index.html","4a3048d3ad78722ad23f402b077dece7"],["/blog/tags/语音整理/index.html","d93dcc769c5655a0e90c5e27ec7b30f0"],["/blog/tags/语音识别/index.html","0026f092f0c3379c16b3f56b9a949be7"],["/blog/tags/语音转文字/index.html","6c284b9ff76a927265272ee3e1620e01"],["/blog/tags/说说/index.html","7eca454ae3d54e6c1a5fbd565d93c2be"],["/blog/tags/资源提取/index.html","17247995bb4cfb7013c8c0c8e3354249"],["/blog/tags/赵灵儿/index.html","1deb8cb9c362bf1d7216428038ecffbc"],["/blog/tags/轩辕剑/index.html","2773518df2cd42a99390f6904e844718"],["/blog/tags/轩辕剑外传穹之扉/index.html","3d640052080f9916d1032d73bc21721a"],["/blog/tags/软件/index.html","02b7034e42f4c1cfb0b77d52faf1f031"],["/blog/tags/透明台标/index.html","1c322caa8806ba2d41aaa9cb3e4f6897"],["/blog/tags/邮件通知/index.html","bad8c1ec387cd1b83123d565ef756dd6"],["/blog/tags/郑业成/index.html","a825863e9882e648b10e635ac489ee02"],["/blog/tags/钟欣桐/index.html","dcefaf2efa5d4b66ce49d48e99a1d910"],["/blog/tags/陈意涵/index.html","42d450481e410a3c5c7094cb23e1c9a0"],["/blog/tags/陈楚河/index.html","68b812cee292f244138ee29e1f50b034"],["/blog/tags/霹雳布袋戏/index.html","b1320e4d31bc28fd0f3bb3b961f42a54"],["/blog/tags/青槐/index.html","71c764630a805e41443fbe68fb3fd181"],["/blog/tags/非常君/index.html","ff1e19abc9818b7dfe1762176b86b985"],["/blog/tags/音轨分离/index.html","9fab429a0a91461eb6bff3eaf92f382f"],["/blog/tags/音频/index.html","b51f39bbd0b7d0d320be8aa1461eb5bd"],["/blog/tags/飞蝶/index.html","69a7809488db0034f7d20a3c9fb3871b"],["/blog/tags/龙葵/index.html","027a696f27195b215e9f928660d3aba6"],["/blog/workbox-6da860f9.js","b6041e96e78b5058b66b6acfbaf3d2ea"],["/blog/works/index.html","6f356ccf7e01b5428d851bad14ed5ca1"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

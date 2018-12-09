/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/404/index.html","4abe706ae199820517518f8868989b1e"],["/blog/aboutme/index.html","c7e08907cb11b0aa363e952bfe6bc250"],["/blog/archives/2013/05/index.html","29d881c821fdbe39b4fce0b51c1096d7"],["/blog/archives/2013/index.html","990b9e84e6350aefc3a079f7c210e561"],["/blog/archives/2015/07/index.html","71a8f947d26b48e10666aaf147e0f3e2"],["/blog/archives/2015/index.html","4dedc5db02a5eb5b70d9286aec632824"],["/blog/archives/2016/05/index.html","27af5e487a84ab9ff20898c32584211d"],["/blog/archives/2016/10/index.html","face989ffc0e20b99b97ddc79116c4fa"],["/blog/archives/2016/11/index.html","c45d24594d253b7ef8653ae6ead8195b"],["/blog/archives/2016/12/index.html","81b6caac0ec4b9cb0cf788ecb78e272f"],["/blog/archives/2016/index.html","dd0dd64d3ebd761d16c7c54d431f218d"],["/blog/archives/2017/01/index.html","8e6267844b32304be8c53af5c02310b6"],["/blog/archives/2017/02/index.html","09d5ec94d40ecbc4075120682d457cb1"],["/blog/archives/2017/06/index.html","8bfe0ee71da06e1a32bd02c911caf4b7"],["/blog/archives/2017/07/index.html","ee5679578cf75cb5abebf6ab871a5d70"],["/blog/archives/2017/08/index.html","9de256822fec1bd02a181857750eb9b1"],["/blog/archives/2017/09/index.html","d5b982c5938b6187dad01d79aa8af4c4"],["/blog/archives/2017/11/index.html","db88e9f79edbaf6d3a713e5107ef19e8"],["/blog/archives/2017/index.html","50c0768f44fb4f6f8d986ed45b9e8f5f"],["/blog/archives/2017/page/2/index.html","fc755c54e075d0efae61ee42541ab864"],["/blog/archives/2018/01/index.html","2fce0575cfef85ab461193c5543e7a4e"],["/blog/archives/2018/02/index.html","40907402787d5e65cb8b5c6cf51feb54"],["/blog/archives/2018/04/index.html","cb344f7d3f923a16fed81ff3e9cec36f"],["/blog/archives/2018/06/index.html","81d85c6e653ab9c795c56233dc1e5077"],["/blog/archives/2018/07/index.html","df5a24b4750feefedd7bb634f71ef3c2"],["/blog/archives/2018/08/index.html","39f0207a3987921ee99f2f5104f8ecec"],["/blog/archives/2018/09/index.html","1989d5c47cb71d2b12bfda510dd4bbbf"],["/blog/archives/2018/10/index.html","f9386a359337ffaab4a52cf4e9ed7fad"],["/blog/archives/2018/11/index.html","400ce9b1d4c2b3b7386d2fdfe2b3ccbf"],["/blog/archives/2018/12/index.html","eaee8af960015d71b6314a225f37445b"],["/blog/archives/2018/index.html","74a3c610f5d8179bcb6bfd85ce4456f1"],["/blog/archives/2018/page/2/index.html","414bdabc8ea8faef6841af75c12e9574"],["/blog/archives/index.html","5634faea7cade5ac202b97d0abff5be8"],["/blog/archives/page/2/index.html","536ab442cfbbc6fe930d79b77aa7be61"],["/blog/archives/page/3/index.html","216701e2f3584f71da1949da94c9e3fb"],["/blog/archives/page/4/index.html","10a9c6ec20b79d97de8e1c458d0f7e62"],["/blog/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/blog/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/blog/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blog/categories/index.html","9a24d2efda3f36ec28d39c03cc383f3e"],["/blog/categories/个人作品/index.html","ba2e2eea3f133e3c1e80e3fc14a8d2b6"],["/blog/categories/仙剑资源整理/index.html","16e60369a56c1bb0a048146865f30fb0"],["/blog/categories/其他/index.html","1a5f3f14d5f40b87f66fefe3a1437f70"],["/blog/categories/工具资源/index.html","c77bf086989c09944d93a1939995f5d9"],["/blog/categories/感想与安利/index.html","df5a71c35a3221d36510e155fa9dd563"],["/blog/categories/感想与安利/page/2/index.html","c89c1ebc4f6fc1bf11066ffcdc16587f"],["/blog/categories/生活随记/index.html","13970ef409ceaee789c1c5c726aca7d4"],["/blog/css/blog-encrypt.css","cfbaed9c8529698d4e7287bdd2b822bb"],["/blog/css/main.css","150d103852dd8e17fe7612c6da1292ea"],["/blog/images/LOGO.png","946594dc37bb1f499ef7323837415331"],["/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/blog/images/android-chrome-144x144.png","99db915ab936f153333cb1a4f1f287e1"],["/blog/images/apple-touch-icon-next.png","f4cb11058236c159d3684262bcb4196b"],["/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/blog/images/favicon-16x16-next.png","7fbf7f313e4a376be8c387f8475d2a95"],["/blog/images/favicon-32x32-next.png","186e3a81f19e93b2d71031a2f337f4f2"],["/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/logo.svg","aca79d91e4301d4af6712f0edbc4d600"],["/blog/images/mstile-150x150.png","dc183de6dbbf51b68c426510fe5532c6"],["/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/blog/images/safari-pinned-tab.svg","5cc82c5d1b54e748dc10ce0f2793fa11"],["/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/index.html","fadd080e5984cfbc8d3b39efda698a8f"],["/blog/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/blog/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/blog/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/blog/js/src/custom.js","317cdf706c754f25c0c2611915bbdf09"],["/blog/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/blog/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/blog/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/blog/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/blog/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/blog/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/blog/lib/blog-encrypt.js","e2c1c183135d84c59f1872c81283d412"],["/blog/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/links/index.html","de22932349b2468c4f53ac8d66e46d38"],["/blog/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/blog/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/blog/message/index.html","fb71251524c677ae6a7b816120e5fd93"],["/blog/page/2/index.html","0bb651d8f98889bafa30dbd93313265c"],["/blog/page/3/index.html","760c5bb17b3eb6cf1d4dc3e89eeb45eb"],["/blog/page/4/index.html","f24e12d9b0e5c6761386afbe6e82bf33"],["/blog/posts/1270.html","ac2c5d2dbf6548de61b1ac3197090094"],["/blog/posts/12770.html","794a14ce4ba9e1adff4fb1283a8530a9"],["/blog/posts/14580416.html","e58d0e4ac33eb3b784c8b9ca42a2b48e"],["/blog/posts/15929.html","8d456ee7319c29fe434883400e79ab21"],["/blog/posts/15959.html","a76d782bf96717b1048a9614dc64d824"],["/blog/posts/173.html","3eced8b3ac47464d20e0863bb410e9a6"],["/blog/posts/18647.html","f10643f3bc281ae34283626abc68046d"],["/blog/posts/19368.html","50ac90ccf36d9e2f1f2920d8811752e4"],["/blog/posts/19549.html","09caa9820ff9ac979af5be34849e7371"],["/blog/posts/20133.html","279d6742f9afecbb84d83cf4fd2efec3"],["/blog/posts/20764.html","e628deec6ca07b78812e1f1352ae0fbf"],["/blog/posts/2137.html","75bc921d98271f84d2038af797ac5ec6"],["/blog/posts/27247.html","9e4ab6a8b99c421ad896bd49ff504fe2"],["/blog/posts/28180.html","b4150018fa8d0ce1f52789b1c1548c0b"],["/blog/posts/34771.html","5b28e0ca367a25dedbd8d5bb49770a0d"],["/blog/posts/35192.html","8c9ef88e97750c002295904dadccdc22"],["/blog/posts/35671.html","8c7eafe9ba5f967008716b9fbfa138e4"],["/blog/posts/364.html","1c01b1cb94e0ef1189c7a71253ebf9ec"],["/blog/posts/38726.html","5a7c4a6ac38d0b72d2600fc5204060bd"],["/blog/posts/44082.html","cdd393fc2a17b7693f46a0ae3a1dd7e7"],["/blog/posts/45026.html","1c272e3f5bc6f305f820af0397d8ba18"],["/blog/posts/50615.html","2cf040b08f79d6b379020d5778461629"],["/blog/posts/51793.html","a5658c0b282780c48eb744ed08cb80ac"],["/blog/posts/51888.html","50f86722055eb64a2232461f4724874d"],["/blog/posts/51993.html","04a70f88af745cd853469cffa2cb8dca"],["/blog/posts/535faed9.html","38ad7507c7a39efdd2133ffb5cf89e09"],["/blog/posts/55032.html","15c82cd1d72f39eceb19584cb4022199"],["/blog/posts/55741.html","5ab711a2f46ce149295b65f9656dcf27"],["/blog/posts/62550.html","fa727972c700d58aa3f635b035527bf9"],["/blog/posts/64777.html","cf128095c3b16f369d4b7c079c0aeceb"],["/blog/posts/64850.html","b946255e1370f759ffcc9192c2d98355"],["/blog/posts/7e3d2d4.html","15f97efef62b1847f4906fdf21ad19af"],["/blog/posts/afcf312e.html","b4b2d0e3d55774bb8778f7b9fd970028"],["/blog/posts/bc1c3bac.html","bfa6b69dbb5b27e79be3ca59b7d116d5"],["/blog/posts/dc17b247.html","ad3ed3d9890fecb1fefb4a4c7efbdc26"],["/blog/posts/eb9d5593.html","16f5f41e54489043d9a29cb10d4f084c"],["/blog/search/index.html","8b3141c1cc746c96d165178331e804c0"],["/blog/sw-register.js","b1208737db344503c155caf05c2e32f5"],["/blog/tags/2D表情/index.html","775d2518a8a878230bec0a2be6f6aaf4"],["/blog/tags/AI/index.html","c4fb12df69e40acf330bbc95f1039ffc"],["/blog/tags/AVS/index.html","e46420734bb40cf069f037842654761e"],["/blog/tags/Aviutl/index.html","3c2dca6c944166ab129a3bdf4b78e2d5"],["/blog/tags/CLANNAD/index.html","5fe982e71201bcf9be3f784de84f057f"],["/blog/tags/Key/index.html","e66c853ff75a0f9444adc44dd11d6b9f"],["/blog/tags/Let-s-encrypt/index.html","453df9ce096e97c7f923b3292d084e39"],["/blog/tags/MAD/index.html","d86650ba8b0966c9fa22e200062f4153"],["/blog/tags/MD/index.html","1de560822ffc7122294c17a6c85bcccc"],["/blog/tags/Markdown/index.html","0278cf255fb7dab0d2f61bcf4e2fedff"],["/blog/tags/RPG-maker-MV/index.html","93fa761875679ff0c7a706115a97423e"],["/blog/tags/SSL/index.html","be4e69ad6b977455d4225dc45eb54ae7"],["/blog/tags/Topaz-AI-Gigapixel/index.html","59de6fc246a4f52fc513457b9bf3da0d"],["/blog/tags/Waifu2x/index.html","287616f8f4d78d3d94970b1ec30d57ab"],["/blog/tags/index.html","b0f1845b221c7abf512f4619ebc19a9c"],["/blog/tags/steam/index.html","850e2687893b2b342a263aacb890b9d7"],["/blog/tags/个人作品/index.html","5424de17393d2c2af1b6ad38044018c6"],["/blog/tags/仙剑/index.html","c475d6376b147d82cabdda4999da8895"],["/blog/tags/仙剑七/index.html","72032f79c635c0a06018e115426d5d38"],["/blog/tags/仙剑五/index.html","e84bf39875fc0f900813ce915dfb7882"],["/blog/tags/仙剑六/index.html","dde19e53cfc18d6b6f5f9de41381751c"],["/blog/tags/仙剑剧情对话/index.html","2260d34f67d9cc5fe1c8ae2c246e3539"],["/blog/tags/仙剑奇侠传/index.html","e971c997b896b2597f6a044a099526dd"],["/blog/tags/仙剑奇侠传七/index.html","95d2afaca559e65b329246b4e53ef3d4"],["/blog/tags/仙剑奇侠传三/index.html","23d7bd9c9991757f4d355f42ac2be4c3"],["/blog/tags/仙剑奇侠传三外传/index.html","d2e641014caa4aaa8a4eab7671251677"],["/blog/tags/仙剑奇侠传二/index.html","87228d6d3a17bacba1486727d64826b7"],["/blog/tags/仙剑奇侠传五/index.html","f796883f8f583845733ebcf92e7fbde8"],["/blog/tags/仙剑奇侠传五前传/index.html","47fcbebef3a2c7748337fde2e5108179"],["/blog/tags/仙剑奇侠传六/index.html","3fa927694cdf1d2bd22d55e13a3e7a82"],["/blog/tags/仙剑奇侠传四/index.html","cafeb10f3619fd7e33985abafea969f9"],["/blog/tags/仙剑手游/index.html","22ea9f7c527c66ae8932a74287e06708"],["/blog/tags/仙剑春晚/index.html","ed50cb00916d712d9a17acde9c10242d"],["/blog/tags/仙梦长留/index.html","d16114de8c057442ca702fbbe1712db0"],["/blog/tags/单机/index.html","6d6f4e17e736059b4e2d0a1f93964547"],["/blog/tags/博客/index.html","9b0fc669fa0ae1f143c4b32a59a9e367"],["/blog/tags/卷积神经算法/index.html","6591f5ae6374a6cbd0f3aa919ffb185d"],["/blog/tags/去水印/index.html","e2cd032142986ca65a01086c5144fd48"],["/blog/tags/叶青/index.html","10e0d3dd591041896aef5fe50faa5c81"],["/blog/tags/声之形/index.html","9284e8f6f094a5b1efbda1b208e823d0"],["/blog/tags/帮助文档/index.html","70d1a791642441e3b6085acbd748bbba"],["/blog/tags/年终总结/index.html","9ee469b2754761ced1d521e37bce6e62"],["/blog/tags/广播剧/index.html","c3a76d046501d680838e4615ee727882"],["/blog/tags/张睿/index.html","670736b2528da1b81367218e49023af6"],["/blog/tags/当时明月/index.html","b83199b94def926de62504b4b8961625"],["/blog/tags/心が叫びたがってるんだ。/index.html","0cf1d859531b3727f349b7afed3cdf49"],["/blog/tags/心灵想要大声呼喊/index.html","3fb8aceca6296ecbf7cf727d441676ba"],["/blog/tags/感想/index.html","1975e23b8fa7f30045ace2429fbcde94"],["/blog/tags/战斗吧！球球/index.html","2af7ad4038b0c3f24ee445b1aee7c4b3"],["/blog/tags/扣图素材/index.html","3840e360b19a08f5eff3d675ec095587"],["/blog/tags/抠图素材/index.html","d013da6a3c8bbd31947cb250e41ebfc9"],["/blog/tags/新仙剑OL/index.html","b0c8e48b77e0f2b476c2d0be08680485"],["/blog/tags/新仙剑奇侠传online/index.html","0c5a039d6a6d8377608d180afd568bea"],["/blog/tags/月玲珑/index.html","0565ec8bb73a74ce8bae96deb9e03c9e"],["/blog/tags/月玲珑十周年/index.html","c6004b71ce5b855c1c9103b7953c459e"],["/blog/tags/月玲珑小剧场游戏/index.html","5dd68d44e78e7130a2848ad8a798a606"],["/blog/tags/月玲珑配音社/index.html","13042ac7abe51583176f8f7731a4a17b"],["/blog/tags/游戏整理/index.html","72d5dfc5d0feb5719af4fd32b70b5091"],["/blog/tags/祝有涯/index.html","608347f002043bc98fdf5bc04a995ac7"],["/blog/tags/神舞幻想/index.html","74f78f4fa90b18d1bb8d933251cb73c8"],["/blog/tags/素材整理/index.html","53c6e77e4f65c3d5139c61d40b97333b"],["/blog/tags/羽裳/index.html","d0ca4e5e4800205e9d46741d09ff1bdb"],["/blog/tags/聲の形/index.html","4c8496c5c15fa5e714c2aa2bb280ff14"],["/blog/tags/虹七/index.html","a8b3cb22bf321826e275290ca3ee7d12"],["/blog/tags/虹猫蓝兔七侠传/index.html","36e7bd70f31626a76c7038c1a582bc97"],["/blog/tags/视频剪辑/index.html","250abbd2c1d4cde30b01f0c4e52cc4a3"],["/blog/tags/语音整理/index.html","21601435e9ec77a389519064a171ccff"],["/blog/tags/资源提取/index.html","7a635c088f1a8f8dfc7da8c757e86367"],["/blog/tags/透明台标/index.html","c269c77c3fa0bd419edcfbfbe7145d6d"],["/blog/works/index.html","af0cb117578b06fcff6358da0a87f7db"]];
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

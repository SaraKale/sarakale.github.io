/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/index.html","bade9844a3e7fdfae55cf9a5a8330259"],["/aboutme/index.html","a068575068ce3004ac628daa5f450ef9"],["/archives/2013/05/index.html","d53a31b0e68a351044e96023a68ca20c"],["/archives/2013/index.html","4db0c61844a898060dee4a834184fa62"],["/archives/2015/07/index.html","6f6a34513ed711b2df7809897e7bff03"],["/archives/2015/index.html","b1d8edf906c12a4bc547f92ffc536b91"],["/archives/2016/05/index.html","564ba41194dc52afba2b89c01d86af7e"],["/archives/2016/10/index.html","ef99f6dcbcdf974272ba67efa3d0b311"],["/archives/2016/11/index.html","01aff8ddfb5687651f387d3364270bfe"],["/archives/2016/12/index.html","048d4db678eccbd4cb350a4812eba58d"],["/archives/2016/index.html","bb0e689659b74bf09fbbf617a10c9f96"],["/archives/2017/01/index.html","0cdaf3ab3b2bbbc045d0a2800abe1f9a"],["/archives/2017/02/index.html","7ecf508e3027331d00d8d965e4c9de51"],["/archives/2017/06/index.html","12ffc44bb011fe9b01cb9921c604713f"],["/archives/2017/07/index.html","ffcaf121721a13c015fee26543edab76"],["/archives/2017/08/index.html","114bd1f0b39f2db875b28ee6067ad297"],["/archives/2017/09/index.html","290654f78c3942dcf00c4428e31e5549"],["/archives/2017/11/index.html","1d1c0397d6bf2555ac8b38c420c4a1ad"],["/archives/2017/index.html","d5fdffc3fa5c827ccf15327276bba4b8"],["/archives/2017/page/2/index.html","d775f5de1a22aedc35e9ecb85d3ee40b"],["/archives/2018/01/index.html","d075f0832fa10f25077b7b20799d720a"],["/archives/2018/02/index.html","a375539fefd25f0ddb0277b0575bac37"],["/archives/2018/04/index.html","65102462df0f75549562e2649bb432b2"],["/archives/2018/06/index.html","8abe14c646a046cee85ca95f935172ff"],["/archives/2018/07/index.html","be94b81e88e79f26c859bcba86c35f91"],["/archives/2018/08/index.html","3a4d07b51b4dae44dc13a52aef4883d0"],["/archives/2018/09/index.html","c321545126eca44ccaad7edf260dcf1c"],["/archives/2018/10/index.html","8d3cb0d64cde4e6eee17cee31a14a133"],["/archives/2018/11/index.html","14a0ebfed5596ad72fac337133da1273"],["/archives/2018/12/index.html","b0fc9d946e5c6cb7ee6a19cf9a8351bc"],["/archives/2018/index.html","3359fc305f807033e46919d8a968fc06"],["/archives/2018/page/2/index.html","b4f0cf7b63adb26014c9699059852315"],["/archives/index.html","c3d7847861895c46c02b3e5f20f069db"],["/archives/page/2/index.html","b6bea47fe4bb6af9931b52c2ecb488db"],["/archives/page/3/index.html","126c240a519543daea6a96730e142fa4"],["/archives/page/4/index.html","b358756c4de7eb49f3cfeb9ff3c5a312"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","6be7229dc869ccf0c4a02daaf4af09ea"],["/categories/个人作品/index.html","c2d7dbd03f2e0117ab10a99c5ca75905"],["/categories/仙剑资源整理/index.html","69e63ae79db25e84a13eae2364beade5"],["/categories/其他/index.html","c4298fdf55ff69170b5fd530ceb4f2cd"],["/categories/工具资源/index.html","42a340c454c9808431b4de757e2f1962"],["/categories/感想与安利/index.html","668476a5576ae72f4ec0963edeacc7bb"],["/categories/感想与安利/page/2/index.html","11debee76581740da6935045c0be3705"],["/categories/生活随记/index.html","a25aa9689eedb0e8674efa116968a5ec"],["/css/blog-encrypt.css","cfbaed9c8529698d4e7287bdd2b822bb"],["/css/main.css","91215bb588fcd7626cef33751313aa49"],["/images/LOGO.png","946594dc37bb1f499ef7323837415331"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/android-chrome-144x144.png","99db915ab936f153333cb1a4f1f287e1"],["/images/apple-touch-icon-next.png","f4cb11058236c159d3684262bcb4196b"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","7fbf7f313e4a376be8c387f8475d2a95"],["/images/favicon-32x32-next.png","186e3a81f19e93b2d71031a2f337f4f2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","aca79d91e4301d4af6712f0edbc4d600"],["/images/mstile-150x150.png","dc183de6dbbf51b68c426510fe5532c6"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/safari-pinned-tab.svg","5cc82c5d1b54e748dc10ce0f2793fa11"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","04292063705035248824785adbd66fca"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/custom.js","317cdf706c754f25c0c2611915bbdf09"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/blog-encrypt.js","e2c1c183135d84c59f1872c81283d412"],["/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","361392625b54cebc192a91cd9fc054c8"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/message/index.html","240f8b4b105ed4552564763204291cfc"],["/page/2/index.html","bee5620f4575135a1dc0bdaa54ed6323"],["/page/3/index.html","622bfcd116ca37ba7d7e396f687ce991"],["/page/4/index.html","c8d9d580697d5940642c0423b78e5bb6"],["/posts/1270.html","df658f7ad84021c7088738b8380008b5"],["/posts/12770.html","d7fee80890c49400b72a6d82f303ea1e"],["/posts/14580416.html","f4aca5bbc0d8232ac4f74f8720567a90"],["/posts/15929.html","8613c31e9aaaab423e473e0f9bcd51cf"],["/posts/15959.html","e86a1a6f1c8a75ad4974c552c51cccc2"],["/posts/173.html","d01ce242393aa3bf2f492510a8b1984b"],["/posts/18647.html","f5750264c342373679747efd21492430"],["/posts/19368.html","3736dfb6ec587972208ccba363501399"],["/posts/19549.html","d77ee72b0b4897c665af40628648dc04"],["/posts/20133.html","b39dfa4d8347382a4f2fe9fd5ad65c60"],["/posts/20764.html","0192e90205da1549fbb3cd98942892da"],["/posts/2137.html","3b3ee3b2ccde02f381e1b42dbd957b60"],["/posts/27247.html","624b657231be1d9e5e197b265352433e"],["/posts/28180.html","d2772775d4de34ad824659a3e07391ce"],["/posts/34771.html","15a9cf99482df70c4bcdfeca5986fea3"],["/posts/35192.html","511fa3031aa0916df5982d3f597f2d9a"],["/posts/35671.html","c7924297c6fbda90e495d4cb100ed302"],["/posts/364.html","a23457b0ed5edbc8b36f891de6365d91"],["/posts/38726.html","b5d48b061097e8e5fed8ffaef1436155"],["/posts/44082.html","549dbd4e5f87c95e83472ee06c902d53"],["/posts/45026.html","1fd13d978ae57f9cad7e2e43a4844d44"],["/posts/50615.html","9e0c4d0d95bfe49282ec619e3ab2aa8a"],["/posts/51793.html","8b53c389c922ecfbad27f1b82ea719f7"],["/posts/51888.html","25eddcdcd6e8615e72ff88163aa090d1"],["/posts/51993.html","6d4d347dbcd747340a912449e0a0766d"],["/posts/535faed9.html","c5eb57173a2485d796e804cde8726756"],["/posts/55032.html","7b89fde8802423775780bd0dc7ee466a"],["/posts/55741.html","dff6566fc51402f5f19a3fcb1e46d2c4"],["/posts/62550.html","01c00e318a32c61fa18894ae83f2241e"],["/posts/64777.html","f4637730c251e952f26f0d822618b6fe"],["/posts/64850.html","3b460863b83cc160302e3a806626e8fb"],["/posts/7e3d2d4.html","d7d8f158298fae931656a148aec2f1d3"],["/posts/afcf312e.html","77b29a2f7890a5b9345610f8bd39f34f"],["/posts/bc1c3bac.html","8f5c3e1a05038c90dc205da69aa267b2"],["/posts/dc17b247.html","72b1bd76a7539155724538517fa2b473"],["/posts/eb9d5593.html","ab0cf6208f99889a90119a2eb3401444"],["/search/index.html","290b0ea351974eddf8272d7c55151abc"],["/sw-register.js","c7bff6c1eca083c879ea704d4634b7e5"],["/tags/2D表情/index.html","9cb7d70128f8d22e6aad451c09d62993"],["/tags/AI/index.html","a866157f933384b8bd13b599cab6ae38"],["/tags/AVS/index.html","ed5165899a14ef10be802f41c4700404"],["/tags/Aviutl/index.html","ebe2f3be1f563f90fd501dacd088e20a"],["/tags/CLANNAD/index.html","ae39b9c57fbc776795255993d8d2f8eb"],["/tags/Key/index.html","3888e29d5282325027cab6da2ac746c2"],["/tags/Let-s-encrypt/index.html","34c8edeb524145ac0ecd8a101189da63"],["/tags/MAD/index.html","2be42152b703f995dc162bba2468cfbf"],["/tags/MD/index.html","09fdd99f527e65e7addcf573cb50922d"],["/tags/Markdown/index.html","9fd93c029f29417e3117de51f52127a1"],["/tags/RPG-maker-MV/index.html","2c009954429a8d7fb6ccd43836a31a50"],["/tags/SSL/index.html","cb80726488dda6cf8b90e1020ecab184"],["/tags/Topaz-AI-Gigapixel/index.html","d7d3c649f6a519cc4eee6092a1bc37d1"],["/tags/Waifu2x/index.html","780638f5a33020344f5e98933e84a7b6"],["/tags/index.html","ce7738677073ee6705507cf1ea79c113"],["/tags/steam/index.html","f01fec41b20bd4c494028d7e5f5071d0"],["/tags/个人作品/index.html","e9c954a7e47f5dcb88211f5aa4fc56ac"],["/tags/仙剑/index.html","d11e01e0974f546b07bb4b609debbfbd"],["/tags/仙剑七/index.html","ad2a97c10b3cf45ac15691e5e78f0375"],["/tags/仙剑五/index.html","e461e1a172c7f0e31c3640a06867b177"],["/tags/仙剑六/index.html","857e873651119a134fcf73119e6038fe"],["/tags/仙剑剧情对话/index.html","051dc22ea9c7314b986f9acaebb5a118"],["/tags/仙剑奇侠传/index.html","5856ca6d4cce51f29e24dcf8b1663586"],["/tags/仙剑奇侠传七/index.html","b946f5fd22d738d344ddc5ef528adafa"],["/tags/仙剑奇侠传三/index.html","cd5d86bae6e7e25e5b5f6386899d9da7"],["/tags/仙剑奇侠传三外传/index.html","10933b5e6d7460a7e6a12c36c4512d9b"],["/tags/仙剑奇侠传二/index.html","1ac5595e8daccf8333cf5d5bae5c4788"],["/tags/仙剑奇侠传五/index.html","6b3ba6e715782ea0ab27614684611a72"],["/tags/仙剑奇侠传五前传/index.html","af65aab6b9ff73f6dce5f6047b79bda0"],["/tags/仙剑奇侠传六/index.html","e121cb2bc44bcbf71f470a0148fb76ab"],["/tags/仙剑奇侠传四/index.html","b4edc5c466f90501e571b8830f98bbb8"],["/tags/仙剑手游/index.html","9986427f2b0a6b33ab58b7fb6572d8a9"],["/tags/仙剑春晚/index.html","a368e6c733476d11dbbac61564dea05b"],["/tags/仙梦长留/index.html","7cedd2dfbce0795eb2d54d8fffe9760e"],["/tags/单机/index.html","600ab0a2abc08b892484be01139b2981"],["/tags/博客/index.html","ac35e0969fcd42d88bb413b41835ae2a"],["/tags/卷积神经算法/index.html","d75dbc0c37d4d805e5514c44218d8333"],["/tags/去水印/index.html","67d689340a1ccae98e989bb108f63544"],["/tags/叶青/index.html","36f89de0237d9c10c232b66f283be938"],["/tags/声之形/index.html","867fa4f4d066069571c59873317bdfa0"],["/tags/帮助文档/index.html","abcc8c9f66bd407246f144fc45574308"],["/tags/年终总结/index.html","424568b06177f03a963b84447fe944d1"],["/tags/广播剧/index.html","d151dd23182237e15b6ecca17b3cdca0"],["/tags/张睿/index.html","b2912fa1fab19fa61507271bd9925fed"],["/tags/当时明月/index.html","30e7452abe6da4089e0053b7aeedcd93"],["/tags/心が叫びたがってるんだ。/index.html","c654c4f734f7d95d5c0362e0037bfac2"],["/tags/心灵想要大声呼喊/index.html","953dbe3c97613b9b5285185fc7afe15d"],["/tags/感想/index.html","048d1cbc5f51f65fbf995a5068623d8a"],["/tags/战斗吧！球球/index.html","cc74a5dbab4ffc5fbdbfdbc5eec00a08"],["/tags/扣图素材/index.html","f4d1c6fef1bc3e4fc74c3d6578bf4581"],["/tags/抠图素材/index.html","0d74162585fd54d0aec63c3f044d7b2d"],["/tags/新仙剑OL/index.html","b764f25b2287b90675e956ff032a25c6"],["/tags/新仙剑奇侠传online/index.html","3272d28b7851b6ee786dded09bc04a6b"],["/tags/月玲珑/index.html","73796faa30bab63030018a148fb9fd0b"],["/tags/月玲珑十周年/index.html","fa77912cbd253a0d22a374cf13eb8386"],["/tags/月玲珑小剧场游戏/index.html","bfda7e9bc7dc55aad02892a936995136"],["/tags/月玲珑配音社/index.html","69589d0e7a32451a3d8af653d0b65c7c"],["/tags/游戏整理/index.html","6379c8d4b2450b8604d399758f568c27"],["/tags/祝有涯/index.html","c38c9db573db3528a6889aa9b79eb2a2"],["/tags/神舞幻想/index.html","3320664dfb25b9d12dfb1b0dbc352c59"],["/tags/素材整理/index.html","dc8c37ce669150a3708b83b690a52153"],["/tags/羽裳/index.html","54531f5645cfe0397b2b5241f2e7e524"],["/tags/聲の形/index.html","66755cf577a4125c943d029f3d39ce05"],["/tags/虹七/index.html","3bb71bafc9f8c500bc014adc5d41dfac"],["/tags/虹猫蓝兔七侠传/index.html","43fb09da822cee2d58ddaf27bc05dcd9"],["/tags/视频剪辑/index.html","28a04d18c8d809e3bdf7b9cd5f04ded5"],["/tags/语音整理/index.html","b75011760a1c2928065412fc8cdeb084"],["/tags/资源提取/index.html","47c3bca806b5bcad32dc01b59378b03b"],["/tags/透明台标/index.html","65bef960f8a079d763084716fa880bc2"],["/works/index.html","d1ffe143e57e496b21c73be51931e6b6"]];
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

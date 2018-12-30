/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/404/index.html","ad9cb7c533cfbbd8ae454885ed27cb20"],["/blog/aboutme/index.html","dd550c55f8db8cef6e7951262173b1f1"],["/blog/archives/2013/05/index.html","65507422f20d87b38a9f88f39543806e"],["/blog/archives/2013/index.html","28925ade449c7c177b3e37f7377d7d7d"],["/blog/archives/2015/07/index.html","3a0947fcbd4484cd61a66e10c1494d51"],["/blog/archives/2015/index.html","c698f645b8699c083505b7f1ca04f00c"],["/blog/archives/2016/05/index.html","8121669236e2721d5c7f61714c474b03"],["/blog/archives/2016/10/index.html","a8af7c886c8e0e37fa001c336a342f27"],["/blog/archives/2016/11/index.html","ec0973e100dd39847fb054d3e232efae"],["/blog/archives/2016/12/index.html","1314089b8308bb6f4d379a1d2ae6b6d2"],["/blog/archives/2016/index.html","ee5ff343e72c80a16399e901781a8b72"],["/blog/archives/2017/01/index.html","d2cf885de5e45d6f22c565274a8af0c3"],["/blog/archives/2017/02/index.html","ead7dc25f573829215aa0c64bf65ea3d"],["/blog/archives/2017/06/index.html","142ef4d91831192f2372cd0b4b6e7a34"],["/blog/archives/2017/07/index.html","3709227e78080607bb5595b144b903ab"],["/blog/archives/2017/08/index.html","edf32cf9a12eb38f081d5fc3eef9e208"],["/blog/archives/2017/09/index.html","8005dee4a080f3b33c319714bf3a5231"],["/blog/archives/2017/11/index.html","e0fb3e6e0fa2d6c0bf9119315a00278a"],["/blog/archives/2017/index.html","e57d857d5f18d40377ec5f000a579be2"],["/blog/archives/2017/page/2/index.html","a9f7e5fce17a602f1cb9593548ed54ca"],["/blog/archives/2018/01/index.html","e561c6733ae749035c0a1d4b0574ba1c"],["/blog/archives/2018/02/index.html","d8bf3390947caab5d348e0db82067c8e"],["/blog/archives/2018/04/index.html","bc2c08384439a67ccdc388589e6f9dda"],["/blog/archives/2018/06/index.html","5722c9b14c4b3cd2515817d6ebf38c9f"],["/blog/archives/2018/07/index.html","10d5af179154c02e330e074b98f1bc72"],["/blog/archives/2018/08/index.html","2d2dd1391bdba68d886c985f6e4d9291"],["/blog/archives/2018/09/index.html","4ef80acc7a37ccb0b05e8364b014c7e3"],["/blog/archives/2018/10/index.html","4a3a7ba1433fa5ff3bbdd40f13e2e261"],["/blog/archives/2018/11/index.html","ff9fcbfc5ad659ca735ea087419b8910"],["/blog/archives/2018/12/index.html","b9669a39b90f609454c3289d2c33bd65"],["/blog/archives/2018/index.html","0e2fdce9eae93f34332c54c89533c16b"],["/blog/archives/2018/page/2/index.html","3c1e64c6d03b0713a8da1678562d4ff5"],["/blog/archives/index.html","49c498978b537bff14827c8a0c82f168"],["/blog/archives/page/2/index.html","d0ed9c8d8d6e2dcf46d9becb2229d919"],["/blog/archives/page/3/index.html","1ce52f733bb40b422665dcca8c0217b8"],["/blog/archives/page/4/index.html","3177358c0b1b865ae358b4c639411c66"],["/blog/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/blog/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/blog/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blog/categories/index.html","3c68b532399ac8b1b8b98f8085e274d9"],["/blog/categories/个人作品/index.html","2e9a02f324c19174d886b97cb4cef531"],["/blog/categories/仙剑资源整理/index.html","7105010842eed548b425ec1b8d2c0ede"],["/blog/categories/其他/index.html","6d597da597932d3a681e9d343177c05e"],["/blog/categories/工具资源/index.html","7e4758293f5ba30def001bf4d15c8594"],["/blog/categories/感想与安利/index.html","a1b8efea65191da98c3b45a770032ce1"],["/blog/categories/感想与安利/page/2/index.html","8f07339f0f04340d76e3828c55b0f7fc"],["/blog/categories/生活随记/index.html","483b63a0c1c9e531733d24ccd747e2c4"],["/blog/css/blog-encrypt.css","cfbaed9c8529698d4e7287bdd2b822bb"],["/blog/css/main.css","da4ff3a1c7a78cf3444861e65b47c0b5"],["/blog/images/LOGO.png","946594dc37bb1f499ef7323837415331"],["/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/blog/images/android-chrome-144x144.png","99db915ab936f153333cb1a4f1f287e1"],["/blog/images/apple-touch-icon-next.png","f4cb11058236c159d3684262bcb4196b"],["/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/blog/images/favicon-16x16-next.png","7fbf7f313e4a376be8c387f8475d2a95"],["/blog/images/favicon-32x32-next.png","186e3a81f19e93b2d71031a2f337f4f2"],["/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/logo.svg","aca79d91e4301d4af6712f0edbc4d600"],["/blog/images/mstile-150x150.png","dc183de6dbbf51b68c426510fe5532c6"],["/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/blog/images/safari-pinned-tab.svg","5cc82c5d1b54e748dc10ce0f2793fa11"],["/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/index.html","a8a3e99e7de43a848bee91c24fed1bce"],["/blog/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/blog/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/blog/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/blog/js/src/custom.js","317cdf706c754f25c0c2611915bbdf09"],["/blog/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/blog/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/blog/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/blog/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/blog/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/blog/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/blog/lib/blog-encrypt.js","e2c1c183135d84c59f1872c81283d412"],["/blog/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/links/index.html","e9fcfeebefb83430ace9ded06573ed61"],["/blog/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/blog/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/blog/message/index.html","c38f44efbd836ffe22d413bef5074e01"],["/blog/page/2/index.html","9fc6d99c6ceee391b7db09ae53abf636"],["/blog/page/3/index.html","ae741cebe4f0d983dec4391fc6c7158f"],["/blog/page/4/index.html","587d697d0dd002e4f87fc07b987bb20a"],["/blog/posts/1270.html","73302932211f82c8be586794fed59858"],["/blog/posts/12770.html","1a026aa7759ee80cbd47e09e2b0f7903"],["/blog/posts/14580416.html","26b40dbac2ddc9e6fa9df4c9271b5aa2"],["/blog/posts/15929.html","d7e24a9144d997c02e9902f733ed6556"],["/blog/posts/15959.html","5c497ccc00d95b0bda1cb0c7d275e621"],["/blog/posts/173.html","625610130c38896048585b92b5c49f38"],["/blog/posts/18647.html","7a03d460dcee5b3c98e4736310286ded"],["/blog/posts/19368.html","32aeceb96cb27f6629052c574100f937"],["/blog/posts/19549.html","2c800ba92334b87864963600bd01d71b"],["/blog/posts/20133.html","146dca5b35ad94fc4d40d7027e8de93d"],["/blog/posts/20764.html","0ce4aca3cb605c468b2cae86aae6d1a0"],["/blog/posts/2137.html","54488490a08ce940921cb0fe870ffb5a"],["/blog/posts/27247.html","01ed60859e6cc6859cbf3baa5cf2cdc6"],["/blog/posts/28180.html","865b55bd40506306d706bf82155c5739"],["/blog/posts/34771.html","c2103d2698f0b1d1eadc3edb4117ed64"],["/blog/posts/35192.html","bc6cbc7beeb15750d18fb2ba118c70b2"],["/blog/posts/35671.html","2c9f56ff640ffde3d943eff60f6a9fae"],["/blog/posts/364.html","2a6ca0b531228ca6c1f64ce588342944"],["/blog/posts/38726.html","e60c865bc6ed2afd20e02aacd1ea819e"],["/blog/posts/44082.html","47617011021458db2b05b1ea4c43e274"],["/blog/posts/45026.html","277cb86c9a0604f307775ab27357a04d"],["/blog/posts/50615.html","1fe3abce9f7d950f925f7d3436205a2a"],["/blog/posts/51793.html","542a81dd3135978ced7df2a4c0bde83f"],["/blog/posts/51888.html","445e3c108ff12ff82ec752f823ea0943"],["/blog/posts/51993.html","e5eb39656ff118051af3e00c4631c1b7"],["/blog/posts/535faed9.html","51079956bc675aa403f36205e5efc296"],["/blog/posts/55032.html","a535c44d26561fc42a897545b9885842"],["/blog/posts/55741.html","1f73e47f11cfd78a775612e7bdf7fd7c"],["/blog/posts/59ca7e41.html","432a6bbf76d9853181d3fe4be1b28315"],["/blog/posts/62550.html","794d18d3a12571dc051ce2cb1f026fa4"],["/blog/posts/64777.html","a9f91fcedcfd91edf7bbde998c0cc47a"],["/blog/posts/64850.html","7c5804e938277f4fc98bb7c5c1be80bb"],["/blog/posts/7e3d2d4.html","a7b683e51ca9e80d232029c140be0b45"],["/blog/posts/afcf312e.html","f01404e62e2d7690b0ceec42b9dc12e7"],["/blog/posts/bc1c3bac.html","ac9646a525eac0938712f4246573cad3"],["/blog/posts/dc17b247.html","0cb387543e185bce68e6df8e7ee8cb73"],["/blog/posts/eb9d5593.html","6b390bb327e9e22f9a1035b5e4376503"],["/blog/search/index.html","83933f7e04e6ff0b839c34fed187f5b6"],["/blog/sw-register.js","2bfc56fd75963fb53c2f9b493174752a"],["/blog/tags/2D表情/index.html","2b2b19950d59180a5419134da89bb863"],["/blog/tags/AI/index.html","05f4ac4683ce5c0e5a6961d82f9b3496"],["/blog/tags/AVS/index.html","5638e4893caf10e4b167070c687d543c"],["/blog/tags/Aviutl/index.html","e7d5193ded67dc4515ca46a2c081e931"],["/blog/tags/CLANNAD/index.html","4348766ed4043caec7b9620530b3661f"],["/blog/tags/Key/index.html","1dfab8981c97afa1e02544d55d5d5a5e"],["/blog/tags/Let-s-encrypt/index.html","3553791fdaab2e88659344e2e68fac03"],["/blog/tags/MAD/index.html","37481c0e9557ca736fc714ab198e568e"],["/blog/tags/MD/index.html","2127bf52e5b5a9b2b687a2316fc1d2d5"],["/blog/tags/Markdown/index.html","b2aa909e5e28c648cf6bb635f85d3d33"],["/blog/tags/RPG-maker-MV/index.html","dc9f35837e1ca6afd4dc97e84962c83e"],["/blog/tags/SSL/index.html","af1ad6cc6f93747cceb3e56f2a3759b9"],["/blog/tags/Topaz-AI-Gigapixel/index.html","4cc4c0deabb6fa9dcb2e07540c70290b"],["/blog/tags/Waifu2x/index.html","269539bf713c6c1fed9c8b42a7e2f438"],["/blog/tags/index.html","890b015ad6eceba65c430c365f6db9e8"],["/blog/tags/steam/index.html","f405f73dd569f66532146d9916f415d4"],["/blog/tags/个人作品/index.html","b40d429b2d85fb28851e937e56da1344"],["/blog/tags/仙剑/index.html","e8de9f2d3556d2390280b596d762e56e"],["/blog/tags/仙剑七/index.html","9f4aa72120d8d16bb12148644850cc62"],["/blog/tags/仙剑五/index.html","79b155786d37c5dc68186580e323a811"],["/blog/tags/仙剑六/index.html","6f16248e6f511873686fa11fea4160b6"],["/blog/tags/仙剑剧情对话/index.html","e7beecf437ef72d5fbb56a8e1f552345"],["/blog/tags/仙剑奇侠传/index.html","fe5636610035503ff24022a40fe8ee9a"],["/blog/tags/仙剑奇侠传七/index.html","7696be6facd37977a65126d71e457a59"],["/blog/tags/仙剑奇侠传三/index.html","affe7f6c0af828b1204389ebc021ca93"],["/blog/tags/仙剑奇侠传三外传/index.html","901390801d296af062307c84a498e9c5"],["/blog/tags/仙剑奇侠传二/index.html","160d801e16552a8708b9d4124b497594"],["/blog/tags/仙剑奇侠传五/index.html","ff5467b8b774461c33d50252969ef9a2"],["/blog/tags/仙剑奇侠传五前传/index.html","9a371284980c8a939de63cf38c317da9"],["/blog/tags/仙剑奇侠传六/index.html","88fb55eda6850bfe7c61db41c5ed89e8"],["/blog/tags/仙剑奇侠传四/index.html","d7dfa631bf7b4b73037dd248d3bb1709"],["/blog/tags/仙剑手游/index.html","57963957ad05b80be1b2c12430c67ea3"],["/blog/tags/仙剑春晚/index.html","05ac17b586170f995a14829e0c72861b"],["/blog/tags/仙梦长留/index.html","a1297339ff9af958566ffe66c38ed02d"],["/blog/tags/单机/index.html","733cf7be3bae41d785a2be7c2beed77a"],["/blog/tags/博客/index.html","a6827baf86ffaa82f01f3bb3d14fa42a"],["/blog/tags/卷积神经算法/index.html","5e5646b38412b7350a660ac75b44df98"],["/blog/tags/去水印/index.html","8e63d5d17e84212e3574d87275f373c7"],["/blog/tags/叶青/index.html","e5fe8b56fe8baf5fc0a457298656ad20"],["/blog/tags/声之形/index.html","55e034cb3760e8c48bb970f83bbc6648"],["/blog/tags/帮助文档/index.html","927bb1128e94544fecd3a0fe3ff4ae6e"],["/blog/tags/年终总结/index.html","3a59ae746a23275ce225f60014c33658"],["/blog/tags/广播剧/index.html","6d2b4fe703bc7f4103c33f6e3e4f6788"],["/blog/tags/张睿/index.html","f74cf87e8186bb6f3942fe491f47e094"],["/blog/tags/当时明月/index.html","fcb3a7cbce074791c1d91f55e70a9a95"],["/blog/tags/心が叫びたがってるんだ。/index.html","13b0a76660a6e04875fcdb0b143f3c3d"],["/blog/tags/心灵想要大声呼喊/index.html","4d2e4d69179ba45212d66466498a9555"],["/blog/tags/感想/index.html","42c7557432da7c6faff8bde7f39073ca"],["/blog/tags/战斗吧！球球/index.html","0aec49bd0d5a3ac7342849397aa03679"],["/blog/tags/扣图素材/index.html","874ea025b1d2250a9871b0e473a901fc"],["/blog/tags/抠图素材/index.html","ee72d1482208541ad00a020b86cc4b1a"],["/blog/tags/新仙剑OL/index.html","d003ebf1bc67019a2174837b25760906"],["/blog/tags/新仙剑奇侠传online/index.html","c2a827404a014cd4f0aeacb9a672dca3"],["/blog/tags/月玲珑/index.html","f3248204f3ae78c09d240fb77e7fb0a0"],["/blog/tags/月玲珑十周年/index.html","3a2b5708a4229575ef9d7dd82787374b"],["/blog/tags/月玲珑小剧场游戏/index.html","eccb1a47c66c79b415af4aab9f208776"],["/blog/tags/月玲珑配音社/index.html","8a40e44c515a347e95adfee51c126e79"],["/blog/tags/游戏整理/index.html","825350d1fd214f4409d7004c7406d4c2"],["/blog/tags/祝有涯/index.html","b75e421a73ea68c6ef7193f1d87f1fe6"],["/blog/tags/神舞幻想/index.html","ea0cbba05a14b1d7ac99aacb318ab30e"],["/blog/tags/素材整理/index.html","f4c84868adf7028c99b3d853418e0496"],["/blog/tags/羽裳/index.html","86ff3c7715b46f1355f8b244adc49324"],["/blog/tags/聲の形/index.html","1491d7056ba5424246c1784f5b9c4894"],["/blog/tags/虹七/index.html","0036b406dda74fa30a8932de7472cb90"],["/blog/tags/虹猫蓝兔七侠传/index.html","2482612076c3bbb3cf14ca88b162ddb2"],["/blog/tags/视频剪辑/index.html","23f3815201f3b7d0d431782eab60ee56"],["/blog/tags/语音整理/index.html","b6ad6ad1af1be431fb155d5db5452535"],["/blog/tags/资源提取/index.html","a4eba0fa60e74f8419dab84343cd1cc6"],["/blog/tags/透明台标/index.html","d58f519cf4d542b5b31d17b0e6eba24f"],["/blog/works/index.html","8479346100bf2781ff96b73ddd4ee539"]];
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

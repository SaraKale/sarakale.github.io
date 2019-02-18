/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/404/index.html","ad9cb7c533cfbbd8ae454885ed27cb20"],["/blog/aboutme/index.html","e053cb54990dfda36889b4bd4ce70afb"],["/blog/archives/2013/05/index.html","e73fa1c8450a3d267945465ed3d5ab27"],["/blog/archives/2013/index.html","626a36781bf1c98834c99ae04654995d"],["/blog/archives/2015/07/index.html","1edf78f54fcddca85f053d8bfc1522a9"],["/blog/archives/2015/index.html","1051f4e095a9f40a580cc000a2049aff"],["/blog/archives/2016/05/index.html","3f5f72481a426f3ec2186c52e1c95a49"],["/blog/archives/2016/10/index.html","e9f243d34325f3512af68c2733d5416e"],["/blog/archives/2016/11/index.html","9e9f4c68f07583fb701b99e57d7fc0b5"],["/blog/archives/2016/12/index.html","a979325c47ca4d802fa5f10e8e94bd4e"],["/blog/archives/2016/index.html","a6456c3d86347a21273ed5f064d2f9b0"],["/blog/archives/2017/01/index.html","4b2593d54518850b934362b4f7b31f8e"],["/blog/archives/2017/02/index.html","47b1fa7cab086f6f9b70826a452302ef"],["/blog/archives/2017/06/index.html","646770c4ed55eef6542b1a5c82530254"],["/blog/archives/2017/07/index.html","5518ebd5521aa88b228f853b1e85c013"],["/blog/archives/2017/08/index.html","13aca52b958a84eeaaf1d3ec719f640d"],["/blog/archives/2017/09/index.html","f6b629b9530362d4a63bed5d6943da26"],["/blog/archives/2017/11/index.html","b60c8866e677d8c3b72b9fe8798cf3c3"],["/blog/archives/2017/index.html","fd79057b47f0e2a134f7c293448546ae"],["/blog/archives/2017/page/2/index.html","0ec7cb985b32cf8ba71de3f03bd5f1be"],["/blog/archives/2018/01/index.html","3800146f24b3438705916f828254793d"],["/blog/archives/2018/02/index.html","5aef9fd780aa02c798454fcc70dd2252"],["/blog/archives/2018/04/index.html","9407dce7062e85f17bfdeba142f7f304"],["/blog/archives/2018/06/index.html","c08c163555a1db6e738d1a20acc72b1a"],["/blog/archives/2018/07/index.html","cb65ec83c4cdc37906228e89fda3ab74"],["/blog/archives/2018/08/index.html","3f3dcb59804dd31fe2e45bba4f93db98"],["/blog/archives/2018/09/index.html","27425b7881a2316697ec80b215be3ed1"],["/blog/archives/2018/10/index.html","6a078838e939f3f5dfcb64f5e5acedbe"],["/blog/archives/2018/11/index.html","bcc1083e18f8840e7cb18cd7909081a0"],["/blog/archives/2018/12/index.html","c45bccb86c82fd7214d326cd37bef443"],["/blog/archives/2018/index.html","3d3c52076c897ee1e9c9dfe57ae57b6d"],["/blog/archives/2018/page/2/index.html","3d877fa37b3291ab171016ac0eca5775"],["/blog/archives/2019/01/index.html","956fc82029c373ff2e9f9c3820423f1c"],["/blog/archives/2019/02/index.html","750cb550f3d0bed528770e89c38a2018"],["/blog/archives/2019/index.html","c690d71e76571a91532331c5805fba21"],["/blog/archives/index.html","25b79c6971beb81b394bd8820ebbc49a"],["/blog/archives/page/2/index.html","e251e81d072a328aee413d20c546664e"],["/blog/archives/page/3/index.html","5af1017f6cd903cd132daa9d35fffd60"],["/blog/archives/page/4/index.html","abf0519e32ea33708ff756dc8a92b4e5"],["/blog/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/blog/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/blog/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blog/categories/index.html","afcb42f0099ce38f435b015356881848"],["/blog/categories/个人作品/index.html","3c342d0591a998963cdb772e0f86dd6d"],["/blog/categories/个人作品/page/2/index.html","d207b7fae2ea4b41736c211e09c4344e"],["/blog/categories/仙剑资源整理/index.html","42d7d6cf0aff7721030fcc9fca6e379e"],["/blog/categories/其他/index.html","fc6fe53ebb2ce47bd5aaf99628183a9f"],["/blog/categories/工具资源/index.html","f6db3a2985052d32eb5e4f5bc65de86f"],["/blog/categories/感想与安利/index.html","41595f9f35ba1ab84cf7ae87066efd2f"],["/blog/categories/感想与安利/page/2/index.html","199d6066844740bda09d8a5f6c140b39"],["/blog/categories/生活随记/index.html","e3767eeb4b3d57923c4e5ee87206a11f"],["/blog/css/blog-encrypt.css","cfbaed9c8529698d4e7287bdd2b822bb"],["/blog/css/main.css","8838e36d0fd00e619b5e9ce7507919a1"],["/blog/images/LOGO.png","946594dc37bb1f499ef7323837415331"],["/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/blog/images/android-chrome-144x144.png","99db915ab936f153333cb1a4f1f287e1"],["/blog/images/apple-touch-icon-next.png","f4cb11058236c159d3684262bcb4196b"],["/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/blog/images/favicon-16x16-next.png","7fbf7f313e4a376be8c387f8475d2a95"],["/blog/images/favicon-32x32-next.png","186e3a81f19e93b2d71031a2f337f4f2"],["/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/logo.svg","aca79d91e4301d4af6712f0edbc4d600"],["/blog/images/mstile-150x150.png","dc183de6dbbf51b68c426510fe5532c6"],["/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/blog/images/safari-pinned-tab.svg","5cc82c5d1b54e748dc10ce0f2793fa11"],["/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/index.html","206c8f32941a7a4f94b2d13686c69e93"],["/blog/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/blog/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/blog/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/blog/js/src/custom.js","317cdf706c754f25c0c2611915bbdf09"],["/blog/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/blog/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/blog/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/blog/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/blog/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/blog/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/blog/lib/blog-encrypt.js","e2c1c183135d84c59f1872c81283d412"],["/blog/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/links/index.html","31bf6f5153981ca9f326a581f30537a3"],["/blog/message/index.html","b688db99783767411810ab07ab3522fc"],["/blog/page/2/index.html","85ab7868d8bb100f59a9db3b7fd7e046"],["/blog/page/3/index.html","7fbc4eb0fc6a7c57176ce707c49a7a92"],["/blog/page/4/index.html","a96913915341b30708cedbc3b1c03255"],["/blog/posts/1270.html","3bb5d7cfe0ec7a400d0dffcb694268a1"],["/blog/posts/12770.html","aa0f8efc7fe141d9273a7fb675f9ca58"],["/blog/posts/14580416.html","6eb3ce74881b9949b670a79630cb413b"],["/blog/posts/15929.html","d4373402f1d2d1d997b08cf0706a176d"],["/blog/posts/15959.html","274cdceef7aef886cf1cec918dac91a1"],["/blog/posts/173.html","043e89792cd08c1379796df812636e56"],["/blog/posts/18647.html","1145fd175b26c16298fb88d668021ca5"],["/blog/posts/19368.html","2ae0642ef918fe974f16a4a3c690d69f"],["/blog/posts/19549.html","56a97be3db21764b07931a585a919873"],["/blog/posts/20133.html","2c92aa48313c5d59922858f28a1105c9"],["/blog/posts/20764.html","68fb9265a792ee8924584ed2de429f40"],["/blog/posts/2137.html","8d83907b220017880e38ac00de10ad95"],["/blog/posts/27247.html","19f25c8f38e186ccc40cb6005cd4547b"],["/blog/posts/28180.html","76209da960ac5eb8851bcdeb919a4b08"],["/blog/posts/34771.html","90d9da445ef32d6ba253b4f6f2d3e427"],["/blog/posts/35192.html","3a883ef91a0142966014228d8f5a90dd"],["/blog/posts/35671.html","fc06be65c3cea162272dfb5c6d36a23a"],["/blog/posts/364.html","8c391f2a9c9d72b07a5b1bfca9680828"],["/blog/posts/38726.html","d952b8ff0865b87e81f3483ca223f879"],["/blog/posts/44082.html","15f0b00536417555c2108591e410288c"],["/blog/posts/45026.html","9a8f21108085cbb95af9cf06db810a69"],["/blog/posts/50615.html","e279f020945749a536aaaf9900bcdf2a"],["/blog/posts/51793.html","c9b8174769d319aa635fcdb4a0433122"],["/blog/posts/51888.html","283be5429af5e26c70ef172e0d612b54"],["/blog/posts/51993.html","dd90763ffc0cde52f05718feefd08dd4"],["/blog/posts/535faed9.html","2b0894803226f7f850c92f68e154dbaa"],["/blog/posts/55032.html","388522d46c1e0960bb8feac819d50d7b"],["/blog/posts/55741.html","0c05dc15f37772bb76e862d2ed83db37"],["/blog/posts/59ca7e41.html","1e62ace04a518eb9b04ce5b3dfeb2822"],["/blog/posts/62550.html","950dad3ba742c45f463abfae33759d5b"],["/blog/posts/64777.html","5876f7ef1bca8b88f37291891373abe3"],["/blog/posts/64850.html","95eb52374fea15d988e20706a2e05b78"],["/blog/posts/65e843f4.html","eb1f89438e946d6858ec1c439e3990a5"],["/blog/posts/7e3d2d4.html","0f5eebd27797a647f34405d3f86b9e3f"],["/blog/posts/afcf312e.html","09dad654e512c4790a1716d641f06fa0"],["/blog/posts/bc1c3bac.html","758d9220b4ae57d533750a77b583738f"],["/blog/posts/be1f2db7.html","0bbacc2ab071d93d45344f57363dc198"],["/blog/posts/dc17b247.html","72a5f81338c91b4aec82b94eac34c58b"],["/blog/posts/eb9d5593.html","d3b14fdfe19f94a769cded22f020fc85"],["/blog/posts/edbff87d.html","c96900f3c897b67e19c5a87fd3e87369"],["/blog/search/index.html","79e0bb3d4fd6c885cddec1a599e281b0"],["/blog/sw-register.js","a752a3a9554e6c69429f3809c28986ff"],["/blog/tags/2D表情/index.html","be9be3c9a10ef6b4fac8c5c48dc299b5"],["/blog/tags/AI/index.html","d98e36315d1b82863d0119f1365c64c0"],["/blog/tags/AVS/index.html","e1a91150a83ba2961a6ee4871d79273b"],["/blog/tags/Aviutl/index.html","38a33a9afa9c3a98f042f0309680dcbd"],["/blog/tags/CLANNAD/index.html","e47cb9b661bd8d532b66dd9052ccbc39"],["/blog/tags/Key/index.html","2f522f7b6bddf5615d624baa8c6656e0"],["/blog/tags/Let-s-encrypt/index.html","b0e6101b849cdc99ae96ae7b0ad9575d"],["/blog/tags/MAD/index.html","9778796520e1f88fbbfc43d64d1ce32b"],["/blog/tags/MD/index.html","5c56fa2a1888447129e82acfb39bfcd3"],["/blog/tags/Markdown/index.html","aeeb4c64e0c2510e3fa66badb3082793"],["/blog/tags/RPG-maker-MV/index.html","16e347e3b19be6aee29e1e88bd3a9260"],["/blog/tags/SSL/index.html","b3598a075314f9fafc0d6c74f88bc565"],["/blog/tags/Topaz-AI-Gigapixel/index.html","185f6be80c635215e9b007cc6c990c23"],["/blog/tags/Waifu2x/index.html","4de61ac04a6e6c18145aaf91c5a34827"],["/blog/tags/index.html","3236e174ea5913fce15f43ec88f33c17"],["/blog/tags/steam/index.html","e932ebd852fed4b2dbd9ad395bf05616"],["/blog/tags/个人作品/index.html","a184892e3e755e17f0f500023de51c91"],["/blog/tags/仙剑/index.html","a6e757f179f23b5155505a6e47df96a1"],["/blog/tags/仙剑七/index.html","08665c56d0d873723a1e73e32a50757e"],["/blog/tags/仙剑五/index.html","3b787f9875c15eca47392e8613bbbef6"],["/blog/tags/仙剑六/index.html","a69adeeaa4be343463b8a17cba4aeceb"],["/blog/tags/仙剑剧情对话/index.html","c7faff5495b2eaf1a8fcb20c4312987e"],["/blog/tags/仙剑奇侠传/index.html","535b5b474ce6201416a1da230640c110"],["/blog/tags/仙剑奇侠传七/index.html","87d28e2ec2728349ff11a36a75a4fee7"],["/blog/tags/仙剑奇侠传三/index.html","2c98cc5f77ae156c950d8fdec8e1dce1"],["/blog/tags/仙剑奇侠传三外传/index.html","5007e7597f2d7cb49865620ef9af88b3"],["/blog/tags/仙剑奇侠传二/index.html","d1814940d017ca21df15719c7ce59e54"],["/blog/tags/仙剑奇侠传五/index.html","4cd123d8de0a0aedf0344fe256830c2b"],["/blog/tags/仙剑奇侠传五前传/index.html","9247ddd366f3821cce984bc8da692135"],["/blog/tags/仙剑奇侠传六/index.html","02a5b7e4f5ee7c5759357a6975b34735"],["/blog/tags/仙剑奇侠传四/index.html","689b38d50d0ef09d3d299fcd5b4886cb"],["/blog/tags/仙剑手游/index.html","4245e7655dde5d41a48e52e48ecd332d"],["/blog/tags/仙剑春晚/index.html","98ffade65c4b3ffee34d02e9d9150e34"],["/blog/tags/仙剑最惨女配剧场/index.html","dba286ebc2f80e9d780affca97c4d0c6"],["/blog/tags/仙梦长留/index.html","812438a48033e2e5044ff18c87c98132"],["/blog/tags/动态壁纸/index.html","350d7b77aaa6900e26e986d45d7f8378"],["/blog/tags/单机/index.html","90408e92c5d59482b8d240744044b969"],["/blog/tags/博客/index.html","3d1c5a5f8e5ea0177fb209693c7579dc"],["/blog/tags/卷积神经算法/index.html","477d1149bfedd254b30934265b27b618"],["/blog/tags/去水印/index.html","083484e72e4b7e36b0ea083caa70dc43"],["/blog/tags/叶青/index.html","8b194a550cb967e3e50eabdfb34a987f"],["/blog/tags/声之形/index.html","0b2eb1958c4118881f20cbbc2d26ca24"],["/blog/tags/帮助文档/index.html","f86b889b9aab54f971a1f3c1c9984e65"],["/blog/tags/年终总结/index.html","756e067334e4964104299728b2f5e564"],["/blog/tags/广播剧/index.html","f1426049e8e6d6fe4b02846452625252"],["/blog/tags/张睿/index.html","24aaee792a85e7908c3975f7c641e910"],["/blog/tags/当时明月/index.html","5562deafc0be8002e8799b0b1a00dc64"],["/blog/tags/心が叫びたがってるんだ。/index.html","c10a5f2cc8130f546287f7a46c05b38e"],["/blog/tags/心灵想要大声呼喊/index.html","93d606e94a583c6a34b7dbf0e7caa640"],["/blog/tags/感想/index.html","8e3cf5105212596d689c184ced5a98aa"],["/blog/tags/战斗吧！球球/index.html","e315f74989fd9b6bc89d4957a176a1e5"],["/blog/tags/扣图素材/index.html","004dbdf71565a3d90532c2edb966ac34"],["/blog/tags/抠图素材/index.html","1af6ff031cb69ec9f422ebae9f2567ac"],["/blog/tags/新仙剑OL/index.html","7f68ccf898a8873551ade42ec64fce14"],["/blog/tags/新仙剑奇侠传online/index.html","b6821e352781f769a9db0b2c1df1386f"],["/blog/tags/最惨女配是衬托/index.html","f20f8a62e4cb7e1a86ded263231d19f6"],["/blog/tags/月玲珑/index.html","01ca1624102a38157329964ebf7280b5"],["/blog/tags/月玲珑十周年/index.html","36e89d3e0100c00776055e0e1e73e84d"],["/blog/tags/月玲珑小剧场游戏/index.html","1a53f00649002fc253d28c22a2c85970"],["/blog/tags/月玲珑配音社/index.html","867851babf68cbe2feee9b5e99aceef3"],["/blog/tags/游戏整理/index.html","65a08f719ceefb6e519998d1b66a279b"],["/blog/tags/祝有涯/index.html","9a94c8ae09667dc67d9dc243810f8b78"],["/blog/tags/神舞幻想/index.html","4c0cf2939c0124a57341404b4ad51082"],["/blog/tags/穹之扉/index.html","f7c4150f24dc087ce44959c9118675a7"],["/blog/tags/素材整理/index.html","2b976a4269d991b5e88f6be1a98f7d27"],["/blog/tags/羽裳/index.html","a14486581f6f0a058718307c6fb0ae15"],["/blog/tags/聲の形/index.html","48757058f800743be69dc9e54d6705ce"],["/blog/tags/虹七/index.html","db511e084cb4ec2a925579606b8677b5"],["/blog/tags/虹猫蓝兔七侠传/index.html","7d5e6c0f19d25f0144a13a25f8c89f85"],["/blog/tags/视频剪辑/index.html","40ab3134a3c5379f1c465b5cb0be98f2"],["/blog/tags/语音整理/index.html","9d0b9e9219d38dfbf761ae9bb4ecb861"],["/blog/tags/资源提取/index.html","e2e1f1d5bab8e69cf8c5a145837de8de"],["/blog/tags/轩辕剑/index.html","a03a3604f2c8e6f834440334a24874fa"],["/blog/tags/轩辕剑外传穹之扉/index.html","7ae400ac6c4cd95cb755f03f85cd82d4"],["/blog/tags/透明台标/index.html","8ad7ae131613055a26e0116b1f51b52f"],["/blog/works/index.html","e6fdee549260eceb4de4343d831894ae"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/404/index.html","ad9cb7c533cfbbd8ae454885ed27cb20"],["/blog/aboutme/index.html","3e4fb4ebf504178ebdb4db045f62a256"],["/blog/archives/2013/05/index.html","f601733e45e0646d6fcab6391a98b756"],["/blog/archives/2013/index.html","5f6984f62a8ddf5a212497ce195c40b4"],["/blog/archives/2015/07/index.html","1091f08a5fda4f4dc69a56423f0a02ef"],["/blog/archives/2015/index.html","17058390b0187f4a29809345c74451ba"],["/blog/archives/2016/05/index.html","9f550163edd5ab5967ee7d3f95780197"],["/blog/archives/2016/10/index.html","d100e74e974758897aaf4d5a46e2c58e"],["/blog/archives/2016/11/index.html","c6611823785dcbd3b19bd95a8e01d14a"],["/blog/archives/2016/12/index.html","d5148c81b8a81e5559c49e92789320ee"],["/blog/archives/2016/index.html","2e603db7726d93d0b782aabaf9bb43f1"],["/blog/archives/2017/01/index.html","336c8531208ac5f9779a1a8cb593f637"],["/blog/archives/2017/02/index.html","bc22a4a8f06f7c704ce13dce90844ccc"],["/blog/archives/2017/06/index.html","ca5d9e6aa6a8a76dfc1711a025775987"],["/blog/archives/2017/07/index.html","2411f017a95a77cf3f77fc3b90712614"],["/blog/archives/2017/08/index.html","302ce4d5d6491402a7b5a1d719808f01"],["/blog/archives/2017/09/index.html","75da2317f03e3c7239b901b03cd9bfc2"],["/blog/archives/2017/11/index.html","07f9d35cff21d746e5c41a06aab2beab"],["/blog/archives/2017/index.html","b1274ba09e56156a61b5dea23cfdc5dd"],["/blog/archives/2017/page/2/index.html","7721f4d3ac9f7d909bda417f3bbf0a9a"],["/blog/archives/2018/01/index.html","55a7efab7efb2926d9b5d59ac1561ad4"],["/blog/archives/2018/02/index.html","b8cdd07675116bc6f2e695383773d152"],["/blog/archives/2018/04/index.html","a8e0f97006f00f83919aac72b9991fd4"],["/blog/archives/2018/06/index.html","5089466d513ddafd129b4346343cf2f0"],["/blog/archives/2018/07/index.html","8c1bc6e7b9e4994de50c2f331e262f2a"],["/blog/archives/2018/08/index.html","ff8d0642c5c901abb8bf92b0835ed169"],["/blog/archives/2018/09/index.html","b1fd28ce8b71bad10042e5e4f0d7267a"],["/blog/archives/2018/10/index.html","f349e41fe126063c4b12ede544fdddce"],["/blog/archives/2018/11/index.html","86c413ea45ef8944848fad823b5ba823"],["/blog/archives/2018/12/index.html","7ae2ca7fcd8be4a96e50862972768656"],["/blog/archives/2018/index.html","360f83899823222bea3d35a94a878d8d"],["/blog/archives/2018/page/2/index.html","e956c52e0e02622d109f04d35bbc9d1a"],["/blog/archives/2019/01/index.html","4792e5810187335a889fac185bef5a1c"],["/blog/archives/2019/02/index.html","74c277ef94dcba5f805c88dd649c4f44"],["/blog/archives/2019/04/index.html","32d574d66c465a59e4efdc8a89ac13db"],["/blog/archives/2019/06/index.html","ac8a5b0e3db6c68070815d18e5c6d3d0"],["/blog/archives/2019/07/index.html","e1a18813d4f79608551c548da351ea85"],["/blog/archives/2019/08/index.html","1482ad8eba57f0e300f504d59b9b000a"],["/blog/archives/2019/index.html","fe82166ed398014b9e8284b6cf4a0575"],["/blog/archives/index.html","67fc6bcd549cd1f1ae5a0831d9a456d3"],["/blog/archives/page/2/index.html","11216d0aa1d6fb1744f2ad2677e353a1"],["/blog/archives/page/3/index.html","e06d3e4bb698da946d343b76038b5055"],["/blog/archives/page/4/index.html","c3aa707b28ba54ce782f89d509eb3d73"],["/blog/archives/page/5/index.html","b64de1221d8f8addca6781dc0db3f51e"],["/blog/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/blog/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/blog/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blog/categories/index.html","177525e43ddc058565a03ad0ff061120"],["/blog/categories/个人作品/index.html","0135992e9aaf239512c3b9e974ef02e5"],["/blog/categories/个人作品/page/2/index.html","8a5ac031141d33834b926411151c3b82"],["/blog/categories/仙剑资源整理/index.html","3c7008235b747d988bbfa7426844bc79"],["/blog/categories/其他/index.html","550945799bb472c590f7873b37bad471"],["/blog/categories/工具资源/index.html","f4457b2466818fe296fae4954e88afc7"],["/blog/categories/感想与安利/index.html","31a4583d661bd018772b242035a61aae"],["/blog/categories/感想与安利/page/2/index.html","7bbb6c80636ae7b6288140bbb496ecef"],["/blog/categories/生活随记/index.html","48fd737d1f9906c7df08e626b2a0ecfc"],["/blog/css/blog-encrypt.css","cfbaed9c8529698d4e7287bdd2b822bb"],["/blog/css/main.css","bd372c429a57f867b5bf0a2bc2c162a4"],["/blog/favoritelist/index.html","23a224c4afabb09d44e99f1afd5de2a1"],["/blog/images/LOGO.png","946594dc37bb1f499ef7323837415331"],["/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/blog/images/android-chrome-144x144.png","99db915ab936f153333cb1a4f1f287e1"],["/blog/images/apple-touch-icon-next.png","f4cb11058236c159d3684262bcb4196b"],["/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/blog/images/favicon-16x16-next.png","7fbf7f313e4a376be8c387f8475d2a95"],["/blog/images/favicon-32x32-next.png","186e3a81f19e93b2d71031a2f337f4f2"],["/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/logo.svg","aca79d91e4301d4af6712f0edbc4d600"],["/blog/images/mstile-150x150.png","dc183de6dbbf51b68c426510fe5532c6"],["/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/blog/images/safari-pinned-tab.svg","5cc82c5d1b54e748dc10ce0f2793fa11"],["/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/index.html","cd32d0b3e41c124a31e13bc330902169"],["/blog/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/blog/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/blog/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/blog/js/src/custom.js","317cdf706c754f25c0c2611915bbdf09"],["/blog/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/blog/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/blog/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/blog/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/blog/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/blog/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/blog/lib/blog-encrypt.js","e2c1c183135d84c59f1872c81283d412"],["/blog/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/links/index.html","475000f7896a86c7231888df91476b94"],["/blog/message/index.html","51787b556419b0d4e96ea05ceb5deaa1"],["/blog/page/2/index.html","d8c804d01cfe3bd4635652ed25fd370a"],["/blog/page/3/index.html","49150c54156b851b4bf091f6c3d758f3"],["/blog/page/4/index.html","608b4a6e7a7fcb4e1e4d7e51528f3983"],["/blog/page/5/index.html","1773f4b687545c884e93289821852350"],["/blog/posts/1270.html","34df8f1a6dbb6be247c1dee4209e7e27"],["/blog/posts/12770.html","b90672baa4ec9ecf0372fa4683e35de0"],["/blog/posts/14580416.html","a729292b57d04cfe82eb4f038474f078"],["/blog/posts/15929.html","7f90823cb341371dfcf88cb769b2c2f5"],["/blog/posts/15959.html","afec41ee3732c8bd3401f972a634239f"],["/blog/posts/173.html","f953a7a6aa5e80745c08e1870dffbda3"],["/blog/posts/18647.html","0a933f52ca616dfa9f29b4a709cf232a"],["/blog/posts/19368.html","92a20a251887f31252de2d468e0f45ec"],["/blog/posts/19549.html","09af902fd60860e66db995f3cf0687d9"],["/blog/posts/1dbec013.html","cc1d3688597a209d96e42c46290bf484"],["/blog/posts/20133.html","afff77783d38bcaf37bd3d2aee54497f"],["/blog/posts/20764.html","1f60634fe24366dec282cda2f361f3c8"],["/blog/posts/2137.html","71de68f346bc5932106694018d076d08"],["/blog/posts/27247.html","ef6899b569795f1ea1ad72423e1f9bcf"],["/blog/posts/28180.html","df8c2a5614b18cff2e5abcefbcd5b5c4"],["/blog/posts/31d725ea.html","2ee52bd0744ddd824f8891569ab66ecf"],["/blog/posts/34771.html","a0ca1a6562eaa579e0fca3a3bf180d0a"],["/blog/posts/35192.html","9f6266a43ae20c3fde85b795bf0d3a51"],["/blog/posts/35671.html","0f712a68caa8319efc873f4ebf924b62"],["/blog/posts/364.html","1f06db0ea5f08d025bd8fcb86f81ed35"],["/blog/posts/38726.html","80ddc22ac0c2f6ccb0780b942e8ff250"],["/blog/posts/44082.html","39de632e383d217e9293f36ebd430ef3"],["/blog/posts/45026.html","95ea3d1bf816e5a3c514f2ff8bc5aad2"],["/blog/posts/50615.html","29a81b36944f1f1130e0eee3a9683c89"],["/blog/posts/51793.html","37beb32f0ba752f9fe30e5b9615b7a61"],["/blog/posts/51888.html","f692deaf2135c6bf3f34f18ab6e1549e"],["/blog/posts/51993.html","d4b5248cdd1941fa7749557f750f58f5"],["/blog/posts/535faed9.html","56dd5a5357eccb3289a748996f08019a"],["/blog/posts/55032.html","8a90325b0be13e6a9f859f61c18fb5e8"],["/blog/posts/55741.html","7692d81c6d607378a93d8a4842632ab0"],["/blog/posts/59ca7e41.html","559d6f883ed61f95da6d553d8abc392f"],["/blog/posts/62550.html","8e62da262f8c1937a78344c34004d68c"],["/blog/posts/64777.html","0e951c799ed853e89a974247092c1c80"],["/blog/posts/64850.html","1e265ba790153d66f765abd9dca20b97"],["/blog/posts/65e843f4.html","c8f14d244f40c2a617dbb8df2e2896ae"],["/blog/posts/7e3d2d4.html","d84f22ddf892702436a6a49054164a57"],["/blog/posts/964d468f.html","6950db69562108210d59794498c6197c"],["/blog/posts/afcf312e.html","725da2af0a36cf45853940d7db19782c"],["/blog/posts/bc1c3bac.html","289285c7e54915aa616021804625a439"],["/blog/posts/be1f2db7.html","f8a3b38961b3eb87023892878316c415"],["/blog/posts/c0404e49.html","3bb19a89849c30ea2f9243a00a377ac9"],["/blog/posts/cafe661f.html","918fd667db8e3f69bbb04059c220b3dc"],["/blog/posts/dc17b247.html","aa323c5dbce65512d9f6690387b301c8"],["/blog/posts/ddef8e37.html","77239b55ca4862cd33b4627b05334559"],["/blog/posts/eb9d5593.html","39e9cfe61b3280b77a0838cecf4d95f8"],["/blog/posts/edbff87d.html","04fccc7a92b3baf7c02226546f4fd11a"],["/blog/search/index.html","0cb762fe700894e80995de77bc3f114b"],["/blog/sw-register.js","df5c8cd8370eef724fcc1971ea1985d0"],["/blog/tags/2D表情/index.html","1a26f2fd227f9de426f29fbea8f51257"],["/blog/tags/AI/index.html","ab3e18719a250e0c440b943ee69f7636"],["/blog/tags/AVS/index.html","482fe193539d95fb4c765e55e8b9c612"],["/blog/tags/Aviutl/index.html","29ce0dc65e951a1105c0e1693f869203"],["/blog/tags/CLANNAD/index.html","eb766af2a47a1deac7a2c4744e29f49b"],["/blog/tags/Key/index.html","688d80a34333b14d8627ee72cfb1641c"],["/blog/tags/Let-s-encrypt/index.html","7442406ef218cbf2a7754c2cc2236e1f"],["/blog/tags/MAD/index.html","133d599383d684b5dd230d579b52d3d3"],["/blog/tags/MD/index.html","8704015ed7a4b9347747f401b0299bcc"],["/blog/tags/Markdown/index.html","0f803e15a1f8402818e15eaea1f538c5"],["/blog/tags/RPG-maker-MV/index.html","928f6ae25879adb34ed97762e78ec758"],["/blog/tags/SSL/index.html","10b745a574f76179fb70711db55d2b90"],["/blog/tags/Topaz-AI-Gigapixel/index.html","196e8e897e02f94a1b151f86fa88fbae"],["/blog/tags/Waifu2x/index.html","4387e904d2abbd715d61478413b91f0e"],["/blog/tags/index.html","7053c5390c59eb6d27f24abdd917adcf"],["/blog/tags/steam/index.html","a6661805d97df8594d068832e426dd7f"],["/blog/tags/个人作品/index.html","c26360674a6284fcba8329e109f7d3cc"],["/blog/tags/仙剑/index.html","215863c8c0af02bc86aa4fb2b597842d"],["/blog/tags/仙剑七/index.html","35cd22c8afd25dc98db46902c25ce104"],["/blog/tags/仙剑五/index.html","c1379867e73a83a403c33db26593a0b7"],["/blog/tags/仙剑六/index.html","b0bd66757eae5f8dffd4d84f7f16a490"],["/blog/tags/仙剑剧情对话/index.html","f7176ec4f60bfed22f849e65a1a48c45"],["/blog/tags/仙剑奇侠传/index.html","58a1a0b8152a4fbb7d457573e7f454c0"],["/blog/tags/仙剑奇侠传七/index.html","2477e207cc7371f0f191629239566f0a"],["/blog/tags/仙剑奇侠传三/index.html","b25da918f36b0a7da9b8a8a2d8360e15"],["/blog/tags/仙剑奇侠传三外传/index.html","3f087741c0a2b2d3f06c8e4f021de276"],["/blog/tags/仙剑奇侠传二/index.html","9b8452933ad1da97b03062e37a871327"],["/blog/tags/仙剑奇侠传五/index.html","9336475440063b674ae47c5c7b68271a"],["/blog/tags/仙剑奇侠传五前传/index.html","4eae2c50b918c101bbe5c075adbcc464"],["/blog/tags/仙剑奇侠传六/index.html","341e1fe9d68decaf001b2847b67be880"],["/blog/tags/仙剑奇侠传四/index.html","679882b89854fa39874c636024e17a8d"],["/blog/tags/仙剑手游/index.html","2c1d9aac5e6d27331167b0a40efcb1b6"],["/blog/tags/仙剑春晚/index.html","0222a2955b44b3197b35a47f157086b8"],["/blog/tags/仙剑最惨女配剧场/index.html","f6c3a0f0297732078393f4a3041ea156"],["/blog/tags/仙梦长留/index.html","f320bab83ae36cbade13c1ad7ac0bed5"],["/blog/tags/傅红雪/index.html","d8e9344b6522adb81423983240cdf403"],["/blog/tags/刘亦菲/index.html","bb6045b1255944e08a36b0ab8a05c051"],["/blog/tags/动态壁纸/index.html","4afb6e52f7bd203173cbb40ac1ded216"],["/blog/tags/十年/index.html","09c045e0310f4f4120bd0f4a4c974503"],["/blog/tags/单机/index.html","d6999e4b6396d42ff1e0ff574207e035"],["/blog/tags/博客/index.html","9b337fddf99d565de6b369608210a199"],["/blog/tags/卷积神经算法/index.html","d2d887b9069abb8511f2254da8add79c"],["/blog/tags/去水印/index.html","c9677fe2770fa9feba8bf5563c1f404a"],["/blog/tags/叶青/index.html","6344a2e0926c9272747e22d6f35b948e"],["/blog/tags/声之形/index.html","02678df35679d4cf19ca9d6032933c02"],["/blog/tags/孙蝶/index.html","7706a414de4f21fea61b855e28dd589a"],["/blog/tags/孟星魂/index.html","602cc99038ba4dc937b815f471a8c0ca"],["/blog/tags/帮助文档/index.html","1de963a6f1931083bfa06ddab95953bb"],["/blog/tags/年终总结/index.html","0957d0d78aed14014c4e32292736f364"],["/blog/tags/广播剧/index.html","114b3b2d4565f2897da65156e145456a"],["/blog/tags/张睿/index.html","9d58726ac8e4d3ce41cfd0b94d009ce9"],["/blog/tags/当时明月/index.html","2aabeef557b9e7047d9858e1926c9c38"],["/blog/tags/心が叫びたがってるんだ。/index.html","3f028f1b17c96478b20a2bd8452bf834"],["/blog/tags/心灵想要大声呼喊/index.html","180b966d09e5a18635d0bba6f6b6287b"],["/blog/tags/感想/index.html","9a7c1a3f6b262c925260b23f8aea9db2"],["/blog/tags/战斗吧！球球/index.html","0bc15b88a46124af7408b2635d621f57"],["/blog/tags/扣图素材/index.html","5c855fb0051f742b53604e4b6f17a010"],["/blog/tags/抠图素材/index.html","571a78b395ae502d657aded1a1a19f56"],["/blog/tags/新仙剑OL/index.html","d845d351c73d7442d448700d46fea4e6"],["/blog/tags/新仙剑奇侠传online/index.html","732390d650a1065a644a5137b9746611"],["/blog/tags/新边城浪子/index.html","a5838c508bc10a1ae704f9ff26c6b66e"],["/blog/tags/星蝶/index.html","4012128af135d8ad7d4fb313528cdda5"],["/blog/tags/最惨女配是衬托/index.html","79f9ef74b823b38c67f3409104aadc40"],["/blog/tags/月玲珑/index.html","e0777a8ab2edd4c7f78fe2ebe457f7ca"],["/blog/tags/月玲珑十周年/index.html","cc2720baa48a52edbd245f6abde737c5"],["/blog/tags/月玲珑小剧场游戏/index.html","10240396135e7c6eef9110bb71c8c707"],["/blog/tags/月玲珑配音社/index.html","c43692850a388794b6e45bd815ead1dd"],["/blog/tags/朱一龙/index.html","dbaa1587e8abb511a14c9c3f8dd3628b"],["/blog/tags/流星蝴蝶剑/index.html","f7c6c23a8f3fcb7632229fee4ad9bba3"],["/blog/tags/游戏整理/index.html","4ce21845a91fc1b6a135e4a063853ff5"],["/blog/tags/甜蜜蜜/index.html","9a60ce952cc0f295f2cf5d30ae65aa79"],["/blog/tags/祝有涯/index.html","90d4a5f9a56075204e5137514815946c"],["/blog/tags/神舞幻想/index.html","9c0a5c97cc7ce002faac140ffc095b70"],["/blog/tags/穹之扉/index.html","4013fb87d0c12f5751cf3a3c4fe82d6a"],["/blog/tags/素材整理/index.html","25a5e4f3a62d0fec43865c6a4acf7c89"],["/blog/tags/网络/index.html","405edb7851959d9f1934d07c14566130"],["/blog/tags/羽裳/index.html","c188659957ad1736d99c2e388c5c2198"],["/blog/tags/聲の形/index.html","711f714ba93619c2557268f9ceb6253d"],["/blog/tags/虹七/index.html","dc82481efe33bc36ed76859d9d8206e5"],["/blog/tags/虹猫蓝兔七侠传/index.html","cfd37c919edec79e173058f589ee27a4"],["/blog/tags/视频剪辑/index.html","93c716018e0361bb5f59e72181b0c687"],["/blog/tags/语音整理/index.html","77be737883b51fab28e416361c00bd79"],["/blog/tags/资源提取/index.html","9bbb1c8e98360c4721cf40513f814dde"],["/blog/tags/赵灵儿/index.html","1c72f1af4fd594865379a4a5866a5dab"],["/blog/tags/轩辕剑/index.html","c4df085e75200ecce9c6bf29549ccb72"],["/blog/tags/轩辕剑外传穹之扉/index.html","49fbbe76340eee77b587a0366dade576"],["/blog/tags/透明台标/index.html","292ff4ce0f5738901ba6a136b8474056"],["/blog/tags/陈意涵/index.html","c4d75a3101396da407898be8c173896b"],["/blog/tags/陈楚河/index.html","230f8d043dde6edd5f34830f79249289"],["/blog/tags/飞蝶/index.html","0781183b7e5e25ea26ddeee9959c2c59"],["/blog/tags/龙葵/index.html","1d167fcf31c84e4d0eed10aec4a6ad11"],["/blog/works/index.html","187c30a3f56004a3664b5905dc1348d8"]];
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

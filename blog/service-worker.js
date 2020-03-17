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

var precacheConfig = [["F:/blog5/public/aboutme/index.html","dcead574b8812e8e44fdf53d9d3d05c5"],["F:/blog5/public/archives/2013/05/index.html","c1e875358da8d2584655e187cb5e78ca"],["F:/blog5/public/archives/2013/index.html","1bfef4f55b344455bded8ac7ff49e34f"],["F:/blog5/public/archives/2015/07/index.html","d7d6896650a6b1e3814e41a286d61b37"],["F:/blog5/public/archives/2015/index.html","2ad165de780c65187bd9d16f792da834"],["F:/blog5/public/archives/2016/05/index.html","b1f07430d8b6896ec5fe0166b08c4dbf"],["F:/blog5/public/archives/2016/10/index.html","ff29c9c69aca1165861aede238c5ecc8"],["F:/blog5/public/archives/2016/11/index.html","eafe8e664c965329c5fe4281cef4acd4"],["F:/blog5/public/archives/2016/12/index.html","7a0ab4d41669b9a2fcd9e8dbfeb47108"],["F:/blog5/public/archives/2016/index.html","168becb941a292a7e22aa7fb58213aa5"],["F:/blog5/public/archives/2017/01/index.html","2979442b3b5f5541fe2bfb1292fe7c05"],["F:/blog5/public/archives/2017/02/index.html","642cc1b91f9c363dfb2046a203af8fe7"],["F:/blog5/public/archives/2017/06/index.html","e36aeda89dd34b3f1d61611bbbace652"],["F:/blog5/public/archives/2017/07/index.html","bd83d269667194877708cf3b487fd79c"],["F:/blog5/public/archives/2017/08/index.html","76be39d2a63290a9b6b6bdf4d99fc2be"],["F:/blog5/public/archives/2017/09/index.html","b5f587c3df5bddbc091d08fd02eb850c"],["F:/blog5/public/archives/2017/11/index.html","7758a578407a08f3455c92cb79e1b134"],["F:/blog5/public/archives/2017/index.html","7f79cbe8df932621fc5011e3c97e507d"],["F:/blog5/public/archives/2017/page/2/index.html","d2d0717f6f91cbca90f44cfcf6d0c094"],["F:/blog5/public/archives/2018/01/index.html","280a25bdeb87e7e44025b4eff2df177d"],["F:/blog5/public/archives/2018/02/index.html","10317fbf1be86bc236d58b1019544df2"],["F:/blog5/public/archives/2018/04/index.html","48a1715eae94cfef38bd937319dcda3b"],["F:/blog5/public/archives/2018/06/index.html","b13ff20486a1639db9d5e52e0b6a2f24"],["F:/blog5/public/archives/2018/07/index.html","c7c3194faf6b6efd29e12af49f3a2fc8"],["F:/blog5/public/archives/2018/08/index.html","262817e4320307972e4f3e77e99c43ba"],["F:/blog5/public/archives/2018/09/index.html","5a418ffa06c04f4785a87200f374d6de"],["F:/blog5/public/archives/2018/10/index.html","5baa9049b1c45e11dd2f9c0fdd0bc40c"],["F:/blog5/public/archives/2018/11/index.html","6e014dac63424efc71ace9d0fa48109a"],["F:/blog5/public/archives/2018/12/index.html","8f378ae3a251642d03210805e6a92504"],["F:/blog5/public/archives/2018/index.html","344f312aea00e10e5b05a37ccbc1fcd8"],["F:/blog5/public/archives/2018/page/2/index.html","8f876e52e4a25246da718e7f9991580e"],["F:/blog5/public/archives/2019/01/index.html","0b73da923e1b078984092da5fe512432"],["F:/blog5/public/archives/2019/02/index.html","966922f4a12a57872dc700e3b1973d1b"],["F:/blog5/public/archives/2019/04/index.html","21e2fe859ea802c852e902391310cc95"],["F:/blog5/public/archives/2019/06/index.html","aff7bb88a0471f29368c4c9b2ff4659f"],["F:/blog5/public/archives/2019/07/index.html","2418eac2bac59603d2639cf73debce50"],["F:/blog5/public/archives/2019/08/index.html","49416d59f8630b73ff902e8512901d5b"],["F:/blog5/public/archives/2019/10/index.html","fb953f808d02ffab7b69475c5af92fd7"],["F:/blog5/public/archives/2019/11/index.html","3e08ee2a8b98a4ee3c3c0fa7e04790ec"],["F:/blog5/public/archives/2019/index.html","dcd6db0c6e51855702026074f382840c"],["F:/blog5/public/archives/2019/page/2/index.html","427ec001e3a9a61b2b3e88680078f46f"],["F:/blog5/public/archives/2020/01/index.html","90f6d967ab858123f6de39405a061a93"],["F:/blog5/public/archives/2020/02/index.html","c035221af163523e479047dc8a6b07f2"],["F:/blog5/public/archives/2020/index.html","7d9c709a5222829004da7a6707ac25a2"],["F:/blog5/public/archives/index.html","f85082cbefd32b58878adb516d6e2ef9"],["F:/blog5/public/archives/page/2/index.html","8a68c3e2252ef93acec077a08017667c"],["F:/blog5/public/archives/page/3/index.html","12f4709ee1d8227b1a623107df3777ac"],["F:/blog5/public/archives/page/4/index.html","6d013c5b3fe52554b63a50de4e6eea22"],["F:/blog5/public/archives/page/5/index.html","9c7b11ddfd6b7a9fc4c0802bbc3ceece"],["F:/blog5/public/archives/page/6/index.html","52197c7ceef4d0b5122caa83084d5150"],["F:/blog5/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/blog5/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/blog5/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/blog5/public/bangumis/index.html","253039b8dbb5e6369c64a47bd2997039"],["F:/blog5/public/categories/index.html","fd29c092c474684b7277fa16907a7a20"],["F:/blog5/public/categories/个人作品/index.html","f66ef028a8089a5c00cee014eec47790"],["F:/blog5/public/categories/个人作品/page/2/index.html","a763d6f81061074d8f3c7efa01f78a63"],["F:/blog5/public/categories/仙剑资源整理/index.html","ce4b94fce18f15af479c92d7cdbfa8f5"],["F:/blog5/public/categories/其他/index.html","96aff5ecc3b571c1eed769052389fe45"],["F:/blog5/public/categories/工具资源/index.html","09a66de0683935a1614045f6fa4fb710"],["F:/blog5/public/categories/感想与安利/index.html","4075c5bb315925ed81aa1f3d625b2484"],["F:/blog5/public/categories/感想与安利/page/2/index.html","1e8c69231869e0ccf7f161a99b322731"],["F:/blog5/public/categories/生活随记/index.html","14ee3ba8dd054acf6b04ecbab08b2c12"],["F:/blog5/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/blog5/public/css/custom.css","4420489186f541b95d78236299d52805"],["F:/blog5/public/css/index.css","4db32bf138245ff1008d4d56f36e77d8"],["F:/blog5/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog5/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/blog5/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/blog5/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/blog5/public/img/loading.gif","a994cd022cdff0a80c6cf57173c0454d"],["F:/blog5/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/blog5/public/index.html","6c7bfc80d10278462cb293fd87579802"],["F:/blog5/public/js/bg.js","76a6bbef5c214171f392901890e31818"],["F:/blog5/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/blog5/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/blog5/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/blog5/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/blog5/public/links/index.html","d32b478caace2a9ba603ab33c1105246"],["F:/blog5/public/message/index.html","8ea72208510d1e2f593033ea283d7610"],["F:/blog5/public/music/index.html","20c6e638b1f8745ad831710f2bbb3797"],["F:/blog5/public/page/2/index.html","1a81fc4cf53978e42a3d71773bd89a55"],["F:/blog5/public/page/3/index.html","bd55293e8632729db6b214eaabe5b07e"],["F:/blog5/public/page/4/index.html","2f68d5faf1df6017d98f03a08dddced7"],["F:/blog5/public/page/5/index.html","4750c5e2bb93ef841de30dca41421a35"],["F:/blog5/public/page/6/index.html","050cc7da646f7b945b3a4df6b84a632b"],["F:/blog5/public/posts/1270.html","1232ab647cf955afdb58efd543b8d0a6"],["F:/blog5/public/posts/12770.html","069dbf1603c4381a5b3fe30ab8464284"],["F:/blog5/public/posts/14580416.html","e0126d44e6dc4cb562fb0da761c3f6fb"],["F:/blog5/public/posts/15929.html","ec31487f592feb4f475e8653e65afb55"],["F:/blog5/public/posts/15959.html","05aac1002342b3e50950489c7bea011f"],["F:/blog5/public/posts/173.html","6b2550ad2f91ccd65ed4e539ef2b9c82"],["F:/blog5/public/posts/18647.html","7a2a31719da413e644121c6b9dcc682f"],["F:/blog5/public/posts/19368.html","f6aef64bb654f444499ef3b404a4d180"],["F:/blog5/public/posts/19549.html","b47358246fd204077cbc38907f0b5904"],["F:/blog5/public/posts/1dbec013.html","5472fc6a93bcbda4f077321fdefb2df3"],["F:/blog5/public/posts/20133.html","90f2a819429b3dcb36441a5e08f57549"],["F:/blog5/public/posts/20764.html","1abdef069653e1287e376611e10d1ddc"],["F:/blog5/public/posts/2137.html","bfeff7ab7bbbb725839c8d4c1dcede47"],["F:/blog5/public/posts/27247.html","cbc6cb9821b2ca49fe1321cfe502f161"],["F:/blog5/public/posts/28180.html","660d5c5e57fc20e5ce8f8dd120ed7ea3"],["F:/blog5/public/posts/31d725ea.html","3d843e1ea04cfb7f375107e5c0686ba2"],["F:/blog5/public/posts/34771.html","c3772f35e179c922780fb3bc8d8a0b20"],["F:/blog5/public/posts/35192.html","3fa5b3a25229b8aa3c47d5698e6b0738"],["F:/blog5/public/posts/35671.html","c4126ba01f593f06c100250122c0cd7b"],["F:/blog5/public/posts/364.html","f647237ee7cb95a076f9d8b453dc8991"],["F:/blog5/public/posts/38726.html","35d3aa8dfd640c395f188134deb32bb7"],["F:/blog5/public/posts/44082.html","d75c067c427c68a9385b3077115f2fef"],["F:/blog5/public/posts/45026.html","e425185d8c8f1e8324a45e3534a3eb99"],["F:/blog5/public/posts/491b225d.html","969a69cc0cbd0ea8839e06bdc7194438"],["F:/blog5/public/posts/50615.html","6362221331d45c4f1987ba1d3f531701"],["F:/blog5/public/posts/51793.html","b9d7e1216e08240bb8295e24708c385f"],["F:/blog5/public/posts/51888.html","44f0d25d665d0d74fcb52c12b14a1d87"],["F:/blog5/public/posts/51993.html","650a04b6fdf790207b061704b753e889"],["F:/blog5/public/posts/535faed9.html","b369ff89001b8ffdab2cf73fa37693d0"],["F:/blog5/public/posts/55032.html","b2e8ad903f7b4c424e6b12c1f2b91149"],["F:/blog5/public/posts/55741.html","5bf0506c62e85dcccc1516de2f1324b7"],["F:/blog5/public/posts/57a901f0.html","c5e50ee0e3d8e5d46f3f257b9a8fc6ad"],["F:/blog5/public/posts/59ca7e41.html","e46fc96ae69df801e377f4e5611b3027"],["F:/blog5/public/posts/5fd82dbe.html","848afaceb290e613982aded12f2c8c7d"],["F:/blog5/public/posts/62550.html","e4523a356b9d1e7afe5d4ebfe75658ab"],["F:/blog5/public/posts/64777.html","a4eaab06651d520bc2d99103e5504a1f"],["F:/blog5/public/posts/64850.html","68538c6776e8546fd2e737aa99a08712"],["F:/blog5/public/posts/65e843f4.html","1e558f951cec0b132983058c0b01322d"],["F:/blog5/public/posts/7e3d2d4.html","89f73296a0f111526984ab3a55b0fe98"],["F:/blog5/public/posts/845ca7c4.html","67281696cc0227437dc880d37b8c46c9"],["F:/blog5/public/posts/898c3bb3.html","89255f7c36655d72a0b9728eb2362c47"],["F:/blog5/public/posts/964d468f.html","2170f0bcb36c916420770689555c833e"],["F:/blog5/public/posts/afcf312e.html","2d6dff791214578f39658429e6d80805"],["F:/blog5/public/posts/bc1c3bac.html","441a10ac2456c12c9713bad3a9640401"],["F:/blog5/public/posts/be1f2db7.html","f7c4ca9160e82be4b3008636b7cd26af"],["F:/blog5/public/posts/c0404e49.html","d6dffd3eb0196d7697a0b9d9ce60a74c"],["F:/blog5/public/posts/cafe661f.html","cf5b4635f25bd57fb347069f5dc33902"],["F:/blog5/public/posts/dc17b247.html","d92dcb4f1b8eb601b5c21ab44e34ca5a"],["F:/blog5/public/posts/ddef8e37.html","f713eea5bb6b99cf6b2f2c1fdee11845"],["F:/blog5/public/posts/eb9d5593.html","4e7db3e94bc6a475171fbf4897c10dec"],["F:/blog5/public/posts/edbff87d.html","93b91e5b484d8a27a36d12367783bd52"],["F:/blog5/public/posts/ee58e1ae.html","68de6c43f62424993f3fa7da3f2e2442"],["F:/blog5/public/steamgames/index.html","307c19a7cb630ad784369af8786ce3b4"],["F:/blog5/public/tags/2019随意链接大赛/index.html","6a76d74f06ed94837394e9d3fa57af02"],["F:/blog5/public/tags/2D表情/index.html","706a43cb84a610488cb93e30757faa0a"],["F:/blog5/public/tags/AI/index.html","2e477a9c26389a33d5e0dab53a69ea56"],["F:/blog5/public/tags/AMV/index.html","a5a205aaeee08c52c83739c0ee930bc9"],["F:/blog5/public/tags/AVS/index.html","7670acbfd72da2f8af66373f972b42d3"],["F:/blog5/public/tags/Aviutl/index.html","ce536e5ad32790f024ca96983c92a51c"],["F:/blog5/public/tags/CLANNAD/index.html","2bf0f5b002715d904f1d542fccb8bdf4"],["F:/blog5/public/tags/Hexo/index.html","7eb15f23c8b0250a673fdf9b47759983"],["F:/blog5/public/tags/Key/index.html","141e51e8effd16b3afb7f5689ee67bc2"],["F:/blog5/public/tags/Let-s-encrypt/index.html","3301b1140b05d4b15081e5d8e8a93b8c"],["F:/blog5/public/tags/MAD/index.html","a516d22d7c0ea85e522926008c7e1fc6"],["F:/blog5/public/tags/MD/index.html","c87af80f3775392577143b9a6d9abc46"],["F:/blog5/public/tags/Markdown/index.html","26bbd505417b2a2403c58c0289d8f048"],["F:/blog5/public/tags/RPG-maker-MV/index.html","c2a8257c08deede1dc822d5ed48f6842"],["F:/blog5/public/tags/SSL/index.html","e8af10ea9c2fd921a90aaebdc7668b66"],["F:/blog5/public/tags/Spleeter/index.html","1c9093e51552724f6cd94003dbb56cd5"],["F:/blog5/public/tags/Topaz-AI-Gigapixel/index.html","638468ec6a5898bfed9dc66ba46c70ff"],["F:/blog5/public/tags/Waifu2x/index.html","633d9f3776bfe55e0afd0fd87e75ccfd"],["F:/blog5/public/tags/index.html","75d7aebfe4607e139e15be2f15e5ea5a"],["F:/blog5/public/tags/npm/index.html","2dcad517afa24726c5ae685fbf433d37"],["F:/blog5/public/tags/steam/index.html","d99adbe74b37940526479a8326055c7b"],["F:/blog5/public/tags/个人作品/index.html","f32d6d7527d5617735ff2057df68de20"],["F:/blog5/public/tags/仙剑/index.html","4dad9ecd7fd6f40654c219f84e39832b"],["F:/blog5/public/tags/仙剑七/index.html","728ede203247a94b7dfd0dd7fe701fe6"],["F:/blog5/public/tags/仙剑五/index.html","550b13520fe8608b007424ddfc363640"],["F:/blog5/public/tags/仙剑六/index.html","f7ff6a4da417f6061783e6f26c6d8647"],["F:/blog5/public/tags/仙剑剧情对话/index.html","6d20908cf2ba2eae29533b9f6762d41f"],["F:/blog5/public/tags/仙剑奇侠传/index.html","47516aed5b7994a11bdbf12665ab4a3f"],["F:/blog5/public/tags/仙剑奇侠传七/index.html","6caa1c7d25534a0b87cfb2d5f3748f3b"],["F:/blog5/public/tags/仙剑奇侠传三/index.html","991835fa49cab05dc63c631b94e3b6b6"],["F:/blog5/public/tags/仙剑奇侠传三外传/index.html","254b72c2c5bebf5519928da20855ef0f"],["F:/blog5/public/tags/仙剑奇侠传二/index.html","c9c3d6dca026c517aeda2566d78b7f05"],["F:/blog5/public/tags/仙剑奇侠传五/index.html","fef59192b6bc76f0b89f0a7149c2905c"],["F:/blog5/public/tags/仙剑奇侠传五前传/index.html","ffbb8c736b7c14fd6541d4f4e2d112f2"],["F:/blog5/public/tags/仙剑奇侠传六/index.html","95f990a3702708015ae2ccd9fb4409f0"],["F:/blog5/public/tags/仙剑奇侠传四/index.html","004f35938a06b26ab6446df1b8f4c5e2"],["F:/blog5/public/tags/仙剑奇侠传幻璃镜/index.html","468170457ecaa23c2b9a950c957b3229"],["F:/blog5/public/tags/仙剑手游/index.html","8ce296043f600c4c7ed33ebe1bf5e914"],["F:/blog5/public/tags/仙剑春晚/index.html","f2e75c31531414a834c6b450c271f3da"],["F:/blog5/public/tags/仙剑最惨女配剧场/index.html","3a67c479650a8b377182621c6bc2a9a0"],["F:/blog5/public/tags/仙剑混剪/index.html","180a0811b92435184eb110ff8f1be19e"],["F:/blog5/public/tags/仙梦长留/index.html","d23d7a5ebde7816fbf4ca30f5a7e72c4"],["F:/blog5/public/tags/傅红雪/index.html","eca1a264b9a6618c29c144d0a4d3b701"],["F:/blog5/public/tags/刘亦菲/index.html","b4658f1d136b5ae5fe3849ff995ab524"],["F:/blog5/public/tags/动态壁纸/index.html","6df21d247fa2f03a35c6700e56e2a43f"],["F:/blog5/public/tags/十年/index.html","40cdfb3bbea10122e411afeadfc9bd0f"],["F:/blog5/public/tags/单机/index.html","b1c7986e839051b8fba13523ce68878c"],["F:/blog5/public/tags/博客/index.html","9a15526c6b856aed50ce37e2b5d0102e"],["F:/blog5/public/tags/卷积神经算法/index.html","1efcf63b58af10ae10b7b82a06430c05"],["F:/blog5/public/tags/去水印/index.html","dfa4d691ed7e7bc11d99430057fa29c8"],["F:/blog5/public/tags/叶青/index.html","067094c839510f0e60ac4b72feec2629"],["F:/blog5/public/tags/声之形/index.html","4a50571fd73dfcfed92644a2a045cfc0"],["F:/blog5/public/tags/女高中生的虚度日常/index.html","1526efc9e8888305bd9f164049f30622"],["F:/blog5/public/tags/孙蝶/index.html","d4ae421b6bfed30dfb04eb4e99751643"],["F:/blog5/public/tags/孟星魂/index.html","e5d574f417e66a74eddba1721225c4a4"],["F:/blog5/public/tags/帮助文档/index.html","c0de53540d188de3b1804beae9f8faa7"],["F:/blog5/public/tags/年终总结/index.html","465f9a90bee17adf223e4d4adef2ba78"],["F:/blog5/public/tags/广播剧/index.html","d9172bc08a53d08c88e18c2781bdc0af"],["F:/blog5/public/tags/张睿/index.html","7365172e987180f62a8c4196aac5042e"],["F:/blog5/public/tags/当时明月/index.html","57ddb5373f13d8242e5b3a37fa7814ae"],["F:/blog5/public/tags/心が叫びたがってるんだ。/index.html","4dfe226676fbe982439bf70cd4b3274e"],["F:/blog5/public/tags/心灵想要大声呼喊/index.html","e8aec7a22b5b21f54918ef4595440e51"],["F:/blog5/public/tags/感想/index.html","f75e78fd22de758ea1eae2fe209a4e2a"],["F:/blog5/public/tags/战斗吧！球球/index.html","94a1d2e1a2776a3b8bab111172e7888b"],["F:/blog5/public/tags/扣图素材/index.html","84e2fe2204ee7fab74d4f7e140facf3e"],["F:/blog5/public/tags/抠图素材/index.html","02dc585c09e563d06c85fd1fe746f372"],["F:/blog5/public/tags/新仙剑OL/index.html","d842ff2c08cfe88c2bd951ea04cb4f5c"],["F:/blog5/public/tags/新仙剑奇侠传online/index.html","142f16a43ded29de25813066e6dd6bbd"],["F:/blog5/public/tags/新边城浪子/index.html","78527037d1a17f324da0e109d654c488"],["F:/blog5/public/tags/星蝶/index.html","f653fed9d0c29978736f650b76773791"],["F:/blog5/public/tags/最惨女配是衬托/index.html","8e8453fa0b1f06133863accc77b31f99"],["F:/blog5/public/tags/月玲珑/index.html","bdc6fdeb2f8979d8c51fa3dc9075e702"],["F:/blog5/public/tags/月玲珑十周年/index.html","cac80ef930de9eed84b8033a55bbf4da"],["F:/blog5/public/tags/月玲珑小剧场游戏/index.html","3d094cbae004e2c6abc097997c28ac79"],["F:/blog5/public/tags/月玲珑配音社/index.html","42fb789c97356629cc73281847fd948e"],["F:/blog5/public/tags/朱一龙/index.html","6e3376dca86f36b1092df226580cf202"],["F:/blog5/public/tags/流星蝴蝶剑/index.html","ecfe44fa939ac6052a9ebac014848ddf"],["F:/blog5/public/tags/浩气参天/index.html","c1df86d090ec8a8e0851e6a1a3cf0c5c"],["F:/blog5/public/tags/游戏整理/index.html","2e2e4e0f9630af1d9836b0c22a804c99"],["F:/blog5/public/tags/甜蜜蜜/index.html","0d8610c2ce0caeb964ac73d4a7c8b976"],["F:/blog5/public/tags/祝有涯/index.html","12fb9c694d6d57d49d78267f80c9ccc1"],["F:/blog5/public/tags/神舞幻想/index.html","01868ac498faf375a25441fb9c959907"],["F:/blog5/public/tags/穹之扉/index.html","2f2befebeecba9fff5444415384ce06d"],["F:/blog5/public/tags/素材整理/index.html","8af6899907d2684c30514556d2a2d00c"],["F:/blog5/public/tags/网络/index.html","6450ba535f2e5fb5e8b124f456ae5d72"],["F:/blog5/public/tags/羽裳/index.html","1ebb4938efa63116c2f61f2e61274b97"],["F:/blog5/public/tags/聲の形/index.html","f83142c941f8092be7dc656bc98da5f3"],["F:/blog5/public/tags/虹七/index.html","5a0e2d8ebd61248c31a6eec01d400df1"],["F:/blog5/public/tags/虹猫蓝兔七侠传/index.html","cfd37870b034365094aae8ca8a3e9d3d"],["F:/blog5/public/tags/视频剪辑/index.html","74a736de8afaa18090ebda5d258b2a62"],["F:/blog5/public/tags/语音整理/index.html","5c8441fb5bd5318abc1f24ae69eca3ea"],["F:/blog5/public/tags/资源提取/index.html","96902b8bd3f6a04c8dc66fd2e47e5bde"],["F:/blog5/public/tags/赵灵儿/index.html","063bccb990276013419c412b1bc6cff0"],["F:/blog5/public/tags/轩辕剑/index.html","e8384236d0fcc7edff5ac168fbabbffe"],["F:/blog5/public/tags/轩辕剑外传穹之扉/index.html","cb1c57ab808a04e166cc9822c1f3aa02"],["F:/blog5/public/tags/透明台标/index.html","a382519d8419d0fea5c3081d439e9604"],["F:/blog5/public/tags/陈意涵/index.html","9f5a375b18d6a3bde27f13887ff62a5d"],["F:/blog5/public/tags/陈楚河/index.html","a3cb4e711737c5e8c102eee2bd5939df"],["F:/blog5/public/tags/青槐/index.html","9874518de3eed0937ad1c3ebec468b86"],["F:/blog5/public/tags/音轨分离/index.html","e8b3e82de2d9d403fbc4e724b858a74e"],["F:/blog5/public/tags/飞蝶/index.html","faa6c6693149ef63a7bfb4353f3c4864"],["F:/blog5/public/tags/龙葵/index.html","112832f831d03a99128a30793ad6ac07"],["F:/blog5/public/works/index.html","3dda4511bb183f0193e33c17215286b6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
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








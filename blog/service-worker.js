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

var precacheConfig = [["F:/blog5/public/aboutme/index.html","740c4b0eb15e15d063bf03eb3fb5934c"],["F:/blog5/public/archives/2013/05/index.html","cc34afba16dfa8a4826d9d358a24e45c"],["F:/blog5/public/archives/2013/index.html","389a456ab31b678dc5a027f5ef7cf632"],["F:/blog5/public/archives/2015/07/index.html","df95043e641bdd320e25d649182525f2"],["F:/blog5/public/archives/2015/index.html","bb9763f908718773dc22239ce3d528c8"],["F:/blog5/public/archives/2016/05/index.html","ed6307d75a303d292013c7dd7f718c3c"],["F:/blog5/public/archives/2016/10/index.html","7c4b80007b6eb1d0e9830a871cfc46cd"],["F:/blog5/public/archives/2016/11/index.html","84d2f916db94b4d26be3e13694567531"],["F:/blog5/public/archives/2016/12/index.html","1e96eea65bca2bdd49a04ed6aa57288b"],["F:/blog5/public/archives/2016/index.html","955dcdd4a447019f9c48c3c942ffb350"],["F:/blog5/public/archives/2017/01/index.html","44d9b65fde193aa8d552c0eadba6766c"],["F:/blog5/public/archives/2017/02/index.html","188428ba39a8c1b69508de7758d1290e"],["F:/blog5/public/archives/2017/06/index.html","d9a7ea088fa35d289ca5e656d91585fe"],["F:/blog5/public/archives/2017/07/index.html","ab7dcdd2ccd377ce4c3cfbc4412e3ef6"],["F:/blog5/public/archives/2017/08/index.html","048d09d8cf453198dc6e46adb9e12d81"],["F:/blog5/public/archives/2017/09/index.html","25c69f5843072eb114e225e7e3f346f1"],["F:/blog5/public/archives/2017/11/index.html","423e0ba4a0ffde351f9a5b9b7960affd"],["F:/blog5/public/archives/2017/index.html","8090e86bea40f67f27b4e95d3d32783d"],["F:/blog5/public/archives/2017/page/2/index.html","37bbb3cc0f5e4017d90c442c1ff7b3bd"],["F:/blog5/public/archives/2018/01/index.html","62ae16023798a3d0724d42f6bbe065e3"],["F:/blog5/public/archives/2018/02/index.html","26766aa3d3419225dab2406c0e899dff"],["F:/blog5/public/archives/2018/04/index.html","a44708c025abaac76cafeeb2f24f877a"],["F:/blog5/public/archives/2018/06/index.html","8417af9a87320ebde894e57b3699f8aa"],["F:/blog5/public/archives/2018/07/index.html","e5b5947fc5d3b6f68cd609af049faf02"],["F:/blog5/public/archives/2018/08/index.html","0641bf0797a4cc421158fd0f1a0b399a"],["F:/blog5/public/archives/2018/09/index.html","38cc30cda449bdbae656634add13c144"],["F:/blog5/public/archives/2018/10/index.html","3499814bc01d9ff84b8f5721fbc3b113"],["F:/blog5/public/archives/2018/11/index.html","79008f6d9dec94b639ccefbf44aa4a8e"],["F:/blog5/public/archives/2018/12/index.html","8ad07c1b58bf7b0a3e37bdb2ae31eabf"],["F:/blog5/public/archives/2018/index.html","c93784bd54ac2c907937d54f3ba74596"],["F:/blog5/public/archives/2018/page/2/index.html","d57b591ab68b3d42c752e2270298ad97"],["F:/blog5/public/archives/2019/01/index.html","f34950ad852e7e04847e715baf11a378"],["F:/blog5/public/archives/2019/02/index.html","8ffa9b9f57e33a7d2246e58d1c35a9d4"],["F:/blog5/public/archives/2019/04/index.html","8aa0df3fe93d16a45a327ae8d69c62b6"],["F:/blog5/public/archives/2019/06/index.html","6be0f33b8d6f63f622a47a693901a26d"],["F:/blog5/public/archives/2019/07/index.html","1da4850f462e69e3cf62942d36968c4e"],["F:/blog5/public/archives/2019/08/index.html","4de649d407f1262f6e6a9fd50ac54eae"],["F:/blog5/public/archives/2019/10/index.html","0833e640acd85d39161474e7b133161f"],["F:/blog5/public/archives/2019/11/index.html","2bf03bdcb7c5c50f712ce155015e4244"],["F:/blog5/public/archives/2019/index.html","aa69c9b0582718c37c98ff76347d6695"],["F:/blog5/public/archives/2019/page/2/index.html","33db9ab1bc3999bdb6d58baf5d53d5f0"],["F:/blog5/public/archives/2020/01/index.html","d7030f76f532d637e81cd3682b665f09"],["F:/blog5/public/archives/2020/02/index.html","e7d7f3423289ce72c111fd55aa8895f3"],["F:/blog5/public/archives/2020/index.html","31333b379e5dfc914eb34b7b757275ac"],["F:/blog5/public/archives/index.html","7e17148275a6894b21fc9e5c2bcc1480"],["F:/blog5/public/archives/page/2/index.html","136ea9c1e5e50e063eabd16b6786c3d8"],["F:/blog5/public/archives/page/3/index.html","ea46ef4decff52073111e816a96ea0b7"],["F:/blog5/public/archives/page/4/index.html","d196f9cbacc9e4e87f8be2845da69b5c"],["F:/blog5/public/archives/page/5/index.html","dea92d6681b9af7e7fd999e099206b22"],["F:/blog5/public/archives/page/6/index.html","d283abe17ac96ef63527dbc03a976a17"],["F:/blog5/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/blog5/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/blog5/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/blog5/public/bangumis/index.html","de05c91758a8e075b94fe7d90ffd66d7"],["F:/blog5/public/categories/index.html","ead7f435906a445f9368e9fb1ddbb6f7"],["F:/blog5/public/categories/个人作品/index.html","0de4dcc5468ca3f23072855d6a7dda11"],["F:/blog5/public/categories/个人作品/page/2/index.html","c97bbb06ca562bfa37b838d820eaf108"],["F:/blog5/public/categories/仙剑资源整理/index.html","cf6d609da99821d680c6bdd5c568def4"],["F:/blog5/public/categories/其他/index.html","8d7be7dc23310cd66ec928fda31eaf5f"],["F:/blog5/public/categories/工具资源/index.html","d2ed6e592aa383e684e90e5ce970e603"],["F:/blog5/public/categories/感想与安利/index.html","a3310e147ba03411bee07c6ec245273f"],["F:/blog5/public/categories/感想与安利/page/2/index.html","35c985204140e6fe0b34f3bbc382f340"],["F:/blog5/public/categories/生活随记/index.html","21ab4fffac7b89072d1a1dcec028601d"],["F:/blog5/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/blog5/public/css/custom.css","37ebf064ac78884574f54ede1f55a30e"],["F:/blog5/public/css/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["F:/blog5/public/css/iconfont/demo_index.html","c0edf8b25db0b64e0c2ff956192dfbf8"],["F:/blog5/public/css/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["F:/blog5/public/css/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["F:/blog5/public/css/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["F:/blog5/public/css/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["F:/blog5/public/css/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["F:/blog5/public/css/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["F:/blog5/public/css/index.css","ccb331c4944a240747ca2001b2519d4c"],["F:/blog5/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog5/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/blog5/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/blog5/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/blog5/public/img/loading.gif","a994cd022cdff0a80c6cf57173c0454d"],["F:/blog5/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["F:/blog5/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/blog5/public/index.html","9f9fe664f95a665426dc92df40d975d9"],["F:/blog5/public/js/main.js","48edda5e9ced4270307a1a4f4b38c1a2"],["F:/blog5/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["F:/blog5/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["F:/blog5/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/blog5/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/blog5/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/blog5/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["F:/blog5/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/blog5/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/blog5/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["F:/blog5/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["F:/blog5/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["F:/blog5/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/blog5/public/links/index.html","4773e1bec903178a2dbdbe3074d47b49"],["F:/blog5/public/message/index.html","098e735cc702defe589cbf881febae5c"],["F:/blog5/public/music/index.html","c42d1d51b49e59d54ca0d2bd9b56a2d1"],["F:/blog5/public/page/2/index.html","4e7cf6bff148c1cad34c1e5ca6d689db"],["F:/blog5/public/page/3/index.html","133e63081fd016532446e050f47fde35"],["F:/blog5/public/page/4/index.html","55566bf84e0faf37c3bfad44f184dc7f"],["F:/blog5/public/page/5/index.html","3bc37d977480d26fc7dec42fcc5e9e93"],["F:/blog5/public/page/6/index.html","e060cfe700307514ceb002e22954d0d5"],["F:/blog5/public/posts/1270.html","709af23c4ad4988f3bd7fd93d53c50c1"],["F:/blog5/public/posts/12770.html","d54fe8b1b189928faf73bab537eb9c13"],["F:/blog5/public/posts/14580416.html","c84bba159761e09152363c8fa8c74a62"],["F:/blog5/public/posts/15929.html","ca16c62255098eb96c40823316489bce"],["F:/blog5/public/posts/15959.html","c0444e48d84b474aaf0d6278df469f71"],["F:/blog5/public/posts/173.html","f410b5039c7212da5acaa19302f7ef97"],["F:/blog5/public/posts/18647.html","2ae6802a7071104e87bd0f8c43412d82"],["F:/blog5/public/posts/19368.html","b5a16344ae2542c547f8e0de08860cbe"],["F:/blog5/public/posts/19549.html","bf4b53eb4af6a9f074c24ed05c734468"],["F:/blog5/public/posts/1dbec013.html","1df6132580d7ea0e53725f3fcdc7844e"],["F:/blog5/public/posts/20133.html","5f2b073e7cb64be0f2bf2e09a3bb0ece"],["F:/blog5/public/posts/20764.html","5eb9338e7d2509cff538d8e9b9adc3cc"],["F:/blog5/public/posts/2137.html","b7651b99a8248346c6228b451606d653"],["F:/blog5/public/posts/27247.html","c913166874e55f442b70931d5d5fc1a6"],["F:/blog5/public/posts/28180.html","d787699b76a51862eda6ee429e0d91f1"],["F:/blog5/public/posts/31d725ea.html","05c1525ca179f830ccb2a7bd443ba00a"],["F:/blog5/public/posts/34771.html","c5524c581e6fad06a0e65c3351e8d240"],["F:/blog5/public/posts/35192.html","8aa71977b71453b25ffa896b7632c7e5"],["F:/blog5/public/posts/35671.html","9e5597e8d41e9e27a932b7b887832bf7"],["F:/blog5/public/posts/364.html","9465ec5f6efd143b14865a87e7e52156"],["F:/blog5/public/posts/38726.html","884d99c4686dcec65bb41f860b1b6e4d"],["F:/blog5/public/posts/44082.html","1bec74eac9dca2d47e6ed2c07e9eadef"],["F:/blog5/public/posts/45026.html","68ac414ac404386ac6275a66cf19ac9b"],["F:/blog5/public/posts/491b225d.html","de7732b6094fabcfb18be825e4fb97b3"],["F:/blog5/public/posts/50615.html","3af6a940cbc84cfc41082d1916a0afc7"],["F:/blog5/public/posts/51793.html","d758857681cb5f63e0d8239169c2cee2"],["F:/blog5/public/posts/51888.html","1619a24fe3519b9263f7bc0d57c65ac5"],["F:/blog5/public/posts/51993.html","c4ccd66016a101fea23bd4c8b535036a"],["F:/blog5/public/posts/535faed9.html","c3d31fb6485fd8ca82c999d3be111dd9"],["F:/blog5/public/posts/55032.html","511f68a014b12735b0c87e8c4a46d700"],["F:/blog5/public/posts/55741.html","783583ba55c17e8d4b6389e586223fed"],["F:/blog5/public/posts/57a901f0.html","52ed448bf41c6c2b50cbd5d12df9f0d8"],["F:/blog5/public/posts/59ca7e41.html","7f4f7bae5d013847da28f3a497c46a16"],["F:/blog5/public/posts/5fd82dbe.html","08fa80dd54e200e932bf060c45e497ec"],["F:/blog5/public/posts/62550.html","d8e3150c839e8dbbfe2a32c3e339dd7d"],["F:/blog5/public/posts/64777.html","284efaa7e0a39e20be0d8ce176132896"],["F:/blog5/public/posts/64850.html","463238ee31d3cfd1745867747fc37654"],["F:/blog5/public/posts/65e843f4.html","525a1bb2eb4cc8f51d02084f71e3110c"],["F:/blog5/public/posts/7e3d2d4.html","8405fa449bb863b186450dd9bb9a3197"],["F:/blog5/public/posts/845ca7c4.html","689085952b76367f86ab778226d61263"],["F:/blog5/public/posts/898c3bb3.html","7be68fa843bca5560147932687f619e6"],["F:/blog5/public/posts/964d468f.html","ff34202c6a6d5b062d96d1c5deaa78a9"],["F:/blog5/public/posts/afcf312e.html","ffafd86b48ae9ff74591bf8f537d964a"],["F:/blog5/public/posts/bc1c3bac.html","697f795e630d03936e158f4e2cf47e62"],["F:/blog5/public/posts/be1f2db7.html","1634c0faf6aec5840e276af01d2e5d7f"],["F:/blog5/public/posts/c0404e49.html","69fb1009ca07c5445ba5d8ae7d74c08e"],["F:/blog5/public/posts/cafe661f.html","3d12782546031b6879d7a884486bf064"],["F:/blog5/public/posts/dc17b247.html","d37796b3dcc52bf581abb71a5ff738d9"],["F:/blog5/public/posts/ddef8e37.html","21f07dfe7b3a4d810cf80f6ac30011a0"],["F:/blog5/public/posts/eb9d5593.html","1dd251fbc1d58eb3ff62d90ed14b40fb"],["F:/blog5/public/posts/edbff87d.html","d7d8bc11bfdca4d1c711e3dafc0f285a"],["F:/blog5/public/posts/ee58e1ae.html","69bef8cab6cf32b23ebc8aa1410a53e6"],["F:/blog5/public/steamgames/index.html","68e029edeaeb8734c3556de8e5a803e5"],["F:/blog5/public/tags/2019随意链接大赛/index.html","d2a3471b33f4014e577e9ed8cc059f37"],["F:/blog5/public/tags/2D表情/index.html","3ae759f55aa566d6f4712f5dbb1673d5"],["F:/blog5/public/tags/AI/index.html","7744a2aeadeece315efd35af0920318d"],["F:/blog5/public/tags/AMV/index.html","98a1b9918fd757d20f7400bc0c80531e"],["F:/blog5/public/tags/AVS/index.html","0f9bb74f85e84e28e8037d4ddc025995"],["F:/blog5/public/tags/Aviutl/index.html","543013379bc990d6d45990bc263c718f"],["F:/blog5/public/tags/CLANNAD/index.html","05694e4ee33c05f535933ea8fe299bf8"],["F:/blog5/public/tags/Hexo/index.html","7853d9d6bacc876d8eb27d1950e96cae"],["F:/blog5/public/tags/Key/index.html","ec4938420916543f15f895174974bf22"],["F:/blog5/public/tags/Let-s-encrypt/index.html","ee521ec2d5df634ed7b813e008be3e02"],["F:/blog5/public/tags/MAD/index.html","0bbf96e42753f8154261dbcb9d88fe1a"],["F:/blog5/public/tags/MD/index.html","357873eea16e122a1a17328e195cda58"],["F:/blog5/public/tags/Markdown/index.html","d01c9b63c03aca85c855fd3ccd4dd623"],["F:/blog5/public/tags/RPG-maker-MV/index.html","c8529927483932deaed96d63e0cb79b3"],["F:/blog5/public/tags/SSL/index.html","a82647ee40f41207961386048b072099"],["F:/blog5/public/tags/Spleeter/index.html","7dfe6b82c96c605335936e4490f4cf6e"],["F:/blog5/public/tags/Topaz-AI-Gigapixel/index.html","e69b878039b0a900ef78ca3705ab0e3d"],["F:/blog5/public/tags/Waifu2x/index.html","d303ecf27c01cbf1a50fd4701bfa804f"],["F:/blog5/public/tags/index.html","78e8c2cc54f5871a38f3d1b8e8a6fc4e"],["F:/blog5/public/tags/npm/index.html","9060ecc6ea4ae8f21246180c9a445546"],["F:/blog5/public/tags/steam/index.html","4eca925b5a48417b73ef3cd312feebcc"],["F:/blog5/public/tags/个人作品/index.html","2a4586683951ac6309d71e3725f8d593"],["F:/blog5/public/tags/个人作品/page/2/index.html","50e15f4c4ca7d818727464806520bcf4"],["F:/blog5/public/tags/仙剑/index.html","56b9a4006fad6cf0873f20bb35a8dfe7"],["F:/blog5/public/tags/仙剑七/index.html","7dea231c5c0fbbc7e6aeebdaaa50307c"],["F:/blog5/public/tags/仙剑五/index.html","24d1be20a56bf067d6f89b9ac07bb8b0"],["F:/blog5/public/tags/仙剑六/index.html","b45c4fdf1160109efa472ccaa9ae8e1f"],["F:/blog5/public/tags/仙剑剧情对话/index.html","c2a68af5cc776ab28e5ad9095e3d0c5b"],["F:/blog5/public/tags/仙剑奇侠传/index.html","25358e3f2eee7f80b254ca7c4b99f1e6"],["F:/blog5/public/tags/仙剑奇侠传七/index.html","d001f409ce8bac17fabdddd12445139a"],["F:/blog5/public/tags/仙剑奇侠传三/index.html","bf2f760289feaf27f0fd78748333a650"],["F:/blog5/public/tags/仙剑奇侠传三外传/index.html","852f041d454c8f2f6bb1079dd5f1831e"],["F:/blog5/public/tags/仙剑奇侠传二/index.html","71e56ad21494535d487bfdc5985de8a5"],["F:/blog5/public/tags/仙剑奇侠传五/index.html","4cac987196b545baec655ac72b0cdee2"],["F:/blog5/public/tags/仙剑奇侠传五前传/index.html","8e29e5494dcfad2504fbc4399b98c32f"],["F:/blog5/public/tags/仙剑奇侠传六/index.html","7ddcc36a67b40f54ba4dd50cc863cd9c"],["F:/blog5/public/tags/仙剑奇侠传四/index.html","21981c212539ebe1a33411694e0ac9c0"],["F:/blog5/public/tags/仙剑奇侠传幻璃镜/index.html","a3d7b9c638c402bcf26bb2912711ad48"],["F:/blog5/public/tags/仙剑手游/index.html","b198179c7f6ec77da902eb47bbc6725d"],["F:/blog5/public/tags/仙剑春晚/index.html","36c469303ab1d2c4d3bf51c107cb7b43"],["F:/blog5/public/tags/仙剑最惨女配剧场/index.html","beb2316e26fc678153689a9fdc146b12"],["F:/blog5/public/tags/仙剑混剪/index.html","0e09661bca627ec2eae278f56f7c1b3c"],["F:/blog5/public/tags/仙梦长留/index.html","6803967954012c61c6f895207b3208bb"],["F:/blog5/public/tags/傅红雪/index.html","d3469435bc47028ca9be4d2647b8583f"],["F:/blog5/public/tags/刘亦菲/index.html","ae2567c91c4adb603d3140ef84839db3"],["F:/blog5/public/tags/动态壁纸/index.html","3adbe2b551a1356c1c652d1c86a33b90"],["F:/blog5/public/tags/十年/index.html","0a199230d33a95aa47844501f4d1fb01"],["F:/blog5/public/tags/单机/index.html","3bed2fd868e8ea0c5be9a8078d93f13e"],["F:/blog5/public/tags/博客/index.html","4772f022a9098c7d0e18aff14aaed8c7"],["F:/blog5/public/tags/卷积神经算法/index.html","0fb4bc9ac9e6c9220f541e67525a38bb"],["F:/blog5/public/tags/去水印/index.html","56102b581f9289627cdf7ac953c19bbd"],["F:/blog5/public/tags/叶青/index.html","32008b8de734d9d4abee10fddc672752"],["F:/blog5/public/tags/声之形/index.html","26f7f7ab645fc524cabbf9f3dba750bf"],["F:/blog5/public/tags/女高中生的虚度日常/index.html","89bce832668caec6a1e7e5a1fc32da2e"],["F:/blog5/public/tags/孙蝶/index.html","5261327e636bc236062a3fbbfb1073bd"],["F:/blog5/public/tags/孟星魂/index.html","7f46661b9aa4734ea1a382a24da13fcc"],["F:/blog5/public/tags/帮助文档/index.html","027a96ee878e8051adbb94026193d905"],["F:/blog5/public/tags/年终总结/index.html","1447e866e9291e2becaafafe887d7240"],["F:/blog5/public/tags/广播剧/index.html","f4f3708f14c87d22335280b824be9552"],["F:/blog5/public/tags/张睿/index.html","40108d1363d932ec27b69e3ff2975773"],["F:/blog5/public/tags/当时明月/index.html","6c1eaf74b5ed0cf8b8a0f67aedaa12a8"],["F:/blog5/public/tags/心が叫びたがってるんだ。/index.html","72ae551604a684da6a6f92e76351447c"],["F:/blog5/public/tags/心灵想要大声呼喊/index.html","758d9c1b321c6a50da74c38271976377"],["F:/blog5/public/tags/感想/index.html","692381aa72f2be1962d39b49129a1b80"],["F:/blog5/public/tags/战斗吧！球球/index.html","329a0a3f8f438632eb4fd5e221bac452"],["F:/blog5/public/tags/扣图素材/index.html","b973f3d3655c82852efbb39381c16d29"],["F:/blog5/public/tags/抠图素材/index.html","e3a4e1802ae1348c1a4eabe75845d22f"],["F:/blog5/public/tags/新仙剑OL/index.html","89bc6a8d078ce339104bee6c52e70c9d"],["F:/blog5/public/tags/新仙剑奇侠传online/index.html","53f219efb93a3a17693eadc367c1b907"],["F:/blog5/public/tags/新边城浪子/index.html","89551e00a7918ef709536f66acc181ca"],["F:/blog5/public/tags/星蝶/index.html","b62fbe7b3deccaebe612454dd31f66f8"],["F:/blog5/public/tags/最惨女配是衬托/index.html","b73a3cad1dedaedc9a1019b7d6465dd2"],["F:/blog5/public/tags/月玲珑/index.html","3f7b07a7469da4d7976515cb26a9a9bf"],["F:/blog5/public/tags/月玲珑十周年/index.html","7929aa610b877b6229fbbf90ac925a28"],["F:/blog5/public/tags/月玲珑小剧场游戏/index.html","33a580bafdfd69fe55fe932c0101ee8c"],["F:/blog5/public/tags/月玲珑配音社/index.html","99e316ccc7de8799e901898d2eb3d0cb"],["F:/blog5/public/tags/朱一龙/index.html","40c6948b9b082c1141c046a3cbf326d5"],["F:/blog5/public/tags/流星蝴蝶剑/index.html","fc72a236c43729a1de8f7664e388411a"],["F:/blog5/public/tags/浩气参天/index.html","1a3dbf2b5f03bad80303ff1d9f226d2f"],["F:/blog5/public/tags/游戏整理/index.html","08ee20d30f71d84d2308a4e7b210234a"],["F:/blog5/public/tags/甜蜜蜜/index.html","9d229ca0cea9b26996a759a104ff021a"],["F:/blog5/public/tags/祝有涯/index.html","4a82390302113f74df45cb4322b7b25b"],["F:/blog5/public/tags/神舞幻想/index.html","dc5734a15a535b5da4134f101864ba5b"],["F:/blog5/public/tags/穹之扉/index.html","f4a6a2ec0a62c0702c3f956b1007c0d7"],["F:/blog5/public/tags/素材整理/index.html","8cd3e02a71728f47aa8dd456213d2033"],["F:/blog5/public/tags/网络/index.html","5ad9e47eec066a027643c7d42ebab5a2"],["F:/blog5/public/tags/羽裳/index.html","c5d07c1c93dfc6fc336d95b7ba977a8e"],["F:/blog5/public/tags/聲の形/index.html","ff011a3f13f83c022362f33664914555"],["F:/blog5/public/tags/虹七/index.html","3ddd94c0c1265cbb3834ed2e481989de"],["F:/blog5/public/tags/虹猫蓝兔七侠传/index.html","bc9be4f59323f298763153fe7e1dbe19"],["F:/blog5/public/tags/视频剪辑/index.html","4b2fd493d5ab020a59285547e5588b74"],["F:/blog5/public/tags/视频剪辑/page/2/index.html","d31c75d47139c61da91aa2d0a4f541e8"],["F:/blog5/public/tags/语音整理/index.html","16a871bcfeef7578ddfb34bfa9f915bb"],["F:/blog5/public/tags/资源提取/index.html","e3344c0df7a2a223f7bcc1a0270bbd29"],["F:/blog5/public/tags/赵灵儿/index.html","7d17e381961d9d53fcb5a005b1f8ff32"],["F:/blog5/public/tags/轩辕剑/index.html","9328a2dad78a6fa0c2197faf8f46e56c"],["F:/blog5/public/tags/轩辕剑外传穹之扉/index.html","92784ed144169eac754e4e9817e20079"],["F:/blog5/public/tags/透明台标/index.html","cab2bf9e6e9908d9bad0d08e97ed3e86"],["F:/blog5/public/tags/陈意涵/index.html","90c3439afb6ce7dd967dc1a3c28e470f"],["F:/blog5/public/tags/陈楚河/index.html","67dc9a73dd71565b15ee8cb6612dcff6"],["F:/blog5/public/tags/青槐/index.html","5c6a91e51fc60c834f97c8cab841ccb0"],["F:/blog5/public/tags/音轨分离/index.html","1415292196e33a6991a5d9d414d29686"],["F:/blog5/public/tags/飞蝶/index.html","f9c511ed88c83d33600d87da006270d9"],["F:/blog5/public/tags/龙葵/index.html","cbbe154a9042cf304a4193bedd4c84b1"],["F:/blog5/public/works/index.html","0f5f42e8a47216370626b9727d56cfb9"]];
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








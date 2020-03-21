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

var precacheConfig = [["F:/blog5/public/aboutme/index.html","6c98f9a0f0d94e1f549df17b31e18093"],["F:/blog5/public/archives/2013/05/index.html","dca7f2b3fc10f3da3459dd9eb19a2ce4"],["F:/blog5/public/archives/2013/index.html","8ca147b84caccfe5f54f5dde634d5b91"],["F:/blog5/public/archives/2015/07/index.html","f95ab4f5419062b91a6f77204a40a0d9"],["F:/blog5/public/archives/2015/index.html","5bb565967ea24e87639f5963bcda2b73"],["F:/blog5/public/archives/2016/05/index.html","811b9c13e2a80a1f489d2c536f1c8308"],["F:/blog5/public/archives/2016/10/index.html","b1171b4f758cbf02009c8af579d0e61f"],["F:/blog5/public/archives/2016/11/index.html","73deb986d51c432cff2dbe80ea3d9a95"],["F:/blog5/public/archives/2016/12/index.html","667349e644a6138e0196ce7fdbafc5a6"],["F:/blog5/public/archives/2016/index.html","2dc2415afb1d82e90f88f35cb4519e12"],["F:/blog5/public/archives/2017/01/index.html","5e8f6beedcd54de7f939af1da7371d5b"],["F:/blog5/public/archives/2017/02/index.html","c7d7841e3343018f1878150f9fa88b8e"],["F:/blog5/public/archives/2017/06/index.html","54ea52c63a6afbb011eba913049a127a"],["F:/blog5/public/archives/2017/07/index.html","c221617a503d3e0e1d1756ebc6e89ccd"],["F:/blog5/public/archives/2017/08/index.html","7386042ac2a48fe5c60705b0b6beead9"],["F:/blog5/public/archives/2017/09/index.html","1135479d6734bb99a7f59ab42efba633"],["F:/blog5/public/archives/2017/11/index.html","bee2ec6a552efcab9c017c377466cfb1"],["F:/blog5/public/archives/2017/index.html","ef7b832e214cbaa04275b525cadff651"],["F:/blog5/public/archives/2017/page/2/index.html","883c1fc1765f36f84a526820975b2a60"],["F:/blog5/public/archives/2018/01/index.html","95e7b8c530835544183a7f1358f89f95"],["F:/blog5/public/archives/2018/02/index.html","2eff265168bfacbb608108fe7bcc13cc"],["F:/blog5/public/archives/2018/04/index.html","cd56dd565ae21adabcc52c92586d6618"],["F:/blog5/public/archives/2018/06/index.html","376fb4dfca7afed52695420fdde875d3"],["F:/blog5/public/archives/2018/07/index.html","10040fb68c461a320c3ac9367f233eef"],["F:/blog5/public/archives/2018/08/index.html","845960f90f64f5a4648eff78f59bdaaa"],["F:/blog5/public/archives/2018/09/index.html","e3ef643ad57b46dd4844533620d7c443"],["F:/blog5/public/archives/2018/10/index.html","7ff44cf7870a28b6186c99f8effcc6c1"],["F:/blog5/public/archives/2018/11/index.html","56559ba84fc1a740074d17f17748e0b4"],["F:/blog5/public/archives/2018/12/index.html","3929c8f2258df04d5d9344d74d98ade5"],["F:/blog5/public/archives/2018/index.html","def2af4cd2f9f761070d89d219842f8c"],["F:/blog5/public/archives/2018/page/2/index.html","904c3410f031c561d1ceb8f0d1eabd1a"],["F:/blog5/public/archives/2019/01/index.html","384afe04c65146c2b7c8ce7f88d5f17e"],["F:/blog5/public/archives/2019/02/index.html","1bf39fa41af3f20bf6ca336d13250f95"],["F:/blog5/public/archives/2019/04/index.html","f9defb5f9a1d52f5094aaccef12b0cf9"],["F:/blog5/public/archives/2019/06/index.html","60cdacdd7ad1bba2ca2ee9a6e2608dac"],["F:/blog5/public/archives/2019/07/index.html","4001c6ae024a8910a533ebe51438255c"],["F:/blog5/public/archives/2019/08/index.html","5f8da79c95e37840e855f3416bb06a4f"],["F:/blog5/public/archives/2019/10/index.html","51e631178a0aab236ed6d3c5c32688ae"],["F:/blog5/public/archives/2019/11/index.html","d441539eda902653ae9b6825c8ee1236"],["F:/blog5/public/archives/2019/index.html","734c42c6d71bf4cd8d1e7851436127c2"],["F:/blog5/public/archives/2019/page/2/index.html","039b2568c22c7b073fe8fa305f67fa8c"],["F:/blog5/public/archives/2020/01/index.html","f76176063fc4d7454ff3ac6a5c22487b"],["F:/blog5/public/archives/2020/02/index.html","b9886f275bc537230cf288558c5b21da"],["F:/blog5/public/archives/2020/index.html","255d374276352888916f754a804b408e"],["F:/blog5/public/archives/index.html","543eaee97e0406045aa85874722d7e12"],["F:/blog5/public/archives/page/2/index.html","6357c882c07c3dfed2488dc1711226ba"],["F:/blog5/public/archives/page/3/index.html","167b917690bdb9e85ff55b4d04bf58f5"],["F:/blog5/public/archives/page/4/index.html","ce8df7025d4a5f139cf813decffc4f77"],["F:/blog5/public/archives/page/5/index.html","714d23ba8e339dbe8e3cb0cdf98ecd5f"],["F:/blog5/public/archives/page/6/index.html","1eaf6093a13bbaa1cbfa9bd67138ec86"],["F:/blog5/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/blog5/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/blog5/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/blog5/public/bangumis/index.html","1060af452f7b5f4d2883bd0dbea04050"],["F:/blog5/public/categories/index.html","88dda193a2342b608aaddbc1d07aa957"],["F:/blog5/public/categories/个人作品/index.html","dbfded2b56e75b80bb4efc367ff219dc"],["F:/blog5/public/categories/个人作品/page/2/index.html","04ff61290ba15e641ee732db7dc69a1e"],["F:/blog5/public/categories/仙剑资源整理/index.html","87f40a3c3c041f0a33c27125348fa4fd"],["F:/blog5/public/categories/其他/index.html","abf6892066c9dbcab872214a561d8f36"],["F:/blog5/public/categories/工具资源/index.html","57c740d9bba0687aa44d15ae928509e8"],["F:/blog5/public/categories/感想与安利/index.html","a35876b1029a5f8f9c0a13c5f49f22dc"],["F:/blog5/public/categories/感想与安利/page/2/index.html","12b17452070f60f6db712c30da285e28"],["F:/blog5/public/categories/生活随记/index.html","189ea74c4e7ecfcbd3e50ea3ece490e2"],["F:/blog5/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/blog5/public/css/custom.css","a2b5ac47b058e56f93aebe1ea2236788"],["F:/blog5/public/css/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["F:/blog5/public/css/iconfont/demo_index.html","c0edf8b25db0b64e0c2ff956192dfbf8"],["F:/blog5/public/css/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["F:/blog5/public/css/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["F:/blog5/public/css/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["F:/blog5/public/css/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["F:/blog5/public/css/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["F:/blog5/public/css/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["F:/blog5/public/css/index.css","0a4ff75b6ae079c841d6dea5a5b59d54"],["F:/blog5/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog5/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/blog5/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/blog5/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/blog5/public/img/loading.gif","a994cd022cdff0a80c6cf57173c0454d"],["F:/blog5/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["F:/blog5/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/blog5/public/index.html","f5509fdcbfd645dfbd723ae319c07f48"],["F:/blog5/public/js/main.js","48edda5e9ced4270307a1a4f4b38c1a2"],["F:/blog5/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["F:/blog5/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["F:/blog5/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/blog5/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/blog5/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/blog5/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["F:/blog5/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/blog5/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/blog5/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["F:/blog5/public/js/tw_cn.js","e5e4c24eb2aefbe7632db6684fb837ed"],["F:/blog5/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["F:/blog5/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/blog5/public/links/index.html","1d41876d5d0af39c26f91ca8639e4343"],["F:/blog5/public/message/index.html","5957bd5de984fcff43225bd43a1f3419"],["F:/blog5/public/music/index.html","cae344b78f1d49e26007a671678999de"],["F:/blog5/public/page/2/index.html","fb6ab6a3d4a6a5ff064332e254997134"],["F:/blog5/public/page/3/index.html","106e428d7c539022293724604c8c3464"],["F:/blog5/public/page/4/index.html","99567c5a4243718f51ec3cf12d7a2ed3"],["F:/blog5/public/page/5/index.html","f55178050a6e21f7f48173a29f21aec6"],["F:/blog5/public/page/6/index.html","5d7c4ccf51db730c9e9cb1fe5ee572c1"],["F:/blog5/public/posts/1270.html","49ac4516e4cef9dd0fc985bf65301eef"],["F:/blog5/public/posts/12770.html","2b6d2231e564131e60154fb4ed06429d"],["F:/blog5/public/posts/14580416.html","11b3e93c6fe1b6da369db20eb60787a9"],["F:/blog5/public/posts/15929.html","ca1c586610c209fd8cf292ce2fb564a4"],["F:/blog5/public/posts/15959.html","b2c2199d1993fd35506e5303bb455f0d"],["F:/blog5/public/posts/173.html","ba12693b83b847e9b9e0d0399a9a5ecb"],["F:/blog5/public/posts/18647.html","393f2b536fb0410ce0332fc9ef465424"],["F:/blog5/public/posts/19368.html","63d59020f1dec2ae23aa0f75eee1a308"],["F:/blog5/public/posts/19549.html","45febbd373c96ace840712a61df92a35"],["F:/blog5/public/posts/1dbec013.html","c4c8a8856db1e8ddcba209da2ec8386a"],["F:/blog5/public/posts/20133.html","b12210dc8a228fa3414f78470d743f9b"],["F:/blog5/public/posts/20764.html","a1f51a8d32f184fa947718e3e2a6ce58"],["F:/blog5/public/posts/2137.html","39093768af16b2a59e2cf346c43eac96"],["F:/blog5/public/posts/27247.html","0175cf7d393f0f66ad3ddf67abec48c7"],["F:/blog5/public/posts/28180.html","1a8400e1dbe435aa14072b7505e6a519"],["F:/blog5/public/posts/31d725ea.html","754f14040a2fe4f8ea6079a4050d2aa0"],["F:/blog5/public/posts/34771.html","cd37509a102541deb8abcd5ecfc828c4"],["F:/blog5/public/posts/35192.html","ef8c684d681fd59a1f52acd35f56b1e5"],["F:/blog5/public/posts/35671.html","a630da81e77b80c9be0ef211a6a102a8"],["F:/blog5/public/posts/364.html","03cd6cbd6973b57e1fbb152b91452a71"],["F:/blog5/public/posts/38726.html","68ad2b759e8b21645a30ab83d3f1af77"],["F:/blog5/public/posts/44082.html","e47ca924f9548edfecb062e1c66c6d77"],["F:/blog5/public/posts/45026.html","d243ef015a3d2eb2d3380206c0ba8f05"],["F:/blog5/public/posts/491b225d.html","9f9bdc9b7f9fe67d9b3dfc2bec4bcd33"],["F:/blog5/public/posts/50615.html","212627089114dc878086fa97e60bb02e"],["F:/blog5/public/posts/51793.html","9a7f5b116d643d0834ea35f0400a33da"],["F:/blog5/public/posts/51888.html","3027853e54b1ea030ab9a1708b0c879c"],["F:/blog5/public/posts/51993.html","ce4f27de8ae0e5f1923cebefcdad060e"],["F:/blog5/public/posts/535faed9.html","d7376d9f5af1d48f82c62cf6c985d73b"],["F:/blog5/public/posts/55032.html","f1c493053f8cd2811a398cbcd121c98a"],["F:/blog5/public/posts/55741.html","cdd476a82f631f00f3c235b3fcf58ebd"],["F:/blog5/public/posts/57a901f0.html","39dae036ba15b02ef6a85a89bbd2ab79"],["F:/blog5/public/posts/59ca7e41.html","37849c4383be64792e771d54416241a5"],["F:/blog5/public/posts/5fd82dbe.html","27c6f9d22e1581938777210e898c0b25"],["F:/blog5/public/posts/62550.html","2ab1bc6611978a5a9cd84acac6a645e4"],["F:/blog5/public/posts/64777.html","47d4af66e9248acc6f305c631097e98d"],["F:/blog5/public/posts/64850.html","80c36503402154761f6526da7940ebc9"],["F:/blog5/public/posts/65e843f4.html","c85d2f73d060feaf963ddf03b1f15407"],["F:/blog5/public/posts/7e3d2d4.html","ea844a4557477a55036e84b68f8d449a"],["F:/blog5/public/posts/845ca7c4.html","c52ec80e0f0e86522a12655120b24c54"],["F:/blog5/public/posts/898c3bb3.html","6e25a2424c365f92e91290f9c7a392fd"],["F:/blog5/public/posts/964d468f.html","07bcc3d80d139f8f8223917b6a8cdc5b"],["F:/blog5/public/posts/afcf312e.html","9415f963272ccd78eefad1cfda9bed24"],["F:/blog5/public/posts/bc1c3bac.html","e1fbeae2297766aae7e5315e210811de"],["F:/blog5/public/posts/be1f2db7.html","1d916f449f9c2c86869ccfdde7aca9cc"],["F:/blog5/public/posts/c0404e49.html","3e99bd9a78e754e6af2c619ea430bdc4"],["F:/blog5/public/posts/cafe661f.html","74819723ee39b788afff45ca8e983f65"],["F:/blog5/public/posts/dc17b247.html","625572cf80a0bf0e74a10835772fbe97"],["F:/blog5/public/posts/ddef8e37.html","81de4bd03081daeb10f630e2e507ffad"],["F:/blog5/public/posts/eb9d5593.html","2022ec7fa862d46c68d506e14d23ced9"],["F:/blog5/public/posts/edbff87d.html","93305d8495056444f3156dd88d9f9e09"],["F:/blog5/public/posts/ee58e1ae.html","cf65b5a660655321119792dc8b65af7f"],["F:/blog5/public/steamgames/index.html","5f2bf9079594f0e5f4e967099e4b7186"],["F:/blog5/public/tags/2019随意链接大赛/index.html","1e17e87a8c4aa78f29288e4fa949bd6d"],["F:/blog5/public/tags/2D表情/index.html","36694d66ce230cb938b79238bc1f86eb"],["F:/blog5/public/tags/AI/index.html","485148a395dbd591a46013e79f270d38"],["F:/blog5/public/tags/AMV/index.html","3ddf1f66da26c852f541c7a4da1bb7f1"],["F:/blog5/public/tags/AVS/index.html","3855832b0c1c4454cfb58518fb8748a8"],["F:/blog5/public/tags/Aviutl/index.html","4ee0f6ce1cce1bdc59d21ca3af842807"],["F:/blog5/public/tags/CLANNAD/index.html","9ddc0f2a82378bf84876301a869b02f4"],["F:/blog5/public/tags/Hexo/index.html","a2abe2c52f64ac137c0507b7b8d50239"],["F:/blog5/public/tags/Key/index.html","899685f40488aff861f953f785b0c610"],["F:/blog5/public/tags/Let-s-encrypt/index.html","ba50290cca4e8334e5a096adce401609"],["F:/blog5/public/tags/MAD/index.html","e0a031a89489283bf24a17441736f813"],["F:/blog5/public/tags/MD/index.html","6c5697ca74586edc2b3aa00b17ced17b"],["F:/blog5/public/tags/Markdown/index.html","9055dd645467d0a5b144bf6a854ce67c"],["F:/blog5/public/tags/RPG-maker-MV/index.html","dd03450a8909f50ff945ab8b1d2309f3"],["F:/blog5/public/tags/SSL/index.html","62eb1ceff3c0368b51787b44c007df6e"],["F:/blog5/public/tags/Spleeter/index.html","9a7a9aaf5dd230bb84bc9f5c3e29490d"],["F:/blog5/public/tags/Topaz-AI-Gigapixel/index.html","4a477a2402cb42e03cfb92dd5ab099bf"],["F:/blog5/public/tags/Waifu2x/index.html","8fc9267bbb314ff7bbc986c453e60d57"],["F:/blog5/public/tags/index.html","e289d1d5192f52353c8015f8c7a7dcb0"],["F:/blog5/public/tags/npm/index.html","80122b2fd9e89468c3f0025be5d72536"],["F:/blog5/public/tags/steam/index.html","78b00186dd243b339b7d17c77ea27caa"],["F:/blog5/public/tags/个人作品/index.html","db95a669f03229bab8182b27b6e549cf"],["F:/blog5/public/tags/个人作品/page/2/index.html","089de47f339b4543196b31cd9a4b23bc"],["F:/blog5/public/tags/仙剑/index.html","6e6d5ad3fdeb856021dd0aee91261285"],["F:/blog5/public/tags/仙剑七/index.html","f40188f54ce5157c4da9bdd81cfa492e"],["F:/blog5/public/tags/仙剑五/index.html","6099855cbacf9f35a0109ad3c650dec5"],["F:/blog5/public/tags/仙剑六/index.html","a11851d0cfe09b02bf61d541e859c19d"],["F:/blog5/public/tags/仙剑剧情对话/index.html","4059e7a3992f1aebfb2af91146edff1e"],["F:/blog5/public/tags/仙剑奇侠传/index.html","12bef9ac31ffa66288dcc07302faa733"],["F:/blog5/public/tags/仙剑奇侠传七/index.html","65558b22cbbc578ce9a4fd89033821e5"],["F:/blog5/public/tags/仙剑奇侠传三/index.html","db7885de0e44f99614ebbca303a55c65"],["F:/blog5/public/tags/仙剑奇侠传三外传/index.html","039e54136c2ff0f98ce535bebbc59bad"],["F:/blog5/public/tags/仙剑奇侠传二/index.html","17336f147a823912f151bd30449b7bdb"],["F:/blog5/public/tags/仙剑奇侠传五/index.html","181a9898d7cff34b43b2a8b3892bbb4d"],["F:/blog5/public/tags/仙剑奇侠传五前传/index.html","d616c003cfde3102c654fac0f281f187"],["F:/blog5/public/tags/仙剑奇侠传六/index.html","c6fdbc4c47443268f763b0525c39ace7"],["F:/blog5/public/tags/仙剑奇侠传四/index.html","df6631473ac3ececc9305cfd9c496361"],["F:/blog5/public/tags/仙剑奇侠传幻璃镜/index.html","3858259a2ea7dfcc3dad2d01d87dace1"],["F:/blog5/public/tags/仙剑手游/index.html","345f54dac3df84348f33ca5dc018c28a"],["F:/blog5/public/tags/仙剑春晚/index.html","e154a4189440920b886f04b22572637f"],["F:/blog5/public/tags/仙剑最惨女配剧场/index.html","11009d50b5fb74446bb4e193e57d85fc"],["F:/blog5/public/tags/仙剑混剪/index.html","8512f085379b2b8daac0ae9a310085c6"],["F:/blog5/public/tags/仙梦长留/index.html","2f46bf82aa82c7a2ea5ad93b1fe9edf5"],["F:/blog5/public/tags/傅红雪/index.html","014649382f8530c5fbf980354459619d"],["F:/blog5/public/tags/刘亦菲/index.html","b187e44efb35260814f0a7a7dbc63f7c"],["F:/blog5/public/tags/动态壁纸/index.html","050a158c98044218f68a36f6a8083d56"],["F:/blog5/public/tags/十年/index.html","dee96e350ce2c00706dfeb04723a8680"],["F:/blog5/public/tags/单机/index.html","73d453e5cc2c744e4e2d7f63d0a4551b"],["F:/blog5/public/tags/博客/index.html","d0905c0d71695b579653a26e8c078e5f"],["F:/blog5/public/tags/卷积神经算法/index.html","41e39343826d2043e23e4042fab21ce8"],["F:/blog5/public/tags/去水印/index.html","84133bd1e4b9f2e3e3e277009a01b064"],["F:/blog5/public/tags/叶青/index.html","d2e3fb772a632c67cf50aeb0d41f8f36"],["F:/blog5/public/tags/声之形/index.html","6c97c03207f217e085603c78219dc71f"],["F:/blog5/public/tags/女高中生的虚度日常/index.html","45edd4bb564c579969c1bff130e58c3f"],["F:/blog5/public/tags/孙蝶/index.html","7dd5c672c4309e0d4c68aecfcc9718e1"],["F:/blog5/public/tags/孟星魂/index.html","c218b0f0d40a019fd37f78919dd428ae"],["F:/blog5/public/tags/帮助文档/index.html","f1ec5b58ee691df869f0f1ac6a46ea80"],["F:/blog5/public/tags/年终总结/index.html","e95663c781641eea1f6a8b5387eaa4d2"],["F:/blog5/public/tags/广播剧/index.html","4c9e06fca489495017cc4922eb76f2d8"],["F:/blog5/public/tags/张睿/index.html","515251b7c4ce02403c21f7d70a97c14e"],["F:/blog5/public/tags/当时明月/index.html","b7a89e2cf55c5e5c037740a469351817"],["F:/blog5/public/tags/心が叫びたがってるんだ。/index.html","0abd7d91c323e48d46c761c9ea01bed2"],["F:/blog5/public/tags/心灵想要大声呼喊/index.html","3eee761127d7291321f4f4df2dab9090"],["F:/blog5/public/tags/感想/index.html","21a3d888b0d36cd50dd34a8c0238d7a0"],["F:/blog5/public/tags/战斗吧！球球/index.html","b95251666858c549b4bfeb1fde909107"],["F:/blog5/public/tags/扣图素材/index.html","58a4e4882e0835ca6fb30b69d51623af"],["F:/blog5/public/tags/抠图素材/index.html","d08954367b45681125ca373406aa86cf"],["F:/blog5/public/tags/新仙剑OL/index.html","0c552454ba17c6b02104b47139a6ac7d"],["F:/blog5/public/tags/新仙剑奇侠传online/index.html","a73b7c842447e4a026382b427df0cffc"],["F:/blog5/public/tags/新边城浪子/index.html","4db76a3bad30a70bd916344d7ed7ceef"],["F:/blog5/public/tags/星蝶/index.html","f3142210d423b25bf4e18a6c5a2a41b4"],["F:/blog5/public/tags/最惨女配是衬托/index.html","de67217be5b8eca142d15fdd3cc5917c"],["F:/blog5/public/tags/月玲珑/index.html","598857e322795373f039d7bcde5b36ad"],["F:/blog5/public/tags/月玲珑十周年/index.html","c3508e0e340ddfcaa1f1f65ea5c44d81"],["F:/blog5/public/tags/月玲珑小剧场游戏/index.html","889e49f8772aac7414983d2746b1f780"],["F:/blog5/public/tags/月玲珑配音社/index.html","8850f83e65a2d5e5ec8bd4b72847af02"],["F:/blog5/public/tags/朱一龙/index.html","fbe2ef486e9b951fd39de1897fa97caf"],["F:/blog5/public/tags/流星蝴蝶剑/index.html","4aaf545a1a6536abdcab0cbe82755259"],["F:/blog5/public/tags/浩气参天/index.html","b74daf148539886b63a40d2de08cf2aa"],["F:/blog5/public/tags/游戏整理/index.html","efbde296ed3160caf56e799d8175a0ca"],["F:/blog5/public/tags/甜蜜蜜/index.html","fb8d411a9f30c9d320104ac2f4551422"],["F:/blog5/public/tags/祝有涯/index.html","1526088cdb29457e57ea11736572cf85"],["F:/blog5/public/tags/神舞幻想/index.html","22017b511b0785b105c9490b917bb720"],["F:/blog5/public/tags/穹之扉/index.html","f2e47824797a8e5454f54f29a2cb2583"],["F:/blog5/public/tags/素材整理/index.html","53ecb1e29e54f8842c94a180e01d1ab8"],["F:/blog5/public/tags/网络/index.html","4b877bce863552ac90195e0bb0bc246a"],["F:/blog5/public/tags/羽裳/index.html","b8bbdfa8cb6e430244f94a449e17da68"],["F:/blog5/public/tags/聲の形/index.html","cd49920847785dd1eed284fe6e754d0f"],["F:/blog5/public/tags/虹七/index.html","e8dc156383f4ccbf048c5676abaa8a8e"],["F:/blog5/public/tags/虹猫蓝兔七侠传/index.html","5a99dbd5fab250a3124d558857dbdaa3"],["F:/blog5/public/tags/视频剪辑/index.html","9c71ffb9603b2ac3e50748238313d63f"],["F:/blog5/public/tags/视频剪辑/page/2/index.html","0a2d593776552fdcfd8ed2ea23566ee3"],["F:/blog5/public/tags/语音整理/index.html","e4322390bbc784d9e69261445bfb3216"],["F:/blog5/public/tags/资源提取/index.html","749dc75554d9813ebdf72c48b8966a04"],["F:/blog5/public/tags/赵灵儿/index.html","02b73929b43f34134625c075aa65d443"],["F:/blog5/public/tags/轩辕剑/index.html","96f309a13b3734945adfdb198a26fdf8"],["F:/blog5/public/tags/轩辕剑外传穹之扉/index.html","6a02b34bd67b1eb69122d8aae7a9c881"],["F:/blog5/public/tags/透明台标/index.html","6d1114c32ca9f63c76bd4327b2f044c9"],["F:/blog5/public/tags/陈意涵/index.html","ae1920cf3183c29d328078a64e55d27c"],["F:/blog5/public/tags/陈楚河/index.html","d4c35b0606e9e9c76ad068fcc17a9582"],["F:/blog5/public/tags/青槐/index.html","1cc829594d93a77a7dde9aee4313e491"],["F:/blog5/public/tags/音轨分离/index.html","7c64c2beee3a5e67cc377f36a40b716c"],["F:/blog5/public/tags/飞蝶/index.html","7108355673d679ad8ddf69f65b94de78"],["F:/blog5/public/tags/龙葵/index.html","61f335aabc674bffb90f0f3f0e839c80"],["F:/blog5/public/works/index.html","97aa4b6e83bcb6f5cc1b428a23347618"]];
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








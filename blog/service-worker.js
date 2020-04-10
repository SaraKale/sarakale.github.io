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

var precacheConfig = [["F:/blog5/public/aboutme/index.html","2cd15ee107440fab11b69ce7c12f88f8"],["F:/blog5/public/archives/2013/05/index.html","902801630d1f00d9fafae63b9c4ba054"],["F:/blog5/public/archives/2013/index.html","c8c7d3cc14e78d60ad1ea02db633fd1c"],["F:/blog5/public/archives/2015/07/index.html","aa98b835132abe10bd8cc3731ded155b"],["F:/blog5/public/archives/2015/index.html","a10e0ea47c4353333c3eb32fb2193125"],["F:/blog5/public/archives/2016/05/index.html","3a4bb066bd90358bfcfec47782f641bd"],["F:/blog5/public/archives/2016/10/index.html","1c881eef7cb19356eefbd3b924558ac0"],["F:/blog5/public/archives/2016/11/index.html","c6638a2c9dbe3ea7683a9ef09d199400"],["F:/blog5/public/archives/2016/12/index.html","9e0eb1824090b000654b618161569aaa"],["F:/blog5/public/archives/2016/index.html","5da1c6f0538000fd5c5a52aeda7c7047"],["F:/blog5/public/archives/2017/01/index.html","bf24c059215e7d2943b41b954cb8b52d"],["F:/blog5/public/archives/2017/02/index.html","c83f9e5cfa2335fc05965a68aae92b4b"],["F:/blog5/public/archives/2017/06/index.html","94a2fd8bf8dd53c3b2d63655f93a2500"],["F:/blog5/public/archives/2017/07/index.html","e094348a924231fb624f14fc224b3682"],["F:/blog5/public/archives/2017/08/index.html","da0b7a26ec7d1526609360bf913a5f5b"],["F:/blog5/public/archives/2017/09/index.html","fb506e809763529c0d027e4150241410"],["F:/blog5/public/archives/2017/11/index.html","828cd4f673fdda66eaad15fb7ba1b179"],["F:/blog5/public/archives/2017/index.html","b141fa353a7eaee162813052e17fde4f"],["F:/blog5/public/archives/2017/page/2/index.html","83c0e3ed74749fa2a976149f990ebf56"],["F:/blog5/public/archives/2018/01/index.html","6862a2df98ca08874a7968ea2ab40f99"],["F:/blog5/public/archives/2018/02/index.html","0ea67d00a523e7c14490d90424285df6"],["F:/blog5/public/archives/2018/04/index.html","b11a038715bb9828a2aa1850a948fc6f"],["F:/blog5/public/archives/2018/06/index.html","bf02e973a51870d80de23349343ba005"],["F:/blog5/public/archives/2018/07/index.html","97fb0bbf4ab39c0bedc0b94c13f88f22"],["F:/blog5/public/archives/2018/08/index.html","8b36dcd8560e48c2776e448c5f8ee9a7"],["F:/blog5/public/archives/2018/09/index.html","4ab5acff8c153cd04148d3bb7e027593"],["F:/blog5/public/archives/2018/10/index.html","5388d2f374f329da8ac8a858058d338b"],["F:/blog5/public/archives/2018/11/index.html","f3cfd278197fcea1515323fedaa4fc8c"],["F:/blog5/public/archives/2018/12/index.html","765c462601cbe5d74514225efd383fed"],["F:/blog5/public/archives/2018/index.html","d570688620617da977565909acb41b30"],["F:/blog5/public/archives/2018/page/2/index.html","b9418e6fe1fe0847658474a4e0461a80"],["F:/blog5/public/archives/2019/01/index.html","b1c0f0212daa2b5a204b845160cde26d"],["F:/blog5/public/archives/2019/02/index.html","f041227e93ea0f90326eb0067b6a64d5"],["F:/blog5/public/archives/2019/04/index.html","cf9d961aab5b59912f5450cafab8f880"],["F:/blog5/public/archives/2019/06/index.html","f0ac75ab99aaf122c02f04fbc7d12c07"],["F:/blog5/public/archives/2019/07/index.html","3740766bd01a993c6342f4ca46d7fccf"],["F:/blog5/public/archives/2019/08/index.html","c3f9a15b4bac0e84623c6572b84c6166"],["F:/blog5/public/archives/2019/10/index.html","4638f8c35596381e1b76a050390180f8"],["F:/blog5/public/archives/2019/11/index.html","41ee8d074033cb1174fcd6aff843d58f"],["F:/blog5/public/archives/2019/index.html","e9694a5cb75c09820a90544e3a506708"],["F:/blog5/public/archives/2019/page/2/index.html","1bcbb40078b37b0e3912817f4dfa9a58"],["F:/blog5/public/archives/2020/01/index.html","fb43d087f124b76f0427b9ee2efa4e41"],["F:/blog5/public/archives/2020/02/index.html","7d6e1f0d6e9d5e5f4d3545cd74058848"],["F:/blog5/public/archives/2020/03/index.html","51b55d7a19aa2f1bcea29bb3b3a3b67d"],["F:/blog5/public/archives/2020/index.html","e9a8fca39c5f7df9b0325dab2746b058"],["F:/blog5/public/archives/index.html","2e6b38497259760418111651f125d1cf"],["F:/blog5/public/archives/page/2/index.html","03585531852143300487edf3fe485810"],["F:/blog5/public/archives/page/3/index.html","114c1845acb0a07b276a54c33f1666df"],["F:/blog5/public/archives/page/4/index.html","df0fac5f124b1a4440db0c0b951e3bdf"],["F:/blog5/public/archives/page/5/index.html","ec969f79e46639dd7f264083521c9dc1"],["F:/blog5/public/archives/page/6/index.html","2df2aa26a3f7ea2933376f8c95770808"],["F:/blog5/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/blog5/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/blog5/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/blog5/public/bangumis/index.html","2e9afe97867e41308670db03d1e6adb8"],["F:/blog5/public/categories/index.html","66c0438cdb9b363164151b042930ec16"],["F:/blog5/public/categories/个人作品/index.html","3589e600fe9957219462d68feaefa880"],["F:/blog5/public/categories/个人作品/page/2/index.html","02ce2e1e56fcafecfcd6aeaccbe05921"],["F:/blog5/public/categories/仙剑资源整理/index.html","829eeb15f21cf181b404f67c4ffff9d6"],["F:/blog5/public/categories/其他/index.html","83321cf06b59a54490c963a950623cb9"],["F:/blog5/public/categories/工具资源/index.html","51fd971446b4d9d591061eaa8fe188ad"],["F:/blog5/public/categories/感想与安利/index.html","c768b093dc70f4f4aab911962c83cb7d"],["F:/blog5/public/categories/感想与安利/page/2/index.html","ec8e0da61bd362e2790923da70d711ee"],["F:/blog5/public/categories/生活随记/index.html","36cfcf291e266f998c6fe276fb53446c"],["F:/blog5/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/blog5/public/css/custom.css","2d7a713e47df8c36b70d6f178e8f7235"],["F:/blog5/public/css/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["F:/blog5/public/css/iconfont/demo_index.html","c0edf8b25db0b64e0c2ff956192dfbf8"],["F:/blog5/public/css/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["F:/blog5/public/css/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["F:/blog5/public/css/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["F:/blog5/public/css/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["F:/blog5/public/css/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["F:/blog5/public/css/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["F:/blog5/public/css/index.css","4e61e17863c21802788555b5ff21e129"],["F:/blog5/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog5/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/blog5/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/blog5/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/blog5/public/img/loading.gif","a994cd022cdff0a80c6cf57173c0454d"],["F:/blog5/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["F:/blog5/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/blog5/public/index.html","2ba8822fcff6909adf355553df4d45e8"],["F:/blog5/public/js/bg.js","3a9700ba0f07b5e920da726874395d19"],["F:/blog5/public/js/main.js","70aa96d543fac29217bee50cc64b721c"],["F:/blog5/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["F:/blog5/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["F:/blog5/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/blog5/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/blog5/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/blog5/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["F:/blog5/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/blog5/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/blog5/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["F:/blog5/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["F:/blog5/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["F:/blog5/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/blog5/public/links/index.html","713fa7aef061addd43fc6c9a4592502c"],["F:/blog5/public/message/index.html","428344a0b70653ccd13b5837c32a027e"],["F:/blog5/public/music/index.html","c894aed7dc7d5a0fb278dba75ab9f72a"],["F:/blog5/public/page/2/index.html","a48f5825e35fb1917f7377d8eb8c9054"],["F:/blog5/public/page/3/index.html","3a1ebc15ac6ab3b9c0e1ea33e700b7fc"],["F:/blog5/public/page/4/index.html","2961bc932a0739f05288f3892ae46956"],["F:/blog5/public/page/5/index.html","862dba9500fabfe90dd6753e00def2e5"],["F:/blog5/public/page/6/index.html","a63996cf41b375d7c19c0b6fee47319b"],["F:/blog5/public/posts/1270.html","d6172cae2b0838e1e9769e33f8aa5380"],["F:/blog5/public/posts/12770.html","4cc7f9b85d9d4020072adc536193b449"],["F:/blog5/public/posts/14580416.html","6a4f6a06899db0967213fb4272e42bc2"],["F:/blog5/public/posts/15929.html","cb7732ac8fcfb9a5c8b0b27b07d12c4a"],["F:/blog5/public/posts/15959.html","7ffac8380c6f6627d07f513d3c01da55"],["F:/blog5/public/posts/173.html","1c37e161272dbed1adef9a72bdf7fcc6"],["F:/blog5/public/posts/18647.html","1b6453ec6a712a8263d02a6f437abd13"],["F:/blog5/public/posts/19368.html","5cc378a16556ad27a81f112c8d438cf9"],["F:/blog5/public/posts/19549.html","b4dd4ff0caa65e1fce02120a5b325304"],["F:/blog5/public/posts/1dbec013.html","be1454f73015b06c592d477d5c1f9a35"],["F:/blog5/public/posts/20133.html","d493372b6d268510c17d605dbb6ac8e3"],["F:/blog5/public/posts/20764.html","a6d9126881c951ae54e941e4b957845b"],["F:/blog5/public/posts/2137.html","b9ed3824c245c8a9f0dc6cb246d04aa4"],["F:/blog5/public/posts/27247.html","dab07151f171626a3acec797919d6f28"],["F:/blog5/public/posts/28180.html","34c5b0b1385d9585c8a397a010633257"],["F:/blog5/public/posts/31d725ea.html","d011da11295e86c83bb6ae966b885a64"],["F:/blog5/public/posts/34771.html","79e73805487b66113346148db83e355b"],["F:/blog5/public/posts/35192.html","ad8f0a2536f3e7e8643e5f94a347c444"],["F:/blog5/public/posts/35671.html","28dc6ff7860cce74f7c89a8b68fdd833"],["F:/blog5/public/posts/364.html","47accfd01bb7f373d8fea97f21495c3c"],["F:/blog5/public/posts/38726.html","cde383c8db07a8608c6036f85ce13f7e"],["F:/blog5/public/posts/44082.html","ba91db70bad357f6561612928dca7e2f"],["F:/blog5/public/posts/45026.html","add7e2ba059f007e3ae2077277cd75b9"],["F:/blog5/public/posts/48037.html","0b1706e47c260354d179abbf4f03cf6d"],["F:/blog5/public/posts/491b225d.html","46af6c5d5326bd0ed314a8ec3051c4f4"],["F:/blog5/public/posts/50615.html","05423ce197c9ca29842cb790c05bf08b"],["F:/blog5/public/posts/51793.html","4c69c2cd3ef3a2350a6e827bb60de0ec"],["F:/blog5/public/posts/51888.html","cab5ea74c74f63a2340486ad3889bfe2"],["F:/blog5/public/posts/51993.html","2d38a3438ee90db751aaae2f91665748"],["F:/blog5/public/posts/535faed9.html","b82cc914b1080813003eab705a843b01"],["F:/blog5/public/posts/55032.html","2f8810f18b50113015bc952bbf8facb1"],["F:/blog5/public/posts/55741.html","bc1c08abc6acb0da322796d74e11ddda"],["F:/blog5/public/posts/57a901f0.html","98b3fafc16a5d18ae7a56ad9d6697ca2"],["F:/blog5/public/posts/59ca7e41.html","9fbfc3646d24997d1125f852af578cf0"],["F:/blog5/public/posts/5fd82dbe.html","7c3fc9752a7fa86570e53b52a2084395"],["F:/blog5/public/posts/62550.html","4afbd595e0d506dfd3e6aebc8fd7493d"],["F:/blog5/public/posts/64777.html","de9873e274dd0d44019eba55668fc15b"],["F:/blog5/public/posts/64850.html","6d9c0baa69a44c5ad474aef7b3c40fb2"],["F:/blog5/public/posts/65e843f4.html","1502682e1b7045f4cb29e4e027b2bd41"],["F:/blog5/public/posts/7e3d2d4.html","399f8dbae0aa67414979e944f458d03a"],["F:/blog5/public/posts/845ca7c4.html","859c4730a376b01cffbff6123610d5ab"],["F:/blog5/public/posts/898c3bb3.html","113cdd279ba3f9da962287ec3c4f63e6"],["F:/blog5/public/posts/964d468f.html","096038129217671131ee08724785c108"],["F:/blog5/public/posts/afcf312e.html","e995afb661626039070b1e337dc6702f"],["F:/blog5/public/posts/bc1c3bac.html","8753ca34936cd1a03985a606fcd946db"],["F:/blog5/public/posts/be1f2db7.html","871538f8e46b53e84485e3d7fa713aaa"],["F:/blog5/public/posts/c0404e49.html","12927d704ca133c438967992ba51dc83"],["F:/blog5/public/posts/cafe661f.html","ba80045c7550f4e6e539aa811b4032f9"],["F:/blog5/public/posts/dc17b247.html","9ff224fff1ee4be513c5e909aaf67eed"],["F:/blog5/public/posts/ddef8e37.html","25a7e19288e1c7ee4de712ee579cc4fa"],["F:/blog5/public/posts/eb9d5593.html","02306821214f5cc6bbc6a522387a729b"],["F:/blog5/public/posts/edbff87d.html","325d76c3166c1eedd6b7c8b185b4931e"],["F:/blog5/public/posts/ee58e1ae.html","0ed080a673f8ded15db1dc2b257d811c"],["F:/blog5/public/steamgames/index.html","bbc150ea9a76d3965056aea6564409aa"],["F:/blog5/public/tags/2019随意链接大赛/index.html","ccdebe1517acad45f6e7b520cc8a3140"],["F:/blog5/public/tags/2D表情/index.html","682e7fc7859028277772f9c232a1eeaa"],["F:/blog5/public/tags/AI/index.html","619c561f2d8d3eb394adb35507a0883b"],["F:/blog5/public/tags/AMV/index.html","17ec5da306b5d7aaf083896b7eb9502b"],["F:/blog5/public/tags/AVS/index.html","4b30e5200dd66d5e48eeb58642583c1b"],["F:/blog5/public/tags/Aviutl/index.html","7f8105fd047542c2e25d1fe6dac51f7d"],["F:/blog5/public/tags/B站/index.html","1b1078055ed3dc34786b8e5ac64276c3"],["F:/blog5/public/tags/CLANNAD/index.html","5d31a24c3eb8784fb5c4966a3b9abff5"],["F:/blog5/public/tags/Hexo/index.html","ca36f942272e7558fd94245dd7cba495"],["F:/blog5/public/tags/Key/index.html","91e0a48a40024f74ec7286cefe30f3fe"],["F:/blog5/public/tags/Let-s-encrypt/index.html","4df1b072703da31ba3222289ea17d050"],["F:/blog5/public/tags/MAD/index.html","dfce5cbd66ccf4c5d9c042beb34a4424"],["F:/blog5/public/tags/MD/index.html","9ee2cb7a0039c9298b922ac8e0983ad4"],["F:/blog5/public/tags/Markdown/index.html","8886172ed0db901b19d29f2b60ae9f52"],["F:/blog5/public/tags/RPG-maker-MV/index.html","be5d72de6f135a09d577ef7a8ac180c2"],["F:/blog5/public/tags/SSL/index.html","e8c7de64bf40b57178f31c9316b27776"],["F:/blog5/public/tags/Spleeter/index.html","93b0ae94cdd1667cf0c7082e74f55661"],["F:/blog5/public/tags/Topaz-AI-Gigapixel/index.html","752651409a43ddaf3ca490c6062dbe0e"],["F:/blog5/public/tags/Waifu2x/index.html","082e99b351964f2613ea4540db2e89ff"],["F:/blog5/public/tags/bilibili/index.html","77cd2a848a9814a18a21957125b89211"],["F:/blog5/public/tags/index.html","7e6b4b2a8518adb34a09ddde46d9ed66"],["F:/blog5/public/tags/npm/index.html","12aecc81b76c630af463fbe9b2e44407"],["F:/blog5/public/tags/steam/index.html","097198efe4409e438d471c362ff98f99"],["F:/blog5/public/tags/个人作品/index.html","f6799202f337944ce2155d4494d17d9b"],["F:/blog5/public/tags/个人作品/page/2/index.html","124c88528801e8882b7251316938b87d"],["F:/blog5/public/tags/仙剑/index.html","83299a993a954246e14fb29d43685855"],["F:/blog5/public/tags/仙剑七/index.html","e0004e7bf95cce7c6e248a1d57ceadcc"],["F:/blog5/public/tags/仙剑五/index.html","8fc71dca34a57b1e3662a955ec1cf51f"],["F:/blog5/public/tags/仙剑六/index.html","396e4acb5a67f0b4e4170da88140479e"],["F:/blog5/public/tags/仙剑剧情对话/index.html","11e6edc4c5aed0d4924e60c345d0b017"],["F:/blog5/public/tags/仙剑奇侠传/index.html","c97ba1afc8cd19eb45bc2b3244aea842"],["F:/blog5/public/tags/仙剑奇侠传七/index.html","6a9cf0811cdc383cabeb7315e3b58d7e"],["F:/blog5/public/tags/仙剑奇侠传三/index.html","82a8f2ba43082abd782bc5c76ff3758a"],["F:/blog5/public/tags/仙剑奇侠传三外传/index.html","3fae44933f4b0ff9ca03fb69d6f4344a"],["F:/blog5/public/tags/仙剑奇侠传二/index.html","9d6e15f81f916013598c4ac3ab4ca6d4"],["F:/blog5/public/tags/仙剑奇侠传五/index.html","9da446cd2bb9b10af1cbf80d5f9db890"],["F:/blog5/public/tags/仙剑奇侠传五前传/index.html","ba8fe93662a7e0e81d44e70061b54d87"],["F:/blog5/public/tags/仙剑奇侠传六/index.html","2d9b0c90d4ed2340f040036017548e5b"],["F:/blog5/public/tags/仙剑奇侠传四/index.html","16f095138ead341caf73ef0f54f71483"],["F:/blog5/public/tags/仙剑奇侠传幻璃镜/index.html","3433e81c459725e0518f8816cad14e4d"],["F:/blog5/public/tags/仙剑手游/index.html","5e597177bb6cd348572573c6872a0f02"],["F:/blog5/public/tags/仙剑春晚/index.html","c5aba954f68a0cd067b286d138a0febf"],["F:/blog5/public/tags/仙剑最惨女配剧场/index.html","b94d5154a892b0cc4f24f6b350b6c692"],["F:/blog5/public/tags/仙剑混剪/index.html","b9e011df28af84750b1c0381a0e6efde"],["F:/blog5/public/tags/仙梦长留/index.html","46333944168440b24f6e847b1b0552a4"],["F:/blog5/public/tags/傅红雪/index.html","ea6281f88e0aab737b487a09212d0531"],["F:/blog5/public/tags/刘亦菲/index.html","4cc9e23816ac4e86a9cf272c5bca16f4"],["F:/blog5/public/tags/动态壁纸/index.html","d6a0ed548a94c46235919c340a2ba9fc"],["F:/blog5/public/tags/十年/index.html","96379686d1a7e6d129854ba293aeede3"],["F:/blog5/public/tags/单机/index.html","bb7754a501efb9a6a47473f21bbeabaa"],["F:/blog5/public/tags/博客/index.html","823064d3198db03098d68b4c237a9da9"],["F:/blog5/public/tags/卷积神经算法/index.html","6d602928f2f86544e5233f88024bd41f"],["F:/blog5/public/tags/去水印/index.html","6864981a45bb4bbaa06c77b56938f67a"],["F:/blog5/public/tags/叶青/index.html","3f28fe810fd8233677f07ba2ab1b3fde"],["F:/blog5/public/tags/哔哩哔哩/index.html","943b9b00cbe43e0d424b5c2786a505d6"],["F:/blog5/public/tags/声之形/index.html","fa0a573ff5ef9453100ea61971683257"],["F:/blog5/public/tags/女高中生的虚度日常/index.html","24315ce97408983d1b3fd2367b23d9e1"],["F:/blog5/public/tags/孙蝶/index.html","08897ef3eab24d65e43ca3ee29845d08"],["F:/blog5/public/tags/孟星魂/index.html","69e8de42fb4fc5fd1ff4a1c81b031a3b"],["F:/blog5/public/tags/帮助文档/index.html","3af578d3f7632c9edddf117cc0317a3a"],["F:/blog5/public/tags/年终总结/index.html","591d63cf6cda717bf37d7ba8490ac0f1"],["F:/blog5/public/tags/广播剧/index.html","a34c2ef546f29595ce3aedf06e578558"],["F:/blog5/public/tags/张睿/index.html","49e8101bcdc12c1a1c73caa19db6bff2"],["F:/blog5/public/tags/当时明月/index.html","d710636c26cb5a15aabc6f4d16e55e4a"],["F:/blog5/public/tags/心が叫びたがってるんだ。/index.html","883efa0b0885aafed266808c03ad756b"],["F:/blog5/public/tags/心灵想要大声呼喊/index.html","bd681c8bda944914e8d2cea01b78d585"],["F:/blog5/public/tags/感想/index.html","5eade2a081ce9b0943cf5524b36d1c4e"],["F:/blog5/public/tags/战斗吧！球球/index.html","05ac446bfaaab974091c22981e36588d"],["F:/blog5/public/tags/扣图素材/index.html","4c58bafc8bcbd1cfdd4e6e5a71d600d1"],["F:/blog5/public/tags/抠图素材/index.html","bc0841601abbb0fb5b4cd4325fe6327c"],["F:/blog5/public/tags/新仙剑OL/index.html","81d6b3b98e4da4f69d1e36f033dfb085"],["F:/blog5/public/tags/新仙剑奇侠传online/index.html","4eeb0f0a5d5fe34124b2eb2e1449cdad"],["F:/blog5/public/tags/新边城浪子/index.html","94e21cf23e477b1a35545f708acc1040"],["F:/blog5/public/tags/星蝶/index.html","5da6811d30dfa387e28b28b5d2f8e1b6"],["F:/blog5/public/tags/最惨女配是衬托/index.html","cc07ae48ba4986d7ae68a6c763fcc1fa"],["F:/blog5/public/tags/月玲珑/index.html","7d49cf14cd5ae5aad383c0348a1d44b6"],["F:/blog5/public/tags/月玲珑十周年/index.html","97cbfb7ab8da48b682913ccb2c569b91"],["F:/blog5/public/tags/月玲珑小剧场游戏/index.html","38c2129304b64c91d9d792f061b1566c"],["F:/blog5/public/tags/月玲珑配音社/index.html","46deff98de3bc73691f089d3d0d1fe81"],["F:/blog5/public/tags/朱一龙/index.html","d19313ab24e517c1b9315c5bfae45ffe"],["F:/blog5/public/tags/流星蝴蝶剑/index.html","cd16665696e7262fb117e093a3ae97dc"],["F:/blog5/public/tags/浩气参天/index.html","4c293035292b8778a3b31be87678c231"],["F:/blog5/public/tags/游戏整理/index.html","131fcd253f95a370ad6edbeb3b0df6fc"],["F:/blog5/public/tags/甜蜜蜜/index.html","2d29e0f3ebfdf286bdca10220d361ae2"],["F:/blog5/public/tags/祝有涯/index.html","7706a0bf12ebafb7ed3f45b8f228a08d"],["F:/blog5/public/tags/神舞幻想/index.html","d33e6585c694f355cd364e6f82455aef"],["F:/blog5/public/tags/穹之扉/index.html","e3a21753c18b74df0017bed0cb7073fd"],["F:/blog5/public/tags/素材整理/index.html","ceabb46a88b95c0eeaef2babf6eeb541"],["F:/blog5/public/tags/网络/index.html","ba85f5dc80f368fae33674e7554af2a0"],["F:/blog5/public/tags/羽裳/index.html","3bbe04e21555da1b7d2dd040a6d856c2"],["F:/blog5/public/tags/聲の形/index.html","1325e2e7ffb5d936b5e3bd73f21ef44b"],["F:/blog5/public/tags/虹七/index.html","35f4bada94c051256f49b2c03ab9d541"],["F:/blog5/public/tags/虹猫蓝兔七侠传/index.html","59cfcf7f2fa12867c345ab78944d6ed8"],["F:/blog5/public/tags/视频剪辑/index.html","9bffb8820ccb5a487e82db6edc26b8af"],["F:/blog5/public/tags/视频剪辑/page/2/index.html","ab51c25bcacf381205ef3d7f383ff83e"],["F:/blog5/public/tags/语音整理/index.html","d8985953f7dd29a140020ac5249659e2"],["F:/blog5/public/tags/资源提取/index.html","336de6dc4464b130b237db53ab9422c8"],["F:/blog5/public/tags/赵灵儿/index.html","f8b37810cf425e6a42305e51813b2440"],["F:/blog5/public/tags/轩辕剑/index.html","cdc6ce0905a84d2bb20d2a00d4b4e24a"],["F:/blog5/public/tags/轩辕剑外传穹之扉/index.html","cb54f2295e7ea21bf261ba5098df9bb2"],["F:/blog5/public/tags/透明台标/index.html","7088da23b856866605cc3e1f870e5163"],["F:/blog5/public/tags/陈意涵/index.html","b6bcf141c6d46bc016e38ecde1c661ac"],["F:/blog5/public/tags/陈楚河/index.html","5bfc88536e0d10bd66dae1e231b2350e"],["F:/blog5/public/tags/青槐/index.html","96b48cd56851ded0726734815e34a3de"],["F:/blog5/public/tags/音轨分离/index.html","438de86673ddd72b0ad38d5c3ff5f119"],["F:/blog5/public/tags/飞蝶/index.html","b2ff04841c7234bfe003addd2ae82be2"],["F:/blog5/public/tags/龙葵/index.html","0fd5aea4be8a52f36baff665cc42c30f"],["F:/blog5/public/works/index.html","7fab68f0d94eeda472fd531bf35c91cd"]];
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








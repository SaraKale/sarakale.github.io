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

var precacheConfig = [["F:/blog5/public/aboutme/index.html","ad4d5e0b100be499fcfc3bdf45602c8d"],["F:/blog5/public/archives/2013/05/index.html","f5d2180ee60a3b08d63617864b53c7ac"],["F:/blog5/public/archives/2013/index.html","5fbe0ebe6a43b01df3da069beb59c2f0"],["F:/blog5/public/archives/2015/07/index.html","93feabb5ddc69c04544fdb40554530f7"],["F:/blog5/public/archives/2015/index.html","7c9e96ced46a20e9766e9ce3fd707f78"],["F:/blog5/public/archives/2016/05/index.html","5d44fd4c6f8f340fd63d2b246f22178a"],["F:/blog5/public/archives/2016/10/index.html","c20239806334caa5c0079942d4156f25"],["F:/blog5/public/archives/2016/11/index.html","9ee1f7386ea656370f0ef680f5a6eeb2"],["F:/blog5/public/archives/2016/12/index.html","76b67499780d150977b54f3f75610bec"],["F:/blog5/public/archives/2016/index.html","94b13ecce8d20d66d41602eff9bbd031"],["F:/blog5/public/archives/2017/01/index.html","c1ff4eeb756900827c04e2f7ab3db894"],["F:/blog5/public/archives/2017/02/index.html","af82ebf78b532ec25c23b6d20e7094cf"],["F:/blog5/public/archives/2017/06/index.html","de47d8f7965e68cf8b611166d62f2cff"],["F:/blog5/public/archives/2017/07/index.html","c7d755c246e10bc2b2a220a9c9b4a37c"],["F:/blog5/public/archives/2017/08/index.html","342b49b581815847f558782e874c4387"],["F:/blog5/public/archives/2017/09/index.html","09889604c5c1a4382c6aebbc70fbc484"],["F:/blog5/public/archives/2017/11/index.html","0db5c0dbf9b91c9a045d26f000881f6d"],["F:/blog5/public/archives/2017/index.html","74be4d2730384e5d3a50bc61c38159b0"],["F:/blog5/public/archives/2017/page/2/index.html","a5b83ef1d25569f4943dc7731e1d5f52"],["F:/blog5/public/archives/2018/01/index.html","1323ed371ed44aa4e25f5b45e60b1eae"],["F:/blog5/public/archives/2018/02/index.html","c7b4e4cddbb564d96bc0d8634c41592f"],["F:/blog5/public/archives/2018/04/index.html","22732f89c7e2777f7f5f102b856d91e1"],["F:/blog5/public/archives/2018/06/index.html","c2a0b072d675d8efe84e0bb6594dae52"],["F:/blog5/public/archives/2018/07/index.html","efa28e7229d7da2f229bdbc5f7795944"],["F:/blog5/public/archives/2018/08/index.html","c2ebe72f0ad71e6845951aa02eab293a"],["F:/blog5/public/archives/2018/09/index.html","72cee35a9cf57e7b660d61f688dd9b71"],["F:/blog5/public/archives/2018/10/index.html","c7e73baf56849a6da928d2333f9e89ef"],["F:/blog5/public/archives/2018/11/index.html","ae4a1ddb7875b15f9f3316a8555e639e"],["F:/blog5/public/archives/2018/12/index.html","7c5da011631a2886ebe1342d5f263e43"],["F:/blog5/public/archives/2018/index.html","0b406655eda6c5c479ed679f57aff0c9"],["F:/blog5/public/archives/2018/page/2/index.html","25da5bc3db9aa5d6be47b0793430154c"],["F:/blog5/public/archives/2019/01/index.html","4a1cf66dc4fa1d61fb85f4d0eaf1c817"],["F:/blog5/public/archives/2019/02/index.html","b6a08f211f101d5135053e8da2d9e686"],["F:/blog5/public/archives/2019/04/index.html","56ddb0642966c64c22b0fad5d807f90b"],["F:/blog5/public/archives/2019/06/index.html","aba1a47282fb77ebfaa939b76fd439fc"],["F:/blog5/public/archives/2019/07/index.html","7b0050853db50d421852c4e0c91a2c22"],["F:/blog5/public/archives/2019/08/index.html","cac1c3fafe646eaa86ca4c0a7d1f0a18"],["F:/blog5/public/archives/2019/10/index.html","84728ad3ccc33d0daab136f6f8c70c25"],["F:/blog5/public/archives/2019/11/index.html","2240109f153e5d54fa8e86cfa0bceae1"],["F:/blog5/public/archives/2019/index.html","3a8fd87ea92326daa8d056ae36ee7fbd"],["F:/blog5/public/archives/2019/page/2/index.html","58298ac6583d145f2910e7f388bd3b5c"],["F:/blog5/public/archives/2020/01/index.html","d3e736608332038f5962b2d6d10625e4"],["F:/blog5/public/archives/2020/02/index.html","4c5c1a459961364df1b64a57839fb8b9"],["F:/blog5/public/archives/2020/03/index.html","e043d79ef9a83683af9c8cbc49143958"],["F:/blog5/public/archives/2020/index.html","674ec40c508d62561ff017dfb4438dfc"],["F:/blog5/public/archives/index.html","327e4d5180d4974ac60765021b95e35f"],["F:/blog5/public/archives/page/2/index.html","b242bfb47bc9d46d471dcc39ee1c8786"],["F:/blog5/public/archives/page/3/index.html","0080f95aa1565b087499c089a99a852f"],["F:/blog5/public/archives/page/4/index.html","71e0288f36aa9fb455f4387ca481eb4a"],["F:/blog5/public/archives/page/5/index.html","9c0b9c15f55b5b221be1228a2e5c45c8"],["F:/blog5/public/archives/page/6/index.html","ac7dafbbb92ef31b9be70402e19453e2"],["F:/blog5/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/blog5/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/blog5/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/blog5/public/bangumis/index.html","a49e8abce6c86fb3a70c6fd02ce1be03"],["F:/blog5/public/categories/index.html","eea603feddf7a1d199be6343e3a9e944"],["F:/blog5/public/categories/个人作品/index.html","405f33917247f059ba6679d35602207f"],["F:/blog5/public/categories/个人作品/page/2/index.html","65d9e66cab5365b8abb5897c0d2ef410"],["F:/blog5/public/categories/仙剑资源整理/index.html","f1827259111b5ec3fd3186aa1d09ee0d"],["F:/blog5/public/categories/其他/index.html","698a9c6602f654bc13dac8340b875b83"],["F:/blog5/public/categories/工具资源/index.html","0e7d79ee5bd4158b565782f5ab5c5950"],["F:/blog5/public/categories/感想与安利/index.html","468c359a4483910513cbe39757a2c302"],["F:/blog5/public/categories/感想与安利/page/2/index.html","0dd489a6e5d03b979ff0940009cefe2c"],["F:/blog5/public/categories/生活随记/index.html","2c788934fbe5b0226f1aef4b2a53d635"],["F:/blog5/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/blog5/public/css/custom.css","88bc14ce61bcdabb6762db1c3d0e0f34"],["F:/blog5/public/css/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["F:/blog5/public/css/iconfont/demo_index.html","c0edf8b25db0b64e0c2ff956192dfbf8"],["F:/blog5/public/css/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["F:/blog5/public/css/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["F:/blog5/public/css/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["F:/blog5/public/css/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["F:/blog5/public/css/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["F:/blog5/public/css/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["F:/blog5/public/css/index.css","512acf9036a738842c77450817eb241d"],["F:/blog5/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog5/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/blog5/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/blog5/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/blog5/public/img/loading.gif","a994cd022cdff0a80c6cf57173c0454d"],["F:/blog5/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["F:/blog5/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/blog5/public/index.html","6892094801e343c1443b9f94caf51ed8"],["F:/blog5/public/js/main.js","48edda5e9ced4270307a1a4f4b38c1a2"],["F:/blog5/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["F:/blog5/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["F:/blog5/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/blog5/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/blog5/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/blog5/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["F:/blog5/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/blog5/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/blog5/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["F:/blog5/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["F:/blog5/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["F:/blog5/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/blog5/public/links/index.html","7bd05dca1209f2f7b97a3b8f4a61a3a2"],["F:/blog5/public/message/index.html","832f6099f43fb16632ad22555f02e672"],["F:/blog5/public/music/index.html","5b4a4f80c2de06e29999d726836d3613"],["F:/blog5/public/page/2/index.html","5ff54d659208c4599b92870348601940"],["F:/blog5/public/page/3/index.html","fbbd441500d25e41d0516dbe383a9a3f"],["F:/blog5/public/page/4/index.html","9443095bc32d5e4e59d92f62b528a7f6"],["F:/blog5/public/page/5/index.html","5e80edb12cfb7ddacdc135ff60b3c7ed"],["F:/blog5/public/page/6/index.html","b895addf7951088ebacdcddf2f78ee24"],["F:/blog5/public/posts/1270.html","3ca8d2d185597cd67ec173beeeb47db9"],["F:/blog5/public/posts/12770.html","ab53dcee7f9b9287f76164b9cb72e72b"],["F:/blog5/public/posts/14580416.html","4cb443975863ab9e1a1052715832bcd2"],["F:/blog5/public/posts/15929.html","9be644d036cec15221511ef40ba49134"],["F:/blog5/public/posts/15959.html","2015a219621db887834349d76a262278"],["F:/blog5/public/posts/173.html","576427ed819c8f3a99f119de871ff338"],["F:/blog5/public/posts/18647.html","0ed3157f8bf450b35a5bb2337e0d2c09"],["F:/blog5/public/posts/19368.html","7c477d64be950809757806877690baf0"],["F:/blog5/public/posts/19549.html","93793c6f10ff13b88d76963aa2f034d1"],["F:/blog5/public/posts/1dbec013.html","dd875356214ae34738cde2f28bed34c7"],["F:/blog5/public/posts/20133.html","08aa88475d076aa9a6b074b6bb90ff8a"],["F:/blog5/public/posts/20764.html","6a8fe73597816e12972d9fce6fd1deec"],["F:/blog5/public/posts/2137.html","87d2625becfafc061feeb9cc4755fbe5"],["F:/blog5/public/posts/27247.html","ab55054624636e43f38341a9fa232047"],["F:/blog5/public/posts/28180.html","554cb573f39a5f8c5679889cf09726d2"],["F:/blog5/public/posts/31d725ea.html","cd4640a4180e5f4e18c6bf1958d63a4b"],["F:/blog5/public/posts/34771.html","1b9aa47430f2fd56beaf1f499398bd4f"],["F:/blog5/public/posts/35192.html","7017918ef9a55c6acbc0ecdd985c86d0"],["F:/blog5/public/posts/35671.html","6adee6f87dc1b13a9a9246ae4a3097fc"],["F:/blog5/public/posts/364.html","eda0616f44efbb0fd68864d135b9c63f"],["F:/blog5/public/posts/38726.html","482b309e520d4e50aee2affc5336e204"],["F:/blog5/public/posts/44082.html","e695eff098573dccdd4d380fa71468bb"],["F:/blog5/public/posts/45026.html","3d4f9b60f0a1ede0b984d209ae2edcfc"],["F:/blog5/public/posts/48037.html","22571e831d061efa169d6769a49d1347"],["F:/blog5/public/posts/491b225d.html","67d9baf2c9a0e8573ee739d5a218c6f1"],["F:/blog5/public/posts/50615.html","3e29ed5d339c62810c14ea70fd0306f5"],["F:/blog5/public/posts/51793.html","886da69ce7751bbf24ea47851427f97c"],["F:/blog5/public/posts/51888.html","23789f9bdd702ba350d933f4d6761449"],["F:/blog5/public/posts/51993.html","b4287d95440168e32b2289fb42466298"],["F:/blog5/public/posts/535faed9.html","b5ae547785d178d10f0faf239ab57445"],["F:/blog5/public/posts/55032.html","ef00cf4b8fd6f1f3621ccc8ee9f67260"],["F:/blog5/public/posts/55741.html","2f8cffdd62163bbb1450b072c0235216"],["F:/blog5/public/posts/57a901f0.html","735859c18ea0db3220af389b64a0eff4"],["F:/blog5/public/posts/59ca7e41.html","cac12c8852815a7278dca0b71e8b1d3e"],["F:/blog5/public/posts/5fd82dbe.html","89fe04ae5594f1d3f50a70186c9a52ef"],["F:/blog5/public/posts/62550.html","ac2719e57a9f6bd009c575884ac17ba8"],["F:/blog5/public/posts/64777.html","cc8c5bfea08c90854013a4a4e98ab720"],["F:/blog5/public/posts/64850.html","d31a7d87758b9df1a7f89df8e0dc4bbd"],["F:/blog5/public/posts/65e843f4.html","e08d1303eefc06b6bdf8583585b8d163"],["F:/blog5/public/posts/7e3d2d4.html","8e5b76874ff7eae00a508823d92a5853"],["F:/blog5/public/posts/845ca7c4.html","9c3825032dc9d3b15848046f7fd27f7b"],["F:/blog5/public/posts/898c3bb3.html","4be9776b7f41745926fc390275bdf8ed"],["F:/blog5/public/posts/964d468f.html","d90a711c804b088c845d9cb2d3185268"],["F:/blog5/public/posts/afcf312e.html","ae3eec05687db89f95fc9e84831dfe83"],["F:/blog5/public/posts/bc1c3bac.html","37f9f4d1a30f4d7b32bc31b2a9f84fc8"],["F:/blog5/public/posts/be1f2db7.html","36d3bb15e5685af4d3a442efcd6f0622"],["F:/blog5/public/posts/c0404e49.html","63417d5c29d2b3b3dc2fbc87c77e94f2"],["F:/blog5/public/posts/cafe661f.html","5be02ce7794e97c803149e7ff27617fa"],["F:/blog5/public/posts/dc17b247.html","9d33674957a94235684282c6f7408da1"],["F:/blog5/public/posts/ddef8e37.html","2a067742b62448ab73c5b7af7ac64a10"],["F:/blog5/public/posts/eb9d5593.html","8e50ed2dcf6fbf68239d0f3cbea2d47c"],["F:/blog5/public/posts/edbff87d.html","55b2adf5e8526a7d123268ccc5572c47"],["F:/blog5/public/posts/ee58e1ae.html","c989f78a3e6a3763fb4722dd76078ef4"],["F:/blog5/public/steamgames/index.html","b9eec0d2c4cd5b0e512a757ccbf44bee"],["F:/blog5/public/tags/2019随意链接大赛/index.html","052f09692095bc98f3c115e8abf6da0f"],["F:/blog5/public/tags/2D表情/index.html","b16bd9075fddc217621bc098f863db85"],["F:/blog5/public/tags/AI/index.html","f920d736c837e5cbdff3e9ae5b3db16a"],["F:/blog5/public/tags/AMV/index.html","0a5fdcc6c0392253f79aaed87d096469"],["F:/blog5/public/tags/AVS/index.html","8313b90ba1e00d2406a4e1982a6aea88"],["F:/blog5/public/tags/Aviutl/index.html","ddd1f6ecb1cfa89515dea743c035f8d8"],["F:/blog5/public/tags/B站/index.html","f7a11184685a93f08e5befc2a9127c97"],["F:/blog5/public/tags/CLANNAD/index.html","9fbb9116468edc4d6c3202c34f0dc5c3"],["F:/blog5/public/tags/Hexo/index.html","321cdbf1b210d62c4762a138adcd9c51"],["F:/blog5/public/tags/Key/index.html","df363d0ff90a6a3d7ba7278ef24122e3"],["F:/blog5/public/tags/Let-s-encrypt/index.html","d4f753a7db1699950fc1e542e024e447"],["F:/blog5/public/tags/MAD/index.html","33c9b01ac1f3dc454f48138c6341b477"],["F:/blog5/public/tags/MD/index.html","176d8bf7334df126b55385cf10547246"],["F:/blog5/public/tags/Markdown/index.html","f611c08a70ae006f55b3362e988acd97"],["F:/blog5/public/tags/RPG-maker-MV/index.html","0837594d245c801d10b8ec2027f8c25f"],["F:/blog5/public/tags/SSL/index.html","39283244e6c653d4890eca977ba057fb"],["F:/blog5/public/tags/Spleeter/index.html","334ff252469d691049535735a03bcc11"],["F:/blog5/public/tags/Topaz-AI-Gigapixel/index.html","1cccc3d3ce654ff140f85256c44506d2"],["F:/blog5/public/tags/Waifu2x/index.html","c437900aadd066db26c874bbf830c35f"],["F:/blog5/public/tags/bilibili/index.html","0846f816f74fd42b04ead262f218dcdf"],["F:/blog5/public/tags/index.html","be0c5152fbaf1473b022f1a77d770699"],["F:/blog5/public/tags/npm/index.html","c714893c0b8457ee54477dae673301f2"],["F:/blog5/public/tags/steam/index.html","a9a6b8cf505c807906a3ae0344a6ac27"],["F:/blog5/public/tags/个人作品/index.html","58bc916b4701578e7ce8a7fa76ba0656"],["F:/blog5/public/tags/个人作品/page/2/index.html","a8839725e5e2ba4bc326930e5bb14d3a"],["F:/blog5/public/tags/仙剑/index.html","231c12070290ccc62288596798be85a4"],["F:/blog5/public/tags/仙剑七/index.html","d41b380f276ec9205d946fbdf9bef35f"],["F:/blog5/public/tags/仙剑五/index.html","079cdd7043965fde4ba018f3ef314eb3"],["F:/blog5/public/tags/仙剑六/index.html","0a504eec3de8b4f93a22488a99ac4a09"],["F:/blog5/public/tags/仙剑剧情对话/index.html","dbbc8de55b6bf8d16721e682c8faabec"],["F:/blog5/public/tags/仙剑奇侠传/index.html","75ad20e05cbbfb3db0271c8ef5bbdfb1"],["F:/blog5/public/tags/仙剑奇侠传七/index.html","a1c9e0c54dae08e12ad04f85bbb39de4"],["F:/blog5/public/tags/仙剑奇侠传三/index.html","043c35bed4f8b87b1bd24a0b4a314d6d"],["F:/blog5/public/tags/仙剑奇侠传三外传/index.html","659665938e17443feee8bf31a4cc257d"],["F:/blog5/public/tags/仙剑奇侠传二/index.html","46279e7d778a3c0bd25acdacb174ee25"],["F:/blog5/public/tags/仙剑奇侠传五/index.html","eff0e1f4e50c34dfbac597399d867b08"],["F:/blog5/public/tags/仙剑奇侠传五前传/index.html","fa053d67eb27af0cb4a534ca26719d50"],["F:/blog5/public/tags/仙剑奇侠传六/index.html","fb58309a36689cdbb97eecb41c841f39"],["F:/blog5/public/tags/仙剑奇侠传四/index.html","f55eb02081605bf66f08748032d3e961"],["F:/blog5/public/tags/仙剑奇侠传幻璃镜/index.html","430e55de71f7ed8a4dc145a840567230"],["F:/blog5/public/tags/仙剑手游/index.html","d6be47446e574297ab2c6439450d41b2"],["F:/blog5/public/tags/仙剑春晚/index.html","b096a207b689de184e5dc6e8c1444196"],["F:/blog5/public/tags/仙剑最惨女配剧场/index.html","86145564f14f8297845a5ac5cbd28023"],["F:/blog5/public/tags/仙剑混剪/index.html","6d06bd368e8aa176d0bc4f17bcdffc8c"],["F:/blog5/public/tags/仙梦长留/index.html","58be13f873e94d1fef6487b1f41adf25"],["F:/blog5/public/tags/傅红雪/index.html","d251aee3e1d8271fc7ecfc81076f5286"],["F:/blog5/public/tags/刘亦菲/index.html","038b04c80fff71f8c3722aeccde184ab"],["F:/blog5/public/tags/动态壁纸/index.html","ee61a8cdd4fb1a2891ab0a90947ec257"],["F:/blog5/public/tags/十年/index.html","0c82de8308ef01d3c3d22c36f264b3aa"],["F:/blog5/public/tags/单机/index.html","fe1dacfd87fb20af031fd404920b2686"],["F:/blog5/public/tags/博客/index.html","e6f907244ea2d7447043576a5f3bbd14"],["F:/blog5/public/tags/卷积神经算法/index.html","77d326b6d3b7e7dd833f6c21dcd150bf"],["F:/blog5/public/tags/去水印/index.html","a50c9f8aa2e2b5e38686977a39753855"],["F:/blog5/public/tags/叶青/index.html","6783431d4ea4879323a4c078ef4c3e35"],["F:/blog5/public/tags/哔哩哔哩/index.html","517e347fec80182d57113daf6407a040"],["F:/blog5/public/tags/声之形/index.html","b3b00fe15668d6d14919939617c4c862"],["F:/blog5/public/tags/女高中生的虚度日常/index.html","57add218e6b284b58ce1166492d547f7"],["F:/blog5/public/tags/孙蝶/index.html","0d3bdcd13a6ad50ccfac8ba5ee346691"],["F:/blog5/public/tags/孟星魂/index.html","98142c0c5f1b4a1ada44836f5253a97f"],["F:/blog5/public/tags/帮助文档/index.html","e898a9728a1f3479069bfed646a39c70"],["F:/blog5/public/tags/年终总结/index.html","68f6f7382205c1e873260ab6b3c3a8cb"],["F:/blog5/public/tags/广播剧/index.html","506c83848dc1d05e88197b6d44fc136f"],["F:/blog5/public/tags/张睿/index.html","d0b5a0d1639d733bfaef3617bcbb1455"],["F:/blog5/public/tags/当时明月/index.html","bb8e9b325bfacdda6a12a83e877d8b72"],["F:/blog5/public/tags/心が叫びたがってるんだ。/index.html","9fd8dece500be4f5e8c3449132a75224"],["F:/blog5/public/tags/心灵想要大声呼喊/index.html","e8e78e08bf0c8f1981da86e956d3fdfb"],["F:/blog5/public/tags/感想/index.html","9db0d1927999728898547cef11c47396"],["F:/blog5/public/tags/战斗吧！球球/index.html","735bcdc3f5fd810b91f381c5a19e3ba0"],["F:/blog5/public/tags/扣图素材/index.html","c230df8c03fd12f9c537a3eb2bb04f53"],["F:/blog5/public/tags/抠图素材/index.html","7e9b7c05e41f151457cce25cd560ee0e"],["F:/blog5/public/tags/新仙剑OL/index.html","389584d96bc21667de04791c3839481c"],["F:/blog5/public/tags/新仙剑奇侠传online/index.html","3f5451388b020a2ba177726fa627576b"],["F:/blog5/public/tags/新边城浪子/index.html","5df0e0e2d23e8ad5f418ec7df18b34e1"],["F:/blog5/public/tags/星蝶/index.html","49048a728eb48d7dc97c356dfdcd8419"],["F:/blog5/public/tags/最惨女配是衬托/index.html","f61d4e5dabd2986b14e0a21111662bb3"],["F:/blog5/public/tags/月玲珑/index.html","7c540d6bbd9132a8e182b3c986c48745"],["F:/blog5/public/tags/月玲珑十周年/index.html","242f59c04de609dd158efba513007517"],["F:/blog5/public/tags/月玲珑小剧场游戏/index.html","6a5ef2ee034dd5c64baecd7eb353fba0"],["F:/blog5/public/tags/月玲珑配音社/index.html","c1b2867d9ae0f83f06e73151f1cd352e"],["F:/blog5/public/tags/朱一龙/index.html","1dfe655094aff3c83d17d8a0146918b8"],["F:/blog5/public/tags/流星蝴蝶剑/index.html","40d0fdb4171fa6bee658ff6e2c1d3994"],["F:/blog5/public/tags/浩气参天/index.html","7182a67b02595a74ffd1822b090d5c23"],["F:/blog5/public/tags/游戏整理/index.html","a4066bdb88bae785ae70b562890e6295"],["F:/blog5/public/tags/甜蜜蜜/index.html","4e18a98a020e320cd3e423f275c68c58"],["F:/blog5/public/tags/祝有涯/index.html","ed66e76e2d31333626e757f51239a721"],["F:/blog5/public/tags/神舞幻想/index.html","75036dcc42613040fe1702c765070143"],["F:/blog5/public/tags/穹之扉/index.html","4bc4c29916879aa565d7dace610d2aa7"],["F:/blog5/public/tags/素材整理/index.html","3bdc227eb968e69bd70d2087544ab60c"],["F:/blog5/public/tags/网络/index.html","359d25d990a539536a45f0ad525f207c"],["F:/blog5/public/tags/羽裳/index.html","bc55007751123bfe60f2c8cad0e2b955"],["F:/blog5/public/tags/聲の形/index.html","83e3be4dc4091437678891185263d025"],["F:/blog5/public/tags/虹七/index.html","ce87182ed48647d63e7f14a20f4d48e4"],["F:/blog5/public/tags/虹猫蓝兔七侠传/index.html","2feb2e9a2b2c9af7b30beb364aa91bbe"],["F:/blog5/public/tags/视频剪辑/index.html","3e1d79cbb21f419fb267f0c3d6b78d4c"],["F:/blog5/public/tags/视频剪辑/page/2/index.html","78bb2d3a6e9368b6ecb0221cf4bbfad3"],["F:/blog5/public/tags/语音整理/index.html","22921c3a1525cd0490262d2bc2fa36b2"],["F:/blog5/public/tags/资源提取/index.html","4fc328c581d9e8f355619e141769de02"],["F:/blog5/public/tags/赵灵儿/index.html","7f0cc61927028db9891a9cfef927020f"],["F:/blog5/public/tags/轩辕剑/index.html","14098af546e3d4b1b840aebecc5ea139"],["F:/blog5/public/tags/轩辕剑外传穹之扉/index.html","99110b110a07addc4097c21b6efb39b4"],["F:/blog5/public/tags/透明台标/index.html","b3480b68369c09666033e77593f0de89"],["F:/blog5/public/tags/陈意涵/index.html","51cb4098412a3c24f071a77aef70c439"],["F:/blog5/public/tags/陈楚河/index.html","6f51e909d7638a81339681a13855527a"],["F:/blog5/public/tags/青槐/index.html","d5610380817e7a527883d25727ae3c80"],["F:/blog5/public/tags/音轨分离/index.html","575c1348ef511f4e410cc6d4d5822010"],["F:/blog5/public/tags/飞蝶/index.html","27c6acb72e8c91ddbfc4803c7ef5a8df"],["F:/blog5/public/tags/龙葵/index.html","f031011e568335d14652ef82de25a7fe"],["F:/blog5/public/works/index.html","3423e08f7a9c932b27ed02ee4aa093b9"]];
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








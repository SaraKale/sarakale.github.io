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

var precacheConfig = [["F:/blog5/public/aboutme/index.html","999fdf42ee6f4ac74f58b3b79fe6d6ca"],["F:/blog5/public/archives/2013/05/index.html","29e944694202d457dec182240cd77fda"],["F:/blog5/public/archives/2013/index.html","2baf9ab04fe4437707e3f78e6f21db4b"],["F:/blog5/public/archives/2015/07/index.html","1d56cdc7ec292d0be81d4c97ecc6323c"],["F:/blog5/public/archives/2015/index.html","49f5765b4e45dcf6ac20cbecdddd6765"],["F:/blog5/public/archives/2016/05/index.html","4e3927611153f58abcac1351d4f382ec"],["F:/blog5/public/archives/2016/10/index.html","85c082f27b31534bf0916525b0d891fb"],["F:/blog5/public/archives/2016/11/index.html","38f9e1564c0f180608248e318e8cf2b2"],["F:/blog5/public/archives/2016/12/index.html","1bc3a91926ad676133c13195d64bb287"],["F:/blog5/public/archives/2016/index.html","8819539c968bad2d123d6b6fdfbbc459"],["F:/blog5/public/archives/2017/01/index.html","6d352adcb00a79a6df30d48ba307115a"],["F:/blog5/public/archives/2017/02/index.html","9e2aa76cfccd12ad1fa0b0bd8eff682e"],["F:/blog5/public/archives/2017/06/index.html","5f4e3ec7f20954dba6b6bb464a89e54b"],["F:/blog5/public/archives/2017/07/index.html","1acbc6a3b5e708947ebe5aa54b31206c"],["F:/blog5/public/archives/2017/08/index.html","8f66cf5550a3705ab8ac26773fd593e9"],["F:/blog5/public/archives/2017/09/index.html","73121f6bee36498987092abc7a0dca21"],["F:/blog5/public/archives/2017/11/index.html","18555c01994f8a9ecab23a9a3191edd8"],["F:/blog5/public/archives/2017/index.html","7555326f0995b346380ec70afa9ee367"],["F:/blog5/public/archives/2017/page/2/index.html","d646a4e18ee6a6079d56359c1528c66a"],["F:/blog5/public/archives/2018/01/index.html","327e5027336bad7444d91460149242d6"],["F:/blog5/public/archives/2018/02/index.html","5d968e38ed1460c3c0b58beb22d994a7"],["F:/blog5/public/archives/2018/04/index.html","a7b9345b840d7b7c16709e60b2279b29"],["F:/blog5/public/archives/2018/06/index.html","997cbe6770e84b61a43d4e5135072eef"],["F:/blog5/public/archives/2018/07/index.html","047226ee71d45f6f32cd1da6712e6f9e"],["F:/blog5/public/archives/2018/08/index.html","4a2c2d407e7556cf3ae5c9bff5afb2fe"],["F:/blog5/public/archives/2018/09/index.html","2051103cee1ab72a075b2d85558197f1"],["F:/blog5/public/archives/2018/10/index.html","d9eb863230a6cdd59d2f4aa43cc4f416"],["F:/blog5/public/archives/2018/11/index.html","982479306607ba9ad8f7a60b9651c80c"],["F:/blog5/public/archives/2018/12/index.html","976d86b4496e2b1cf8c24849b4f65b93"],["F:/blog5/public/archives/2018/index.html","346679d8c6c9c8dc6195d5ef1694dccf"],["F:/blog5/public/archives/2018/page/2/index.html","c7d67722c4a5a18337c18ff32c062e57"],["F:/blog5/public/archives/2019/01/index.html","eb3a132cc817775a8dec5a4bb57a73c8"],["F:/blog5/public/archives/2019/02/index.html","fc9f84c14766978466ec3ddbaf97b80a"],["F:/blog5/public/archives/2019/04/index.html","bbf1fdf4c6ce39433f83ce9e77537a30"],["F:/blog5/public/archives/2019/06/index.html","aa6580105d96e25f49cd874c0b67e1d4"],["F:/blog5/public/archives/2019/07/index.html","76f98d75a98b7eb91ae2e6d3ab2f903b"],["F:/blog5/public/archives/2019/08/index.html","1a38188a06d550d1aab8e85288bf7a11"],["F:/blog5/public/archives/2019/10/index.html","e0c508b96531224c5180eed589d90de7"],["F:/blog5/public/archives/2019/11/index.html","b149c511313e1dd1540008b245aa4381"],["F:/blog5/public/archives/2019/index.html","82474ccb8bc667be5cd85ea5996dd8ee"],["F:/blog5/public/archives/2019/page/2/index.html","c8b27908e3cb21ab3ebab998d4b017c0"],["F:/blog5/public/archives/2020/01/index.html","047f6995ba145ceccd898784d23d0efc"],["F:/blog5/public/archives/2020/02/index.html","9714c7037f6a25ee5a5f877718c8bd82"],["F:/blog5/public/archives/2020/03/index.html","99875ccc4776588f55056b972e3b9d92"],["F:/blog5/public/archives/2020/index.html","5152180f954acb7c774e258799cb9d7c"],["F:/blog5/public/archives/index.html","47971bcfda6d2a322d5d8fa300b89a49"],["F:/blog5/public/archives/page/2/index.html","e7711a1bc11330c74770c94c32acaf4c"],["F:/blog5/public/archives/page/3/index.html","b8ea37f41f2e9c8c54f31d05eab80f43"],["F:/blog5/public/archives/page/4/index.html","47c795811bb4474cae29b7b6b1d04346"],["F:/blog5/public/archives/page/5/index.html","802eba4d1f5cbb93e4f0512917251161"],["F:/blog5/public/archives/page/6/index.html","d56f5e7e1003207bca528b7d73dbeb12"],["F:/blog5/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/blog5/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/blog5/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/blog5/public/bangumis/index.html","fb075c74880b6ba96138df72346ee643"],["F:/blog5/public/categories/index.html","344c2fedc48112be77fc745bd1d22928"],["F:/blog5/public/categories/个人作品/index.html","fe165fe0caa94d8e3f4e10e94e7ba0f4"],["F:/blog5/public/categories/个人作品/page/2/index.html","7e1f7666d4f5d390023eec2093c0db54"],["F:/blog5/public/categories/仙剑资源整理/index.html","6e16f5c4d4e3c5daad258438a2fac6ee"],["F:/blog5/public/categories/其他/index.html","8c9c01e950a22cdcce94932077ed2717"],["F:/blog5/public/categories/工具资源/index.html","1c2c2456c1e3ddd4a160c5e57eca2420"],["F:/blog5/public/categories/感想与安利/index.html","12d8989503dbf077c577c84c78508b89"],["F:/blog5/public/categories/感想与安利/page/2/index.html","c092604cf92927b83c4e024ec352aa05"],["F:/blog5/public/categories/生活随记/index.html","7f7e1945a4e59311d80e959ebcce4210"],["F:/blog5/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/blog5/public/css/custom.css","7f21ddfc43f32dbba5dde6e6edc84874"],["F:/blog5/public/css/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["F:/blog5/public/css/iconfont/demo_index.html","c0edf8b25db0b64e0c2ff956192dfbf8"],["F:/blog5/public/css/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["F:/blog5/public/css/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["F:/blog5/public/css/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["F:/blog5/public/css/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["F:/blog5/public/css/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["F:/blog5/public/css/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["F:/blog5/public/css/index.css","3ddc58d41b97fac694d4f791fbdeddc3"],["F:/blog5/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog5/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/blog5/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/blog5/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/blog5/public/img/loading.gif","a994cd022cdff0a80c6cf57173c0454d"],["F:/blog5/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["F:/blog5/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/blog5/public/index.html","f81b708de713a9b547aefa410c5b91d7"],["F:/blog5/public/js/bg.js","3a9700ba0f07b5e920da726874395d19"],["F:/blog5/public/js/main.js","70aa96d543fac29217bee50cc64b721c"],["F:/blog5/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["F:/blog5/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["F:/blog5/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/blog5/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/blog5/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/blog5/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["F:/blog5/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/blog5/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/blog5/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["F:/blog5/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["F:/blog5/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["F:/blog5/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/blog5/public/links/index.html","0adddf4bb31d7b2774617d8e424962c3"],["F:/blog5/public/live2d-widget/README.html","68f1a66b9804da050a5369e77d1bc687"],["F:/blog5/public/live2d-widget/autoload.js","2da6e1e1935c26bc8b1b7fece4216c89"],["F:/blog5/public/live2d-widget/demo/demo1.html","9b53b3710cdf7988ba6a17fd6f4086a7"],["F:/blog5/public/live2d-widget/demo/demo2.html","f1b7945ef1fb0bd9c817df33eee3da85"],["F:/blog5/public/live2d-widget/img/1-0.jpg","b94efd4020b8e9f8734ef24b94a24ddc"],["F:/blog5/public/live2d-widget/img/2-0.jpg","382d69d9e0db50aeb32f31dc7487875f"],["F:/blog5/public/live2d-widget/img/3-0.jpg","fc46ccdf3ae9a954044df1d198d30651"],["F:/blog5/public/live2d-widget/img/4-0.jpg","888d6705bb860e6778f23544ed83414e"],["F:/blog5/public/live2d-widget/img/5-0.jpg","60d0a965ce3be8ae7b8c8114fec91f7f"],["F:/blog5/public/live2d-widget/img/6-0.jpg","2efc670c267a83d8442a7fb495a8e99c"],["F:/blog5/public/live2d-widget/img/7-0.jpg","081418fbd26f8c1e3f82f52ad39f4085"],["F:/blog5/public/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["F:/blog5/public/live2d-widget/waifu-tips.js","9e28f841a4f31001ec596fb1234a839f"],["F:/blog5/public/live2d-widget/waifu.css","5848454d038f54b72d8c0c3889dc41b0"],["F:/blog5/public/message/index.html","0cb4244fa8d4ebe506ffb6405f334be0"],["F:/blog5/public/music/index.html","7ee6d009e5134b71d802fe63da76fc52"],["F:/blog5/public/page/2/index.html","5efa021576d247599f04fee2b7e68699"],["F:/blog5/public/page/3/index.html","607d802396a3c3533378f921d65893f9"],["F:/blog5/public/page/4/index.html","924951e970b4d7a2e56b53754274ed6a"],["F:/blog5/public/page/5/index.html","136e0d94a4cfdc12e97fddda8e4c2927"],["F:/blog5/public/page/6/index.html","717e1b187022b30d59f7f11edf5d1fe0"],["F:/blog5/public/posts/1270.html","39db4541ff2f07aa9bc5937097168b76"],["F:/blog5/public/posts/12770.html","d864e48232d25bba907e114ccc68ea75"],["F:/blog5/public/posts/14580416.html","0734a58c3f2b85fb817e8b640345d345"],["F:/blog5/public/posts/15929.html","48f6b373c38ee4c8651b97aa8bcaa772"],["F:/blog5/public/posts/15959.html","951e552f749cd26c7f0e2fae7594b120"],["F:/blog5/public/posts/173.html","4e874f5044b1c0626312e0a5596d884d"],["F:/blog5/public/posts/18647.html","4299b9e3c96db083e712d92c535f0633"],["F:/blog5/public/posts/19368.html","26b6499b2e795da608bdc95b35bc8d93"],["F:/blog5/public/posts/19549.html","7b8148dfaa83654f754017a8ca27a2a7"],["F:/blog5/public/posts/1dbec013.html","8a915d87678e19906806106a62f749e0"],["F:/blog5/public/posts/20133.html","7bd5d0c60d208448d3d496c266aba83f"],["F:/blog5/public/posts/20764.html","baa8123655b7e7a8d0ee6854a7c3af00"],["F:/blog5/public/posts/2137.html","b325e1bd425370754bf98d809bc44946"],["F:/blog5/public/posts/27247.html","4a0a96b75c953848a261900b802f2d89"],["F:/blog5/public/posts/28180.html","db40057a83fff2439074fc76486d542c"],["F:/blog5/public/posts/31d725ea.html","1f4800c75c0358e70badf3b85d39eaa8"],["F:/blog5/public/posts/34771.html","b3bb3bb09536adac46f10dac7b131321"],["F:/blog5/public/posts/35192.html","06be03f67681bc1e476b22ae8ad91b7e"],["F:/blog5/public/posts/35671.html","ee4db73cb7f7262af8c5ef413d132638"],["F:/blog5/public/posts/364.html","7f08c25a7e6a1464c7443682d976b5dd"],["F:/blog5/public/posts/38726.html","c58b7af116f07fb149966eca1ae7aa0f"],["F:/blog5/public/posts/44082.html","c227d5d2ca82524a420e6b063fef6d63"],["F:/blog5/public/posts/45026.html","3af6b0b038c02349f34e675033929f75"],["F:/blog5/public/posts/48037.html","63f06fd42aa1c7301751c765e351377f"],["F:/blog5/public/posts/491b225d.html","d87b710defd1f5d36b4714fecd467785"],["F:/blog5/public/posts/50615.html","f213867aac3bc30338568aebfb6e96a1"],["F:/blog5/public/posts/51793.html","0ca73b3a09071a4b952a26992e852523"],["F:/blog5/public/posts/51888.html","ad450ac2c0ac7ffcaac86cb2152a3659"],["F:/blog5/public/posts/51993.html","fa955bad614c47fc742688268c62b0af"],["F:/blog5/public/posts/535faed9.html","a2d629004c850c09124bb5111297f5e5"],["F:/blog5/public/posts/55032.html","d226b5d7bf773513020494ae6a6454e7"],["F:/blog5/public/posts/55741.html","b406bfd10de23197dfa0833972d3a891"],["F:/blog5/public/posts/57a901f0.html","09e8538ec5e40f85d09f95c47592dec2"],["F:/blog5/public/posts/59ca7e41.html","47fd294fa2108de6f137a2f3724b005e"],["F:/blog5/public/posts/5fd82dbe.html","3a6394dbc62826441bc2829c0328f41f"],["F:/blog5/public/posts/62550.html","f9bc7b439c6b61b20f689046f34cbe3d"],["F:/blog5/public/posts/64777.html","4209b9024d6da0953d26753b3e9bd7a2"],["F:/blog5/public/posts/64850.html","af53251fcb1fab7a1ad4d18202d31950"],["F:/blog5/public/posts/65e843f4.html","37732d02d66fd103a25d2131a4f33191"],["F:/blog5/public/posts/7e3d2d4.html","eb2696ce61cf0fabd6acdc83af1ee700"],["F:/blog5/public/posts/845ca7c4.html","235448f198a61837336e1fc6d7b3c960"],["F:/blog5/public/posts/898c3bb3.html","300ade93f2814cbd3a41292978e419a2"],["F:/blog5/public/posts/964d468f.html","a1c276797b9eaf4a888a752ad5e777c4"],["F:/blog5/public/posts/afcf312e.html","9198079d5212d38a4505735ca5631437"],["F:/blog5/public/posts/bc1c3bac.html","b9a35fda11003c054d8457f32800cb3b"],["F:/blog5/public/posts/be1f2db7.html","3f98d6f0b4d16ed90c9b3303b5cf27a5"],["F:/blog5/public/posts/c0404e49.html","e1dbda805293ab643771adfe2a234412"],["F:/blog5/public/posts/cafe661f.html","ebfea6929a86c5532defd476e5857344"],["F:/blog5/public/posts/dc17b247.html","a428f5105ea622cb930728cf79dba645"],["F:/blog5/public/posts/ddef8e37.html","fa0ecb68eff0071495b190a19e873fd5"],["F:/blog5/public/posts/eb9d5593.html","e4ac1002200dd242ca7c1f13b7472c53"],["F:/blog5/public/posts/edbff87d.html","10d6df8dfa6c3d3a86ba6f785199b02b"],["F:/blog5/public/posts/ee58e1ae.html","f8fb315e6728e0913082c3f4dcd88af1"],["F:/blog5/public/steamgames/index.html","1ad25794c6f6f989b65526f7921477d7"],["F:/blog5/public/tags/2019随意链接大赛/index.html","7d50c17c170d8f8951fbefec9f368b74"],["F:/blog5/public/tags/2D表情/index.html","88b3373b087f4bd0c3b788c77cfd4bfc"],["F:/blog5/public/tags/AI/index.html","f09a25d8449bc5e303e206b5d4f9fb14"],["F:/blog5/public/tags/AMV/index.html","de1bab2fbad4f778e73755893645333b"],["F:/blog5/public/tags/AVS/index.html","ed9998c76fdb565c6ca2acd1017d76ca"],["F:/blog5/public/tags/Aviutl/index.html","24a2713dd2a28e228b6d1f4d0c5cc627"],["F:/blog5/public/tags/B站/index.html","7d57423a2ce772422acd28e5f7eaff9e"],["F:/blog5/public/tags/CLANNAD/index.html","ef14cc0efb94873a5cb8ba8eaa60525f"],["F:/blog5/public/tags/Hexo/index.html","df5bda008c76f43f4bf3a5ce5974ae39"],["F:/blog5/public/tags/Key/index.html","054a8693de64c6b5847d2778ad9560e4"],["F:/blog5/public/tags/Let-s-encrypt/index.html","1c0af1f6e4e2707bf01bd64750fc2d22"],["F:/blog5/public/tags/MAD/index.html","e9f83d08bfc31d35ad61517a9472dca8"],["F:/blog5/public/tags/MD/index.html","e7067cee4d97a5fa587a667bcb838142"],["F:/blog5/public/tags/Markdown/index.html","7f9057ae51a305d030ea0e113c8c067a"],["F:/blog5/public/tags/RPG-maker-MV/index.html","83a99969db8649fcb10c131dcc3dea7d"],["F:/blog5/public/tags/SSL/index.html","1e00c340b66d7d247ea1661facf68f45"],["F:/blog5/public/tags/Spleeter/index.html","faac92fe0bbb97ca28db39c5f7ea3c18"],["F:/blog5/public/tags/Topaz-AI-Gigapixel/index.html","e6bebad0532360b03551abde98cad2dc"],["F:/blog5/public/tags/Waifu2x/index.html","f23311ff0f060aad4557bfed807565eb"],["F:/blog5/public/tags/bilibili/index.html","af34ab134c70787884e86b31fe6dc6b4"],["F:/blog5/public/tags/index.html","560e0148b14a1526cbb4481dfe6a8a6d"],["F:/blog5/public/tags/npm/index.html","1a1edf6a0f2c9664177ff35a0ac5aeaa"],["F:/blog5/public/tags/steam/index.html","f0da7edebcf53d06c5724ec886115046"],["F:/blog5/public/tags/个人作品/index.html","fb0074c7d224f368d2237e90247ba2da"],["F:/blog5/public/tags/个人作品/page/2/index.html","ebb70903c3e4eff4f936c9fe8daeb442"],["F:/blog5/public/tags/仙剑/index.html","cf5ea192bd3cf6b9c041abfe95920307"],["F:/blog5/public/tags/仙剑七/index.html","8df54dbeb0f7c2f0d26db6f378a7a5f0"],["F:/blog5/public/tags/仙剑五/index.html","9454c0275d7969873385c7b6a3d630ab"],["F:/blog5/public/tags/仙剑六/index.html","f42e478f75e133da35956b8b7daaf433"],["F:/blog5/public/tags/仙剑剧情对话/index.html","66251f0548bd4cf5a36fe41118baaefe"],["F:/blog5/public/tags/仙剑奇侠传/index.html","c1116af6491efc5c0d5b5fe04b451eb7"],["F:/blog5/public/tags/仙剑奇侠传七/index.html","dc97c72f49fecfb71bf62e3a4c3e4dac"],["F:/blog5/public/tags/仙剑奇侠传三/index.html","88bc14e157fededa55e738672fdf861a"],["F:/blog5/public/tags/仙剑奇侠传三外传/index.html","201f850b023ce2c3f0bfd34f0c9979bb"],["F:/blog5/public/tags/仙剑奇侠传二/index.html","c0802e4189850fdd6d5a8235826ecafc"],["F:/blog5/public/tags/仙剑奇侠传五/index.html","64325074e4049b3a5d59dcbc75050605"],["F:/blog5/public/tags/仙剑奇侠传五前传/index.html","6a1a5d8ba29f667e773af3f1642ec9f4"],["F:/blog5/public/tags/仙剑奇侠传六/index.html","d747af58cc632eea54361521a1a63625"],["F:/blog5/public/tags/仙剑奇侠传四/index.html","e77ab4562773f003ec298e34659a64c3"],["F:/blog5/public/tags/仙剑奇侠传幻璃镜/index.html","0bfac7bfc7d35cd11ce0119abe105084"],["F:/blog5/public/tags/仙剑手游/index.html","9172dc93f7021ca4e3b02bdc7cc20e9a"],["F:/blog5/public/tags/仙剑春晚/index.html","789bf95d4e9000e387c6df57edb6d200"],["F:/blog5/public/tags/仙剑最惨女配剧场/index.html","e9d7758232228712cfae1928cee16ff7"],["F:/blog5/public/tags/仙剑混剪/index.html","eaf95e23ab0a92b90c051b23dbae77b9"],["F:/blog5/public/tags/仙梦长留/index.html","e63d733edb7c7702958c97809da17676"],["F:/blog5/public/tags/傅红雪/index.html","757bfad45c5eff2583cc80ebc565ac9e"],["F:/blog5/public/tags/刘亦菲/index.html","f1c51f6316e3d6fd54e1cba44820b819"],["F:/blog5/public/tags/动态壁纸/index.html","f0dcd9c08dbbd5c220c80df4c1447b8c"],["F:/blog5/public/tags/十年/index.html","6cc98c395fd3cd3924bd233da8e19251"],["F:/blog5/public/tags/单机/index.html","10b2e40c4f6e8ebe782778ebff09f7eb"],["F:/blog5/public/tags/博客/index.html","385e95da173d159495b6b0a4cdebd2bb"],["F:/blog5/public/tags/卷积神经算法/index.html","d64e3b0fe9f3393a989f17445b0512f5"],["F:/blog5/public/tags/去水印/index.html","42bee927a10b8039b11e3fdff1d901cd"],["F:/blog5/public/tags/叶青/index.html","6b1e5e48430ca934a44c830bde123cb3"],["F:/blog5/public/tags/哔哩哔哩/index.html","c5ca0461385329fa20f4ca381392e90e"],["F:/blog5/public/tags/声之形/index.html","7734f0111fbec7c8ac717ca8212b1236"],["F:/blog5/public/tags/女高中生的虚度日常/index.html","683c15659f1027ce5fe1d0074038fda7"],["F:/blog5/public/tags/孙蝶/index.html","1e3ca7eddb36dfc7719e3283d7fb69e7"],["F:/blog5/public/tags/孟星魂/index.html","63ffea941b7a1afe16b1aded3b14a66e"],["F:/blog5/public/tags/帮助文档/index.html","4bb0726207afd8ceb9e0683ec6b70f4e"],["F:/blog5/public/tags/年终总结/index.html","3d12b7139c07a8dc3ee288e28cefd35a"],["F:/blog5/public/tags/广播剧/index.html","2f071be918a798f0ac4607d256a99cab"],["F:/blog5/public/tags/张睿/index.html","2ee5e9849b844fa35f1686a3c26a3f6d"],["F:/blog5/public/tags/当时明月/index.html","d12c5c8b8a8009435152ab38a21d832c"],["F:/blog5/public/tags/心が叫びたがってるんだ。/index.html","247ec02414b3431a5fa9bd5275874c10"],["F:/blog5/public/tags/心灵想要大声呼喊/index.html","d1943658dd83c8ad9cc604eb9ddd15ed"],["F:/blog5/public/tags/感想/index.html","1ee17fd61ffb8f1e121ad567c5eb9443"],["F:/blog5/public/tags/战斗吧！球球/index.html","5205024c9b9b996e2aec59b0b4969716"],["F:/blog5/public/tags/扣图素材/index.html","55c0b09ed24dadb1fa6ad5bef721b389"],["F:/blog5/public/tags/抠图素材/index.html","d97afcca7d398064379c599e4cdbf146"],["F:/blog5/public/tags/新仙剑OL/index.html","fdd11ad57d18d047a74f6f5e79ea157b"],["F:/blog5/public/tags/新仙剑奇侠传online/index.html","d6d018f09e4434be066b68e52097a35a"],["F:/blog5/public/tags/新边城浪子/index.html","5ec51d1c6ecf6c9c7b94d6c036d323e5"],["F:/blog5/public/tags/星蝶/index.html","e15cb485bea7c0d7d6d9ba7fa4401c05"],["F:/blog5/public/tags/最惨女配是衬托/index.html","1458f805e38d2b24aa8b651fa83973ea"],["F:/blog5/public/tags/月玲珑/index.html","b07b40673ceeafc28f7943d8f59f93e9"],["F:/blog5/public/tags/月玲珑十周年/index.html","0b33bf9edd1f872922d4c428e8b0a51c"],["F:/blog5/public/tags/月玲珑小剧场游戏/index.html","55aa57b2d107ff63d9415c16f2ca71e3"],["F:/blog5/public/tags/月玲珑配音社/index.html","c1f2539ef8709c098ae4925345ce7b6c"],["F:/blog5/public/tags/朱一龙/index.html","688de8db437645d9c6d9fd86be5af2c1"],["F:/blog5/public/tags/流星蝴蝶剑/index.html","16fba5f243a671206723dc46b2bcbf05"],["F:/blog5/public/tags/浩气参天/index.html","15804a6a656a8a6f98900567afb82d54"],["F:/blog5/public/tags/游戏整理/index.html","0173c0cbfd6c3fcf2983dea6412b8ae2"],["F:/blog5/public/tags/甜蜜蜜/index.html","63fe5edb81915fbcfad286ea8a348083"],["F:/blog5/public/tags/祝有涯/index.html","3afeba210b5502f3b8e48081b2eea975"],["F:/blog5/public/tags/神舞幻想/index.html","ce7c5064391f14a046a1f26df8532d13"],["F:/blog5/public/tags/穹之扉/index.html","801525ce0023481766d5aeab439428b6"],["F:/blog5/public/tags/素材整理/index.html","a8165bca5179b3bd3c438ca90e97bb34"],["F:/blog5/public/tags/网络/index.html","426a7b89ef71a0b50a7abddf43ad7c55"],["F:/blog5/public/tags/羽裳/index.html","728d21aa1acce8895951befad5723ea0"],["F:/blog5/public/tags/聲の形/index.html","4746ec8bf0744291a7ae60e3bf5b2486"],["F:/blog5/public/tags/虹七/index.html","a5654425cbb54f1d4185f6797c4bd7ee"],["F:/blog5/public/tags/虹猫蓝兔七侠传/index.html","c0efd2dad0effaf75048e9b8272cb60e"],["F:/blog5/public/tags/视频剪辑/index.html","a0b1bcb96f8907d14e30186a88ae31fc"],["F:/blog5/public/tags/视频剪辑/page/2/index.html","480a7f8c846009f5eb4780b81c36cbed"],["F:/blog5/public/tags/语音整理/index.html","b061a9a2e2fc7ba064529bfed6c8607b"],["F:/blog5/public/tags/资源提取/index.html","74577f00d647555565720ee6dcd70c55"],["F:/blog5/public/tags/赵灵儿/index.html","566d3557adeb6cf3c640db1431a9d17d"],["F:/blog5/public/tags/轩辕剑/index.html","d06b1d2b8677c5618d7b53be828d46e4"],["F:/blog5/public/tags/轩辕剑外传穹之扉/index.html","fc69ca3dbcc87ecb5db55a1fc78bb4c8"],["F:/blog5/public/tags/透明台标/index.html","77b9936cf0974191cc24b501a2eb664c"],["F:/blog5/public/tags/陈意涵/index.html","ba3f3dc556cf5290304bdb756d291a15"],["F:/blog5/public/tags/陈楚河/index.html","c266e815af9ece0211042868c11ae8c0"],["F:/blog5/public/tags/青槐/index.html","9cc2bc23a27472203b7a09b7c5334df2"],["F:/blog5/public/tags/音轨分离/index.html","c293a5a9d0ad87676ce5f827701942eb"],["F:/blog5/public/tags/飞蝶/index.html","62643801f3325e8f8f3028099020cf5d"],["F:/blog5/public/tags/龙葵/index.html","be099be6259de8689b7572d5b63d3500"],["F:/blog5/public/works/index.html","4fcb5ddabee16ccac15a737edd702989"]];
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








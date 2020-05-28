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

var precacheConfig = [["F:/blog5/public/aboutme/index.html","d5ec42ead20ffe378dd39595c542f973"],["F:/blog5/public/archives/2013/05/index.html","4186d603539a12fa345962815522d1ce"],["F:/blog5/public/archives/2013/index.html","64417737441b0b28fc1c64200b7faecd"],["F:/blog5/public/archives/2015/07/index.html","d4101dd6a331ade9b4f5f7973406f439"],["F:/blog5/public/archives/2015/index.html","70de64645b12f2226670493f7c5a12cd"],["F:/blog5/public/archives/2016/05/index.html","a8a86328268f24df6fcbd3467e36c0f7"],["F:/blog5/public/archives/2016/10/index.html","7883b538d07431d10874f7576eea906d"],["F:/blog5/public/archives/2016/11/index.html","d93749f21c74165d7c7653acb8659a89"],["F:/blog5/public/archives/2016/12/index.html","84d0f59602e154b882c24a2e09ebb732"],["F:/blog5/public/archives/2016/index.html","712d4c745c9fd369aa93c0ae64fbe3c4"],["F:/blog5/public/archives/2017/01/index.html","cabd196af08dda65b99c8d78b523d713"],["F:/blog5/public/archives/2017/02/index.html","c667aed6f802033af566726eebe5ac5f"],["F:/blog5/public/archives/2017/06/index.html","b77109db5af8f2f60d1a09a3109bed3e"],["F:/blog5/public/archives/2017/07/index.html","21bcdcb016b9965a8e27c4db94f6614c"],["F:/blog5/public/archives/2017/08/index.html","7f26962193807df9b26b8d39a8dd2c7a"],["F:/blog5/public/archives/2017/09/index.html","fb6b63e731c51a2352e90750e7891d0b"],["F:/blog5/public/archives/2017/11/index.html","3087541903ac2d50f8031274c3a241bd"],["F:/blog5/public/archives/2017/index.html","0743ac0ac0d1507c7defeec21f6de2e7"],["F:/blog5/public/archives/2017/page/2/index.html","2d582df23f2bd4f8ae28800beb89ab12"],["F:/blog5/public/archives/2018/01/index.html","993c344535a343c3a822d4d2ad170ba0"],["F:/blog5/public/archives/2018/02/index.html","2037e45a9af4f2f07660e3707905c63a"],["F:/blog5/public/archives/2018/04/index.html","5b6182335981596d5f38f5f769690cd8"],["F:/blog5/public/archives/2018/06/index.html","27d2ec8d77b25dd95746c707dddf6ec1"],["F:/blog5/public/archives/2018/07/index.html","c0870832469fdc67bc320bbfbf069394"],["F:/blog5/public/archives/2018/08/index.html","f49d1c991d335e67de0716f228958bfd"],["F:/blog5/public/archives/2018/09/index.html","fca4077e3f0a3112e81efc59e718e1fe"],["F:/blog5/public/archives/2018/10/index.html","6f0263542fe1ab617040cc2136a6dc79"],["F:/blog5/public/archives/2018/11/index.html","f4f59c25c1c3eed26184a3600aa8d0cd"],["F:/blog5/public/archives/2018/12/index.html","d25de61ab010a8e8c3326f2fac09e41a"],["F:/blog5/public/archives/2018/index.html","009ef90ce3f70eec5e0a492ef891759e"],["F:/blog5/public/archives/2018/page/2/index.html","d8b70fb95f1cd70b638f573f04ade9bf"],["F:/blog5/public/archives/2019/01/index.html","36669fa8434ecbb456517ef354b8818d"],["F:/blog5/public/archives/2019/02/index.html","a98beb43ff5c7ca8744bf41c49acda8f"],["F:/blog5/public/archives/2019/04/index.html","fd039fbb395a8cab87664469fdda51ce"],["F:/blog5/public/archives/2019/06/index.html","9902e8888dbf1bab79986c60fa977b5d"],["F:/blog5/public/archives/2019/07/index.html","0d3ef57bc82a4aaed26ba4558f5ae061"],["F:/blog5/public/archives/2019/08/index.html","7e481ba8c0b68cc18123d1aecb4f1afe"],["F:/blog5/public/archives/2019/10/index.html","a63ff7f3d209c20c87afc913c5b0b2e5"],["F:/blog5/public/archives/2019/11/index.html","db60ee21bd30b27940ee335a07472e90"],["F:/blog5/public/archives/2019/index.html","7093eb9d94bbbed5420d0836eec04009"],["F:/blog5/public/archives/2019/page/2/index.html","9fdd34167affbac38cca2c451f2abbdb"],["F:/blog5/public/archives/2020/01/index.html","d9d8055631e8161c42d21702f533c090"],["F:/blog5/public/archives/2020/02/index.html","d4a5e9495d31e9c06a0124e80e89cbee"],["F:/blog5/public/archives/2020/03/index.html","549e4463e09392bbe4544c189433968a"],["F:/blog5/public/archives/2020/04/index.html","df58f7c1b448aa32ec5272b9a26a7b31"],["F:/blog5/public/archives/2020/index.html","67b3a567d807ea6547d9b67071757a0c"],["F:/blog5/public/archives/index.html","7982cb690d162d2c231697d64dee35c1"],["F:/blog5/public/archives/page/2/index.html","2763df6607017752eef8a8aab908483a"],["F:/blog5/public/archives/page/3/index.html","0a559e565b62937c546106d8edfedf72"],["F:/blog5/public/archives/page/4/index.html","9fc9ca86077565f7fae0459b3394ee8b"],["F:/blog5/public/archives/page/5/index.html","64e6998d5a84360b4444e41d4a6d7efa"],["F:/blog5/public/archives/page/6/index.html","b3c08a3696142fd69e6cc3548c27a116"],["F:/blog5/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/blog5/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/blog5/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/blog5/public/bangumis/index.html","8b2ac6e0bd9c037f2d921178c7883da4"],["F:/blog5/public/categories/index.html","6bc3bd8f5813c2e8c8ae5295bed8dfe3"],["F:/blog5/public/categories/个人作品/index.html","3e3d7e8332d83615da9f07195c52a7da"],["F:/blog5/public/categories/个人作品/page/2/index.html","727d5752acb31ebc1e20c40569d3706a"],["F:/blog5/public/categories/仙剑资源整理/index.html","c510c1c3767feda227ee6c88bc0a7aa3"],["F:/blog5/public/categories/其他/index.html","683d3b2e04e7a90c79759d4cb8b306d2"],["F:/blog5/public/categories/工具资源/index.html","f014078f0cfbccd0d5ef7cb789248f79"],["F:/blog5/public/categories/感想与安利/index.html","7b489e5024b00273025279e72259c9aa"],["F:/blog5/public/categories/感想与安利/page/2/index.html","9d5a0c316032204c5fcd738557f725cb"],["F:/blog5/public/categories/生活随记/index.html","c969448e2be2bb2544eb9217b0d47a00"],["F:/blog5/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/blog5/public/css/custom.css","79f7e5bbdc89a80e0822ef591c61864b"],["F:/blog5/public/css/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["F:/blog5/public/css/iconfont/demo_index.html","c0edf8b25db0b64e0c2ff956192dfbf8"],["F:/blog5/public/css/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["F:/blog5/public/css/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["F:/blog5/public/css/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["F:/blog5/public/css/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["F:/blog5/public/css/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["F:/blog5/public/css/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["F:/blog5/public/css/index.css","faf529bbd2b3537913b6e57c069e4912"],["F:/blog5/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog5/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/blog5/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/blog5/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/blog5/public/img/loading.gif","a994cd022cdff0a80c6cf57173c0454d"],["F:/blog5/public/index.html","446ca6ec27855f098aa81acdeeec8831"],["F:/blog5/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["F:/blog5/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["F:/blog5/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["F:/blog5/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/blog5/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/blog5/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/blog5/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["F:/blog5/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/blog5/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/blog5/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["F:/blog5/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["F:/blog5/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["F:/blog5/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/blog5/public/links/index.html","c3c0224317a50b0926b1602fdcd514ff"],["F:/blog5/public/message/index.html","a02f34a3a85dcb911711f626777277ba"],["F:/blog5/public/music/index.html","cfa83aa7419fcf091c4c975267bc5d14"],["F:/blog5/public/page/2/index.html","b87bacaf799c3becc1946071c9374ce9"],["F:/blog5/public/page/3/index.html","0871e55ad4c5739c1472206cd5bc2fc5"],["F:/blog5/public/page/4/index.html","803aed4692bdb1bf87d68a8671c473a3"],["F:/blog5/public/page/5/index.html","a2ef9dbb96bdd34f4cc4a54bbd74f3ed"],["F:/blog5/public/page/6/index.html","590b8a78c388fb3035107a6d0e7a75bb"],["F:/blog5/public/posts/1270.html","816017e916b9efc1022f7cf5c021a742"],["F:/blog5/public/posts/12770.html","e8a904f31aaff048e124ecaa2a8cfa6a"],["F:/blog5/public/posts/14580416.html","ba25d096b42a75f3d8b1af22b6469e6e"],["F:/blog5/public/posts/15663.html","f43c5a02ac929fec6d7dc0d2457366f2"],["F:/blog5/public/posts/15929.html","b679f643bfa8e99e80ecc6c41e0a5c90"],["F:/blog5/public/posts/15959.html","f9153645eb1ab015517c8fd586ab93b9"],["F:/blog5/public/posts/173.html","39dbace17bcb25db7d241c188f713585"],["F:/blog5/public/posts/18647.html","ea324f5217d4d672dbc2868ecd21ff9f"],["F:/blog5/public/posts/19368.html","58db7be78b18b32074dd3baf250958a4"],["F:/blog5/public/posts/19549.html","38f2327f5231861b41c58aefd5d7fc89"],["F:/blog5/public/posts/1dbec013.html","ee8944e776d350178ed9ccb6186e00a1"],["F:/blog5/public/posts/20133.html","eeda7cb54c4c651fb76c643e0d0558c5"],["F:/blog5/public/posts/20764.html","34af1e711ee322b0c4726266dc768b87"],["F:/blog5/public/posts/2137.html","95b687811bba495da9927bcb8a312615"],["F:/blog5/public/posts/27247.html","b776301a45094b3d38baeb56279066ec"],["F:/blog5/public/posts/28180.html","c1ba46e1fe3c541ac173d8c98b2cd65f"],["F:/blog5/public/posts/31d725ea.html","fc08b3ca60064cbdcdc12c973aa0dbcd"],["F:/blog5/public/posts/34771.html","a64b0e46666cc9a34473ac3798a1043a"],["F:/blog5/public/posts/35192.html","458b950f10e3a4abb671553e4dc8ce9a"],["F:/blog5/public/posts/35671.html","91712af05fc700559e5f9d8e117a5d22"],["F:/blog5/public/posts/364.html","d036b984d49a88f4c81a1f99cd77200c"],["F:/blog5/public/posts/38726.html","ae281052d4f1b295b5b9f227cb11620b"],["F:/blog5/public/posts/44082.html","fc6d5224017dc2a04906a034a7ebf01b"],["F:/blog5/public/posts/45026.html","2b2cca6a437fb85a2823d9d420a9ed61"],["F:/blog5/public/posts/48037.html","7f51b37ab0f5536a32d13f4173878ee7"],["F:/blog5/public/posts/491b225d.html","a4f1f1491fa867d4c515ead12046bde1"],["F:/blog5/public/posts/50615.html","4431cdc2478d45ed0a3917b7f53152d9"],["F:/blog5/public/posts/51793.html","317ffe9b2f5c4836f7d4abc49f7d2883"],["F:/blog5/public/posts/51888.html","9ff68cb396aacd9e0c9d7ffddb0c2134"],["F:/blog5/public/posts/51993.html","78b51679356bb699636fef5e53514632"],["F:/blog5/public/posts/535faed9.html","d8dcf8d50d0fb4305efdb2bf30baf0ca"],["F:/blog5/public/posts/55032.html","260b90a18c34ec04dfc7182b4c448cbf"],["F:/blog5/public/posts/55741.html","8e60777195c76560d11e612bc08d8de2"],["F:/blog5/public/posts/57a901f0.html","6128025d65329e5129e4f43db3982656"],["F:/blog5/public/posts/59ca7e41.html","5cc3a265305aa1923f2ecb4aca08d2b0"],["F:/blog5/public/posts/5fd82dbe.html","bda7359f97aa9a07d04cb17bee88cbc6"],["F:/blog5/public/posts/62550.html","eba51f5c7701b6b9dd23116a4946cfbc"],["F:/blog5/public/posts/64777.html","9e45340e0b27e21d0deeb87ca5476145"],["F:/blog5/public/posts/64850.html","71427a78783c0137939cd64551a31d1b"],["F:/blog5/public/posts/65e843f4.html","8b7f6cc05373a2f977a8cfd47a7d3f99"],["F:/blog5/public/posts/7e3d2d4.html","239d7dc467df957220f188fcba452d5a"],["F:/blog5/public/posts/845ca7c4.html","61561669369f03f09da376475a538f4f"],["F:/blog5/public/posts/898c3bb3.html","e36ecf530a6071bb1be4a5c223c343ca"],["F:/blog5/public/posts/964d468f.html","e7c815a5fdcc7e6a060e9da9ad93ec0f"],["F:/blog5/public/posts/afcf312e.html","28ce7b719e942a2086478138a1129dad"],["F:/blog5/public/posts/bc1c3bac.html","cd17a2e4e25f47dddba31a740483f007"],["F:/blog5/public/posts/be1f2db7.html","1832d079c8308cb4babeda3eccc68f4f"],["F:/blog5/public/posts/c0404e49.html","2d362a3a93333764a0271b5a35adecb3"],["F:/blog5/public/posts/cafe661f.html","85ac6131ed5140ff7bfe51246032eca7"],["F:/blog5/public/posts/dc17b247.html","e2fe63e692c95904a09ff7f7a820c39c"],["F:/blog5/public/posts/ddef8e37.html","734c779270ad68e6c02e16e4df14a9b7"],["F:/blog5/public/posts/eb9d5593.html","8229aca8618f641094b22d8a1049ab3a"],["F:/blog5/public/posts/edbff87d.html","367d01c86c637b454552c88f823ba337"],["F:/blog5/public/posts/ee58e1ae.html","d3eadc34c70d45eeaac59f64655b840d"],["F:/blog5/public/steamgames/index.html","3c439977485c6f3edf5822dcb3ec332f"],["F:/blog5/public/tags/2019随意链接大赛/index.html","c9a09441500b2eef67a4b6dc192dadfd"],["F:/blog5/public/tags/2D表情/index.html","534f03ed986c87a5f0208360f275f7bd"],["F:/blog5/public/tags/AI/index.html","1c3918b39851f3be73bb01cc85edddd5"],["F:/blog5/public/tags/AMV/index.html","7a778f7150ff1e6354bde3803417796a"],["F:/blog5/public/tags/AVS/index.html","3d2441c608faeed2721b4d6175a287bb"],["F:/blog5/public/tags/Aviutl/index.html","623bed6d67efef87bbb29dc23b7e7e1f"],["F:/blog5/public/tags/B站/index.html","cc7f99edf57a15f39aeec6995a3b7e50"],["F:/blog5/public/tags/CLANNAD/index.html","17d7b8780832ae02183764d1cf30584f"],["F:/blog5/public/tags/Hexo/index.html","fd79f7f0d1c335a4a8f712daf88f7f24"],["F:/blog5/public/tags/Key/index.html","53dbd60b90119288a4c0929f2944ce10"],["F:/blog5/public/tags/Let-s-encrypt/index.html","79a0ec8b3f61460d4a2729df3d8d2591"],["F:/blog5/public/tags/MAD/index.html","f15f9727fbf940d772534f7fb7865836"],["F:/blog5/public/tags/MD/index.html","7a4babbc43a54cee6d18bf7ea03d235c"],["F:/blog5/public/tags/Markdown/index.html","f6dc3cd278b677912312d87705584a10"],["F:/blog5/public/tags/RPG-maker-MV/index.html","5891f4d26d1a29a28b9d32525a017da5"],["F:/blog5/public/tags/SSL/index.html","19b38266d7a94c87696dbeffb5747378"],["F:/blog5/public/tags/Spleeter/index.html","7d578f4d91d4bdbd902dab055522cd9a"],["F:/blog5/public/tags/Topaz-AI-Gigapixel/index.html","532c77a457eb6f8f86acd897a9db6291"],["F:/blog5/public/tags/Valine/index.html","9617c1265abe27e8bd805b445af37e6a"],["F:/blog5/public/tags/Waifu2x/index.html","2739885f02dc3845c39895c0f281e7e2"],["F:/blog5/public/tags/bilibili/index.html","bfce66e3c37e3c5d391b66498629d04f"],["F:/blog5/public/tags/index.html","c061869b43d8ddaf28e5b58d3aeac9e4"],["F:/blog5/public/tags/npm/index.html","44fa0dd681ee0dae709ec0a5a7ab7169"],["F:/blog5/public/tags/steam/index.html","324981f102c482f2e23a152090e1c033"],["F:/blog5/public/tags/个人作品/index.html","647ec115fc4ff4dee7621fcefee3b18e"],["F:/blog5/public/tags/个人作品/page/2/index.html","b7088328735a08b6ef51021fd3de912f"],["F:/blog5/public/tags/仙剑/index.html","24c03256839367a94dbb8b7cc091427e"],["F:/blog5/public/tags/仙剑七/index.html","19338f83a2bf2d02ad3a5b2fd23c035d"],["F:/blog5/public/tags/仙剑五/index.html","b10cda2f28423511b6195cbdf9915583"],["F:/blog5/public/tags/仙剑六/index.html","0452c223ab48e256d4cad243036b4758"],["F:/blog5/public/tags/仙剑剧情对话/index.html","16bae566d7c4188a71a9247a0a90eac6"],["F:/blog5/public/tags/仙剑奇侠传/index.html","d29303041c502c8ab2c575a0fa5eecdf"],["F:/blog5/public/tags/仙剑奇侠传七/index.html","169d86e4d531041e8a05e956de1cd8af"],["F:/blog5/public/tags/仙剑奇侠传三/index.html","30625ba4ee29e504b9931d1088f2d8a0"],["F:/blog5/public/tags/仙剑奇侠传三外传/index.html","8daaad9a7f6a925ac5163f76edf3511c"],["F:/blog5/public/tags/仙剑奇侠传二/index.html","63a2a311989a855592752acdd81bda72"],["F:/blog5/public/tags/仙剑奇侠传五/index.html","1614a9943601e21004f6bff521c5a160"],["F:/blog5/public/tags/仙剑奇侠传五前传/index.html","18255819ff9af4b86bd618ebcc07b7a9"],["F:/blog5/public/tags/仙剑奇侠传六/index.html","07b1f3f02d72f7a3819d1c6a2e7e771e"],["F:/blog5/public/tags/仙剑奇侠传四/index.html","f194facd9ecfc7a37001de7fca2a3e0f"],["F:/blog5/public/tags/仙剑奇侠传幻璃镜/index.html","e4bd11d181a8af2b906a4d8766cb52e7"],["F:/blog5/public/tags/仙剑手游/index.html","466572a5aa7d3c9d06f9410290c6b7a7"],["F:/blog5/public/tags/仙剑春晚/index.html","b4583d0aadb67e9a3777841f64d0d4fd"],["F:/blog5/public/tags/仙剑最惨女配剧场/index.html","f66b3e39634bfd4421d5059d659753f6"],["F:/blog5/public/tags/仙剑混剪/index.html","b4171538c5359a1b0c121245b8ae38d5"],["F:/blog5/public/tags/仙梦长留/index.html","f9c18bfcdec1cb9e40c14e3abecb26b5"],["F:/blog5/public/tags/傅红雪/index.html","3a7a2823b3147b95a9bd27d9b938d66d"],["F:/blog5/public/tags/刘亦菲/index.html","6b1e56251a9fab69900c064a139501c2"],["F:/blog5/public/tags/动态壁纸/index.html","1bc0e68250c97b87518db8750132b497"],["F:/blog5/public/tags/十年/index.html","8a826f488be4baf7fc8a1671d2cd020f"],["F:/blog5/public/tags/单机/index.html","e7376d8133a5e351dca244de3c4decc1"],["F:/blog5/public/tags/博客/index.html","189820d33df8ba77059645798cdd603c"],["F:/blog5/public/tags/卷积神经算法/index.html","03a4be0a3f0578c8eed9c417a7ef1b6d"],["F:/blog5/public/tags/去水印/index.html","f232cffb4bd8b96b4aab3a3a65f6d23b"],["F:/blog5/public/tags/叶青/index.html","f4c6bb45ba7ee2263c85e736d4717c19"],["F:/blog5/public/tags/哔哩哔哩/index.html","f67a3ea238e7a166c6811ad2156354f0"],["F:/blog5/public/tags/声之形/index.html","ad27b089bf4fe7d0e17e5c06b7fd80ab"],["F:/blog5/public/tags/女高中生的虚度日常/index.html","cabcf589a877fd70ec3608c79b39a965"],["F:/blog5/public/tags/孙蝶/index.html","6ca1719c93f4114d791beaf18584d510"],["F:/blog5/public/tags/孟星魂/index.html","2e525bf1cffa5bc0fb92a85e0d7e4623"],["F:/blog5/public/tags/帮助文档/index.html","b1be2ba7b28ee2ee1f57987a26fe1485"],["F:/blog5/public/tags/年终总结/index.html","d5f8d81fdcaa33c06c93bbdd06ba5af0"],["F:/blog5/public/tags/广播剧/index.html","4f9fe71f6cc2ff4ccc28b807df027e7b"],["F:/blog5/public/tags/张睿/index.html","5a65eae40eaa3c49f006d2651c1329c7"],["F:/blog5/public/tags/当时明月/index.html","2c987c88add1db749330a17b9eabc302"],["F:/blog5/public/tags/心が叫びたがってるんだ。/index.html","83ddebab082af5ee9890f3ae8220f2b6"],["F:/blog5/public/tags/心灵想要大声呼喊/index.html","01c81195e6ecae759b1ff68864a077e0"],["F:/blog5/public/tags/感想/index.html","cc843e5f6188096785bb544cd4ae65d0"],["F:/blog5/public/tags/战斗吧！球球/index.html","92e2d53432cd0f1f5fa13e8f23e24805"],["F:/blog5/public/tags/扣图素材/index.html","8195dc5da08c81785799ff7d8715d6fb"],["F:/blog5/public/tags/抠图素材/index.html","fd0dfd5dd0fa50167c6c11ddcaa61c47"],["F:/blog5/public/tags/新仙剑OL/index.html","0d14c438593083cd7360a57f63b457f9"],["F:/blog5/public/tags/新仙剑奇侠传online/index.html","2c8bd4e51e83c5f811e0076a5793eccd"],["F:/blog5/public/tags/新边城浪子/index.html","1c2dcb80a5f03923c72ec0310facee41"],["F:/blog5/public/tags/星蝶/index.html","00991ad2038fb67d71c9e3f29baaa593"],["F:/blog5/public/tags/最惨女配是衬托/index.html","7b92779a2c8d7720c3d11971665e37b4"],["F:/blog5/public/tags/月玲珑/index.html","25af779154eca3d186970e53773a148c"],["F:/blog5/public/tags/月玲珑十周年/index.html","1f297378b2d795f787d9de5026ad17fd"],["F:/blog5/public/tags/月玲珑小剧场游戏/index.html","a714de3ece2aee28fbbcbe4ba132efa0"],["F:/blog5/public/tags/月玲珑配音社/index.html","63d2df35d4260ed7c16f6879f79d9f80"],["F:/blog5/public/tags/朱一龙/index.html","24b8598bf772320896ff23c9197ecf95"],["F:/blog5/public/tags/流星蝴蝶剑/index.html","a6dc47311a0fe6223e0f84533214ee09"],["F:/blog5/public/tags/浩气参天/index.html","9cfe4d727fad39daf9c8b38d57c29e19"],["F:/blog5/public/tags/游戏整理/index.html","c8228f2c2a303d0ce71ef0b35ccae1ed"],["F:/blog5/public/tags/甜蜜蜜/index.html","59c6fabbf6955cb89b4acc62cacae414"],["F:/blog5/public/tags/祝有涯/index.html","0edd49116f3b9b85789e95b504b1945d"],["F:/blog5/public/tags/神舞幻想/index.html","27bfd86c30d1a9aa5a22690e8d3eeeb2"],["F:/blog5/public/tags/穹之扉/index.html","6da912553c495000a96cffba89b05f16"],["F:/blog5/public/tags/素材整理/index.html","094f763b3dd1fbcd312cccff5e225876"],["F:/blog5/public/tags/网络/index.html","7a87301dbd941a925b88790a9c94a1f4"],["F:/blog5/public/tags/羽裳/index.html","de0cf7ba667ee549666921cd92e287ee"],["F:/blog5/public/tags/聲の形/index.html","c98c93f27cf684e4c5164ba835aa46df"],["F:/blog5/public/tags/虹七/index.html","41c84d2846ffd76565b9524b1cc424c9"],["F:/blog5/public/tags/虹猫蓝兔七侠传/index.html","9080d996d37e7e7e03402f1c2defef9c"],["F:/blog5/public/tags/视频剪辑/index.html","8fa7d66f4c6eeee6a320d6ea8cfa0a7a"],["F:/blog5/public/tags/视频剪辑/page/2/index.html","e72901cc88fa30171f6f5793c610f66c"],["F:/blog5/public/tags/评论系统/index.html","74e35e31de5728ece145b42f430b9c09"],["F:/blog5/public/tags/语音整理/index.html","c30b897da2cf408e0909c33c4fa178f3"],["F:/blog5/public/tags/资源提取/index.html","4c94e8ae3495127ff021db23ce8af99e"],["F:/blog5/public/tags/赵灵儿/index.html","945540108827b9c76c8a2ee6071e9705"],["F:/blog5/public/tags/轩辕剑/index.html","4c062d331e42c31a0f1944473ed5d9f9"],["F:/blog5/public/tags/轩辕剑外传穹之扉/index.html","f12a4339efeb88f8715fe3c17b1ee0df"],["F:/blog5/public/tags/透明台标/index.html","a322478ecad84d95c2de87f89062da93"],["F:/blog5/public/tags/陈意涵/index.html","189376bc7eb0f50e659d119bf9cdb6af"],["F:/blog5/public/tags/陈楚河/index.html","f0f9a923eafa3c161e51967d7bce52ff"],["F:/blog5/public/tags/青槐/index.html","05fea956fd0a6e99b77af9968365a0ee"],["F:/blog5/public/tags/音轨分离/index.html","6983604976a1f4c0f5ac001b3c0a45b0"],["F:/blog5/public/tags/飞蝶/index.html","126d796a165b1fd0d4acd119f13e8109"],["F:/blog5/public/tags/龙葵/index.html","95f04b9aa6eae463fdfd465bae733ae7"],["F:/blog5/public/works/index.html","65e607788e0f1a4a0c7d68000c17a830"]];
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








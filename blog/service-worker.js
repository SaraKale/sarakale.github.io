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

var precacheConfig = [["F:/blog5/public/aboutme/index.html","9f4b929b586101cdd89f621876dc6dfb"],["F:/blog5/public/archives/2013/05/index.html","eb79da890560a46bdfd9f9ba8dd49776"],["F:/blog5/public/archives/2013/index.html","e12b9d1bb2ae50e894e587bf4de49878"],["F:/blog5/public/archives/2015/07/index.html","85317b60620427d9d45259909d564f9c"],["F:/blog5/public/archives/2015/index.html","0a01e4ac51e09e2ea9448f403cf17bf3"],["F:/blog5/public/archives/2016/05/index.html","5c5932cb85f950a067e7de8c4dba47bb"],["F:/blog5/public/archives/2016/10/index.html","9f91dac242f81b4ec1f553c76a8a1daf"],["F:/blog5/public/archives/2016/11/index.html","447fdf223ca819f6f1c819fcb9bcf19e"],["F:/blog5/public/archives/2016/12/index.html","15d8aff1fa0e23f25ef03a8373179e38"],["F:/blog5/public/archives/2016/index.html","e697593c8ad0b7751a0d380ab5ccb93d"],["F:/blog5/public/archives/2017/01/index.html","55a0b55c6823c61e2950cc81bee26ac0"],["F:/blog5/public/archives/2017/02/index.html","246dee04c523be4334ccc4c41e1b123a"],["F:/blog5/public/archives/2017/06/index.html","ab9cfebbd9bd2176ad66c3b458c87418"],["F:/blog5/public/archives/2017/07/index.html","07189a0d6fe8d3313cf7317adb0fe5f0"],["F:/blog5/public/archives/2017/08/index.html","df925c0730623836df92ee6f06741f0f"],["F:/blog5/public/archives/2017/09/index.html","e27740e42d8a5a6d01e96680a61ebf4c"],["F:/blog5/public/archives/2017/11/index.html","f62309f532821a41f35611cc4eee32ea"],["F:/blog5/public/archives/2017/index.html","2e7193a675683a37940002e257307f45"],["F:/blog5/public/archives/2017/page/2/index.html","f34563654b79db02b9585edee5aac232"],["F:/blog5/public/archives/2018/01/index.html","77f18747dba9cd0bf364ca6056f00f1f"],["F:/blog5/public/archives/2018/02/index.html","c471c56643553956d70ffb9eedb8ffb0"],["F:/blog5/public/archives/2018/04/index.html","e70d03c05b6df9f5dc860e6016eccb01"],["F:/blog5/public/archives/2018/06/index.html","35a28d8f062ea3517be023bd023c5e6b"],["F:/blog5/public/archives/2018/07/index.html","eb0d08d5ded66739403204345a612537"],["F:/blog5/public/archives/2018/08/index.html","c8228b036628e1fbd0f64e25e0b6880c"],["F:/blog5/public/archives/2018/09/index.html","0001f3a09628fb5f550164188c58d7a8"],["F:/blog5/public/archives/2018/10/index.html","02b7818cc22bcbaa832a419c384ed9c3"],["F:/blog5/public/archives/2018/11/index.html","99667a7c5fcf8a26f896a48a6b3f8290"],["F:/blog5/public/archives/2018/12/index.html","c3fe95f4f67663886d254e64d0dab49e"],["F:/blog5/public/archives/2018/index.html","bf8bffb3f19dde50179f84dcce21aaff"],["F:/blog5/public/archives/2018/page/2/index.html","4a45bb56eb7511b10ef3ad4574382e92"],["F:/blog5/public/archives/2019/01/index.html","a96914d7f3cd62276a15def5653e5089"],["F:/blog5/public/archives/2019/02/index.html","730826d4b97773c68da31fb2ec546f21"],["F:/blog5/public/archives/2019/04/index.html","8875af4940560cef5f4f0799cdc75840"],["F:/blog5/public/archives/2019/06/index.html","15e0eba2e8456b05192ea0d78da5405d"],["F:/blog5/public/archives/2019/07/index.html","ea9b1c8b756230d6bd54022dca2a8faa"],["F:/blog5/public/archives/2019/08/index.html","afc61a3cfb695e54a908adec1c8ff127"],["F:/blog5/public/archives/2019/10/index.html","64011bd2b73cac602f10406fb53e031e"],["F:/blog5/public/archives/2019/11/index.html","ef0629b7ddb9a898361ef81513535646"],["F:/blog5/public/archives/2019/index.html","b7f95b08de82cacc5c7c0b6681a46f31"],["F:/blog5/public/archives/2019/page/2/index.html","c42219cf50164f9c72e22932d2a5ff20"],["F:/blog5/public/archives/2020/01/index.html","9821e422c85885a109099583ce768b07"],["F:/blog5/public/archives/2020/02/index.html","627ad0effce84df67c9addefdc7b2eb6"],["F:/blog5/public/archives/2020/03/index.html","4fe634e2b5e8a04d8f50e3ff4227f24d"],["F:/blog5/public/archives/2020/04/index.html","7004248be2e94f240a5923530e581f11"],["F:/blog5/public/archives/2020/index.html","19ee3d065d62ee322aa0a68ad00793dd"],["F:/blog5/public/archives/index.html","e37084e3c157b3a44f40bee52d57efc6"],["F:/blog5/public/archives/page/2/index.html","a9c6591493ac4147eeea098edd3fbaeb"],["F:/blog5/public/archives/page/3/index.html","a490fac8b4ee508b09fb536ee0e0a2d5"],["F:/blog5/public/archives/page/4/index.html","be8fc53fc907d276885756fb68dafb53"],["F:/blog5/public/archives/page/5/index.html","c56ba5a1dad93ad56be317fb71c6be91"],["F:/blog5/public/archives/page/6/index.html","9b49b37e9c3635f5d2c68fc83f701c39"],["F:/blog5/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/blog5/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/blog5/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/blog5/public/bangumis/index.html","2807ba29fe474f31cd7a0c0fd476aed6"],["F:/blog5/public/categories/index.html","bb26eef685771ab14a474ce9f01604e4"],["F:/blog5/public/categories/个人作品/index.html","073830a484bca6a25f78f914a73e84e5"],["F:/blog5/public/categories/个人作品/page/2/index.html","0db22db09889cdaa7f79e50bbf9de4b6"],["F:/blog5/public/categories/仙剑资源整理/index.html","44cf1f9f9a79761b0da4db130315a463"],["F:/blog5/public/categories/其他/index.html","634f903a425db6e48d3e043d8c5b18dd"],["F:/blog5/public/categories/工具资源/index.html","b516a2f0006c662b3b5f03f91a06bf5d"],["F:/blog5/public/categories/感想与安利/index.html","96da6450a749c4f0f0046e7c3d8a4854"],["F:/blog5/public/categories/感想与安利/page/2/index.html","16ac9c1a173bc8b00f76a0f92ae52f9c"],["F:/blog5/public/categories/生活随记/index.html","76684c470266814ba9e7c9c625ec9c0d"],["F:/blog5/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/blog5/public/css/custom.css","d7aefd8f1e9b79f24f8899f0a83f712a"],["F:/blog5/public/css/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["F:/blog5/public/css/iconfont/demo_index.html","c0edf8b25db0b64e0c2ff956192dfbf8"],["F:/blog5/public/css/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["F:/blog5/public/css/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["F:/blog5/public/css/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["F:/blog5/public/css/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["F:/blog5/public/css/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["F:/blog5/public/css/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["F:/blog5/public/css/index.css","9e19b37cd6aef3c9c6e8c60a4c7e7d17"],["F:/blog5/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog5/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/blog5/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/blog5/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/blog5/public/img/loading.gif","a994cd022cdff0a80c6cf57173c0454d"],["F:/blog5/public/index.html","d2dee6b81dcaa958372336a3dfe28e31"],["F:/blog5/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["F:/blog5/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["F:/blog5/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["F:/blog5/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/blog5/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/blog5/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/blog5/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["F:/blog5/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/blog5/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/blog5/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["F:/blog5/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["F:/blog5/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["F:/blog5/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/blog5/public/links/index.html","13897a132a5c57b0e894358580612942"],["F:/blog5/public/message/index.html","48c922b1ca479d979a227ea5a739aa2e"],["F:/blog5/public/music/index.html","0b68d29ace37b1e8200f308f8439249d"],["F:/blog5/public/page/2/index.html","e9959e9a4a93018ee85b6a250b2f5edd"],["F:/blog5/public/page/3/index.html","b1712e24b0d0b877ba30bf295b48ac32"],["F:/blog5/public/page/4/index.html","1a34f271ee23a366b58531a388bfe141"],["F:/blog5/public/page/5/index.html","7891eda29f7ce18099bef2382c43c431"],["F:/blog5/public/page/6/index.html","0a9a67cc3a1fa55e4e5e00733186a4e7"],["F:/blog5/public/posts/1270.html","10958beb0c4d39edd98d8dc16dd00fb8"],["F:/blog5/public/posts/12770.html","595d3b5c0f5c280c032a0f51ae5d3c0d"],["F:/blog5/public/posts/14580416.html","480154fbe8ba8b0136ed0c985193ddda"],["F:/blog5/public/posts/15663.html","c979b97c1784821c45c8fc73519eb0c7"],["F:/blog5/public/posts/15929.html","4519781817aaa1b89fb4d5e52e943ea8"],["F:/blog5/public/posts/15959.html","45ee26e5a02b274927ea4bb17c5ddf96"],["F:/blog5/public/posts/173.html","d4beadbbaa65fb3bc40c9f8e5f004c52"],["F:/blog5/public/posts/18647.html","aa8688e9d10b74f9bb1e1751010b746e"],["F:/blog5/public/posts/19368.html","5d677a73919153cab0afd1f6a5e5bd55"],["F:/blog5/public/posts/19549.html","af37fd80465ad8b29fa3fe57f96c341c"],["F:/blog5/public/posts/1dbec013.html","4fd981eba7ee3fab1e0b0c0c6c890f7e"],["F:/blog5/public/posts/20133.html","8975a92382ddc1122239c7891d7fe62b"],["F:/blog5/public/posts/20764.html","df685f0cbc3d7351900d2916b7a4f141"],["F:/blog5/public/posts/2137.html","fd0b994728fe959e49a66311214a93ef"],["F:/blog5/public/posts/27247.html","f4ea3ccc7e55608ad2b3768fa48586c6"],["F:/blog5/public/posts/28180.html","6d4fc2f61caaf4c94912702dbb6519a8"],["F:/blog5/public/posts/31d725ea.html","bdfa6cdee352fcab167b7b04b84d57d3"],["F:/blog5/public/posts/34771.html","4421058e15a81e2cf8c1872173342ed7"],["F:/blog5/public/posts/35192.html","c31fb9846f4bec2bb3e8e4afb2ab2032"],["F:/blog5/public/posts/35671.html","96a1295d19c05d6af1917f6e81c533d4"],["F:/blog5/public/posts/364.html","2bdc1514c96215b699f0744711b1a22a"],["F:/blog5/public/posts/38726.html","67ea1a740e69e4d9a33a5a90803873cb"],["F:/blog5/public/posts/44082.html","6e1d8db0089a883ad4d12a77d8de9393"],["F:/blog5/public/posts/45026.html","ac58e8853c8c62f33e8a4d427f203875"],["F:/blog5/public/posts/48037.html","fe53215769f1aa377edbae9884e1dfa5"],["F:/blog5/public/posts/491b225d.html","139900197a6d82c657b5685906a7fbbc"],["F:/blog5/public/posts/50615.html","f4b9f4c7f782e659c987782c6d6f7506"],["F:/blog5/public/posts/51793.html","c9bc052bcf87d2ee1ffb9fbe516398f4"],["F:/blog5/public/posts/51888.html","7efece7710bcfcea901532929d6c1ccd"],["F:/blog5/public/posts/51993.html","a30448a10f1259827e5a34878a5722f8"],["F:/blog5/public/posts/535faed9.html","fed44feab6ab6f800dc88eb2d580b2a5"],["F:/blog5/public/posts/55032.html","6fdeb057d76c1c987c4b7944233fe875"],["F:/blog5/public/posts/55741.html","d2569b957ee5b64eaa4660275903bfe8"],["F:/blog5/public/posts/57a901f0.html","c02fd5e51a612cd3e94f851683df9b86"],["F:/blog5/public/posts/59ca7e41.html","cfc0b7be2d6a8bec5e2c75950368898f"],["F:/blog5/public/posts/5fd82dbe.html","9ba62a2db10ad4dfe4773fbe0289c3de"],["F:/blog5/public/posts/62550.html","41095786cf5ea1e8c2b0af567e653ad9"],["F:/blog5/public/posts/64777.html","278de0c61bffcf1b766dc46f0772c345"],["F:/blog5/public/posts/64850.html","98be2de08a0ea44ce072e148e08c7cde"],["F:/blog5/public/posts/65e843f4.html","415d45389d3271377bb3f60399f92d47"],["F:/blog5/public/posts/7e3d2d4.html","2da8029401fd7ce360e5d40906b4f258"],["F:/blog5/public/posts/845ca7c4.html","9916d69fe1fde68b934ee65676b0bf87"],["F:/blog5/public/posts/898c3bb3.html","397c15c36dd786f09b93b79872476004"],["F:/blog5/public/posts/964d468f.html","c925b7c2b47e358fce9966062db01376"],["F:/blog5/public/posts/afcf312e.html","66339b41290073ff21834cf1b4eb0157"],["F:/blog5/public/posts/bc1c3bac.html","d1baf535af7b3b16fc51e712bb12d5b1"],["F:/blog5/public/posts/be1f2db7.html","244fe1b514051f5b4ac809faafd560e0"],["F:/blog5/public/posts/c0404e49.html","2703ecc5beb6a65b72c684286265de7a"],["F:/blog5/public/posts/cafe661f.html","6c1469d050e53b3d9600ddd96894e321"],["F:/blog5/public/posts/dc17b247.html","209ad8e5b384d916a7976ee8f18cd167"],["F:/blog5/public/posts/ddef8e37.html","5f5bfa039dcf9308feec9bc5a27cc028"],["F:/blog5/public/posts/eb9d5593.html","ffc212d44de52b3c25bbd8ff8f7a4d5d"],["F:/blog5/public/posts/edbff87d.html","f4ad652f5b4eec85e529c4bccba00950"],["F:/blog5/public/posts/ee58e1ae.html","640b3b44ce6be62d015bf9ac25427345"],["F:/blog5/public/steamgames/index.html","d529208ae62a776c539069ba1a27ef9a"],["F:/blog5/public/tags/2019随意链接大赛/index.html","5cb6f06901d6b212c5a52fb9b9ff8c72"],["F:/blog5/public/tags/2D表情/index.html","09c5dd1259f594d992d9f4afff1006d0"],["F:/blog5/public/tags/AI/index.html","64db7a05117119fff8342bd8b9942310"],["F:/blog5/public/tags/AMV/index.html","0e65e32d03680ab7f82e6bda2dab7e2c"],["F:/blog5/public/tags/AVS/index.html","d47c0567165e595eaff6636c019a4fd5"],["F:/blog5/public/tags/Aviutl/index.html","49fdbb338b7f9520614b4660426143f7"],["F:/blog5/public/tags/B站/index.html","dccdeb67a18e5296f87e13e2ccec7d3b"],["F:/blog5/public/tags/CLANNAD/index.html","85469f04feeef3d5ebdf65032e28d07e"],["F:/blog5/public/tags/Hexo/index.html","063c6f41c3dd6eb7974d1e572e6dc277"],["F:/blog5/public/tags/Key/index.html","ca309d2b83a60a66332cbe1327b8b4e6"],["F:/blog5/public/tags/Let-s-encrypt/index.html","2d850edf99ffd61c56f55f78df56aedd"],["F:/blog5/public/tags/MAD/index.html","f77426192218eac03129263a64f6cb19"],["F:/blog5/public/tags/MD/index.html","1c0e367d45bb3c08407377f5177f65c8"],["F:/blog5/public/tags/Markdown/index.html","47f4c248e09b34a3cb5ce0a47fa05217"],["F:/blog5/public/tags/RPG-maker-MV/index.html","29f26ceb2b0d63b06208d448eb847668"],["F:/blog5/public/tags/SSL/index.html","1bdf637f02fa211d14bd28c6a15a63e5"],["F:/blog5/public/tags/Spleeter/index.html","5a9498c70183ddbb98ad3332c831f5e5"],["F:/blog5/public/tags/Topaz-AI-Gigapixel/index.html","6543bbc35b0b15664249076c06da2a0f"],["F:/blog5/public/tags/Valine/index.html","74b375e242b7051f8b8962424f30c9f4"],["F:/blog5/public/tags/Waifu2x/index.html","34445e927001d51cc000446270397498"],["F:/blog5/public/tags/bilibili/index.html","d201d704a8e50881aa703c4c03c9e7cd"],["F:/blog5/public/tags/index.html","22ed47abb8dc83c394ae0bae1bb6be39"],["F:/blog5/public/tags/npm/index.html","f8411bf081369eb4d6b15092e41342ca"],["F:/blog5/public/tags/steam/index.html","2a6b30ae6797d5deca54fb3282e67de8"],["F:/blog5/public/tags/个人作品/index.html","a7f0d6836046cd54a297fd800b9ae601"],["F:/blog5/public/tags/个人作品/page/2/index.html","e6856f0929c9330f94ce35a15a6aa4b7"],["F:/blog5/public/tags/仙剑/index.html","37a019cfd48f48efcfd2ba906b9c764f"],["F:/blog5/public/tags/仙剑七/index.html","2248e1a0ff835172b89f3c5ed5a76476"],["F:/blog5/public/tags/仙剑五/index.html","8c6b752b7466bcc660dc5f1f8e670650"],["F:/blog5/public/tags/仙剑六/index.html","2d9f58110077f9924f4783c9ae3d51a5"],["F:/blog5/public/tags/仙剑剧情对话/index.html","b902435da4949ecc7cf65950842e2413"],["F:/blog5/public/tags/仙剑奇侠传/index.html","577c430a6528387c6807b094e2d14ff8"],["F:/blog5/public/tags/仙剑奇侠传七/index.html","31c12384a940870dfff308bc501651bd"],["F:/blog5/public/tags/仙剑奇侠传三/index.html","906f60e3048424f76a18be9cc7c9ee80"],["F:/blog5/public/tags/仙剑奇侠传三外传/index.html","e30e5972ef775b17ea020d8a0e70c403"],["F:/blog5/public/tags/仙剑奇侠传二/index.html","8054a392107c5cea8353c0248150bf6c"],["F:/blog5/public/tags/仙剑奇侠传五/index.html","7272b0ecaf6d843b4ef1cdbb5b328ffb"],["F:/blog5/public/tags/仙剑奇侠传五前传/index.html","ba576161bb46c3bd081f1bb8d386da81"],["F:/blog5/public/tags/仙剑奇侠传六/index.html","f14ca5db123dac762c257d645b1ddd26"],["F:/blog5/public/tags/仙剑奇侠传四/index.html","0cd6ed9f74d900ee3f649bb6462d824d"],["F:/blog5/public/tags/仙剑奇侠传幻璃镜/index.html","e1cc5a8e3076ead801720700445610f4"],["F:/blog5/public/tags/仙剑手游/index.html","1bfab3e286dbca325035a3337af881f2"],["F:/blog5/public/tags/仙剑春晚/index.html","2b2a852168be95844db215dae211f644"],["F:/blog5/public/tags/仙剑最惨女配剧场/index.html","a92fb2b9fcfda449faec4fb9cf4e6b59"],["F:/blog5/public/tags/仙剑混剪/index.html","842081f23abf941906e36ac328d7dc4e"],["F:/blog5/public/tags/仙梦长留/index.html","f8fb8ebe72d58ef0946cefb5bdc7e04a"],["F:/blog5/public/tags/傅红雪/index.html","114cf5d35fb19eb53c46632b58391791"],["F:/blog5/public/tags/刘亦菲/index.html","03edb908710410b83d666df93422e9bb"],["F:/blog5/public/tags/动态壁纸/index.html","15e848bd92632c350b43ee501d46397d"],["F:/blog5/public/tags/十年/index.html","511d15569554982cf6842c6832828ed4"],["F:/blog5/public/tags/单机/index.html","de3fa0cff1a6574807017f44b8b2f782"],["F:/blog5/public/tags/博客/index.html","b131ebc99641844db9ca7b9e2b9821ed"],["F:/blog5/public/tags/卷积神经算法/index.html","e2e0551ab7203d9aa6a3c94cbf233327"],["F:/blog5/public/tags/去水印/index.html","73fb97028f69091ed8d4f972103a7bf5"],["F:/blog5/public/tags/叶青/index.html","c2018eb538b9fa92f0dbee37849bd0be"],["F:/blog5/public/tags/哔哩哔哩/index.html","b7ddf02cc4945b9c77933a8c6f60e408"],["F:/blog5/public/tags/声之形/index.html","88ec87036f88e93a9dde9c558ea1765d"],["F:/blog5/public/tags/女高中生的虚度日常/index.html","d961aa3aa96edeca49dfd374797a2ea2"],["F:/blog5/public/tags/孙蝶/index.html","523d911558a10eb1e5119bc24b9d6410"],["F:/blog5/public/tags/孟星魂/index.html","26dcee8477d4dfe9d11d688951a79e8f"],["F:/blog5/public/tags/帮助文档/index.html","4249863ec5890e4d4778761d0504629f"],["F:/blog5/public/tags/年终总结/index.html","133a9c2581633c908fd8062e503655d3"],["F:/blog5/public/tags/广播剧/index.html","0cae9d3263c0d58c6e7479810b4e3a45"],["F:/blog5/public/tags/张睿/index.html","36b558041b2c1650519b0348fe24b304"],["F:/blog5/public/tags/当时明月/index.html","866ec09e2ba1724fd07e68d23427ef8c"],["F:/blog5/public/tags/心が叫びたがってるんだ。/index.html","6cab57c23b6a6537d5b48bf58f13049f"],["F:/blog5/public/tags/心灵想要大声呼喊/index.html","a00703b8eae83de8799fc4a407bf5730"],["F:/blog5/public/tags/感想/index.html","26ade9fd01d78653d14b72adeecb79bc"],["F:/blog5/public/tags/战斗吧！球球/index.html","583efcd63358efe22c1a2ca8a1ce57ef"],["F:/blog5/public/tags/扣图素材/index.html","c4759d589d3a33bedb0259bd3f30e67c"],["F:/blog5/public/tags/抠图素材/index.html","c21d34dfb7900ce05601a1ac528b7a3f"],["F:/blog5/public/tags/新仙剑OL/index.html","7d7900825c4d757f5c4ab963834aa59d"],["F:/blog5/public/tags/新仙剑奇侠传online/index.html","aaab5f227fbf47d74bff0f5836490a67"],["F:/blog5/public/tags/新边城浪子/index.html","43162ae2335e08df3618da251980b9c5"],["F:/blog5/public/tags/星蝶/index.html","64ed1f268dd742da434e5edc9d0cee41"],["F:/blog5/public/tags/最惨女配是衬托/index.html","5037ecf0fb2e907c923445648ebcf52e"],["F:/blog5/public/tags/月玲珑/index.html","53aed8c0f6fa6803163c2e03dacc9137"],["F:/blog5/public/tags/月玲珑十周年/index.html","74d4d82ff18aad1065ca9a0003a80097"],["F:/blog5/public/tags/月玲珑小剧场游戏/index.html","c8dd49fb6ef03776351ee7e0eab4dccd"],["F:/blog5/public/tags/月玲珑配音社/index.html","d029cecc2d7298ce1e27cc0932f98245"],["F:/blog5/public/tags/朱一龙/index.html","39366d609dd825dc7d2a3cb804e3c0f5"],["F:/blog5/public/tags/流星蝴蝶剑/index.html","f1d300c049eba418aae8992e77dfa4c3"],["F:/blog5/public/tags/浩气参天/index.html","6d8936cecbf6985607eb3385e4c79496"],["F:/blog5/public/tags/游戏整理/index.html","bfc8ccf275a391bc4c51b479bc410949"],["F:/blog5/public/tags/甜蜜蜜/index.html","d771e66e1132f97b4bd6fb44e8cb8789"],["F:/blog5/public/tags/祝有涯/index.html","b89cc7602dc4eb3188266e61c16bb39d"],["F:/blog5/public/tags/神舞幻想/index.html","67679970281a1dd69aeec06539a1caa6"],["F:/blog5/public/tags/穹之扉/index.html","b80bba8e50900e2f1467d2f908cdbfd3"],["F:/blog5/public/tags/素材整理/index.html","ee33d18368a3512cc8fb5331a00571cc"],["F:/blog5/public/tags/网络/index.html","54b3ce587b497035f2c73813a8e4d337"],["F:/blog5/public/tags/羽裳/index.html","3776059fecf601dba16135905b9c6a49"],["F:/blog5/public/tags/聲の形/index.html","a3b45493e7896645e252f37d7a9c8ae3"],["F:/blog5/public/tags/虹七/index.html","20e7012dc8c157db8b43182c0c8a99eb"],["F:/blog5/public/tags/虹猫蓝兔七侠传/index.html","cc60cc07859952926607c62961797a7f"],["F:/blog5/public/tags/视频剪辑/index.html","d7a94c3925c2120a311817eadc73f5bf"],["F:/blog5/public/tags/视频剪辑/page/2/index.html","808a47299e2546d107333ecc503ccbce"],["F:/blog5/public/tags/评论系统/index.html","267b2e71f958d8fe092b3fb564f7a58d"],["F:/blog5/public/tags/语音整理/index.html","168f3dac6835afe68575eaef240b5f4d"],["F:/blog5/public/tags/资源提取/index.html","e3d0e6ee3d578b27cc7fe5035392b3ac"],["F:/blog5/public/tags/赵灵儿/index.html","a79f1d6d81cf1846e4b7c8ff394bbf76"],["F:/blog5/public/tags/轩辕剑/index.html","cbc15d72f867b773315ba45325965be7"],["F:/blog5/public/tags/轩辕剑外传穹之扉/index.html","107bad983e5ca7a3cc716a10da7945ae"],["F:/blog5/public/tags/透明台标/index.html","673fe384acaf977745c01130b70c4a37"],["F:/blog5/public/tags/陈意涵/index.html","8ec1c1d09bdb29010eb9e1b6c3199df9"],["F:/blog5/public/tags/陈楚河/index.html","2c19837ead1eb47579605473644a98e0"],["F:/blog5/public/tags/青槐/index.html","db18d98ea886f5f15243c1fa613ce6c9"],["F:/blog5/public/tags/音轨分离/index.html","5b380f129233084a8c449363a28fb60c"],["F:/blog5/public/tags/飞蝶/index.html","8de4c39553164c37b330ec03a9096159"],["F:/blog5/public/tags/龙葵/index.html","06fceae477ad6c3d27e1419704088acf"],["F:/blog5/public/works/index.html","0b1435ab2fd738e0418d2d0059a2acb8"]];
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








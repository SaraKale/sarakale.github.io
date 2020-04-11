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

var precacheConfig = [["F:/blog5/public/aboutme/index.html","c36d3d698c87245781d52ddae5338879"],["F:/blog5/public/archives/2013/05/index.html","8ea92db34fe9113cf4d28eefb5e771f5"],["F:/blog5/public/archives/2013/index.html","86b2c4ef189405785073597971b3a61e"],["F:/blog5/public/archives/2015/07/index.html","b59563c8285b55bf4fd6166e7a30f967"],["F:/blog5/public/archives/2015/index.html","3578d6834ef972d6f681a93195d866a4"],["F:/blog5/public/archives/2016/05/index.html","22738ef28800a898c7715f95fd989f9c"],["F:/blog5/public/archives/2016/10/index.html","0652f5be2f9a7864a6a1e84cc7f02d81"],["F:/blog5/public/archives/2016/11/index.html","941312e104f82c5bc19fb90e4ab29bae"],["F:/blog5/public/archives/2016/12/index.html","46178b42dea4d08f96b6280d307e2a75"],["F:/blog5/public/archives/2016/index.html","27ecd7227037b2f4d0378a5ef622e896"],["F:/blog5/public/archives/2017/01/index.html","45ca2726a779579497814661b8add4eb"],["F:/blog5/public/archives/2017/02/index.html","5448ee0e313ce3e08d1f2ee0e5ec1443"],["F:/blog5/public/archives/2017/06/index.html","cac8b8af86a5bbe1efc0f15e1d6803e8"],["F:/blog5/public/archives/2017/07/index.html","311fe68b9182d00c0abd11a0369329f4"],["F:/blog5/public/archives/2017/08/index.html","20081c4877b670e1cc31f03a490bbfde"],["F:/blog5/public/archives/2017/09/index.html","24444a74fe9e3f354cb2d7e90dd38c32"],["F:/blog5/public/archives/2017/11/index.html","b044b78ff1b67468acf5d1b32633a116"],["F:/blog5/public/archives/2017/index.html","41ba9b21e1a9274b3dd30a016e570260"],["F:/blog5/public/archives/2017/page/2/index.html","d460b286731164f26f20609c8b0dc52e"],["F:/blog5/public/archives/2018/01/index.html","c3c29569743c63c8065316eb9ba161b3"],["F:/blog5/public/archives/2018/02/index.html","69efce239b4ef583980ec433c4987050"],["F:/blog5/public/archives/2018/04/index.html","5389e02ebe5036f580573a0bdc8728a8"],["F:/blog5/public/archives/2018/06/index.html","2a04faac53ce808b48f82a427f39cd37"],["F:/blog5/public/archives/2018/07/index.html","b3e575f40987a3576bcb1f322127d294"],["F:/blog5/public/archives/2018/08/index.html","2f9fad6e3a98062f887fcf8d748d2acb"],["F:/blog5/public/archives/2018/09/index.html","1af8858ba9c6026a922cb23b20a8b4f5"],["F:/blog5/public/archives/2018/10/index.html","d19de7e509f894de93e9b8f26b0df4a6"],["F:/blog5/public/archives/2018/11/index.html","a113d6ec8f6259632ea2a4b0d4926482"],["F:/blog5/public/archives/2018/12/index.html","9376039fe2b16fe28957bdbe2295501a"],["F:/blog5/public/archives/2018/index.html","ddaa531838b1c4a024a3a927829930f4"],["F:/blog5/public/archives/2018/page/2/index.html","25da1e6c02959f0ace7c62f8af426c88"],["F:/blog5/public/archives/2019/01/index.html","a070a65267a28267620ce7248b6baf5c"],["F:/blog5/public/archives/2019/02/index.html","82b15782cf6a7f972d46baa11d6594c7"],["F:/blog5/public/archives/2019/04/index.html","7fba30964dce3d9888398cbc078b7734"],["F:/blog5/public/archives/2019/06/index.html","1fadbfd29be5c75cc6aa0cbe8d44cb65"],["F:/blog5/public/archives/2019/07/index.html","f59aa5848574d500c4a769772d2d6a2d"],["F:/blog5/public/archives/2019/08/index.html","93dd052c212a3db610fef5bbf61fad2a"],["F:/blog5/public/archives/2019/10/index.html","25891e4d4e620fcf1a6c4ef2c4490b08"],["F:/blog5/public/archives/2019/11/index.html","e386953bc4014e40a9e8519081c2e388"],["F:/blog5/public/archives/2019/index.html","790c6e30ed1a612ddbf8d0dc17dd4f1a"],["F:/blog5/public/archives/2019/page/2/index.html","1ce4947528f4b2e1fc0102ded23d2e7c"],["F:/blog5/public/archives/2020/01/index.html","5278723592442a2d2a35cdf3e5b89f8a"],["F:/blog5/public/archives/2020/02/index.html","823e122cc996984d97ca35a1b5f7e44c"],["F:/blog5/public/archives/2020/03/index.html","915c1017283e0d051616c37bad6f3986"],["F:/blog5/public/archives/2020/04/index.html","8a55faf5eb2df70669abf64cdbf7db6a"],["F:/blog5/public/archives/2020/index.html","12cfc14ccafce2ca7716fcd5f6ea3ebc"],["F:/blog5/public/archives/index.html","16d08dfab93ee4ca93e97f34853a3a76"],["F:/blog5/public/archives/page/2/index.html","c9237d47bbb4ef21bf933af64af38f56"],["F:/blog5/public/archives/page/3/index.html","5d0be1052bd895c677acc7776609a15a"],["F:/blog5/public/archives/page/4/index.html","edd3bda1fb15d47c3e6beb6a20d8b9f4"],["F:/blog5/public/archives/page/5/index.html","09986fa35b25be3a3b3f03d68950fa7c"],["F:/blog5/public/archives/page/6/index.html","a013394bfa5e70612635d84d0130bbf5"],["F:/blog5/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/blog5/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/blog5/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/blog5/public/bangumis/index.html","62823e8a9673d7e31e25c2fa0a071d2e"],["F:/blog5/public/categories/index.html","ac12105bf6356ce424ab16e2230d42f2"],["F:/blog5/public/categories/个人作品/index.html","08ef7662fadd768ba09720024252bc1f"],["F:/blog5/public/categories/个人作品/page/2/index.html","b815daeb97850bad1d13983b6291973e"],["F:/blog5/public/categories/仙剑资源整理/index.html","a920193a9dc2a8443ceb718dd5aab6a7"],["F:/blog5/public/categories/其他/index.html","328e145fdce173ebb28fe4e4d9d71153"],["F:/blog5/public/categories/工具资源/index.html","5d8b24d2e183601e8c863566cf52cf0c"],["F:/blog5/public/categories/感想与安利/index.html","d6427209da424e71544392c1fa44231a"],["F:/blog5/public/categories/感想与安利/page/2/index.html","d29b569d69e917d7f07e1f993cd3f4c2"],["F:/blog5/public/categories/生活随记/index.html","cefe48ce7e34bed99ce8948742e318b1"],["F:/blog5/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/blog5/public/css/custom.css","2d7a713e47df8c36b70d6f178e8f7235"],["F:/blog5/public/css/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["F:/blog5/public/css/iconfont/demo_index.html","c0edf8b25db0b64e0c2ff956192dfbf8"],["F:/blog5/public/css/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["F:/blog5/public/css/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["F:/blog5/public/css/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["F:/blog5/public/css/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["F:/blog5/public/css/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["F:/blog5/public/css/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["F:/blog5/public/css/index.css","4e61e17863c21802788555b5ff21e129"],["F:/blog5/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog5/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/blog5/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/blog5/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/blog5/public/img/loading.gif","a994cd022cdff0a80c6cf57173c0454d"],["F:/blog5/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["F:/blog5/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/blog5/public/index.html","c9ec68f1a43eeafdd7dbdb44e647894a"],["F:/blog5/public/js/bg.js","3a9700ba0f07b5e920da726874395d19"],["F:/blog5/public/js/main.js","70aa96d543fac29217bee50cc64b721c"],["F:/blog5/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["F:/blog5/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["F:/blog5/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/blog5/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/blog5/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/blog5/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["F:/blog5/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/blog5/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/blog5/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["F:/blog5/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["F:/blog5/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["F:/blog5/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/blog5/public/links/index.html","b1f495a61e6f6bea136c89cced6125e6"],["F:/blog5/public/message/index.html","57e21e24054732e003ff218e47ff725b"],["F:/blog5/public/music/index.html","8be9db304b11273795047e44f599ed91"],["F:/blog5/public/page/2/index.html","48bb3bf1038a6be41ab736351d52d36b"],["F:/blog5/public/page/3/index.html","22bac1646c792c4bd1a8a0e74cfa5c68"],["F:/blog5/public/page/4/index.html","195df9779f243ea4d32ae8fdea475eaf"],["F:/blog5/public/page/5/index.html","3dd00ec119f92e4d02e88601e6d80b88"],["F:/blog5/public/page/6/index.html","ab77392c18939c9da6e2b162cd44b41b"],["F:/blog5/public/posts/1270.html","a0aaf2b862693829531b134c242510cb"],["F:/blog5/public/posts/12770.html","a4c95445e90f5df9d07dce08dff9cf41"],["F:/blog5/public/posts/14580416.html","8e010b18cb5156e79d55e8e37353e562"],["F:/blog5/public/posts/15663.html","c27a6ef9f26cf3e8da414b71a5dd4a24"],["F:/blog5/public/posts/15929.html","065dcfe453a85aeb24d7c93ee43679b9"],["F:/blog5/public/posts/15959.html","c4ce65f28f8ba149b29e9237247d42ec"],["F:/blog5/public/posts/173.html","775012344f9e8a2ee733b7c6bb6838a7"],["F:/blog5/public/posts/18647.html","813b14b37f815fdb581886cf56ff6a87"],["F:/blog5/public/posts/19368.html","14f48299b585cb3cc6aca4add8c3d981"],["F:/blog5/public/posts/19549.html","c1ef10b6ba3bdb20c25994811958d799"],["F:/blog5/public/posts/1dbec013.html","db9bb87d21816feb8a5975fdd9b94407"],["F:/blog5/public/posts/20133.html","ae5d8563fa3ba04bdc564ae7e0362537"],["F:/blog5/public/posts/20764.html","f96676c8eeb10c279ad8323f408cf8c2"],["F:/blog5/public/posts/2137.html","5f52279d16959fbd8ed4be6dee124f8d"],["F:/blog5/public/posts/27247.html","ec802e3945bb5fcf2c7897b117642396"],["F:/blog5/public/posts/28180.html","7175dc6cf9fdb4a864f84840d236c4e8"],["F:/blog5/public/posts/31d725ea.html","5503d3195109fc539546b0325c22abb0"],["F:/blog5/public/posts/34771.html","afff210bb9e9d7f5455594d3b5ef2452"],["F:/blog5/public/posts/35192.html","c7dc801529814b470805f2f53cfd7d08"],["F:/blog5/public/posts/35671.html","d1d00ce4ddc2e840182c2bf4b5ff9cc7"],["F:/blog5/public/posts/364.html","46a88e0e277d23765f74dc385c094a41"],["F:/blog5/public/posts/38726.html","1d66be22cbbe93bb165e605393a4398e"],["F:/blog5/public/posts/44082.html","f08beb668d04ca5b6ff2334c8dad9409"],["F:/blog5/public/posts/45026.html","e297b329be34ab105af2e4e3b4defa66"],["F:/blog5/public/posts/48037.html","90d7578f54bc6f0eac578e0e6ca00fc3"],["F:/blog5/public/posts/491b225d.html","0cbb5d6b85cf7979983f116597e91c1a"],["F:/blog5/public/posts/50615.html","147c301111d02df23f6deb225d335bc5"],["F:/blog5/public/posts/51793.html","b089592bdef9c72a315241c57858fba1"],["F:/blog5/public/posts/51888.html","9a0033b398345b2b86e20f0a1e4a97d8"],["F:/blog5/public/posts/51993.html","46b42fdb3ce63e73880e2b87be93927f"],["F:/blog5/public/posts/535faed9.html","1eed63c09d7f1f2cdce95b4899b7753b"],["F:/blog5/public/posts/55032.html","33ea5dc9a62c1a74cbda09582502f879"],["F:/blog5/public/posts/55741.html","f5427f8757aae781d2db447c531fcf11"],["F:/blog5/public/posts/57a901f0.html","2311ea589861a80686e99467616796c1"],["F:/blog5/public/posts/59ca7e41.html","37fdf9a91a6ea5f334dea262043238de"],["F:/blog5/public/posts/5fd82dbe.html","bfcd3d8cab4ec2f16adc763c0761bc91"],["F:/blog5/public/posts/62550.html","a732d5895a3d91c2060d00c16855958e"],["F:/blog5/public/posts/64777.html","d55c797623081dfb37e54adeb571fa2d"],["F:/blog5/public/posts/64850.html","a31157b0a8109a27d2712b98ad1a7c0f"],["F:/blog5/public/posts/65e843f4.html","c9eab58ecab57c8cb7c19d95860fae14"],["F:/blog5/public/posts/7e3d2d4.html","58ba1b44d85bdf45434a8eeca5a8de32"],["F:/blog5/public/posts/845ca7c4.html","8eeec2c1856f6019780162cbb3ac8b55"],["F:/blog5/public/posts/898c3bb3.html","4020ff0c790506cc406ffd04a0d28196"],["F:/blog5/public/posts/964d468f.html","173b6c443ac48577dbc6ec94fc50d942"],["F:/blog5/public/posts/afcf312e.html","ef0c9656237226a13dcbffeb43a39808"],["F:/blog5/public/posts/bc1c3bac.html","75656342a2c59c7bdd2c63b59b38e251"],["F:/blog5/public/posts/be1f2db7.html","953916f8d6ac85b445084a64fd45a529"],["F:/blog5/public/posts/c0404e49.html","eb994ce205aa4801aae3805097547e9e"],["F:/blog5/public/posts/cafe661f.html","cab86fdf0323f8d4a969b5fe0a07b2e2"],["F:/blog5/public/posts/dc17b247.html","aee363219dd0ca2a3fa5c6956c5861ac"],["F:/blog5/public/posts/ddef8e37.html","0f003e9a08d865e201b986458449c3c8"],["F:/blog5/public/posts/eb9d5593.html","2c861cac78f338d71926970207d82da2"],["F:/blog5/public/posts/edbff87d.html","19aca0009c7dbb31d8bfcc2afa79d29c"],["F:/blog5/public/posts/ee58e1ae.html","0d25bc871689d194ea23bace822f1ebd"],["F:/blog5/public/steamgames/index.html","b92fb8e336c132a41b69853f310f185b"],["F:/blog5/public/tags/2019随意链接大赛/index.html","d574ce9215012e9622f75d8e58edf9d2"],["F:/blog5/public/tags/2D表情/index.html","d34a5ba4667881e945bfff2b0852a958"],["F:/blog5/public/tags/AI/index.html","0c425e4ab36ab720f4b42937365ea7c5"],["F:/blog5/public/tags/AMV/index.html","dc571dc2af70bebedb4ca9c8159b4a26"],["F:/blog5/public/tags/AVS/index.html","a7115bef762b3681114135d1cee96bd9"],["F:/blog5/public/tags/Aviutl/index.html","6e24f75f1166501a4fe0feaa5de3b960"],["F:/blog5/public/tags/B站/index.html","7236f142d2ecb2227ff4719043bdd116"],["F:/blog5/public/tags/CLANNAD/index.html","3fec86ba5f2a7b0792428397f01dd7d2"],["F:/blog5/public/tags/Hexo/index.html","112c371ef5186b6e0795fba594bea8cf"],["F:/blog5/public/tags/Key/index.html","69a1cd8818a943aa1b5d809121ae0ad4"],["F:/blog5/public/tags/Let-s-encrypt/index.html","679ed19b04be46eaaafe168525256f98"],["F:/blog5/public/tags/MAD/index.html","93307213e48d704b4eedf0dd825cff06"],["F:/blog5/public/tags/MD/index.html","3487b2e5e0811262e3cb799c3e68d040"],["F:/blog5/public/tags/Markdown/index.html","6a5879c0d41329bce0a7e4acbf4a4459"],["F:/blog5/public/tags/RPG-maker-MV/index.html","518238a0757f5608d89d82e512ce132f"],["F:/blog5/public/tags/SSL/index.html","f83e6caf34edf7ca4b48d59e45e34f82"],["F:/blog5/public/tags/Spleeter/index.html","bfaf2b708eea69b3da8ec7eeb0594eff"],["F:/blog5/public/tags/Topaz-AI-Gigapixel/index.html","ef4cc21f6212e933cf1d29a866305b54"],["F:/blog5/public/tags/Valine/index.html","61cdcdfbac88420bd448766248fae524"],["F:/blog5/public/tags/Waifu2x/index.html","b724c1c68465e0aea2b0b1a8adcc34cb"],["F:/blog5/public/tags/bilibili/index.html","f2703fa6bdfb68cfb1be9b07bac16581"],["F:/blog5/public/tags/index.html","5887a73ebe2baabed3eef2064518af37"],["F:/blog5/public/tags/npm/index.html","fd467544f535bb9e358edc08461ac772"],["F:/blog5/public/tags/steam/index.html","ae805716343f9bb2db7a259345f9067a"],["F:/blog5/public/tags/个人作品/index.html","e808fd4bc15865a24cf0aff6ac9e5092"],["F:/blog5/public/tags/个人作品/page/2/index.html","e26ff17d8ae21b3e2c62637608102265"],["F:/blog5/public/tags/仙剑/index.html","f40292051d82c6eae727b0b1ce75e7bd"],["F:/blog5/public/tags/仙剑七/index.html","37ee38ed95c18d92f0287acea2396212"],["F:/blog5/public/tags/仙剑五/index.html","07f04e3727906eeceb5befa1f104fbfe"],["F:/blog5/public/tags/仙剑六/index.html","c33f098a5a127b49c3a83fb3b74997a7"],["F:/blog5/public/tags/仙剑剧情对话/index.html","ed5a31e3153e500e5b161bc0f286c4f9"],["F:/blog5/public/tags/仙剑奇侠传/index.html","e9311a258f8248b84aa67fcbf80b4d3c"],["F:/blog5/public/tags/仙剑奇侠传七/index.html","370b953ca2766fe393c8c4093f69f7c9"],["F:/blog5/public/tags/仙剑奇侠传三/index.html","80f2e112251efacb75284f39dc37e1c8"],["F:/blog5/public/tags/仙剑奇侠传三外传/index.html","023af1cbc08b61e2c18a2d4b1046eba7"],["F:/blog5/public/tags/仙剑奇侠传二/index.html","4811c72d928ca4fccbefe51aed125369"],["F:/blog5/public/tags/仙剑奇侠传五/index.html","18b554f8475eb1ee894f1eb473ffdced"],["F:/blog5/public/tags/仙剑奇侠传五前传/index.html","c474ce0d48545997b80724942d131ec5"],["F:/blog5/public/tags/仙剑奇侠传六/index.html","8301ff483e45c49f513ed9f7481f3415"],["F:/blog5/public/tags/仙剑奇侠传四/index.html","12fc2876ab6f4860408ff2a202aaab45"],["F:/blog5/public/tags/仙剑奇侠传幻璃镜/index.html","fdcffbee152bc495fb435ef2d3acde64"],["F:/blog5/public/tags/仙剑手游/index.html","ba557cd297ae21b7d26f4d2a5d2e9c92"],["F:/blog5/public/tags/仙剑春晚/index.html","f324429a0b5e4dbc90bab5aedab0c360"],["F:/blog5/public/tags/仙剑最惨女配剧场/index.html","9637401a50af83ee67541633454d428c"],["F:/blog5/public/tags/仙剑混剪/index.html","073619edc019bdb1b42407ec1a2c5197"],["F:/blog5/public/tags/仙梦长留/index.html","c680790d5759fc3e2dbb590fe894cbf0"],["F:/blog5/public/tags/傅红雪/index.html","e60972fb6007d7b7822e6712a1ee90ec"],["F:/blog5/public/tags/刘亦菲/index.html","ebe9f6893ce00e5df404d567b99ee500"],["F:/blog5/public/tags/动态壁纸/index.html","c113dfb6761b149c72160b9929e3457e"],["F:/blog5/public/tags/十年/index.html","d6041314ba0dea93b53cd31f532c343c"],["F:/blog5/public/tags/单机/index.html","f3563850f0d447f38854224b304445c4"],["F:/blog5/public/tags/博客/index.html","6137b5f13b4cd6d8987e116e24e58f0e"],["F:/blog5/public/tags/卷积神经算法/index.html","d9c8734c4fe43ebca50cebdd7f3d12c7"],["F:/blog5/public/tags/去水印/index.html","1c21bc52b2481e212ed73f15b2303d26"],["F:/blog5/public/tags/叶青/index.html","c1ba0c8f5a4394cfadc10f4aaf3a52d3"],["F:/blog5/public/tags/哔哩哔哩/index.html","c1443adb8dfd436aab6870085291547a"],["F:/blog5/public/tags/声之形/index.html","36285664f5c4e238f088c843977783ea"],["F:/blog5/public/tags/女高中生的虚度日常/index.html","aa8971ba8e81dc43c65dd6c0e10b759b"],["F:/blog5/public/tags/孙蝶/index.html","5a95e34351dea16ac29e0cb1fed8ed02"],["F:/blog5/public/tags/孟星魂/index.html","555f50075c87205ee462db819c2c1216"],["F:/blog5/public/tags/帮助文档/index.html","974df98302a50343a63ff6cd8d0bae7f"],["F:/blog5/public/tags/年终总结/index.html","a84fe3fbe3bd461dad93a2167151ce4b"],["F:/blog5/public/tags/广播剧/index.html","afa3e92931dfed9353b8581b55edc36d"],["F:/blog5/public/tags/张睿/index.html","51ea76ad0d3fd4b2d5429f93b26d8ed8"],["F:/blog5/public/tags/当时明月/index.html","462d7eeee65077e7e4079c5cabfe1622"],["F:/blog5/public/tags/心が叫びたがってるんだ。/index.html","402e44c75e46aaae7fd8445b43631d76"],["F:/blog5/public/tags/心灵想要大声呼喊/index.html","a70114a6ef7decbf9c56c6c7bfd1d1cc"],["F:/blog5/public/tags/感想/index.html","a97c97bb515be3938b25eba6c2a37931"],["F:/blog5/public/tags/战斗吧！球球/index.html","600a836ce29dc98abac78c634781bc5c"],["F:/blog5/public/tags/扣图素材/index.html","05daa7e8ba1d852b547d2ed88cf9425a"],["F:/blog5/public/tags/抠图素材/index.html","2b956f7bdce8b90896a6f0566763c745"],["F:/blog5/public/tags/新仙剑OL/index.html","21926aa94b6dc0706bb0de51ea0a0489"],["F:/blog5/public/tags/新仙剑奇侠传online/index.html","d2b84a0c045176932082d7f167a758f6"],["F:/blog5/public/tags/新边城浪子/index.html","95793df9940ae759d7d983d325760651"],["F:/blog5/public/tags/星蝶/index.html","dc6f3990462df2e0879919862f2cd27b"],["F:/blog5/public/tags/最惨女配是衬托/index.html","dfc52757c3cd4283af5cafeb8d77fcec"],["F:/blog5/public/tags/月玲珑/index.html","abacd630f16103a9be51fb25bbdc8cca"],["F:/blog5/public/tags/月玲珑十周年/index.html","24ef13e4d10a9795c024afc5bee9eb3d"],["F:/blog5/public/tags/月玲珑小剧场游戏/index.html","093e7404b5465b20f075f4f07e231782"],["F:/blog5/public/tags/月玲珑配音社/index.html","7360cf45ba9562b951eb47b210205f52"],["F:/blog5/public/tags/朱一龙/index.html","aa8e186240bce34c2c102c29c1be62fb"],["F:/blog5/public/tags/流星蝴蝶剑/index.html","d1f369a63c732cf9e9ae08f277065032"],["F:/blog5/public/tags/浩气参天/index.html","e77474a41be5d4fd1ee139e711047541"],["F:/blog5/public/tags/游戏整理/index.html","eef2f0f819b1f9ef4c124b7a69b38bfa"],["F:/blog5/public/tags/甜蜜蜜/index.html","d9c4b9f0c0c634575773e328fb59fbe4"],["F:/blog5/public/tags/祝有涯/index.html","fe8752a0ea358356aefafbb0ac3089a9"],["F:/blog5/public/tags/神舞幻想/index.html","d8c979493f39b401bc346b6a34c2ab86"],["F:/blog5/public/tags/穹之扉/index.html","ecf83d9f1b4ad598a10a551c601512f5"],["F:/blog5/public/tags/素材整理/index.html","496d09a6d02388c05ab5fd6815d94c7f"],["F:/blog5/public/tags/网络/index.html","171a78d0ac6d2db22b0550b3c983fa06"],["F:/blog5/public/tags/羽裳/index.html","487db062eb9223b2e3209df3bfd1b6e9"],["F:/blog5/public/tags/聲の形/index.html","b834bcd948d2d6977426497613299280"],["F:/blog5/public/tags/虹七/index.html","04f8d993986d9e19f9d20580e5c612cc"],["F:/blog5/public/tags/虹猫蓝兔七侠传/index.html","70090c84919ccd93eca9121a97d6b6b8"],["F:/blog5/public/tags/视频剪辑/index.html","572b6db98a5f1cd7897fc349909e79a1"],["F:/blog5/public/tags/视频剪辑/page/2/index.html","88de394b4c92ecd439ef398e699992e3"],["F:/blog5/public/tags/评论系统/index.html","9b3e4af5cfb8361d1401a60bb9d353cf"],["F:/blog5/public/tags/语音整理/index.html","2f5123b6292202570fba4781c79b53e0"],["F:/blog5/public/tags/资源提取/index.html","c95f5fe6ee386e007abf0dc42c5ebc85"],["F:/blog5/public/tags/赵灵儿/index.html","7d2bc37e80ff6d056c066102d38d1fd8"],["F:/blog5/public/tags/轩辕剑/index.html","a3e72799107a07c8b7245f4251ad7e90"],["F:/blog5/public/tags/轩辕剑外传穹之扉/index.html","2106bb719de772bddaf1c3aea9dda42b"],["F:/blog5/public/tags/透明台标/index.html","79134c13d10cb8c037fb54b3a5dcbf54"],["F:/blog5/public/tags/陈意涵/index.html","58579e7adcd8c7e9444cbd25bc591ecc"],["F:/blog5/public/tags/陈楚河/index.html","1108b10e19f0d978102dc8ecdce0a1e3"],["F:/blog5/public/tags/青槐/index.html","873d96cf29135bb453fa879437b556be"],["F:/blog5/public/tags/音轨分离/index.html","d2dabc237de3e99daafc98b23b720502"],["F:/blog5/public/tags/飞蝶/index.html","4d4d2e0ee1fc9080278ae0232ed2975d"],["F:/blog5/public/tags/龙葵/index.html","9546c02eaca35996ac062bcbec115858"],["F:/blog5/public/works/index.html","e8f47ffdbe3c9e61fbc68055bc21c3ea"]];
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








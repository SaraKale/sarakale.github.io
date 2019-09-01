/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/404/index.html","ad9cb7c533cfbbd8ae454885ed27cb20"],["/blog/aboutme/index.html","75089c46448720f86d7c8b42cf5987c4"],["/blog/archives/2013/05/index.html","c00963eba1777700ddb309de80a67042"],["/blog/archives/2013/index.html","9e5a59f66ec1d99623711925b2536651"],["/blog/archives/2015/07/index.html","69a1e5c20a3d12bd8b2f1c3f48ecb079"],["/blog/archives/2015/index.html","c1ab54ab10db6c22b2d2e296246787a1"],["/blog/archives/2016/05/index.html","70855cf1814e9fd9a34a886fc45a1377"],["/blog/archives/2016/10/index.html","e24fc66bfdf017278ea6f0e5da3c1a03"],["/blog/archives/2016/11/index.html","761e9362cc4a4f46d9b530177e9ce1d5"],["/blog/archives/2016/12/index.html","8b0ac19fe298e08d2c4e1226dba8dc2b"],["/blog/archives/2016/index.html","382a71900e55c66ebc80dca14cec0536"],["/blog/archives/2017/01/index.html","f151d791b84550527cd5ec2264040898"],["/blog/archives/2017/02/index.html","dc763e364d9ca083829be1d615eb1d4c"],["/blog/archives/2017/06/index.html","4c617aeff3f0f2c220b2ae52687fc405"],["/blog/archives/2017/07/index.html","223591bf71e20e623fb5af3f98175d9b"],["/blog/archives/2017/08/index.html","09c6ec0e067f3affd1d5d8a057ddf6b8"],["/blog/archives/2017/09/index.html","8e942fbad868dbcc9a625b457ab2225b"],["/blog/archives/2017/11/index.html","5286e7eddd8b5f4408bf47ff9e82950d"],["/blog/archives/2017/index.html","163dc0fc6007e4f3efada0c27b22fb44"],["/blog/archives/2017/page/2/index.html","8e2f980898dd281390c4e6b8c1f9578a"],["/blog/archives/2018/01/index.html","e79931e97b19553a47d85c70cb1303cb"],["/blog/archives/2018/02/index.html","6fa05887a1f0f3d1bf7df8f1215da906"],["/blog/archives/2018/04/index.html","47bf0e4856f625ffc38aa5e6dd47ec86"],["/blog/archives/2018/06/index.html","d1cfb3204cbd36d9edf0c9ecc659c719"],["/blog/archives/2018/07/index.html","34aba51b23490eabf4e8c641ec60e415"],["/blog/archives/2018/08/index.html","b3695fbc50e019f0b1684c921e37ef91"],["/blog/archives/2018/09/index.html","a9f0169a53f49a74569384e42ccdb508"],["/blog/archives/2018/10/index.html","7627c23585dd9433b02b92839349d03c"],["/blog/archives/2018/11/index.html","865cda90c2f2fe720c8d5fbef32e886c"],["/blog/archives/2018/12/index.html","670aa9847edc8ec85ff54c80bf93ac68"],["/blog/archives/2018/index.html","3b8980a6ce5a68c364a8aa89beb6952f"],["/blog/archives/2018/page/2/index.html","c15828c11961c7d3d37e4997af2aa0f4"],["/blog/archives/2019/01/index.html","d446e98ed15168815087edb44f504a25"],["/blog/archives/2019/02/index.html","c591740d339c6f186241d8a789f59ef4"],["/blog/archives/2019/04/index.html","f0e5a26beb5d7a798ced0ad1f11ee949"],["/blog/archives/2019/06/index.html","c295d83f4051af477460bf131ce99901"],["/blog/archives/2019/07/index.html","1e278e1f8e369ec006d2bffdbaf571fc"],["/blog/archives/2019/08/index.html","41b43292ddd42709ccee7860c38afdab"],["/blog/archives/2019/index.html","3397450bf9ca836127d7aa978048d711"],["/blog/archives/index.html","bf7f17d6525f5c63bb6f824a90519005"],["/blog/archives/page/2/index.html","f5ff4610f1046165ceb98b5903286b1e"],["/blog/archives/page/3/index.html","540b48851cf5c12f981b309965366a87"],["/blog/archives/page/4/index.html","a7f62978f9d7f9bc0a62b8b55152f72a"],["/blog/archives/page/5/index.html","72d0619005c21b0bf7f597aad14d24df"],["/blog/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/blog/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/blog/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blog/categories/index.html","3682e6da5a9cc73d6a27de514c3dfb45"],["/blog/categories/个人作品/index.html","8bc7e45e3d7880454d491a8e6e588c55"],["/blog/categories/个人作品/page/2/index.html","2868e69c4fed7d5e10a34cfbbac001c8"],["/blog/categories/仙剑资源整理/index.html","8a6097783ad06ac95f453e01aaaabcfc"],["/blog/categories/其他/index.html","1ccb6f41bc39cb8707d7e0673596b750"],["/blog/categories/工具资源/index.html","a3da29a034559e44717e9faa22a2d148"],["/blog/categories/感想与安利/index.html","7a9bbe24e0da5cd391430abb8c679237"],["/blog/categories/感想与安利/page/2/index.html","6e15703ed41b60cb02bdc6303760d407"],["/blog/categories/生活随记/index.html","b9bcd04a02cb67972e2c0cd35a743812"],["/blog/css/blog-encrypt.css","cfbaed9c8529698d4e7287bdd2b822bb"],["/blog/css/main.css","3ddfe506d05c31b940fe4e0114ca4a87"],["/blog/favoritelist/index.html","2e20d3e5b5734259173606ae6d08df94"],["/blog/images/LOGO.png","946594dc37bb1f499ef7323837415331"],["/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/blog/images/android-chrome-144x144.png","99db915ab936f153333cb1a4f1f287e1"],["/blog/images/apple-touch-icon-next.png","f4cb11058236c159d3684262bcb4196b"],["/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/blog/images/favicon-16x16-next.png","7fbf7f313e4a376be8c387f8475d2a95"],["/blog/images/favicon-32x32-next.png","186e3a81f19e93b2d71031a2f337f4f2"],["/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/logo.svg","aca79d91e4301d4af6712f0edbc4d600"],["/blog/images/mstile-150x150.png","dc183de6dbbf51b68c426510fe5532c6"],["/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/blog/images/safari-pinned-tab.svg","5cc82c5d1b54e748dc10ce0f2793fa11"],["/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/index.html","b0a949df260bef0142965e2e53c4c543"],["/blog/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/blog/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/blog/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/blog/js/src/custom.js","317cdf706c754f25c0c2611915bbdf09"],["/blog/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/blog/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/blog/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/blog/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/blog/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/blog/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/blog/lib/blog-encrypt.js","e2c1c183135d84c59f1872c81283d412"],["/blog/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/links/index.html","af808def2da50169ff16532300a5c149"],["/blog/message/index.html","111c1b6a0e09906c3f46958ed4dcd30d"],["/blog/page/2/index.html","03b3de322fd1623d100e0d65be8ada96"],["/blog/page/3/index.html","94217098fb4004760759c22650c8f851"],["/blog/page/4/index.html","c1bcee425ef20e84e230850ed6d2ef2f"],["/blog/page/5/index.html","1b4a1bf87f0d85031175574f530d49ed"],["/blog/posts/1270.html","9e51e761540e01ba1a467fc3e0929da5"],["/blog/posts/12770.html","20286ea214bfa94cd317d78f1f02c2b1"],["/blog/posts/14580416.html","a42ed403a3c745bab22144f8c0f2d386"],["/blog/posts/15929.html","1c47bf6f0551414ce5b1e7a877c34dc4"],["/blog/posts/15959.html","696ba11c05b97775dee8a61b3488d9f1"],["/blog/posts/173.html","e1ce92e592721c7b9be99da8b7e4f7f6"],["/blog/posts/18647.html","3eebf513feeb93fd191d423ff85f6c6e"],["/blog/posts/19368.html","7ae6b4b5ecec497e4c1e878443cec9a2"],["/blog/posts/19549.html","b8e4cbf027fb88ab096f1304b1101a8a"],["/blog/posts/1dbec013.html","6b2a721a56a1aa8fa46ee9eab2bec3f8"],["/blog/posts/20133.html","93a0ee2066b704bdef1abda76791e49e"],["/blog/posts/20764.html","643aabfa2d430eb0be08afa49ded2b56"],["/blog/posts/2137.html","efd57291ec9da9e9351c5a0f089ec924"],["/blog/posts/27247.html","9233b38b02ccd90dad66d680746bc402"],["/blog/posts/28180.html","14155b722e698f1e60dd032285186954"],["/blog/posts/31d725ea.html","0f77dfea2f943f6d5e039e4d99605ebb"],["/blog/posts/34771.html","e999048acdc3fee1970fc71ee42aa5e6"],["/blog/posts/35192.html","59f7d240c39975acd5b98d3fb6ed3c3c"],["/blog/posts/35671.html","6e6394dfb70a1cef709a4973f2a13cdf"],["/blog/posts/364.html","e878a0bcde745da07d37cc0d922e5e9a"],["/blog/posts/38726.html","c28870f0ad9f75f95dd45d8afe78ce28"],["/blog/posts/44082.html","fbd15fbe9f5c5bab924ec2e066dca4b2"],["/blog/posts/45026.html","ebc9630f32f3179b9930d17ec67100fe"],["/blog/posts/50615.html","a8586de32db36892f4c225463d3f54a2"],["/blog/posts/51793.html","b420974d636597ff8c637e3c6165575b"],["/blog/posts/51888.html","8ac06dd0e79118cd46b1862912ca7218"],["/blog/posts/51993.html","13c3858e593e3060c12235d2524fd84c"],["/blog/posts/535faed9.html","9b252d3864bdd85162035db074bb515f"],["/blog/posts/55032.html","3438e30f4dd1e994aba83f240b9edb8b"],["/blog/posts/55741.html","91c9aa8418c05e05cc14134b3a314c7c"],["/blog/posts/59ca7e41.html","fdb32597e71b17035a0fd7b0ed09db7e"],["/blog/posts/62550.html","07575ccf4b3c62d19597d2880d5663ed"],["/blog/posts/64777.html","d9fce9f212d8fb0208827c5dd0c1bc1f"],["/blog/posts/64850.html","93aeeeda534ef833e6afae0eb6da6c73"],["/blog/posts/65e843f4.html","d328dad30a77ef59cc955c91951ca846"],["/blog/posts/7e3d2d4.html","d5ede8c62954ea2829ec69d78a8f9577"],["/blog/posts/964d468f.html","9d72cbe1d347ddd66229e0c886eace54"],["/blog/posts/afcf312e.html","69d3671bdc7c6246f659b80b850212eb"],["/blog/posts/bc1c3bac.html","dc793abad0d66d8b7bfd3d0df589f8ad"],["/blog/posts/be1f2db7.html","a690472999b93d4c5a8a95b6e2655f4a"],["/blog/posts/c0404e49.html","cf6b6cd812721d6d995e123b3b3e53e2"],["/blog/posts/cafe661f.html","ef68b202a4905bbf0880ee4ec9dc21d0"],["/blog/posts/dc17b247.html","973320a74bb59a4442e7b8c068eaf077"],["/blog/posts/ddef8e37.html","30f52bba06e65dd8838905f3d7d83048"],["/blog/posts/eb9d5593.html","dfb0abe60261fb7a587856441d960f14"],["/blog/posts/edbff87d.html","166b1185f38f4150489e15e30e8f57fc"],["/blog/search/index.html","40d00d6fd1074c576e5b3ea1303e750d"],["/blog/sw-register.js","5e231eba88959033f5b3b7e124f9b008"],["/blog/tags/2D表情/index.html","c557346e3bcaa59c6eeb4215f93573cf"],["/blog/tags/AI/index.html","2d731492bcfebca85c15c3528a8dfda9"],["/blog/tags/AVS/index.html","344a976b393b302e61614c27d2e1e798"],["/blog/tags/Aviutl/index.html","ba876857f6350cf47f22ee7ac8f4a876"],["/blog/tags/CLANNAD/index.html","22893a7333f871666c977f5f9b7efe09"],["/blog/tags/Key/index.html","96b212a793f6f395566426c8ea9af15d"],["/blog/tags/Let-s-encrypt/index.html","5e5e18dcd071935ce1a5e85b24ffa81f"],["/blog/tags/MAD/index.html","f17c4958b29f0ea456459c7e11567961"],["/blog/tags/MD/index.html","a5032cd8537843abab8b291dcdbabb40"],["/blog/tags/Markdown/index.html","8ed01b73b1037b62c54d8a2dad6902b6"],["/blog/tags/RPG-maker-MV/index.html","46b9f9ef38c28c553287cadd3d0f3616"],["/blog/tags/SSL/index.html","5574ffd4693d6fc1d9ddcfc580321ba4"],["/blog/tags/Topaz-AI-Gigapixel/index.html","52753cddbc9f49e2e8dbc1e3da7a95f9"],["/blog/tags/Waifu2x/index.html","1b6cf42beb48c95782e7749975b1195d"],["/blog/tags/index.html","0f6e702bfbba34ea1ff3b8c8485a4d07"],["/blog/tags/steam/index.html","d2b08f07f0effde1157d2215d6ad912b"],["/blog/tags/个人作品/index.html","3fe6d5c71b78d54a52629132b25ed85d"],["/blog/tags/仙剑/index.html","d02d71f5c5a79cbdfc2df2b6721b06bb"],["/blog/tags/仙剑七/index.html","aa8be61ba528af1fddf1412018d4aa11"],["/blog/tags/仙剑五/index.html","f8d2543d6f295ca72b59197c0423b87a"],["/blog/tags/仙剑六/index.html","36db1928784463133edae9710994a707"],["/blog/tags/仙剑剧情对话/index.html","8206d221f969ca01978b040b42dbfda6"],["/blog/tags/仙剑奇侠传/index.html","bec87230856911cf2389e718e917f28d"],["/blog/tags/仙剑奇侠传七/index.html","29e4a2ae3b4fec1ab75308c60784a0b6"],["/blog/tags/仙剑奇侠传三/index.html","10e99d3c8ff63d46b3d8cfd88c3b10cb"],["/blog/tags/仙剑奇侠传三外传/index.html","3a1d7fca480a9076bb7cd996d1d8542d"],["/blog/tags/仙剑奇侠传二/index.html","6de93cd0f2652016717b3c64143e30dd"],["/blog/tags/仙剑奇侠传五/index.html","9f9101740d718984aecfdb4936a5ca7d"],["/blog/tags/仙剑奇侠传五前传/index.html","81551586451448c0bd7563df1536dd4a"],["/blog/tags/仙剑奇侠传六/index.html","81a3893baf7ca0df45c27a63849021e9"],["/blog/tags/仙剑奇侠传四/index.html","d5bd272db3412546c8b5b1c37a186eb0"],["/blog/tags/仙剑手游/index.html","2f83ff7b8e51e52cccfdbfbe7b0a389e"],["/blog/tags/仙剑春晚/index.html","517613f4eaaced1e729370e58991453e"],["/blog/tags/仙剑最惨女配剧场/index.html","abd669c5a878482330c22fa1c6c98040"],["/blog/tags/仙梦长留/index.html","1ed27b5b4445ef3491f6eb722e5d0d7a"],["/blog/tags/傅红雪/index.html","dc24d60ce30b2afc2115843d34f213c6"],["/blog/tags/刘亦菲/index.html","7658aa4778827ad1f1f4de81ec4242e5"],["/blog/tags/动态壁纸/index.html","00ccb75188069c460b5061725ca39125"],["/blog/tags/十年/index.html","0b18b3554bc2ec4c3944e28ab5e4cf9f"],["/blog/tags/单机/index.html","c9eccf8041b5801fa948c70764b3132d"],["/blog/tags/博客/index.html","4737090529732123655a72cdab6ab3e9"],["/blog/tags/卷积神经算法/index.html","4687a3f9beb373112b9c0144254a296e"],["/blog/tags/去水印/index.html","dbd73bd2572298427e877f9df7485162"],["/blog/tags/叶青/index.html","25ae4b4f56d33ce9657a484e4cdf484c"],["/blog/tags/声之形/index.html","f94075b9f7518b83fe0614ff21a7c117"],["/blog/tags/孙蝶/index.html","f9372c58a96998521b649a43fd222946"],["/blog/tags/孟星魂/index.html","d1a1808818d2ade920aeb4e4acfe7694"],["/blog/tags/帮助文档/index.html","ecd09a2ea0eb66f5af780e0f22add0a9"],["/blog/tags/年终总结/index.html","e96edceabf29de50db7d090395a5dd32"],["/blog/tags/广播剧/index.html","c802235aad3e0fe8a29f787ffbf4ecde"],["/blog/tags/张睿/index.html","1682b25e1354f68016fb1f27d7d408d0"],["/blog/tags/当时明月/index.html","6c6c5ca261226194b2f77f15fe6de0a6"],["/blog/tags/心が叫びたがってるんだ。/index.html","a7d6429881915ac9af9ba9ec8446162f"],["/blog/tags/心灵想要大声呼喊/index.html","da505d59b66aad910307fc2b05209ea0"],["/blog/tags/感想/index.html","59049fd95b71ddd5d0a6a18fce3d67d9"],["/blog/tags/战斗吧！球球/index.html","27c2dd88ce28885f0f4ff6dcabf6efcd"],["/blog/tags/扣图素材/index.html","fc8c3d370afcf34174072224204dcff3"],["/blog/tags/抠图素材/index.html","00d8321d51f8dc61e81f1c857e8cb2e6"],["/blog/tags/新仙剑OL/index.html","86ec6e7cc14a1e48c8be6f3ea1bb7193"],["/blog/tags/新仙剑奇侠传online/index.html","7bca04e89cda02efc40c59fd8ea93427"],["/blog/tags/新边城浪子/index.html","201a68fd5eb85e13300349ed9fa7fc2d"],["/blog/tags/星蝶/index.html","dfbfdec2249f6cc9b7717f16e4d7e0d5"],["/blog/tags/最惨女配是衬托/index.html","253e2cff786ab696b77e7110e3ee3ecf"],["/blog/tags/月玲珑/index.html","a4980e11d200c58308788dfb86f1634e"],["/blog/tags/月玲珑十周年/index.html","e74fd30d5f1f27ff8e7dd0f010c66562"],["/blog/tags/月玲珑小剧场游戏/index.html","60a1f2d8ffef89912ef8000c39f8257b"],["/blog/tags/月玲珑配音社/index.html","b5744e6bf09464edfab6005a8500e107"],["/blog/tags/朱一龙/index.html","3825efb090ee204f80a0260940510d7b"],["/blog/tags/流星蝴蝶剑/index.html","b182476cdeb2167bf1a2d41bf3df85ec"],["/blog/tags/游戏整理/index.html","17d297afb0d898b43b8721a5b0ff6370"],["/blog/tags/甜蜜蜜/index.html","9709565bd0061ad0d94c9d20ffcf05a4"],["/blog/tags/祝有涯/index.html","b7b4a882ea084b1f92b4e008f4b07933"],["/blog/tags/神舞幻想/index.html","616b8ef08cf62461588ec7c8d466f7ac"],["/blog/tags/穹之扉/index.html","4b171feb2ca6e77949a5d33efb225f36"],["/blog/tags/素材整理/index.html","7058e445aafea619056e3489ddc28728"],["/blog/tags/网络/index.html","821dcd0811c6037708740f04408c5993"],["/blog/tags/羽裳/index.html","4ca48fc394d22b3192d188b4b422a971"],["/blog/tags/聲の形/index.html","d9322c0122509661d97a2d20e94d63fa"],["/blog/tags/虹七/index.html","d6439ee21037a309761215fb155bf1c5"],["/blog/tags/虹猫蓝兔七侠传/index.html","a18eaa274caf5c4259baac439d89e137"],["/blog/tags/视频剪辑/index.html","fd3769e99323ce4cfd6c9eefa0efad96"],["/blog/tags/语音整理/index.html","bddc1dd8a4f294bd72773f583d571b29"],["/blog/tags/资源提取/index.html","460dcbe80cc44d27b84693394c4473d8"],["/blog/tags/赵灵儿/index.html","1a56861ebf701d935dd0928d7263a398"],["/blog/tags/轩辕剑/index.html","c115a770500dd98354945ba78c001d5e"],["/blog/tags/轩辕剑外传穹之扉/index.html","61b608385b37b4d60e724737a57b3238"],["/blog/tags/透明台标/index.html","fcb7e4c4abee1e163b7839caf614c467"],["/blog/tags/陈意涵/index.html","8e2f46038852b845a0268538ec37ad0a"],["/blog/tags/陈楚河/index.html","f6695e34826ba1e330693b69226a205a"],["/blog/tags/飞蝶/index.html","4810b32b998be88de12a01c97e7036f4"],["/blog/tags/龙葵/index.html","292e0ea6db297628a869cc211d2fa7db"],["/blog/works/index.html","e83ed2e464a1be11efecb07de334ccad"]];
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

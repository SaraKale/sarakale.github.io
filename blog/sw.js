/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/404/index.html","ad9cb7c533cfbbd8ae454885ed27cb20"],["/blog/aboutme/index.html","9ce7d458268ac9e43e74a13a1c1e1d3d"],["/blog/archives/2013/05/index.html","c6f9e6bed4ba77fa629ac778df248276"],["/blog/archives/2013/index.html","4372bda1dc27d385a07af387bf636e31"],["/blog/archives/2015/07/index.html","66e6c7b3d2412b49b6f0f3dcc051ac2f"],["/blog/archives/2015/index.html","a79a342deb8bc6bfcb596794dc4b939e"],["/blog/archives/2016/05/index.html","bbcb7f6947f8c54379011c5a2497e4ab"],["/blog/archives/2016/10/index.html","f186e18855578016942b321c74baeb19"],["/blog/archives/2016/11/index.html","27123bf040ef4fbfbbc80e70bf045632"],["/blog/archives/2016/12/index.html","187050ca8077a336396ec4e9dfa542e1"],["/blog/archives/2016/index.html","a8cbbc3cac0e5ecc2c25bc3810c4b5bc"],["/blog/archives/2017/01/index.html","e7db77bc14cb0377fb406093f3ae32fe"],["/blog/archives/2017/02/index.html","9bf787cd1934a622390be994093e11c6"],["/blog/archives/2017/06/index.html","dd2803768b352f13fc7e836f11722437"],["/blog/archives/2017/07/index.html","3dc7a42842ba6a2c929b1c511b3d5801"],["/blog/archives/2017/08/index.html","8a0997de9386432f8310f8e274a12986"],["/blog/archives/2017/09/index.html","eec34c9a8d1b203b839dbaca20a849c0"],["/blog/archives/2017/11/index.html","d78d82e0b48cdfdfc43436219a5d64c1"],["/blog/archives/2017/index.html","881cbe7d49a9f59c3fe80d882c648cfa"],["/blog/archives/2017/page/2/index.html","f578dc4f0d9fa2856c7fe9c957c0b916"],["/blog/archives/2018/01/index.html","2fd9842d4815d2eb7602713fe24f5eca"],["/blog/archives/2018/02/index.html","82260643d2a8d8c85e93ddaba3a857cf"],["/blog/archives/2018/04/index.html","884ab07bad93bda65b096a666c3aeaa7"],["/blog/archives/2018/06/index.html","487d59b347c3fd952be26b1c27968e00"],["/blog/archives/2018/07/index.html","64974833c506410768cd21b5d3814c57"],["/blog/archives/2018/08/index.html","92513945bcd19aa18f5f40e30be0f70b"],["/blog/archives/2018/09/index.html","12420caf9e6ccda37932f609fee0edc1"],["/blog/archives/2018/10/index.html","fd320b9409d2cbbef76aef0d876da665"],["/blog/archives/2018/11/index.html","20496e7d8af5d15b8656362ab276c847"],["/blog/archives/2018/12/index.html","2027a61496b20bf20ca2ea5985261683"],["/blog/archives/2018/index.html","f149df8d9a327b6d0bbe56b563350983"],["/blog/archives/2018/page/2/index.html","d8852d80a4eeb1791e232eab116d339c"],["/blog/archives/2019/01/index.html","700b1a771430a69b7cef1152713f4838"],["/blog/archives/2019/02/index.html","07188a3a0a5a34cac72068c1a9768ff5"],["/blog/archives/2019/04/index.html","7f6249fa42fcb2e420fe566f1d823eb1"],["/blog/archives/2019/06/index.html","98382731ae196d9fdec10a3681849448"],["/blog/archives/2019/07/index.html","b9f8e96063532d480234a0917214bcdd"],["/blog/archives/2019/08/index.html","f7c9fbf98ea9271f333ca2526f0ebe18"],["/blog/archives/2019/index.html","386c755a4fd55a6976ef3374856512f4"],["/blog/archives/index.html","1801e49e6c6043fe43b5b6af11ad9964"],["/blog/archives/page/2/index.html","067f14ca429c3e290970fc374a0a0bb6"],["/blog/archives/page/3/index.html","688bad199020ed3c137f7e6894fb5e25"],["/blog/archives/page/4/index.html","db72a4de2ecee96717becc80c5618319"],["/blog/archives/page/5/index.html","9ba5ae67b869901fa9207d71230cd488"],["/blog/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/blog/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/blog/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blog/categories/index.html","15a761b1dd78484e763fe043bc4d0d72"],["/blog/categories/个人作品/index.html","92f87124ecb955f25f4d29e661b3f1cb"],["/blog/categories/个人作品/page/2/index.html","87832600714e17a3dba63917566281ff"],["/blog/categories/仙剑资源整理/index.html","7b3d404879a7a7ec19b43fe217d83572"],["/blog/categories/其他/index.html","6c16c86fa776029a43661765e2d4e7d4"],["/blog/categories/工具资源/index.html","e2eda35f3cc571c9a0c057e5c5432b68"],["/blog/categories/感想与安利/index.html","3fdead9b17d0a2d6591be96f07a0d51c"],["/blog/categories/感想与安利/page/2/index.html","ef55eb63c91fafa1d36910054dea395a"],["/blog/categories/生活随记/index.html","7c8f03d9434c498d375f32302cf96e68"],["/blog/css/blog-encrypt.css","cfbaed9c8529698d4e7287bdd2b822bb"],["/blog/css/main.css","060a2c9db349b0300edb4c180b9499d4"],["/blog/favoritelist/index.html","08f4e2b0fa17427cc0f3197935765566"],["/blog/images/LOGO.png","946594dc37bb1f499ef7323837415331"],["/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/blog/images/android-chrome-144x144.png","99db915ab936f153333cb1a4f1f287e1"],["/blog/images/apple-touch-icon-next.png","f4cb11058236c159d3684262bcb4196b"],["/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/blog/images/favicon-16x16-next.png","7fbf7f313e4a376be8c387f8475d2a95"],["/blog/images/favicon-32x32-next.png","186e3a81f19e93b2d71031a2f337f4f2"],["/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/logo.svg","aca79d91e4301d4af6712f0edbc4d600"],["/blog/images/mstile-150x150.png","dc183de6dbbf51b68c426510fe5532c6"],["/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/blog/images/safari-pinned-tab.svg","5cc82c5d1b54e748dc10ce0f2793fa11"],["/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/index.html","4f4d4a54ed26d16035854831746fe64f"],["/blog/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/blog/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/blog/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/blog/js/src/custom.js","317cdf706c754f25c0c2611915bbdf09"],["/blog/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/blog/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/blog/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/blog/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/blog/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/blog/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/blog/lib/blog-encrypt.js","e2c1c183135d84c59f1872c81283d412"],["/blog/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/links/index.html","84cb086aac3c9a95d724b840c96d95f3"],["/blog/message/index.html","a80464d8f644df39d758ae360918d184"],["/blog/page/2/index.html","3db1e8fde4c8b960b204aabd79aa9d94"],["/blog/page/3/index.html","3b4353bc38113a9f215fc32dcb0e145e"],["/blog/page/4/index.html","2f975872ae8884f423abdfae82cecfa0"],["/blog/page/5/index.html","981d4ea52715919ba00b8f7240439fbf"],["/blog/posts/1270.html","c2684c61267ab29b74d39ff3b381cdfc"],["/blog/posts/12770.html","658c10073567953bd13be3222c831314"],["/blog/posts/14580416.html","61e5b598427682601faa5f3d64afb9fe"],["/blog/posts/15929.html","bd6b9c537ee686d9ca1e5471cfcd16ce"],["/blog/posts/15959.html","8497c45399e1562eea8ec93a1d333a56"],["/blog/posts/173.html","e0a55330f5bc66a73225695ecb2e9363"],["/blog/posts/18647.html","8c4e97a4bf4027a6981badb408550e5e"],["/blog/posts/19368.html","4123c82da5b1dac6a2733250c2d8c836"],["/blog/posts/19549.html","ba75c9ee05d92f73aa40dfa3bd90f672"],["/blog/posts/1dbec013.html","7821b139c912139bd3bfe62cb33f09ec"],["/blog/posts/20133.html","cae7e83b231461163de16c3fbb13c2c5"],["/blog/posts/20764.html","ca8666774f9c65a01406e81cafdeb70c"],["/blog/posts/2137.html","a2e9436db96b11d509acb2a1473a0ba2"],["/blog/posts/27247.html","04f9ba4f9bd79307670d0a5707786f5e"],["/blog/posts/28180.html","695b15f4cb3d064cdfcd7bf5c411d83b"],["/blog/posts/31d725ea.html","38f462a418fba7149e13289dd951d640"],["/blog/posts/34771.html","51cf85ba1a6ea97b9aeaa996c50b1edf"],["/blog/posts/35192.html","dfc34209c0b43e19a6af6315ad3a52f0"],["/blog/posts/35671.html","02494e3467da92dc5bc5f2ecdac02be1"],["/blog/posts/364.html","20518460d0408c267f9232a856ec1da3"],["/blog/posts/38726.html","98ebdd654dd2bf1d2f287f7558fe732c"],["/blog/posts/44082.html","990a9a9837f69394f421e5df0ee74a8c"],["/blog/posts/45026.html","8ec898a7d3c730978af67576041f9a7e"],["/blog/posts/50615.html","38495877334bc2cd549cb88c8df37935"],["/blog/posts/51793.html","9f0ccab4c7af570038517267fb086bb6"],["/blog/posts/51888.html","aed276d19ac07717672181825596b930"],["/blog/posts/51993.html","6083c89fab9473a8d78b27a90e5e7d18"],["/blog/posts/535faed9.html","1e870bba86cca10e9afefcec98e46bf2"],["/blog/posts/55032.html","65331e3d980cf30abb5c02880f8252c8"],["/blog/posts/55741.html","9ccdcca53a7eaa72a57dbf216bf81215"],["/blog/posts/59ca7e41.html","80729ad9aa248d703f2d7cdc970cd8f9"],["/blog/posts/62550.html","3a362f502a673c45209b68a57bc2d857"],["/blog/posts/64777.html","06ba60e62b55afb842e93d6823f8a53b"],["/blog/posts/64850.html","d200c61c7bcae1c8497981cbaca75e91"],["/blog/posts/65e843f4.html","c221bfdcd2da3601ff79d1482a62565e"],["/blog/posts/7e3d2d4.html","e17b9ed1d642bc9853f0e638711a2683"],["/blog/posts/964d468f.html","bd5f1bed66b2139ca289306b39ccfd5d"],["/blog/posts/afcf312e.html","5bdc848634c3ed9430bd5abd9417bac9"],["/blog/posts/bc1c3bac.html","47a6d769df248643cd6d03a29c32ae46"],["/blog/posts/be1f2db7.html","2fe1201be8de4855fc48504ef7db3699"],["/blog/posts/c0404e49.html","6c479f1413b332f453420a208fd2853e"],["/blog/posts/cafe661f.html","4c3e670eb641980ee880ae888668ee0c"],["/blog/posts/dc17b247.html","c227a4f8c75eb5344c64800c527006ef"],["/blog/posts/ddef8e37.html","cff04b383c5c3dc07fff042f6b883853"],["/blog/posts/eb9d5593.html","03a545b902b406fb648f7eacf40c90ca"],["/blog/posts/edbff87d.html","0512e2847ad2b0dced770ca71ea3a3f5"],["/blog/search/index.html","f6eb0af92b29c52d2be9c2da8d11da10"],["/blog/sw-register.js","60e59bda979bd9aecd0b2410058be41f"],["/blog/tags/2D表情/index.html","0657e1d11ef53994b207991615f3d776"],["/blog/tags/AI/index.html","2bc0a8a4ba8334438a48285debc7e872"],["/blog/tags/AVS/index.html","c397baca1080908626fec40e52451181"],["/blog/tags/Aviutl/index.html","8dc14badb3e066883c8269124b3ec105"],["/blog/tags/CLANNAD/index.html","c33d67f2d44726743d77fee776bcdf7c"],["/blog/tags/Key/index.html","6fb7050e7bd6231a49adb03f00c99a38"],["/blog/tags/Let-s-encrypt/index.html","0d4125755cabf25d8607874bbe4c7a7d"],["/blog/tags/MAD/index.html","5871d12a1ff478d5c668dc229c603a45"],["/blog/tags/MD/index.html","742f8640a3982a4f768dec8935655bd5"],["/blog/tags/Markdown/index.html","37afd9486b3873f5f56a75508002bf34"],["/blog/tags/RPG-maker-MV/index.html","af0846ec372077b9a638cfe12d0f8a96"],["/blog/tags/SSL/index.html","bae5b052da47841ecfd7a51e483ee2c0"],["/blog/tags/Topaz-AI-Gigapixel/index.html","76cb92a248c1b59d949fded872de3ee2"],["/blog/tags/Waifu2x/index.html","b0a7084bcbf3cc5e56ae6096aee786d3"],["/blog/tags/index.html","f9ecb0b94a15998c23383c9e95a2c76b"],["/blog/tags/steam/index.html","4f0a338fb8717a749cf2fe07f08d8612"],["/blog/tags/个人作品/index.html","7d8c238d9fe08b1e19db4d11479f9e25"],["/blog/tags/仙剑/index.html","16fa8fac8d614617136b40fba1cd2bda"],["/blog/tags/仙剑七/index.html","9117e376fe8ba79a0f5d02c17dda22b5"],["/blog/tags/仙剑五/index.html","f02adf74a2831f79db9763b266c31ae0"],["/blog/tags/仙剑六/index.html","bc65e19d049425300c3bb8f24af874ff"],["/blog/tags/仙剑剧情对话/index.html","f1912bc8635c438f02fca0f19f7fd1e6"],["/blog/tags/仙剑奇侠传/index.html","4cf243fb917f3d501fa2ad1eb12b83ad"],["/blog/tags/仙剑奇侠传七/index.html","a53ca61cf9b196e011b598cc1562d582"],["/blog/tags/仙剑奇侠传三/index.html","c14fb23e693f3362f9444cddad9cc297"],["/blog/tags/仙剑奇侠传三外传/index.html","86fb331bb19db0c52514e1491d547b2d"],["/blog/tags/仙剑奇侠传二/index.html","31c9cb699c678459a23032ebe3498b7e"],["/blog/tags/仙剑奇侠传五/index.html","6c2ef4d4c476083f185f56f033458e6e"],["/blog/tags/仙剑奇侠传五前传/index.html","28e107da57d8c70f84458f0d1a6816cf"],["/blog/tags/仙剑奇侠传六/index.html","0da4567cd840587ecf153ba40a13e11e"],["/blog/tags/仙剑奇侠传四/index.html","7cf58098729a1da54409fa5e0f2da8ab"],["/blog/tags/仙剑手游/index.html","f5772119740d44046cff4ed794dd7dd3"],["/blog/tags/仙剑春晚/index.html","df3b55a3010cbff8ca7d20c4555d9c1f"],["/blog/tags/仙剑最惨女配剧场/index.html","35f575aa6b8ea209cb02aff1ac23a864"],["/blog/tags/仙梦长留/index.html","4ad18818f432dd9bf147c14452487129"],["/blog/tags/傅红雪/index.html","62d9b4a9f7e704c3feb52656e353d465"],["/blog/tags/刘亦菲/index.html","ab89a96e15849f35e6b591a320af4b2e"],["/blog/tags/动态壁纸/index.html","daeeadf0a94a532e410de3e894a4d7f9"],["/blog/tags/十年/index.html","af138614473da724d53ddb0fb7017255"],["/blog/tags/单机/index.html","9fcf82db9e1786680b2d012e706ce876"],["/blog/tags/博客/index.html","1349266c7e26b045a777c9a516793d18"],["/blog/tags/卷积神经算法/index.html","e5bf730219d0ce0ab560c762d16c202f"],["/blog/tags/去水印/index.html","556b5b2fe72879b9e57492dcbb0a8e11"],["/blog/tags/叶青/index.html","81f1ef81de3d47d01bc4cf20288c67a4"],["/blog/tags/声之形/index.html","b9bafbaf10fa34ea3189456110198f29"],["/blog/tags/孙蝶/index.html","dafc85295ddb6245810a1ec8b7fae97a"],["/blog/tags/孟星魂/index.html","25b2ff76cd70536571e7e8bf10ff76cd"],["/blog/tags/帮助文档/index.html","40a7413b8a1a54dac661d156924d55ac"],["/blog/tags/年终总结/index.html","4373ad083b0f238e8e16ccb90cc5d6fd"],["/blog/tags/广播剧/index.html","1d528ab9f26b2cee8f594f4d74a8ef83"],["/blog/tags/张睿/index.html","c5ce3e4e655b2e1b728d9ebdd65f6ebc"],["/blog/tags/当时明月/index.html","44a7644f1ca589d701f4fa0c1335f414"],["/blog/tags/心が叫びたがってるんだ。/index.html","46a661100a3718200014113b9c21a316"],["/blog/tags/心灵想要大声呼喊/index.html","c0ae2ae2ca35c1b5bc7f4508a7e5f576"],["/blog/tags/感想/index.html","2c398744770c42910d656b96d8fa52ef"],["/blog/tags/战斗吧！球球/index.html","e29df899d1428fb90d893423fa763896"],["/blog/tags/扣图素材/index.html","95b1016e9a37e1d3f424ee520801a116"],["/blog/tags/抠图素材/index.html","73dcdf81569c816f7ad9f771d5dbe2e5"],["/blog/tags/新仙剑OL/index.html","2330fcd4908914a82db084cd01fd5677"],["/blog/tags/新仙剑奇侠传online/index.html","f89bd4ec38e6451c892692b9e664b606"],["/blog/tags/新边城浪子/index.html","0553947c1acb8883d5aaf87b54d238b4"],["/blog/tags/星蝶/index.html","12a668ab3ae015d177020d38055a97c3"],["/blog/tags/最惨女配是衬托/index.html","fdc83be518c3fe65a633f437afc5d65c"],["/blog/tags/月玲珑/index.html","e1b489539729a85eda6ae7a7df1a694f"],["/blog/tags/月玲珑十周年/index.html","0255480a1943ad0642cb9dccc30bddaf"],["/blog/tags/月玲珑小剧场游戏/index.html","d90aa3dbd588ec8d2dab64291ba50586"],["/blog/tags/月玲珑配音社/index.html","a376a5ec2640e254b47f3b3e2f3d0ddf"],["/blog/tags/朱一龙/index.html","6466179686361718df8d88f15a5f9c5f"],["/blog/tags/流星蝴蝶剑/index.html","4f7976c511b232f65b677f172058cacf"],["/blog/tags/游戏整理/index.html","75851d6741503edca766237b34e9edf1"],["/blog/tags/甜蜜蜜/index.html","957cadb1af08684f8d2fb42dd6b88612"],["/blog/tags/祝有涯/index.html","eb2f7aa9c7967f9370c693889e2225a3"],["/blog/tags/神舞幻想/index.html","79ecc74ba6ae218528030f6f66fc1615"],["/blog/tags/穹之扉/index.html","16ffc76dfa0d71eb165d4f223f7bebd7"],["/blog/tags/素材整理/index.html","5c30427c43af691260593a50076cbc95"],["/blog/tags/网络/index.html","25ef74715db82226c37cc34365577801"],["/blog/tags/羽裳/index.html","7da784f601e807594347356f30d64d0a"],["/blog/tags/聲の形/index.html","63bf4033528c357df212f2b1937b8ce6"],["/blog/tags/虹七/index.html","b0c019bd1503905aa79d408a7783fbc6"],["/blog/tags/虹猫蓝兔七侠传/index.html","acfce7248ff1cafc94ab1ea37e524aee"],["/blog/tags/视频剪辑/index.html","37adf5dd909996bc86be284a54aab962"],["/blog/tags/语音整理/index.html","3426bb9d9ff0cf80c3f8fc628a121e39"],["/blog/tags/资源提取/index.html","4130d415e130bbb8c02d764b00a12a9d"],["/blog/tags/赵灵儿/index.html","a4b92c5b88a51c3619f35a5630e8953c"],["/blog/tags/轩辕剑/index.html","588d150a5524f9f67c4bbcfc69098886"],["/blog/tags/轩辕剑外传穹之扉/index.html","729cefcddc81161f9764a9f2aeb6bf0f"],["/blog/tags/透明台标/index.html","9152faf144a91625f1bd769995ef0ff6"],["/blog/tags/陈意涵/index.html","0633bcef5d48a9267148a8bbc3d44533"],["/blog/tags/陈楚河/index.html","0e10c9ae353df92ae28db48060559e23"],["/blog/tags/飞蝶/index.html","7b94dfe14b57674af202f97e5cd5e6ea"],["/blog/tags/龙葵/index.html","3705ae2ab586b4501c682cb6f217396f"],["/blog/works/index.html","4ce1856474f885a27bf46449b704a222"]];
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

const express = require("express");
const { SearchEngine } = require("../ultilities");
 
const router = express.Router();

router.get("/", async (req, res) => {
  const { q, page = 1, num = 5 } = req.query;
  const engine = new SearchEngine();
  const data = await engine.search(q, page, num);
  return res.send({ status: 200, data });

  return res.send({
    status: 200,
    data: {
        "kind": "customsearch#search",
        "url": {
            "type": "application/json",
            "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
        },
        "queries": {
            "request": [
                {
                    "title": "Google Custom Search - Hello",
                    "totalResults": "3610",
                    "searchTerms": "Hello",
                    "count": 10,
                    "startIndex": 1,
                    "inputEncoding": "utf8",
                    "outputEncoding": "utf8",
                    "safe": "off",
                    "cx": "8b6ede43028443e7e"
                }
            ],
            "nextPage": [
                {
                    "title": "Google Custom Search - Hello",
                    "totalResults": "3610",
                    "searchTerms": "Hello",
                    "count": 10,
                    "startIndex": 11,
                    "inputEncoding": "utf8",
                    "outputEncoding": "utf8",
                    "safe": "off",
                    "cx": "8b6ede43028443e7e"
                }
            ]
        },
        "context": {
            "title": "SE"
        },
        "searchInformation": {
            "searchTime": 0.200516,
            "formattedSearchTime": "0.20",
            "totalResults": "3610",
            "formattedTotalResults": "3,610"
        },
        "items": [
            {
                "kind": "customsearch#result",
                "title": "Hello Teacher - B??i h??t ti???ng Anh cho b??",
                "htmlTitle": "<b>Hello</b> Teacher - B??i h??t ti???ng Anh cho b??",
                "link": "https://www.webtretho.com/f/cac-mon-ngoai-khoa-nhac-tho-sach-cho-be/hello-teacher-bai-hat-tieng-anh-cho-be-307407",
                "displayLink": "www.webtretho.com",
                "snippet": "Con g??i m??nh h???c l???p L??. C?? h???c ph??? ?????o ti???ng Anh. M???i h???c ????y m?? t???i v??? h??t b??i h??t Hello teacher, Hello teacher. How are you? How are you? ........",
                "htmlSnippet": "Con g??i m??nh h???c l???p L??. C?? h???c ph??? ?????o ti???ng Anh. M???i h???c ????y m?? t???i v??? h??t b??i h??t <b>Hello</b> teacher, <b>Hello</b> teacher. How are you? How are you? ........",
                "cacheId": "l11gJHvwrkcJ",
                "formattedUrl": "https://www.webtretho.com/.../hello-teacher-bai-hat-tieng-anh-cho-be- 307407",
                "htmlFormattedUrl": "https://www.webtretho.com/.../<b>hello</b>-teacher-bai-hat-tieng-anh-cho-be- 307407",
                "pagemap": {
                    "cse_thumbnail": [
                        {
                            "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQi51QmREWEoHFzj2Dhu5_-8UjkbU-TqAHFig7pqRhVIs3hZtnPWGdKEik",
                            "width": "310",
                            "height": "163"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://www.webtretho.com/static/img/logo-default.png",
                            "copyright": "Webtretho",
                            "theme-color": "#fff",
                            "twitter:card": "summary",
                            "og:type": "article",
                            "og:image:alt": "Hello Teacher - B??i h??t ti???ng Anh cho b??",
                            "og:image:width": "600",
                            "og:site_name": "C???ng ?????ng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "Hello Teacher - B??i h??t ti???ng Anh cho b??",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "og:description": "Con g??i m??nh h???c l???p L??. C?? h???c ph??? ?????o ti???ng Anh. M???i h???c ????y m?? t???i v??? h??t b??i h??t Hello teacher, Hello teacher. How are you? How are you? ........",
                            "next-head-count": "46",
                            "fb:app_id": "311027329013294",
                            "twitter:site": "@webtrethocom",
                            "viewport": "width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, shrink-to-fit=no",
                            "apple-mobile-web-app-capable": "yes",
                            "og:locale": "vi_VN",
                            "og:url": "https://www.webtretho.com/f/cac-mon-ngoai-khoa-nhac-tho-sach-cho-be/hello-teacher-bai-hat-tieng-anh-cho-be-307407"
                        }
                    ],
                    "cse_image": [
                        {
                            "src": "https://www.webtretho.com/static/img/logo-default.png"
                        }
                    ]
                }
            },
            {
                "kind": "customsearch#result",
                "title": "G???i ng??? h??nh Hello Kitty si??u d??? th????ng",
                "htmlTitle": "G???i ng??? h??nh <b>Hello</b> Kitty si??u d??? th????ng",
                "link": "https://www.webtretho.com/f/do-choi-cho-tre-tu-0-12-thang/goi-ngu-hinh-hello-kitty-sieu-de-thuong",
                "displayLink": "www.webtretho.com",
                "snippet": "G???i ng??? h??nh Hello Kitty si??u CUTE si??u HOT l?? m???t h??ng m?? Diabrand b??n ch???y nh???t. ?????M B???O S???N PH???M GI???NG H??NH ???NH 100% 79.000???G???i ng??? h??nh Hello...",
                "htmlSnippet": "G???i ng??? h??nh <b>Hello</b> Kitty si??u CUTE si??u HOT l?? m???t h??ng m?? Diabrand b??n ch???y nh???t. ?????M B???O S???N PH???M GI???NG H??NH ???NH 100% 79.000???G???i ng??? h??nh <b>Hello</b>...",
                "cacheId": "WgRTaaqcGOEJ",
                "formattedUrl": "https://www.webtretho.com/f/.../goi-ngu-hinh-hello-kitty-sieu-de-thuong",
                "htmlFormattedUrl": "https://www.webtretho.com/f/.../goi-ngu-hinh-<b>hello</b>-kitty-sieu-de-thuong",
                "pagemap": {
                    "cse_thumbnail": [
                        {
                            "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAjycTBP07FZbZLdjWbAmloLA8vnbEyJIdkbKdE6z1zsvMMmacYyNd7oS_",
                            "width": "194",
                            "height": "259"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://gaudepsaigon.com/wp-content/uploads/2021/03/4-3-300x400-2.jpg",
                            "copyright": "Webtretho",
                            "theme-color": "#fff",
                            "twitter:card": "summary",
                            "og:type": "article",
                            "og:image:alt": "G???i ng??? h??nh Hello Kitty si??u d??? th????ng",
                            "og:image:width": "600",
                            "og:site_name": "C???ng ?????ng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "G???i ng??? h??nh Hello Kitty si??u d??? th????ng",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "og:description": "G???i ng??? h??nh Hello Kitty??si??u CUTE si??u HOT l?? m???t h??ng m?? Diabrand b??n ch???y nh???t. ?????M B???O S???N PH???M GI???NG H??NH ???NH 100% 79.000???G???i ng??? h??nh Hello...",
                            "next-head-count": "46",
                            "fb:app_id": "311027329013294",
                            "twitter:site": "@webtrethocom",
                            "viewport": "width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, shrink-to-fit=no",
                            "apple-mobile-web-app-capable": "yes",
                            "og:locale": "vi_VN",
                            "og:url": "https://www.webtretho.com/f/do-choi-cho-tre-tu-0-12-thang/goi-ngu-hinh-hello-kitty-sieu-de-thuong"
                        }
                    ],
                    "cse_image": [
                        {
                            "src": "https://gaudepsaigon.com/wp-content/uploads/2021/03/4-3-300x400-2.jpg"
                        }
                    ]
                }
            },
            {
                "kind": "customsearch#result",
                "title": "Hello Kitty (Th??m m???t b??? s??ch phim gi??o d???c cho tr???)",
                "htmlTitle": "<b>Hello</b> Kitty (Th??m m???t b??? s??ch phim gi??o d???c cho tr???)",
                "link": "https://www.webtretho.com/f/cac-mon-ngoai-khoa-nhac-tho-sach-cho-be/hello-kitty-them-mot-bo-sach-phim-giao-duc-cho-tre-29141",
                "displayLink": "www.webtretho.com",
                "snippet": "CH???C M???I NG?????I C??NG ???? NGHE ?????N B??? S??CH GI??O D???C N??Y - NH?? CH??U M???I ORDER ???????C B??? N??Y T??? ENGLAND CHO B?? ??U ?????, 40 DVD NH??NG D???N L???I CH??? H???T KHO???NG...",
                "htmlSnippet": "CH???C M???I NG?????I C??NG ???? NGHE ?????N B??? S??CH GI??O D???C N??Y - NH?? CH??U M???I ORDER ???????C B??? N??Y T??? ENGLAND CHO B?? ??U ?????, 40 DVD NH??NG D???N L???I CH??? H???T KHO???NG...",
                "cacheId": "E-vs8-QHzDkJ",
                "formattedUrl": "https://www.webtretho.com/.../hello-kitty-them-mot-bo-sach-phim-giao-duc- cho-tre-29141",
                "htmlFormattedUrl": "https://www.webtretho.com/.../<b>hello</b>-kitty-them-mot-bo-sach-phim-giao-duc- cho-tre-29141",
                "pagemap": {
                    "cse_thumbnail": [
                        {
                            "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQi51QmREWEoHFzj2Dhu5_-8UjkbU-TqAHFig7pqRhVIs3hZtnPWGdKEik",
                            "width": "310",
                            "height": "163"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://www.webtretho.com/static/img/logo-default.png",
                            "copyright": "Webtretho",
                            "theme-color": "#fff",
                            "twitter:card": "summary",
                            "og:type": "article",
                            "og:image:alt": "Hello Kitty (Th??m m???t b??? s??ch phim gi??o d???c cho tr???)",
                            "og:image:width": "600",
                            "og:site_name": "C???ng ?????ng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "Hello Kitty (Th??m m???t b??? s??ch phim gi??o d???c cho tr???)",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "og:description": "CH???C M???I NG?????I C??NG ???? NGHE ?????N B??? S??CH GI??O D???C N??Y - NH?? CH??U M???I ORDER ???????C B??? N??Y T??? ENGLAND CHO B?? ??U ?????, 40 DVD NH??NG D???N L???I CH??? H???T KHO???NG...",
                            "next-head-count": "46",
                            "fb:app_id": "311027329013294",
                            "twitter:site": "@webtrethocom",
                            "viewport": "width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, shrink-to-fit=no",
                            "apple-mobile-web-app-capable": "yes",
                            "og:locale": "vi_VN",
                            "og:url": "https://www.webtretho.com/f/cac-mon-ngoai-khoa-nhac-tho-sach-cho-be/hello-kitty-them-mot-bo-sach-phim-giao-duc-cho-tre-29141"
                        }
                    ],
                    "cse_image": [
                        {
                            "src": "https://www.webtretho.com/static/img/logo-default.png"
                        }
                    ]
                }
            },
            {
                "kind": "customsearch#result",
                "title": "??i???n ????m ??? Texas. Hello to all Texan",
                "htmlTitle": "??i???n ????m ??? Texas. <b>Hello</b> to all Texan",
                "link": "https://www.webtretho.com/forum/f38/dien-dom-o-texas-hello-to-all-texan-718630",
                "displayLink": "www.webtretho.com",
                "snippet": "Hello to all Texan. Hi c??c m??? ??? Texas, ??? nh?? c??c m??? ??ang d??ng ??i???n c???a h??ng n??o v???y? Em m???i tham gia v??o m???t h??ng ??i???n m???i c???a ti???u bang Texas,??...",
                "htmlSnippet": "<b>Hello</b> to all Texan. Hi c??c m??? ??? Texas, ??? nh?? c??c m??? ??ang d??ng ??i???n c???a h??ng n??o v???y? Em m???i tham gia v??o m???t h??ng ??i???n m???i c???a ti???u bang Texas,&nbsp;...",
                "cacheId": "on48PlGYRRwJ",
                "formattedUrl": "https://www.webtretho.com/.../dien-dom-o-texas-hello-to-all-texan-718630",
                "htmlFormattedUrl": "https://www.webtretho.com/.../dien-dom-o-texas-<b>hello</b>-to-all-texan-718630",
                "pagemap": {
                    "cse_thumbnail": [
                        {
                            "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQi51QmREWEoHFzj2Dhu5_-8UjkbU-TqAHFig7pqRhVIs3hZtnPWGdKEik",
                            "width": "310",
                            "height": "163"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://www.webtretho.com/static/img/logo-default.png",
                            "copyright": "Webtretho",
                            "theme-color": "#fff",
                            "twitter:card": "summary",
                            "og:type": "article",
                            "og:image:alt": "??i???n ????m ??? Texas. Hello to all Texan",
                            "og:image:width": "600",
                            "og:site_name": "C???ng ?????ng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "??i???n ????m ??? Texas. Hello to all Texan",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "og:description": "Hi c??c m??? ??? Texas, ??? nh?? c??c m??? ??ang d??ng ??i???n c???a h??ng n??o v???y? Em m???i tham gia v??o m???t h??ng ??i???n m???i c???a ti???u bang Texas, gi?? r???t r??? 9..2 cent...",
                            "next-head-count": "45",
                            "fb:app_id": "311027329013294",
                            "twitter:site": "@webtrethocom",
                            "viewport": "width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, shrink-to-fit=no",
                            "apple-mobile-web-app-capable": "yes",
                            "og:locale": "vi_VN",
                            "og:url": "https://www.webtretho.com/f/hoi-nguoi-viet-o-chau-my/dien-dom-o-texas-hello-to-all-texan-718630"
                        }
                    ],
                    "cse_image": [
                        {
                            "src": "https://www.webtretho.com/static/img/logo-default.png"
                        }
                    ]
                }
            },
            {
                "kind": "customsearch#result",
                "title": "H?? N???i: - Thanh L?? Vali Hello Kitty | Lamchame.com - Ngu???n th??ng ...",
                "htmlTitle": "H?? N???i: - Thanh L?? Vali <b>Hello</b> Kitty | Lamchame.com - Ngu???n th??ng ...",
                "link": "https://www.lamchame.com/forum/threads/thanh-ly-vali-hello-kitty.1954474/",
                "displayLink": "www.lamchame.com",
                "snippet": "Jun 22, 2016 ... M??nh m???i mua valli Hello Kitty h???ng nh???t size 28 : ngang 48.day 31.cao 73cm Do nhu c???u s??? d???ng k c??n thi???t m??nh c??n size b?? h??n.",
                "htmlSnippet": "Jun 22, 2016 <b>...</b> M??nh m???i mua valli <b>Hello</b> Kitty h???ng nh???t size 28 : ngang 48.day 31.cao 73cm Do nhu c???u s??? d???ng k c??n thi???t m??nh c??n size b?? h??n.",
                "cacheId": "1xjyRD6GTL8J",
                "formattedUrl": "https://www.lamchame.com/forum/.../thanh-ly-vali-hello-kitty.1954474/",
                "htmlFormattedUrl": "https://www.lamchame.com/forum/.../thanh-ly-vali-<b>hello</b>-kitty.1954474/",
                "pagemap": {
                    "cse_thumbnail": [
                        {
                            "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPyzrPsgGLti9_5WakHvbdVAUBlEzg7NLodhRcBZGxXnysCfVRQn6D",
                            "width": "96",
                            "height": "96"
                        }
                    ],
                    "breadcrumb": [
                        {
                            "title": "Trang ch???",
                            "url": "Trang ch???"
                        },
                        {
                            "title": "Di???n ????n",
                            "url": "Di???n ????n"
                        },
                        {
                            "title": "MUA S???M, TI??U D??NG",
                            "url": "MUA S???M, TI??U D??NG"
                        },
                        {
                            "title": "????? THANH L??",
                            "url": "????? THANH L??"
                        }
                    ],
                    "person": [
                        {
                            "role": "Th??nh vi??n ch??nh th???c"
                        },
                        {
                            "name": "betomhe",
                            "title": "Th??nh vi??n ch??nh th???c"
                        },
                        {
                            "name": "banbuon2016",
                            "title": "Th??nh vi??n n???i ti???ng"
                        },
                        {
                            "name": "betomhe",
                            "title": "Th??nh vi??n ch??nh th???c"
                        },
                        {
                            "name": "bomecuasoc",
                            "title": "B???t ?????u t??ch c???c"
                        },
                        {
                            "name": "betomhe",
                            "title": "Th??nh vi??n ch??nh th???c"
                        },
                        {
                            "name": "PinkRabbie",
                            "title": "091 601 2275"
                        },
                        {
                            "name": "betomhe",
                            "title": "Th??nh vi??n ch??nh th???c"
                        },
                        {
                            "name": "PinkRabbie",
                            "title": "091 601 2275"
                        },
                        {
                            "name": "betomhe",
                            "title": "Th??nh vi??n ch??nh th???c"
                        },
                        {
                            "name": "betomhe",
                            "title": "Th??nh vi??n ch??nh th???c"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://www.lamchame.com/forum/data/avatars/m/44/44972.jpg?1424151414",
                            "og:type": "article",
                            "fb:app_id": "126139820752316",
                            "og:site_name": "Lamchame.com - Ngu???n th??ng tin tin c???y d??nh cho cha m???",
                            "viewport": "width=device-width, initial-scale=1",
                            "og:title": "H?? N???i: - Thanh L?? Vali Hello Kitty",
                            "og:url": "https://www.lamchame.com/forum/threads/thanh-ly-vali-hello-kitty.1954474/",
                            "fb:pages": "132427900613",
                            "og:description": "M??nh m???i mua valli Hello Kitty h???ng nh???t size 28 : ngang 48.day 31.cao 73cm\nDo nhu c???u s??? d???ng k c??n thi???t m??nh c??n size b?? h??n.\n[IMG] \nC???a m??nh chi???c..."
                        }
                    ],
                    "cse_image": [
                        {
                            "src": "https://www.lamchame.com/forum/data/avatars/m/44/44972.jpg?1424151414"
                        }
                    ]
                }
            },
            {
                "kind": "customsearch#result",
                "title": "To??n qu???c: - Ba l??, vali hello kitty m??n qu?? t???ng si??u d??? th????ng cho ...",
                "htmlTitle": "To??n qu???c: - Ba l??, vali <b>hello</b> kitty m??n qu?? t???ng si??u d??? th????ng cho ...",
                "link": "https://www.lamchame.com/forum/threads/ba-lo-vali-hello-kitty-mon-qua-tang-sieu-de-thuong-cho-be.1445954/",
                "displayLink": "www.lamchame.com",
                "snippet": "Aug 27, 2014 ... S???p ?????n m??ng 02/09 v?? trung thu r???i th???t ?? ngh??a l??m sao n???u M??? t???ng cho b?? 1 chi???c ba l?? hello kitty hay 1 chi???c vali kitty d??? th????ng th????...",
                "htmlSnippet": "Aug 27, 2014 <b>...</b> S???p ?????n m??ng 02/09 v?? trung thu r???i th???t ?? ngh??a l??m sao n???u M??? t???ng cho b?? 1 chi???c ba l?? <b>hello</b> kitty hay 1 chi???c vali kitty d??? th????ng th??&nbsp;...",
                "cacheId": "-8kID2mrGZIJ",
                "formattedUrl": "https://www.lamchame.com/.../ba-lo-vali-hello-kitty-mon-qua-tang-sieu-de- thuong-cho-be.1445954/",
                "htmlFormattedUrl": "https://www.lamchame.com/.../ba-lo-vali-<b>hello</b>-kitty-mon-qua-tang-sieu-de- thuong-cho-be.1445954/",
                "pagemap": {
                    "cse_thumbnail": [
                        {
                            "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSY531iKc6ZGpaAiSZyi8FbHCGZSD1QkMS7r9MAI4hTLQKrtGGD_uKbqg",
                            "width": "96",
                            "height": "96"
                        }
                    ],
                    "breadcrumb": [
                        {
                            "title": "Trang ch???",
                            "url": "Trang ch???"
                        },
                        {
                            "title": "Di???n ????n",
                            "url": "Di???n ????n"
                        },
                        {
                            "title": "MUA S???M, TI??U D??NG",
                            "url": "MUA S???M, TI??U D??NG"
                        },
                        {
                            "title": "????? CHO B??",
                            "url": "????? CHO B??"
                        }
                    ],
                    "person": [
                        {
                            "role": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "phuongthaopnb",
                            "title": "0123.875.7239"
                        },
                        {
                            "name": "vnxk.nsl",
                            "title": "Th??nh vi??n k??? c???u"
                        },
                        {
                            "title": "Guest"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "vnxk.nsl",
                            "title": "Th??nh vi??n k??? c???u"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "vy.nguyen",
                            "title": "Th??nh vi??n t???p s???"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "vy.nguyen",
                            "title": "Th??nh vi??n t???p s???"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "title": "Guest"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "ntclick",
                            "title": "Th??nh vi??n ?????t chu???n"
                        },
                        {
                            "name": "miumiu76",
                            "title": "Th??nh vi??n r???t t??ch c???c"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://www.lamchame.com/forum/data/avatars/m/583/583921.jpg?1438766578",
                            "og:type": "article",
                            "fb:app_id": "126139820752316",
                            "og:site_name": "Lamchame.com - Ngu???n th??ng tin tin c???y d??nh cho cha m???",
                            "viewport": "width=device-width, initial-scale=1",
                            "og:title": "To??n qu???c: - Ba l??, vali hello kitty m??n qu?? t???ng si??u d??? th????ng cho b??",
                            "og:url": "https://www.lamchame.com/forum/threads/ba-lo-vali-hello-kitty-mon-qua-tang-sieu-de-thuong-cho-be.1445954/",
                            "fb:pages": "132427900613",
                            "og:description": "S???p ?????n m??ng 02/09 v?? trung thu r???i th???t ?? ngh??a l??m sao n???u M??? t???ng cho b?? 1 chi???c ba l?? hello kitty hay 1 chi???c vali kitty d??? th????ng th?? b?? s??? vui..."
                        }
                    ],
                    "cse_image": [
                        {
                            "src": "https://www.lamchame.com/forum/data/avatars/m/583/583921.jpg?1438766578"
                        }
                    ]
                }
            },
            {
                "kind": "customsearch#result",
                "title": "Novartis ???ng d???ng n???n t???ng k??? thu???t s??? Hello Health, n??ng cao ...",
                "htmlTitle": "Novartis ???ng d???ng n???n t???ng k??? thu???t s??? <b>Hello</b> Health, n??ng cao ...",
                "link": "https://www.webtretho.com/f/goc-chia-se-thong-tin/novartis-ung-dung-nen-tang-ky-thuat-so-hello-health-nang-cao-nhan-thuc-suc-khoe-cong-dong",
                "displayLink": "www.webtretho.com",
                "snippet": "Hello B??c s?? l?? n???n t???ng th??ng tin y t??? v?? s???c kh???e t???i Vi???t Nam v???i kho???ng 24,7 tri???u l?????t xem h??ng th??ng; 10,3 tri???u ng?????i d??ng; 2,48 tri???u ng?????i...",
                "htmlSnippet": "<b>Hello</b> B??c s?? l?? n???n t???ng th??ng tin y t??? v?? s???c kh???e t???i Vi???t Nam v???i kho???ng 24,7 tri???u l?????t xem h??ng th??ng; 10,3 tri???u ng?????i d??ng; 2,48 tri???u ng?????i...",
                "cacheId": "BjJtjhwt8aIJ",
                "formattedUrl": "https://www.webtretho.com/.../novartis-ung-dung-nen-tang-ky-thuat-so-hello -health-nang-cao-nhan-thuc-suc-khoe-cong-dong",
                "htmlFormattedUrl": "https://www.webtretho.com/.../novartis-ung-dung-nen-tang-ky-thuat-so-<b>hello</b> -health-nang-cao-nhan-thuc-suc-khoe-cong-dong",
                "pagemap": {
                    "cse_thumbnail": [
                        {
                            "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT26wgvIiyB7w37d4DBZB41WyVVCM6eiSDJMW3xIWZHzro779qLVSLP2pM",
                            "width": "311",
                            "height": "162"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://lh3.googleusercontent.com/ZSe6PlmijU0bPR7PgJ1rwLKuFnokZfw7b2dRmJmmwWTjGAu6-Y2MZsehp2w-T_LXvl0uK7w4r3oyICTDZtHB3Q7l-mRU6tgo_d8hNws=w600",
                            "copyright": "Webtretho",
                            "theme-color": "#fff",
                            "twitter:card": "summary",
                            "og:type": "article",
                            "og:image:alt": "Novartis ???ng d???ng n???n t???ng k??? thu???t s??? Hello Health, n??ng cao nh???n th???c s???c kh???e c???ng ?????ng",
                            "og:image:width": "600",
                            "og:site_name": "C???ng ?????ng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "Novartis ???ng d???ng n???n t???ng k??? thu???t s??? Hello Health, n??ng cao nh???n th???c s???c kh???e c???ng ?????ng",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "og:description": "Hello B??c s?? l?? n???n t???ng th??ng tin y t??? v?? s???c kh???e t???i Vi???t Nam v???i kho???ng 24,7 tri???u l?????t xem h??ng th??ng; 10,3 tri???u ng?????i d??ng; 2,48 tri???u ng?????i...",
                            "next-head-count": "46",
                            "fb:app_id": "311027329013294",
                            "twitter:site": "@webtrethocom",
                            "viewport": "width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, shrink-to-fit=no",
                            "apple-mobile-web-app-capable": "yes",
                            "og:locale": "vi_VN",
                            "og:url": "https://www.webtretho.com/f/goc-chia-se-thong-tin/novartis-ung-dung-nen-tang-ky-thuat-so-hello-health-nang-cao-nhan-thuc-suc-khoe-cong-dong"
                        }
                    ],
                    "cse_image": [
                        {
                            "src": "https://lh3.googleusercontent.com/ZSe6PlmijU0bPR7PgJ1rwLKuFnokZfw7b2dRmJmmwWTjGAu6-Y2MZsehp2w-T_LXvl0uK7w4r3oyICTDZtHB3Q7l-mRU6tgo_d8hNws=w600"
                        }
                    ]
                }
            },
            {
                "kind": "customsearch#result",
                "title": "H?? N???i: - Thanh l?? Vali hello kitty m??u v??ng chanh m???i tinh ...",
                "htmlTitle": "H?? N???i: - Thanh l?? Vali <b>hello</b> kitty m??u v??ng chanh m???i tinh ...",
                "link": "https://www.lamchame.com/forum/threads/thanh-ly-vali-hello-kitty-mau-vang-chanh-moi-tinh.1458483/",
                "displayLink": "www.lamchame.com",
                "snippet": "Sep 11, 2014 ... D?? ch??u mua t???ng c??i vali Kitty m??u v??ng chanh nh??ng ch??u l???i l?? t??n ????? c???a m??u h???ng n??n thanh l?? c??i n??y ????? mua m??u h???ng ???.",
                "htmlSnippet": "Sep 11, 2014 <b>...</b> D?? ch??u mua t???ng c??i vali Kitty m??u v??ng chanh nh??ng ch??u l???i l?? t??n ????? c???a m??u h???ng n??n thanh l?? c??i n??y ????? mua m??u h???ng ???.",
                "cacheId": "y214mu1krwEJ",
                "formattedUrl": "https://www.lamchame.com/.../thanh-ly-vali-hello-kitty-mau-vang-chanh-moi -tinh.1458483/",
                "htmlFormattedUrl": "https://www.lamchame.com/.../thanh-ly-vali-<b>hello</b>-kitty-mau-vang-chanh-moi -tinh.1458483/",
                "pagemap": {
                    "cse_thumbnail": [
                        {
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSglIfY7MznGogq-u15ef_yEACaKeh8fVjpMQ9cexzmUi7eSW44brLw",
                            "width": "96",
                            "height": "96"
                        }
                    ],
                    "breadcrumb": [
                        {
                            "title": "Trang ch???",
                            "url": "Trang ch???"
                        },
                        {
                            "title": "Di???n ????n",
                            "url": "Di???n ????n"
                        },
                        {
                            "title": "MUA S???M, TI??U D??NG",
                            "url": "MUA S???M, TI??U D??NG"
                        },
                        {
                            "title": "????? THANH L??",
                            "url": "????? THANH L??"
                        }
                    ],
                    "person": [
                        {
                            "role": "Th??nh vi??n t??ch c???c"
                        },
                        {
                            "name": "mimeo1511",
                            "title": "Th??nh vi??n t??ch c???c"
                        },
                        {
                            "name": "mimeo1511",
                            "title": "Th??nh vi??n t??ch c???c"
                        },
                        {
                            "name": "Cua2010",
                            "title": "Th??nh vi??n t??ch c???c"
                        },
                        {
                            "name": "ruacon12",
                            "title": "Th??nh vi??n t??ch c???c"
                        },
                        {
                            "name": "haoxd",
                            "title": "B???t ?????u n???i ti???ng"
                        },
                        {
                            "name": "mimeo1511",
                            "title": "Th??nh vi??n t??ch c???c"
                        },
                        {
                            "name": "Oanh1981",
                            "title": "Th??nh vi??n r???t t??ch c???c"
                        },
                        {
                            "name": "sakura85",
                            "title": "Th??nh vi??n r???t t??ch c???c"
                        },
                        {
                            "name": "mun_havan",
                            "title": "Th??nh vi??n n???i ti???ng"
                        },
                        {
                            "name": "agribank07",
                            "title": "Th??nh vi??n r???t t??ch c???c"
                        },
                        {
                            "name": "mimeo1511",
                            "title": "Th??nh vi??n t??ch c???c"
                        },
                        {
                            "name": "haoxd",
                            "title": "B???t ?????u n???i ti???ng"
                        },
                        {
                            "name": "Oanh1981",
                            "title": "Th??nh vi??n r???t t??ch c???c"
                        },
                        {
                            "name": "tetua9x",
                            "title": "Th??nh vi??n t??ch c???c"
                        },
                        {
                            "name": "hieupede"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://www.lamchame.com/forum/styles/default/xenforo/avatars/avatar_m.png",
                            "og:type": "article",
                            "fb:app_id": "126139820752316",
                            "og:site_name": "Lamchame.com - Ngu???n th??ng tin tin c???y d??nh cho cha m???",
                            "viewport": "width=device-width, initial-scale=1",
                            "og:title": "H?? N???i: - Thanh l?? Vali hello kitty m??u v??ng chanh m???i tinh",
                            "og:url": "https://www.lamchame.com/forum/threads/thanh-ly-vali-hello-kitty-mau-vang-chanh-moi-tinh.1458483/",
                            "fb:pages": "132427900613",
                            "og:description": "D?? ch??u mua t???ng c??i vali Kitty m??u v??ng chanh nh??ng ch??u l???i l?? t??n ????? c???a m??u h???ng n??n thanh l?? c??i n??y ????? mua m??u h???ng ???. Size M.\r\nGi?? thanh l?? 700k..."
                        }
                    ],
                    "cse_image": [
                        {
                            "src": "https://www.lamchame.com/forum/styles/default/xenforo/avatars/avatar_m.png"
                        }
                    ]
                }
            },
            {
                "kind": "customsearch#result",
                "title": "H?????ng d???n s??? d???ng Hello Coffee ????? h???c ti???ng Anh",
                "htmlTitle": "H?????ng d???n s??? d???ng <b>Hello</b> Coffee ????? h???c ti???ng Anh",
                "link": "https://www.webtretho.com/f/hoc-tieng-anh-ngoai-ngu/huong-dan-su-dung-hello-coffee-de-hoc-tieng-anh-2656878",
                "displayLink": "www.webtretho.com",
                "snippet": "M???ng x?? h???i Webtretho l?? c???ng ?????ng ph??? n??? Vi???t Nam chuy??n chia s??? kinh nghi???m hay li??n quan t???i ch??m s??c gia ????nh, con c??i, th???i trang v?? l??m ?????p.",
                "htmlSnippet": "M???ng x?? h???i Webtretho l?? c???ng ?????ng ph??? n??? Vi???t Nam chuy??n chia s??? kinh nghi???m hay li??n quan t???i ch??m s??c gia ????nh, con c??i, th???i trang v?? l??m ?????p.",
                "cacheId": "ffLHppzDHgoJ",
                "formattedUrl": "https://www.webtretho.com/.../huong-dan-su-dung-hello-coffee-de-hoc-tieng -anh-2656878",
                "htmlFormattedUrl": "https://www.webtretho.com/.../huong-dan-su-dung-<b>hello</b>-coffee-de-hoc-tieng -anh-2656878",
                "pagemap": {
                    "cse_thumbnail": [
                        {
                            "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoBveYfxEa-VjInYQf4EH6yyP1qreq-I1nUDWZjecQRvyKk8zxNuEx4_9t",
                            "width": "300",
                            "height": "168"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "/static/img/video-thumb-default.png",
                            "copyright": "Webtretho",
                            "theme-color": "#fff",
                            "twitter:card": "summary",
                            "og:type": "article",
                            "og:image:alt": "H?????ng d???n s??? d???ng Hello Coffee ????? h???c ti???ng Anh",
                            "og:image:width": "600",
                            "og:site_name": "C???ng ?????ng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "H?????ng d???n s??? d???ng Hello Coffee ????? h???c ti???ng Anh",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "og:description": "M???ng x?? h???i Webtretho l?? c???ng ?????ng ph??? n??? Vi???t Nam chuy??n chia s??? kinh nghi???m hay li??n quan t???i ch??m s??c gia ????nh, con c??i, th???i trang v?? l??m ?????p.",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "next-head-count": "46",
                            "fb:app_id": "311027329013294",
                            "twitter:site": "@webtrethocom",
                            "viewport": "width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, shrink-to-fit=no",
                            "apple-mobile-web-app-capable": "yes",
                            "og:locale": "vi_VN",
                            "og:url": "https://www.webtretho.com/f/hoc-tieng-anh-ngoai-ngu/huong-dan-su-dung-hello-coffee-de-hoc-tieng-anh-2656878"
                        }
                    ],
                    "cse_image": [
                        {
                            "src": "https://i.ytimg.com/vi/T4qiPbZJeuk/maxresdefault.jpg"
                        }
                    ]
                }
            },
            {
                "kind": "customsearch#result",
                "title": "To??n qu???c: - Hello Kitty Cafe - Tr?? ch??i ????? h??ng cho c??c con g??i ...",
                "htmlTitle": "To??n qu???c: - <b>Hello</b> Kitty Cafe - Tr?? ch??i ????? h??ng cho c??c con g??i ...",
                "link": "https://www.lamchame.com/forum/threads/hello-kitty-cafe-tro-choi-do-hang-cho-cac-con-gai.673716/",
                "displayLink": "www.lamchame.com",
                "snippet": "Sep 8, 2012 ... Hello Kitty Cafe ??? Game c?? ch??? nh??? N???m b???t ???????c s??? th??ch ch??i ????? h??ng v?? mu???n s???m vai c???a c??c b?? g??i, nh?? ph??t tri???n Sanrio (Nh???t B???n) ??????...",
                "htmlSnippet": "Sep 8, 2012 <b>...</b> <b>Hello</b> Kitty Cafe ??? Game c?? ch??? nh??? N???m b???t ???????c s??? th??ch ch??i ????? h??ng v?? mu???n s???m vai c???a c??c b?? g??i, nh?? ph??t tri???n Sanrio (Nh???t B???n) ????&nbsp;...",
                "cacheId": "WKAAZWqUXZwJ",
                "formattedUrl": "https://www.lamchame.com/.../hello-kitty-cafe-tro-choi-do-hang-cho-cac-con -gai.673716/",
                "htmlFormattedUrl": "https://www.lamchame.com/.../<b>hello</b>-kitty-cafe-tro-choi-do-hang-cho-cac-con -gai.673716/",
                "pagemap": {
                    "cse_thumbnail": [
                        {
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSglIfY7MznGogq-u15ef_yEACaKeh8fVjpMQ9cexzmUi7eSW44brLw",
                            "width": "96",
                            "height": "96"
                        }
                    ],
                    "breadcrumb": [
                        {
                            "title": "Trang ch???",
                            "url": "Trang ch???"
                        },
                        {
                            "title": "Di???n ????n",
                            "url": "Di???n ????n"
                        },
                        {
                            "title": "MUA S???M, TI??U D??NG",
                            "url": "MUA S???M, TI??U D??NG"
                        },
                        {
                            "title": "????? CHO B??",
                            "url": "????? CHO B??"
                        }
                    ],
                    "person": [
                        {
                            "role": "Th??nh vi??n t???p s???"
                        },
                        {
                            "name": "Linkeng",
                            "title": "Th??nh vi??n t???p s???"
                        },
                        {
                            "name": "mechiyeucon",
                            "title": "S??U CH??T ??I???N BI??N"
                        },
                        {
                            "name": "Linkeng",
                            "title": "Th??nh vi??n t???p s???"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://www.lamchame.com/forum/styles/default/xenforo/avatars/avatar_m.png",
                            "og:type": "article",
                            "fb:app_id": "126139820752316",
                            "og:site_name": "Lamchame.com - Ngu???n th??ng tin tin c???y d??nh cho cha m???",
                            "viewport": "width=device-width, initial-scale=1",
                            "og:title": "To??n qu???c: - Hello Kitty Cafe - Tr?? ch??i ????? h??ng cho c??c con g??i!",
                            "og:url": "https://www.lamchame.com/forum/threads/hello-kitty-cafe-tro-choi-do-hang-cho-cac-con-gai.673716/",
                            "fb:pages": "132427900613",
                            "og:description": "Hello Kitty Cafe ??? Game c?? ch??? nh???\n\nN???m b???t ???????c s??? th??ch ch??i ????? h??ng v?? mu???n s???m vai c???a c??c b?? g??i, nh?? ph??t tri???n Sanrio (Nh???t B???n) ???? thi???t k??? tr??..."
                        }
                    ],
                    "cse_image": [
                        {
                            "src": "https://www.lamchame.com/forum/styles/default/xenforo/avatars/avatar_m.png"
                        }
                    ]
                }
            }
        ]
    }
  });
})

module.exports = router;
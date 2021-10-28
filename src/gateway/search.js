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
                "title": "Hello Teacher - Bài hát tiếng Anh cho bé",
                "htmlTitle": "<b>Hello</b> Teacher - Bài hát tiếng Anh cho bé",
                "link": "https://www.webtretho.com/f/cac-mon-ngoai-khoa-nhac-tho-sach-cho-be/hello-teacher-bai-hat-tieng-anh-cho-be-307407",
                "displayLink": "www.webtretho.com",
                "snippet": "Con gái mình học lớp Lá. Có học phụ đạo tiếng Anh. Mới học đây mà tối về hát bài hát Hello teacher, Hello teacher. How are you? How are you? ........",
                "htmlSnippet": "Con gái mình học lớp Lá. Có học phụ đạo tiếng Anh. Mới học đây mà tối về hát bài hát <b>Hello</b> teacher, <b>Hello</b> teacher. How are you? How are you? ........",
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
                            "og:image:alt": "Hello Teacher - Bài hát tiếng Anh cho bé",
                            "og:image:width": "600",
                            "og:site_name": "Cộng đồng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "Hello Teacher - Bài hát tiếng Anh cho bé",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "og:description": "Con gái mình học lớp Lá. Có học phụ đạo tiếng Anh. Mới học đây mà tối về hát bài hát Hello teacher, Hello teacher. How are you? How are you? ........",
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
                "title": "Gối ngủ hình Hello Kitty siêu dễ thương",
                "htmlTitle": "Gối ngủ hình <b>Hello</b> Kitty siêu dễ thương",
                "link": "https://www.webtretho.com/f/do-choi-cho-tre-tu-0-12-thang/goi-ngu-hinh-hello-kitty-sieu-de-thuong",
                "displayLink": "www.webtretho.com",
                "snippet": "Gối ngủ hình Hello Kitty siêu CUTE siêu HOT là mặt hàng mà Diabrand bán chạy nhất. ĐẢM BẢO SẢN PHẨM GIỐNG HÌNH ẢNH 100% 79.000₫Gối ngủ hình Hello...",
                "htmlSnippet": "Gối ngủ hình <b>Hello</b> Kitty siêu CUTE siêu HOT là mặt hàng mà Diabrand bán chạy nhất. ĐẢM BẢO SẢN PHẨM GIỐNG HÌNH ẢNH 100% 79.000₫Gối ngủ hình <b>Hello</b>...",
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
                            "og:image:alt": "Gối ngủ hình Hello Kitty siêu dễ thương",
                            "og:image:width": "600",
                            "og:site_name": "Cộng đồng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "Gối ngủ hình Hello Kitty siêu dễ thương",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "og:description": "Gối ngủ hình Hello Kitty siêu CUTE siêu HOT là mặt hàng mà Diabrand bán chạy nhất. ĐẢM BẢO SẢN PHẨM GIỐNG HÌNH ẢNH 100% 79.000₫Gối ngủ hình Hello...",
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
                "title": "Hello Kitty (Thêm một bộ sách phim giáo dục cho trẻ)",
                "htmlTitle": "<b>Hello</b> Kitty (Thêm một bộ sách phim giáo dục cho trẻ)",
                "link": "https://www.webtretho.com/f/cac-mon-ngoai-khoa-nhac-tho-sach-cho-be/hello-kitty-them-mot-bo-sach-phim-giao-duc-cho-tre-29141",
                "displayLink": "www.webtretho.com",
                "snippet": "CHẮC MỌI NGƯỜI CŨNG ĐÃ NGHE ĐẾN BỘ SÁCH GIÁO DỤC NÀY - NHÀ CHÁU MỚI ORDER ĐƯỢC BỘ NÀY TỪ ENGLAND CHO BÉ ĐU ĐỦ, 40 DVD NHƯNG DỒN LẠI CHỈ HẾT KHOẢNG...",
                "htmlSnippet": "CHẮC MỌI NGƯỜI CŨNG ĐÃ NGHE ĐẾN BỘ SÁCH GIÁO DỤC NÀY - NHÀ CHÁU MỚI ORDER ĐƯỢC BỘ NÀY TỪ ENGLAND CHO BÉ ĐU ĐỦ, 40 DVD NHƯNG DỒN LẠI CHỈ HẾT KHOẢNG...",
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
                            "og:image:alt": "Hello Kitty (Thêm một bộ sách phim giáo dục cho trẻ)",
                            "og:image:width": "600",
                            "og:site_name": "Cộng đồng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "Hello Kitty (Thêm một bộ sách phim giáo dục cho trẻ)",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "og:description": "CHẮC MỌI NGƯỜI CŨNG ĐÃ NGHE ĐẾN BỘ SÁCH GIÁO DỤC NÀY - NHÀ CHÁU MỚI ORDER ĐƯỢC BỘ NÀY TỪ ENGLAND CHO BÉ ĐU ĐỦ, 40 DVD NHƯNG DỒN LẠI CHỈ HẾT KHOẢNG...",
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
                "title": "Điện đóm ở Texas. Hello to all Texan",
                "htmlTitle": "Điện đóm ở Texas. <b>Hello</b> to all Texan",
                "link": "https://www.webtretho.com/forum/f38/dien-dom-o-texas-hello-to-all-texan-718630",
                "displayLink": "www.webtretho.com",
                "snippet": "Hello to all Texan. Hi các mẹ ở Texas, ở nhà các mẹ đang dùng điện của hãng nào vậy? Em mới tham gia vào một hãng điện mới của tiểu bang Texas, ...",
                "htmlSnippet": "<b>Hello</b> to all Texan. Hi các mẹ ở Texas, ở nhà các mẹ đang dùng điện của hãng nào vậy? Em mới tham gia vào một hãng điện mới của tiểu bang Texas,&nbsp;...",
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
                            "og:image:alt": "Điện đóm ở Texas. Hello to all Texan",
                            "og:image:width": "600",
                            "og:site_name": "Cộng đồng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "Điện đóm ở Texas. Hello to all Texan",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "og:description": "Hi các mẹ ở Texas, ở nhà các mẹ đang dùng điện của hãng nào vậy? Em mới tham gia vào một hãng điện mới của tiểu bang Texas, giá rất rẻ 9..2 cent...",
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
                "title": "Hà Nội: - Thanh Lý Vali Hello Kitty | Lamchame.com - Nguồn thông ...",
                "htmlTitle": "Hà Nội: - Thanh Lý Vali <b>Hello</b> Kitty | Lamchame.com - Nguồn thông ...",
                "link": "https://www.lamchame.com/forum/threads/thanh-ly-vali-hello-kitty.1954474/",
                "displayLink": "www.lamchame.com",
                "snippet": "Jun 22, 2016 ... Mình mới mua valli Hello Kitty hồng nhạt size 28 : ngang 48.day 31.cao 73cm Do nhu cầu sử dụng k càn thiết mình càn size bé hơn.",
                "htmlSnippet": "Jun 22, 2016 <b>...</b> Mình mới mua valli <b>Hello</b> Kitty hồng nhạt size 28 : ngang 48.day 31.cao 73cm Do nhu cầu sử dụng k càn thiết mình càn size bé hơn.",
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
                            "title": "Trang chủ",
                            "url": "Trang chủ"
                        },
                        {
                            "title": "Diễn đàn",
                            "url": "Diễn đàn"
                        },
                        {
                            "title": "MUA SẮM, TIÊU DÙNG",
                            "url": "MUA SẮM, TIÊU DÙNG"
                        },
                        {
                            "title": "ĐỒ THANH LÝ",
                            "url": "ĐỒ THANH LÝ"
                        }
                    ],
                    "person": [
                        {
                            "role": "Thành viên chính thức"
                        },
                        {
                            "name": "betomhe",
                            "title": "Thành viên chính thức"
                        },
                        {
                            "name": "banbuon2016",
                            "title": "Thành viên nổi tiếng"
                        },
                        {
                            "name": "betomhe",
                            "title": "Thành viên chính thức"
                        },
                        {
                            "name": "bomecuasoc",
                            "title": "Bắt đầu tích cực"
                        },
                        {
                            "name": "betomhe",
                            "title": "Thành viên chính thức"
                        },
                        {
                            "name": "PinkRabbie",
                            "title": "091 601 2275"
                        },
                        {
                            "name": "betomhe",
                            "title": "Thành viên chính thức"
                        },
                        {
                            "name": "PinkRabbie",
                            "title": "091 601 2275"
                        },
                        {
                            "name": "betomhe",
                            "title": "Thành viên chính thức"
                        },
                        {
                            "name": "betomhe",
                            "title": "Thành viên chính thức"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://www.lamchame.com/forum/data/avatars/m/44/44972.jpg?1424151414",
                            "og:type": "article",
                            "fb:app_id": "126139820752316",
                            "og:site_name": "Lamchame.com - Nguồn thông tin tin cậy dành cho cha mẹ",
                            "viewport": "width=device-width, initial-scale=1",
                            "og:title": "Hà Nội: - Thanh Lý Vali Hello Kitty",
                            "og:url": "https://www.lamchame.com/forum/threads/thanh-ly-vali-hello-kitty.1954474/",
                            "fb:pages": "132427900613",
                            "og:description": "Mình mới mua valli Hello Kitty hồng nhạt size 28 : ngang 48.day 31.cao 73cm\nDo nhu cầu sử dụng k càn thiết mình càn size bé hơn.\n[IMG] \nCủa mình chiếc..."
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
                "title": "Toàn quốc: - Ba lô, vali hello kitty món quà tặng siêu dễ thương cho ...",
                "htmlTitle": "Toàn quốc: - Ba lô, vali <b>hello</b> kitty món quà tặng siêu dễ thương cho ...",
                "link": "https://www.lamchame.com/forum/threads/ba-lo-vali-hello-kitty-mon-qua-tang-sieu-de-thuong-cho-be.1445954/",
                "displayLink": "www.lamchame.com",
                "snippet": "Aug 27, 2014 ... Sắp đến mùng 02/09 và trung thu rồi thật ý nghĩa làm sao nếu Mẹ tặng cho bé 1 chiếc ba lô hello kitty hay 1 chiếc vali kitty dễ thương thì ...",
                "htmlSnippet": "Aug 27, 2014 <b>...</b> Sắp đến mùng 02/09 và trung thu rồi thật ý nghĩa làm sao nếu Mẹ tặng cho bé 1 chiếc ba lô <b>hello</b> kitty hay 1 chiếc vali kitty dễ thương thì&nbsp;...",
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
                            "title": "Trang chủ",
                            "url": "Trang chủ"
                        },
                        {
                            "title": "Diễn đàn",
                            "url": "Diễn đàn"
                        },
                        {
                            "title": "MUA SẮM, TIÊU DÙNG",
                            "url": "MUA SẮM, TIÊU DÙNG"
                        },
                        {
                            "title": "ĐỒ CHO BÉ",
                            "url": "ĐỒ CHO BÉ"
                        }
                    ],
                    "person": [
                        {
                            "role": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "phuongthaopnb",
                            "title": "0123.875.7239"
                        },
                        {
                            "name": "vnxk.nsl",
                            "title": "Thành viên kỳ cựu"
                        },
                        {
                            "title": "Guest"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "vnxk.nsl",
                            "title": "Thành viên kỳ cựu"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "vy.nguyen",
                            "title": "Thành viên tập sự"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "vy.nguyen",
                            "title": "Thành viên tập sự"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "title": "Guest"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "ntclick",
                            "title": "Thành viên đạt chuẩn"
                        },
                        {
                            "name": "miumiu76",
                            "title": "Thành viên rất tích cực"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://www.lamchame.com/forum/data/avatars/m/583/583921.jpg?1438766578",
                            "og:type": "article",
                            "fb:app_id": "126139820752316",
                            "og:site_name": "Lamchame.com - Nguồn thông tin tin cậy dành cho cha mẹ",
                            "viewport": "width=device-width, initial-scale=1",
                            "og:title": "Toàn quốc: - Ba lô, vali hello kitty món quà tặng siêu dễ thương cho bé",
                            "og:url": "https://www.lamchame.com/forum/threads/ba-lo-vali-hello-kitty-mon-qua-tang-sieu-de-thuong-cho-be.1445954/",
                            "fb:pages": "132427900613",
                            "og:description": "Sắp đến mùng 02/09 và trung thu rồi thật ý nghĩa làm sao nếu Mẹ tặng cho bé 1 chiếc ba lô hello kitty hay 1 chiếc vali kitty dễ thương thì bé sẽ vui..."
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
                "title": "Novartis ứng dụng nền tảng kỹ thuật số Hello Health, nâng cao ...",
                "htmlTitle": "Novartis ứng dụng nền tảng kỹ thuật số <b>Hello</b> Health, nâng cao ...",
                "link": "https://www.webtretho.com/f/goc-chia-se-thong-tin/novartis-ung-dung-nen-tang-ky-thuat-so-hello-health-nang-cao-nhan-thuc-suc-khoe-cong-dong",
                "displayLink": "www.webtretho.com",
                "snippet": "Hello Bác sĩ là nền tảng thông tin y tế và sức khỏe tại Việt Nam với khoảng 24,7 triệu lượt xem hàng tháng; 10,3 triệu người dùng; 2,48 triệu người...",
                "htmlSnippet": "<b>Hello</b> Bác sĩ là nền tảng thông tin y tế và sức khỏe tại Việt Nam với khoảng 24,7 triệu lượt xem hàng tháng; 10,3 triệu người dùng; 2,48 triệu người...",
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
                            "og:image:alt": "Novartis ứng dụng nền tảng kỹ thuật số Hello Health, nâng cao nhận thức sức khỏe cộng đồng",
                            "og:image:width": "600",
                            "og:site_name": "Cộng đồng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "Novartis ứng dụng nền tảng kỹ thuật số Hello Health, nâng cao nhận thức sức khỏe cộng đồng",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "fb:pages": "145788456633",
                            "twitter:creator": "@webtrethocom",
                            "og:description": "Hello Bác sĩ là nền tảng thông tin y tế và sức khỏe tại Việt Nam với khoảng 24,7 triệu lượt xem hàng tháng; 10,3 triệu người dùng; 2,48 triệu người...",
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
                "title": "Hà Nội: - Thanh lý Vali hello kitty màu vàng chanh mới tinh ...",
                "htmlTitle": "Hà Nội: - Thanh lý Vali <b>hello</b> kitty màu vàng chanh mới tinh ...",
                "link": "https://www.lamchame.com/forum/threads/thanh-ly-vali-hello-kitty-mau-vang-chanh-moi-tinh.1458483/",
                "displayLink": "www.lamchame.com",
                "snippet": "Sep 11, 2014 ... Dì cháu mua tặng cái vali Kitty màu vàng chanh nhưng cháu lại là tín đồ của màu hồng nên thanh lí cái này để mua màu hồng ạ.",
                "htmlSnippet": "Sep 11, 2014 <b>...</b> Dì cháu mua tặng cái vali Kitty màu vàng chanh nhưng cháu lại là tín đồ của màu hồng nên thanh lí cái này để mua màu hồng ạ.",
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
                            "title": "Trang chủ",
                            "url": "Trang chủ"
                        },
                        {
                            "title": "Diễn đàn",
                            "url": "Diễn đàn"
                        },
                        {
                            "title": "MUA SẮM, TIÊU DÙNG",
                            "url": "MUA SẮM, TIÊU DÙNG"
                        },
                        {
                            "title": "ĐỒ THANH LÝ",
                            "url": "ĐỒ THANH LÝ"
                        }
                    ],
                    "person": [
                        {
                            "role": "Thành viên tích cực"
                        },
                        {
                            "name": "mimeo1511",
                            "title": "Thành viên tích cực"
                        },
                        {
                            "name": "mimeo1511",
                            "title": "Thành viên tích cực"
                        },
                        {
                            "name": "Cua2010",
                            "title": "Thành viên tích cực"
                        },
                        {
                            "name": "ruacon12",
                            "title": "Thành viên tích cực"
                        },
                        {
                            "name": "haoxd",
                            "title": "Bắt đầu nổi tiếng"
                        },
                        {
                            "name": "mimeo1511",
                            "title": "Thành viên tích cực"
                        },
                        {
                            "name": "Oanh1981",
                            "title": "Thành viên rất tích cực"
                        },
                        {
                            "name": "sakura85",
                            "title": "Thành viên rất tích cực"
                        },
                        {
                            "name": "mun_havan",
                            "title": "Thành viên nổi tiếng"
                        },
                        {
                            "name": "agribank07",
                            "title": "Thành viên rất tích cực"
                        },
                        {
                            "name": "mimeo1511",
                            "title": "Thành viên tích cực"
                        },
                        {
                            "name": "haoxd",
                            "title": "Bắt đầu nổi tiếng"
                        },
                        {
                            "name": "Oanh1981",
                            "title": "Thành viên rất tích cực"
                        },
                        {
                            "name": "tetua9x",
                            "title": "Thành viên tích cực"
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
                            "og:site_name": "Lamchame.com - Nguồn thông tin tin cậy dành cho cha mẹ",
                            "viewport": "width=device-width, initial-scale=1",
                            "og:title": "Hà Nội: - Thanh lý Vali hello kitty màu vàng chanh mới tinh",
                            "og:url": "https://www.lamchame.com/forum/threads/thanh-ly-vali-hello-kitty-mau-vang-chanh-moi-tinh.1458483/",
                            "fb:pages": "132427900613",
                            "og:description": "Dì cháu mua tặng cái vali Kitty màu vàng chanh nhưng cháu lại là tín đồ của màu hồng nên thanh lí cái này để mua màu hồng ạ. Size M.\r\nGiá thanh lí 700k..."
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
                "title": "Hướng dẫn sử dụng Hello Coffee để học tiếng Anh",
                "htmlTitle": "Hướng dẫn sử dụng <b>Hello</b> Coffee để học tiếng Anh",
                "link": "https://www.webtretho.com/f/hoc-tieng-anh-ngoai-ngu/huong-dan-su-dung-hello-coffee-de-hoc-tieng-anh-2656878",
                "displayLink": "www.webtretho.com",
                "snippet": "Mạng xã hội Webtretho là cộng đồng phụ nữ Việt Nam chuyên chia sẻ kinh nghiệm hay liên quan tới chăm sóc gia đình, con cái, thời trang và làm đẹp.",
                "htmlSnippet": "Mạng xã hội Webtretho là cộng đồng phụ nữ Việt Nam chuyên chia sẻ kinh nghiệm hay liên quan tới chăm sóc gia đình, con cái, thời trang và làm đẹp.",
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
                            "og:image:alt": "Hướng dẫn sử dụng Hello Coffee để học tiếng Anh",
                            "og:image:width": "600",
                            "og:site_name": "Cộng đồng Webtretho",
                            "author": "webtretho.com",
                            "og:title": "Hướng dẫn sử dụng Hello Coffee để học tiếng Anh",
                            "og:image:height": "315",
                            "language": "vi",
                            "distribution": "Global",
                            "og:description": "Mạng xã hội Webtretho là cộng đồng phụ nữ Việt Nam chuyên chia sẻ kinh nghiệm hay liên quan tới chăm sóc gia đình, con cái, thời trang và làm đẹp.",
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
                "title": "Toàn quốc: - Hello Kitty Cafe - Trò chơi đồ hàng cho các con gái ...",
                "htmlTitle": "Toàn quốc: - <b>Hello</b> Kitty Cafe - Trò chơi đồ hàng cho các con gái ...",
                "link": "https://www.lamchame.com/forum/threads/hello-kitty-cafe-tro-choi-do-hang-cho-cac-con-gai.673716/",
                "displayLink": "www.lamchame.com",
                "snippet": "Sep 8, 2012 ... Hello Kitty Cafe – Game cô chủ nhỏ Nắm bắt được sở thích chơi đồ hàng và muốn sắm vai của các bé gái, nhà phát triển Sanrio (Nhật Bản) đã ...",
                "htmlSnippet": "Sep 8, 2012 <b>...</b> <b>Hello</b> Kitty Cafe – Game cô chủ nhỏ Nắm bắt được sở thích chơi đồ hàng và muốn sắm vai của các bé gái, nhà phát triển Sanrio (Nhật Bản) đã&nbsp;...",
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
                            "title": "Trang chủ",
                            "url": "Trang chủ"
                        },
                        {
                            "title": "Diễn đàn",
                            "url": "Diễn đàn"
                        },
                        {
                            "title": "MUA SẮM, TIÊU DÙNG",
                            "url": "MUA SẮM, TIÊU DÙNG"
                        },
                        {
                            "title": "ĐỒ CHO BÉ",
                            "url": "ĐỒ CHO BÉ"
                        }
                    ],
                    "person": [
                        {
                            "role": "Thành viên tập sự"
                        },
                        {
                            "name": "Linkeng",
                            "title": "Thành viên tập sự"
                        },
                        {
                            "name": "mechiyeucon",
                            "title": "SÂU CHÍT ĐIỆN BIÊN"
                        },
                        {
                            "name": "Linkeng",
                            "title": "Thành viên tập sự"
                        }
                    ],
                    "metatags": [
                        {
                            "og:image": "https://www.lamchame.com/forum/styles/default/xenforo/avatars/avatar_m.png",
                            "og:type": "article",
                            "fb:app_id": "126139820752316",
                            "og:site_name": "Lamchame.com - Nguồn thông tin tin cậy dành cho cha mẹ",
                            "viewport": "width=device-width, initial-scale=1",
                            "og:title": "Toàn quốc: - Hello Kitty Cafe - Trò chơi đồ hàng cho các con gái!",
                            "og:url": "https://www.lamchame.com/forum/threads/hello-kitty-cafe-tro-choi-do-hang-cho-cac-con-gai.673716/",
                            "fb:pages": "132427900613",
                            "og:description": "Hello Kitty Cafe – Game cô chủ nhỏ\n\nNắm bắt được sở thích chơi đồ hàng và muốn sắm vai của các bé gái, nhà phát triển Sanrio (Nhật Bản) đã thiết kế trò..."
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
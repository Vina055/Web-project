const restaurants = [
    { 
        name: "小石鍋", 
        type: "Hotpot", //要和Project.html的data-type一致
        image: "burger.jpg", 
        url: "https://maps.app.goo.gl/bDAFxE1tV438ByEF8", 
        orderUrl: "https://order-pasta.com",  // 點餐網址
        phone: "02 2908 3333",  // 連絡電話
        address: "新北市新莊區建國一路5號",  // 地址
        tags: ["火鍋"]  // 標籤
    },
    { 
        name: "12MINI快煮鍋", 
        type: "Hotpot", 
        image: "burger.jpg", 
        url: "https://maps.app.goo.gl/DWFMjoXTKc4VNKp27", 
        orderUrl: "https://order-burger.com", 
        phone: "02 2902 2612", 
        address: "新北市新莊區建國一路2號", 
        tags: ["火鍋"]
    },
    { 
        name: "同伙小火鍋", 
        type: "Hotpot", 
        image: "sushi.jpg", 
        url: "https://maps.app.goo.gl/wAA6xjcme1SkzMpg8", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 7126", 
        address: "新北市新莊區建國一路2-1號", 
        tags: ["火鍋"]
    },
    { 
        name: "石二鍋", 
        type: "Hotpot", 
        image: "sushi.jpg", 
        url: "https://maps.app.goo.gl/QyQ4S6WzLZa8dKNe6", 
        orderUrl: "https://liff.line.me/1645278921-kWRPP32q/?accountId=12hotpot", 
        phone: "02 2908 4166", 
        address: "新北市新莊區建國一路61號", 
        tags: ["火鍋"]
    },
    { 
        name: "8鍋新穎時尚臭臭鍋", 
        type: "Hotpot", 
        image: "sushi.jpg", 
        url: "https://maps.app.goo.gl/GoDEUgy9x3Vb7uva7", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2903 4863", 
        address: "新北市新莊區建國一路46號", 
        tags: ["火鍋"]
    },
    { 
        name: "五路鍋聖", 
        type: "Hotpot", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://maps.app.goo.gl/5i9Uzkgp2dWrZWpB9", 
        phone: "02 2903 0658", 
        address: "新北市新莊區建國一路40號", 
        tags: ["火鍋"]
    },
    { 
        name: "想初。享廚 Share Kitchen", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "https://maps.app.goo.gl/dU3vtr6G3LLsQzoH7", 
        orderUrl: "https://line.me/R/ti/p/%40803uxnec", 
        phone: "02 2904 6666", 
        address: "新北市新莊區中正路514巷91號", 
        tags: ["早午餐"]
    },
    { 
        name: "蛋蛋早餐屋", 
        type: "Brunch", 
        image: "https://www.google.com/maps/place/%E8%9B%8B%E8%9B%8B%E6%97%A9%E9%A4%90%E5%B1%8B/@25.0341046,121.4314856,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPVvyP8Roi3xqAi9WEguGYA8rMar4JIXWXeDZor!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPVvyP8Roi3xqAi9WEguGYA8rMar4JIXWXeDZor%3Dw114-h86-k-no!7i4032!8i3024!4m7!3m6!1s0x3442a7e8587e9e47:0xd8197904dcf7282c!8m2!3d25.0340317!4d121.4314214!10e5!16s%2Fg%2F1tdz72wz?authuser=0&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D#", 
        url: "https://maps.app.goo.gl/rUPgHghpW69YJcDR6", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 8981", 
        address: "新北市新莊區中正路514巷83號", 
        tags: ["早午餐"]
    },
    { 
        name: "愛玉早餐店", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "https://maps.app.goo.gl/gNV5y67abebbFSLdA", 
        orderUrl: "https://maps.app.goo.gl/cB3xDrcTb5vwoWX19", 
        phone: "02 2908 5218", 
        address: "新北市新莊區中正路514巷53弄34號", 
        tags: ["早午餐"]
    },
    { 
        name: "吉飽早餐", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "https://maps.app.goo.gl/jqpuM7qWLK5RVzBK6", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 7040", 
        address: "新北市新莊區中正路514巷37號", 
        tags: ["早午餐"]
    },
    { 
        name: "晨間廚房", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2907 6806", 
        address: "新北市新莊區中正路514巷23號1樓", 
        tags: ["早午餐"]
    },
    { 
        name: "有朝一日", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 2286", 
        address: "新北市新莊區中正路514巷53弄2號2樓", 
        tags: ["早午餐"]
    },
    { 
        name: "初胖鐵板吐司'", 
        type: "Brunch", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://liff.line.me/1645278921-kWRPP32q/?accountId=150tcaky", 
        phone: "0988 690 255", 
        address: "新北市新莊區中正路514巷63號", 
        tags: ["早午餐"]
    },
    { 
        name: "元珍食堂", 
        type: "Korean", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 8579", 
        address: "新北市新莊區中正路514巷31號", 
        tags: ["韓式"]
    },
    { 
        name: "韓聚食", 
        type: "Korean", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "0979 546 684", 
        address: "新北市新莊區中正路514巷21號", 
        tags: ["韓式"]
    },
    { 
        name: "饞饞燒肉", 
        type: "Korean", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 4608", 
        address: "新北市新莊區建國一路11號", 
        tags: ["韓式"]
    },
    { 
        name: "雞加酒", 
        type: "Korean", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2906 6915", 
        address: "新北市新莊區中正路514巷35號", 
        tags: ["韓式"]
    },
    { 
        name: "71號咖哩", 
        type: "Japanese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 8186", 
        address: "新北市新莊區中正路514巷71號", 
        tags: ["日式"]
    },
    { 
        name: "一口入魂雞白湯拉麵", 
        type: "Japanese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 8267", 
        address: "新北市新莊區中正路514巷51號1樓", 
        tags: ["日式"]
    },
    { 
        name: "魚多甜", 
        type: "Japanese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 8505", 
        address: "新北市新莊區建國一路1號", 
        tags: ["日式"]
    },
    { 
        name: "麵屋三郎", 
        type: "Japanese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "無", 
        address: "新北市新莊區建國一路92號", 
        tags: ["日式"]
    },
    { 
        name: "古米特Gourmet Pasta", 
        type: "Western", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 7212", 
        address: "新北市新莊區中正路514巷47號", 
        tags: ["西式"]
    },
    { 
        name: "THE PIZZA 惹披薩", 
        type: "Western", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 4516", 
        address: "新北市新莊區中正路514巷43號", 
        tags: ["西式"]
    },
    { 
        name: "安東尼義式廚房", 
        type: "Western", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 2660", 
        address: "新北市新莊區中正路514巷39號", 
        tags: ["西式"]
    },
    { 
        name: "Mr.Omelet歐姆先生", 
        type: "Western", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 8582", 
        address: "新北市新莊區中正路514巷41號", 
        tags: ["西式"]
    },
    { 
        name: "靴子義大利餐館", 
        type: "Western", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2906 8820", 
        address: "新北市新莊區中正路593號", 
        tags: ["西式"]
    },
    { 
        name: "夯麵坊", 
        type: "Western", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2903 3636", 
        address: "新北市新莊區建國一路10號", 
        tags: ["西式"]
    },
    { 
        name: "力好炸雞", 
        type: "Fast Food", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "0970 797 574", 
        address: "新北市新莊區中正路514巷99號", 
        tags: ["速食"]
    },
    { 
        name: "OPEN YANG沙拉飯", 
        type: "Bento", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2974 2728", 
        address: "新北市新莊區中正路514巷99-5號", 
        tags: ["便當"]
    },
    { 
        name: "方禾食呂", 
        type: "Bento", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 1397", 
        address: "新北市新莊區中正路514巷53弄39號", 
        tags: ["便當"]
    },
    { 
        name: "食全池上便當", 
        type: "Bento", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 6585", 
        address: "新北市新莊區建國一路42號", 
        tags: ["便當"]
    },
    { 
        name: "Miss Energy 能量小姐", 
        type: "Bento", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 6752", 
        address: "新北市新莊區建國一路24號", 
        tags: ["便當"]
    },
    { 
        name: "老賴土雞肉飯", 
        type: "Bento", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 6010", 
        address: "新北市新莊區建國一路26號", 
        tags: ["便當"]
    },
    { 
        name: "MY POKE買買波奇 夏威夷生魚飯", 
        type: "Bento", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "0912 539 861", 
        address: "新北市新莊區中正路516巷之16號1樓", 
        tags: ["便當"]
    },
    { 
        name: "芊苡號", 
        type: "Bento",
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://liff.line.me/1645278921-kWRPP32q/?accountId=493pkdkv", 
        phone: "0912 539 861", 
        address: "新北市新莊區中正路516巷之16號1樓", 
        tags: ["便當"]
    },
    { 
        name: "Mr.布魯", 
        type: "Bento", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://liff.line.me/1645278921-kWRPP32q/?accountId=pbc3695c", 
        phone: "0922 951 158", 
        address: "新北市新莊區中正路514巷67號", 
        tags: ["便當"]
    },
    { 
        name: "泰國象泰式料理", 
        type: "Thai", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 5898", 
        address: "新北市新莊區中正路514巷79號", 
        tags: ["泰式"]
    },
    { 
        name: "三舅媽油飯", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 1626", 
        address: "新北市新莊區中正路514巷53弄32號", 
        tags: ["中式"]
    },
    { 
        name: "冰糖茶店", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2906 7250", 
        address: "新北市新莊區中正路514巷69號", 
        tags: ["中式"]
    },
    { 
        name: "陶花園輔大豬排", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2904 7868", 
        address: "新北市新莊區中正路514巷7號", 
        tags: ["中式"]
    },
    { 
        name: "名廚鐵板燒", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2904 3513", 
        address: "新北市新莊區建國一路3號", 
        tags: ["中式"]
    },
    { 
        name: "滷都香加熱滷味", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "無", 
        address: "新北市新莊區建國一路1號之1", 
        tags: ["中式"]
    },
    { 
        name: "家羿鵝肉、玉里麵專賣店", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 3333", 
        address: "新北市新莊區建國一路6號", 
        tags: ["中式"]
    },
    { 
        name: "阿山哥麵飯", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2903 9139", 
        address: "新北市新莊區建國一路23號", 
        tags: ["中式"]
    },
    { 
        name: "典廚牛肉麵", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 2305", 
        address: "新北市新莊區建國一路21號", 
        tags: ["中式"]
    },
    { 
        name: "老葉牛肉麵創始店", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 7278", 
        address: "新北市新莊區建國一路14號", 
        tags: ["中式"]
    },
    { 
        name: "勁牛肉麵館", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2904 2271", 
        address: "新北市新莊區建國一路36號", 
        tags: ["中式"]
    },
    { 
        name: "老吳牛肉", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2902 6657", 
        address: "新北市新莊區建國一路27號", 
        tags: ["中式"]
    },
    { 
        name: "牛脾氣牛排館", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 6828", 
        address: "新北市新莊區建國一路22號", 
        tags: ["中式"]
    },
    { 
        name: "泰巢麵食館", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 2341", 
        address: "新北市新莊區建國一路29號", 
        tags: ["中式"]
    },
    { 
        name: "川湘閣重慶酸菜魚", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "0932 762 600", 
        address: "新北市新莊區建國一路32號", 
        tags: ["中式"]
    },
    { 
        name: "官小二酸菜魚", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 6131", 
        address: "新北市新莊區中正路516-41號", 
        tags: ["中式"]
    },
    { 
        name: "英倫小廚", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "0909 224 055", 
        address: "新北市新莊區建國一路39號", 
        tags: ["中式"]
    },
    { 
        name: "港口廣東粥", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "0958 667 580", 
        address: "新北市新莊區建國一路78號", 
        tags: ["中式"]
    },
    { 
        name: "粥大福", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 4567", 
        address: "新北市新莊區中正路516之37號", 
        tags: ["中式"]
    },
    { 
        name: "好味手工麵疙瘩", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 3583", 
        address: "新北市新莊區建國一路82號", 
        tags: ["中式"]
    },
    { 
        name: "重慶酸辣粉", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2908 6567", 
        address: "新北市新莊區建國一路35號", 
        tags: ["中式"]
    },
    { 
        name: "三碗麵 傻瓜麵", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2903 7088", 
        address: "新北市新莊區建國一路80號", 
        tags: ["中式"]
    },
    { 
        name: "江子翠鵝肉油雞專賣店", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 2586", 
        address: "新北市新莊區建國一路No. 84號", 
        tags: ["中式"]
    },
    { 
        name: "玖零年代 燒臘便當專賣店", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 3141", 
        address: "新北市新莊區中正路514巷81號", 
        tags: ["中式"]
    },
    { 
        name: "麻入口", 
        type: "Chinese", 
        image: "sushi.jpg", 
        url: "#", 
        orderUrl: "https://order-sushi.com", 
        phone: "02 2901 3233", 
        address: "新北市新莊區中正路516之37號2樓", 
        tags: ["中式"]
    },
    // 其他餐廳資料...
];

// 輸出餐廳資料
export { restaurants };

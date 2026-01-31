(function() {
    // 1. 样式定义 (封装进 JS，调用站不需要额外写 CSS)
  var css = `
    :root {
        --main-color: #ff516b;
        --sub-color: #8876ea;
        --bg-light: #f8f9fa;
        --bg-hover: linear-gradient(123deg, #ff516b 0%, #8876ea 100%);
        --border-color: #e9edf5;
        --text-color: #333;
        --radius-main: 12px;
        --shadow-normal: 0 2px 8px rgba(0,0,0,0.1);
        --transition: all 0.3s ease;
    }
    /* 统一容器样式 */
    .remote-navi, .remote-ad-container { 
        width: 100%; 
        max-width: 1200px; /* 如果需要限制最大宽度可加这行 */
        margin: 10px auto; 
        background: #fff; 
        border-radius: var(--radius-main); 
        box-shadow: var(--shadow-normal); 
        box-sizing: border-box; /* 确保 padding 不撑开宽度 */
        padding: 15px; 
    }

    /* 图标区对齐优化 */
    .remote-navi { display: flex; flex-wrap: wrap; justify-content: flex-start; gap: 10px; }
    .remote-appico { 
        flex: 1; /* 自动撑开 */
        min-width: 80px; /* 最小宽度防止太挤 */
        max-width: calc(12.5% - 10px); 
        text-align: center; 
        transition: var(--transition); 
    }
    .remote-appico a { text-decoration: none; display: block; }
    .remote-appico img { width: 50px; height: 50px; border-radius: 10px; object-fit: cover; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    .remote-appico p { color: var(--text-color); margin: 5px 0 0; font-size: 13px; white-space: nowrap; }

    /* 文字广告区对齐优化 */
    .remote-ad-list { display: flex; flex-wrap: wrap; justify-content: flex-start; gap: 8px; }
    .remote-ad-item { 
        flex: 0 0 calc(10% - 8px); /* 10列布局，减去gap */
        height: 36px; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        background: var(--bg-light); 
        border: 1px solid var(--border-color); 
        border-radius: 6px; 
        transition: var(--transition); 
        box-sizing: border-box;
    }
    .remote-ad-item a { color: var(--text-color); text-decoration: none; font-size: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 90%; text-align: center; }
    .remote-ad-item:hover { background: var(--bg-hover); transform: translateY(-2px); border-color: transparent; }
    .remote-ad-item:hover a { color: #fff !important; }

    /* 移动端适配：对齐依然保持一致 */
    @media (max-width: 768px) {
        .remote-navi, .remote-ad-container { padding: 10px; }
        .remote-appico { flex: 0 0 calc(25% - 10px); max-width: 25%; }
        .remote-ad-item { flex: 0 0 calc(33.33% - 8px); height: 32px; } /* 手机端改3列更清晰 */
        .remote-ad-item a { font-size: 11px; }
    }
    `;

    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);


    // 2. 广告内容填充 (请把这里的 https://yourdomain.com 换成你自己的图片服务器域名)
   // var domain = "https://91pipi.cc"; // 你的主站域名

    var html = `
    <div class="remote-navi">
        <div class="remote-appico"><a href="${domain}/go.php?id=1" target="_blank"><img src="${domain}/static/img/logo1.jpg"><p>直播</p></a></div>
        <div class="remote-appico"><a href="${domain}/go.php?id=2" target="_blank"><img src="${domain}/static/img/logo2.jpg"><p>短视频</p></a></div>
        <div class="remote-appico"><a href="${domain}/go.php?id=3" target="_blank"><img src="${domain}/static/img/logo3.jpg"><p>九号导航</p></a></div>
        <div class="remote-appico"><a href="${domain}/go.php?id=4" target="_blank"><img src="${domain}/static/img/logo4.jpg"><p>实用工具</p></a></div>
        <div class="remote-appico"><a href="${domain}/go.php?id=5" target="_blank"><img src="${domain}/static/img/logo5.jpg"><p>高清影视</p></a></div>
        <div class="remote-appico"><a href="${domain}/go.php?id=6" target="_blank"><img src="${domain}/static/img/logo6.jpg"><p>无损音乐</p></a></div>
        <div class="remote-appico"><a href="${domain}/go.php?id=7" target="_blank"><img src="${domain}/static/img/logo7.jpg"><p>免费小说</p></a></div>
        <div class="remote-appico"><a href="${domain}/go.php?id=8" target="_blank"><img src="${domain}/static/img/logo8.jpg"><p>精美壁纸</p></a></div>
    </div>
    <div class="remote-ad-container">
        <div class="remote-ad-list">
            <div class="remote-ad-item"><a href="${domain}" target="_blank">精品影视V</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">24小时更新</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">九号导航</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">极速加载</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">每日更新</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">手机看片</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">纯净无广告</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">蓝光4K</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">免费领券</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">多端同步</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">最新电影</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">热门综艺</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">福利直播</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">动漫番剧</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">午夜剧场</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">韩国电影</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">日本自拍</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">国产精品</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">欧美大片</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">永久地址</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">防走丢页</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">官方APP</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">加入社群</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">广告招租</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">合作伙伴</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">意见反馈</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">关于我们</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">友情链接</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">赞助支持</a></div>
            <div class="remote-ad-item"><a href="${domain}" target="_blank">会员中心</a></div>
        </div>
    </div>
    `;

    document.write(html);
})();

function retweetcode() {
    var image = document.getElementById("retweet_image").value;
    var link = document.getElementById("retweet_link").value;
    var firstname = document.getElementById("retweet_user").value;
    var time = document.getElementById("retweet_time").value;
    var content = document.getElementById("retweet").value;
    if (image.match(/^https?:\/\/.*[.jpg|.jpeg|.png]$/));
    (link.match());
    (firstname.match());
    (time.match());
    (content.match()); {}
    var code = `
    <style>.retweet{display:block;margin: 15px 30px;font-style:normal}.retweet{border-radius:16px;border-right:none;background-color:#ffffff;box-shadow:0 12px 60px rgba(0,0,0,7%)}.retweet_url{display:block;color:#202020;text-decoration:none}.retweet_row{display:flex;padding:25px}.retweet_thumbnail{width:42px;height:42px !important;padding:2px !important;margin-left:20px !important}.retweet_thumbnail{border-radius:50% !important;background-image:linear-gradient(to right,#92fe9d 0%,#00c9ff 100%)}.retweet_firstname{font-size:16px;font-weight:bold}.retweet_time{font-size:13px;font-weight:300}.retweet_paragraph{padding:0 30px}.retweet_paragraph{font-size:15px;font-weight:400;line-height:1.9;text-align:justify}.retweet_icons{padding:15px 30px;padding-bottom:0}.retweet_space{justify-content:space-between}.retweet_icon{width:24px;height:24px}.retweet_icon{background-size:cover;background-repeat:no-repeat}.heart_ico{background-image:url('//bayanbox.ir/view/2032526126401721583/heart.png')}.retweet_ico{background-image:url('//bayanbox.ir/view/8290142198995440188/retweet.png');filter:invert(61%) sepia(72%) saturate(443%) hue-rotate(93deg) brightness(94%) contrast(89%)}.bookmark_ico{background-image:url('//bayanbox.ir/view/8974538218234928950/bookmark.png')}.share_ico{background-image:url('//bayanbox.ir/view/5127516913095579259/share.png');}.retweet_date { margin-top:-5px;}@media all and (max-width: 500px) {.retweet{margin:15px 0}}</style>
    <blockquote class="retweet">
            <div class="retweet_row">
                <img src="${image}" class="retweet_thumbnail" alt="${firstname}" />
                <div class="retweet_username">
                    <span class="retweet_firstname">${firstname}</span>
                    <div class="retweet_date">
                         <time class="retweet_time">${time}</time>
                    </div>
                </div>
            </div>
            <div class="retweet_paragraph"><a href="${link}" target="_blank" rel="nofollow" class="retweet_url">${content}</a></div>
            <div class="retweet_icons">
                <div class="retweet_row retweet_space">
                    <div class="retweet_icon heart_ico"></div>
                        <div class="retweet_icon retweet_ico"></div>
                        <div class="retweet_icon bookmark_ico"></div>
                        <div class="retweet_icon share_ico"></div>
                    </div>
                </div>
        </blockquote>
     `;
    document.getElementById("retweetcoding").value = code;
}

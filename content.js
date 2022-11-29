let dbLinks = [];

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    let count = 0;
    fetch('https://tiktok-links.vercel.app/api')
        .then(response => response.json())
        .then(data => {
            data.data.map(link => dbLinks.push(link.url))
            // console.log("dbLinks -> ", dbLinks);
            // console.log(message.txt);
            if (message.txt === "hello") {
                const elements = document.querySelectorAll("a[href*='https://www.tiktok.com/@suppli71']");

                elements.forEach((item) => {
                    const secondChild = item.children[1];
                    const secondChildChild = secondChild.children[0];
                    const imgElement = secondChildChild.children[0];

                    if (dbLinks.includes(item.href)) {
                        count++;
                        imgElement.src = "https://www.pngmart.com/files/3/Red-Cross-PNG-File.png";
                    }
                });
            }
            alert("TikTok Links: " + count + " links removed");
        });
}


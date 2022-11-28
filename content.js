let dbLinks = [];

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    fetch('https://tiktok-links.vercel.app/api')
        .then(response => response.json())
        .then(data => {
            data.data.map(link => dbLinks.push(link.url))
            // console.log("dbLinks -> ", dbLinks);
            console.log(message.txt);
            if (message.txt === "hello") {
                const container = document.querySelectorAll(".tiktok-yz6ijl-DivWrapper");

                container.forEach((item) => {
                    let link = "";
                    // check if item has a link
                    if (item.querySelector("a")) {
                        // get the link
                        link = item.querySelector("a").href;
                    }

                    if (link && dbLinks.includes(link)) {
                        item.innerHTML = "";
                        const img = document.createElement("img");
                        img.src = "https://www.pngmart.com/files/3/Red-Cross-PNG-File.png";
                        item.appendChild(img);
                    }
                });
            }
        });
}

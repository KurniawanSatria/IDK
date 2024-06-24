import axios from "axios"
import cheerio from cheerio"

export const asupan = async() => {
try {
/*const usernames = [
"kkara000",
"initokyolagii",
"amnddiah_",
"oliviapaytenn",
"zqya_a",
"risti_aprilianti",
"vfyourzaa",
"capeudah123",
"vicidior9051"
];
const username =
usernames[Math.floor(Math.random() * usernames.length)];
*/
const stalkResponse = await axios.get(
`https://urlebird.com/user/penyegar__mata/`,
);
const stalkHtml = stalkResponse.data;
const $stalk = cheerio.load(stalkHtml);
const linkVideo = [];
const udahAda = {};
$stalk(".thumb.wc a[href*='video/']").each((index, element) => {
const href = $stalk(element).attr("href");
if (!udahAda[href]) {
    linkVideo.push(href);
udahAda[href] = true;
}
});
const randomIndex = Math.floor(Math.random() * linkVideo.length);
const randomVideoLink = linkVideo[randomIndex] || linkVideo[0];
if (!randomVideoLink) {
throw new Error("No video link found");
}
const getVidResponse = await axios.get(randomVideoLink);
const getVidHtml = getVidResponse.data;
const $getVid = cheerio.load(getVidHtml);
const videoSrc = $getVid(".video_html5 video").attr("src");
if (!videoSrc) {
throw new Error("Video src not found");
}
return {
creator: "SatzzDev.",
videoSrc: videoSrc,
};
} catch (error) {
console.error("Error in asupan request:", error.message);
throw new Error(`Request failed: ${error.message}`);
}
}
//asupan().then(console.log).catch(console.error);

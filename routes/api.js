import { Router } from 'express';
import cors from 'cors';
import secure from 'ssl-express-www';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { ytmp3, ytmp4, transcript, spotifydl, search, SatzzDev } from '../routes/scrape.js';
import {selfReminder, profile, versus} from '../routes/canvas.js';
import {Welcome, Goodbye,  Gura, Gfx1, Gfx2, Gfx3, Gfx4, Gfx5 } from '@lyncx/canvas'
import yts from 'yt-search';




const router = new Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);





const fetchJson = async (url, options) => {
try {
options ? options : {};
const res = await axios({method: "GET",url: url,headers: {"User-Agent":
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"},...options});
return res.data;
} catch (err) {
return err;
}
};























router.get("/welcome", async (req, res) => {
try {
const { ppgc, ppuser, username, groupname, member } = req.query;
if (!ppgc) return res.status(400).send({ status: 400, message: "Masukkan parameter ppgc" });
if (!ppuser) return res.status(400).send({ status: 400, message: "Masukkan parameter ppuser" });
if (!username) return res.status(400).send({ status: 400, message: "Masukkan parameter username" });
if (!groupname) return res.status(400).send({ status: 400, message: "Masukkan parameter groupname" });
if (!member) return res.status(400).send({ status: 400, message: "Masukkan parameter member" });
const background = req.query.background || "https://r4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-01b69d213afe95f35634472bcdf74a70.jpg";
const image = await new Welcome().setUsername(username).setGuildName(groupname).setGuildIcon(ppgc).setMemberCount(member).setAvatar(ppuser).setBackground(background).toAttachment();
const buffer = image.toBuffer();
res.set({ "Content-Type": "image/png", "Content-Length": buffer.length });
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({ status: 500, message: "Internal Server Error", error: error.message });
}
});





router.get("/goodbye", async (req, res) => {
try {
const { ppgc, ppuser, username, groupname, member } = req.query;
if (!ppgc) return res.status(400).send({ status: 400, message: "Masukkan parameter ppgc" });
if (!ppuser) return res.status(400).send({ status: 400, message: "Masukkan parameter ppuser" });
if (!username) return res.status(400).send({ status: 400, message: "Masukkan parameter username" });
if (!groupname) return res.status(400).send({ status: 400, message: "Masukkan parameter groupname" });
if (!member) return res.status(400).send({ status: 400, message: "Masukkan parameter member" });
const background = req.query.background || "https://r4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-01b69d213afe95f35634472bcdf74a70.jpg";
const image = await new Goodbye().setUsername(username).setGuildName(groupname).setGuildIcon(ppgc).setMemberCount(member).setAvatar(ppuser).setBackground(background).toAttachment();
const buffer = image.toBuffer();
res.set({ "Content-Type": "image/png", "Content-Length": buffer.length });
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({ status: 500, message: "Internal Server Error", error: error.message });
}
});






router.get("/gura", async (req, res) => {
try {
let {text} = req.query;
if (!text) return res.status(400).send({ status: 400, message: "Masukkan parameter text" });
const image = await new Gura().setName(text).toAttachment();
const buffer = image.toBuffer();
res.set({ "Content-Type": "image/png", "Content-Length": buffer.length });
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({ status: 500, message: "Internal Server Error", error: error.message });
}
});





router.get("/gfx1", async (req, res) => {
try {
let {text} = req.query;
if (!text) return res.status(400).send({ status: 400, message: "Masukkan parameter text" });
const image = await new Gfx1().setName(text).toAttachment();
const buffer = image.toBuffer();
res.set({ "Content-Type": "image/png", "Content-Length": buffer.length });
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({ status: 500, message: "Internal Server Error", error: error.message });
}
});





router.get("/gfx2", async (req, res) => {
try {
let {text} = req.query;
if (!text) return res.status(400).send({ status: 400, message: "Masukkan parameter text" });
const image = await new Gfx2().setName(text).toAttachment();
const buffer = image.toBuffer();
res.set({ "Content-Type": "image/png", "Content-Length": buffer.length });
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({ status: 500, message: "Internal Server Error", error: error.message });
}
});





router.get("/gfx3", async (req, res) => {
try {
let {text1, text2} = req.query;
if (!text1 || !text2) return res.status(400).send({ status: 400, message: "Masukkan parameter text1 dan text2" });
const image = await new Gfx3().setText1(text1).setText2(text2).toAttachment();
const buffer = image.toBuffer();
res.set({ "Content-Type": "image/png", "Content-Length": buffer.length });
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({ status: 500, message: "Internal Server Error", error: error.message });
}
});





router.get("/gfx4", async (req, res) => {
try {
let {text1, text2} = req.query;
if (!text1 || !text2) return res.status(400).send({ status: 400, message: "Masukkan parameter text1 dan text2" });
const image = await new Gfx4().setText1(text1).setText2(text2).toAttachment();
const buffer = image.toBuffer();
res.set({ "Content-Type": "image/png", "Content-Length": buffer.length });
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({ status: 500, message: "Internal Server Error", error: error.message });
}
});





router.get("/gfx5", async (req, res) => {
try {
let {text} = req.query;
if (!text) return res.status(400).send({ status: 400, message: "Masukkan parameter text" });
const image = await new Gfx5().setText(text).toAttachment();
const buffer = image.toBuffer();
res.set({ "Content-Type": "image/png", "Content-Length": buffer.length });
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({ status: 500, message: "Internal Server Error", error: error.message });
}
});


router.get("/self-reminder", async (req, res) => {
try {
let {text} = req.query;
if (!text) return res.status(400).send({ status: 400, message: "Masukkan parameter text" });
const buffer = await selfReminder(text);
res.set({ "Content-Type": "image/png", "Content-Length": buffer.length });
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({ status: 500, message: "Internal Server Error", error: error.message });
}
});

router.get("/profile", async (req, res) => {
try {
let {username, avatar, isPremium, isOwner} = req.query;
if (!username || !avatar || !isPremium || !isOwner) return res.status(400).send({status: 400, message: "Masukkan parameter username, avatar, isPremium dan isOwner. contoh : ?username=username&avatar=avatar&isPremium=true&isOwner=true"});
const buffer = await profile(username, avatar, isPremium === 'true', isOwner === 'true');
res.set({"Content-Type": "image/png", "Content-Length": buffer.length});
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({status: 500, message: "Internal Server Error", error: error.message});
}
});

router.get("/bewan", async (req, res) => {
try {
let {player1, player2, avatar1, avatar2} = req.query;
if (!player1 || !player2 || !avatar1 || !avatar2) return res.status(400).send({status: 400, message: "Masukkan parameter player1, player2, avatar1 dan avatar2. contoh : ?player1=Udin&player2=Asep&avatar1=&avatar2="});
const buffer = await versus(player1, player2, avatar1, avatar2);
res.set({"Content-Type": "image/png", "Content-Length": buffer.length});
res.send(buffer);
} catch (error) {
console.error("Error:", error);
res.status(500).send({status: 500, message: "Internal Server Error", error: error.message});
}
});


router.get("/thmb", async (req, res) => {
const img = [
"https://i.pinimg.com/originals/8e/a6/27/8ea62747934dd13912a9027b37219907.jpg",
"https://i.pinimg.com/originals/ae/7e/3b/ae7e3bada352578068f2048283838941.jpg",
"https://i.pinimg.com/originals/c7/e9/ae/c7e9ae21404e5cc87ceccb591572de26.jpg",
"https://i.pinimg.com/originals/25/a7/fc/25a7fc44f70c2bac07bcb014e952f654.jpg",
"https://i.pinimg.com/originals/f5/39/73/f539739c594cb8bd9034d640d142d97e.jpg",
"https://i.pinimg.com/originals/7f/4e/77/7f4e77dbfdd04b979ad38239d02b0ce8.jpg",
"https://i.pinimg.com/originals/65/fa/04/65fa04f58f9a102ccd36046eee3101b7.jpg",
"https://i.pinimg.com/originals/af/4c/68/af4c685f1671e00b6c1b33fdd0f6cc96.jpg",
"https://i.pinimg.com/originals/25/a7/fc/25a7fc44f70c2bac07bcb014e952f654.jpg",
"https://i.pinimg.com/originals/d1/e1/8b/d1e18bb7e886fb399b04cb50c99aa4f2.jpg",
];
const randomImgUrl = img[Math.floor(Math.random() * img.length)];

try {
const response = await axios.get(randomImgUrl, { responseType: "arraybuffer" });
const buffer = Buffer.from(response.data, "binary");

res.set({
"Content-Type": "image/jpeg", 
"Content-Length": buffer.length
});
res.send(buffer);
} catch (error) {
console.error("Error fetching image:", error);
res.status(500).send("Failed to load image.");
}
});





router.get("/jadwal-sholat", async (req, res) => {
let { kota } = req.query;
if (!kota)
return res.json({
status: false,
creator: "SatganzDevs",
message: "Masukkan parameter kota",
});
const { findKodeDaerah, jadwalSholat } = (await import("./jadwal-sholat.js"));
let kd = await findKodeDaerah(kota);
let riss = await jadwalSholat(kd.kode_daerah);
res.json(riss);
});





router.get("/yts", async(req, res) => {
var { query } = req.query;
if (!query) return res.json({ status : false, creator : `SatzzDev`, message: 'missing parameter query.'})
let r = await search(query)
res.json(r)
})



router.get("/ytlist", async(req, res) => {
var { list } = req.query;
if (!list) return res.json({ status : false, creator : `SatzzDev`, message: 'missing parameter list.'})
let r = await yts( { listId: list } )
res.json(r)
})



router.get("/ytplay", async(req, res) => {
var { query } = req.query;
if (!query) return res.json({ status : false, creator : `SatzzDev`, message: 'missing parameter query.'})
let r1 = await search(query)
let r = await ytmp3(r1.results[0].url)
res.json(r)
})





router.get("/ytmp3", async(req, res) => {
var { url } = req.query;
if (!url) return res.json({ status : false, creator : `SatzzDev`, message: 'missing parameter url.'})
let r = await ytmp3(url)
res.json(r)
})





router.get("/ytmp4", async(req, res) => {
var { url } = req.query;
if (!url) return res.json({ status : false, creator : `SatzzDev`, message: 'missing parameter url.'})
let r = await ytmp4(url)
res.json(r)
})





router.get("/spotifydl", async(req, res) => {
var { url } = req.query;
if (!url) return res.json({ status : false, creator : `SatzzDev`, message: 'missing parameter url.'})
let r = await ytmp4(url)
res.json(r)
})






router.get("/surah/:surah", async (req, res) => {
let { surah } = req.params;
if (!surah) return res.json({ status: false, creator: "SatzzDev", message: "Parameter 'surah' surah diperlukan. Contoh: /surah/17" });
let riss = await fetchJson(`https://raw.githubusercontent.com/Jabalsurya2105/Database/master/data/quranaudio.json`);
let data = riss.filter((item) => item.number === parseInt(surah));
res.json({
status: true,
creator: "SatzzDev",
data,
});
});





router.get("/surah-ayat/:surah/:ayat", async (req, res) => {
let { surah, ayat } = req.params;
if (!surah || !ayat)
return res.json({
status: false,
creator: "SatganzDevs",
message:
"Masukkan parameter nomor surah dan ayat, cth: /17/32",
});
let riss = await fetchJson(
`https://raw.githubusercontent.com/Jabalsurya2105/database/master/surah/surah%20${parseInt(surah)}.json`,
);
let data = riss.ayat.filter((item) => item.no === parseInt(ayat));
res.json({
status: true,
creator: "SatzzDev",
data,
});
});





router.get("/hadist", async (req, res) => {
let { query, nomor } = req.query;
if (!query || !nomor)
return res.json({
status: false,
creator: "SatganzDevs",
message:
"Insert parameter query hadist dan nomor hadist, exempli gratia: ?query=abu  -daud&nomor=32, lista query: abu-daud, ahmad, bukhari, darimi, ibnu-majah, malik, muslim, nasai, tirmidzi",
});
let riss = await fetchJson(
`https://raw.githubusercontent.com/SatzzDev/API/master/hadis/hadis%20${query}.json`,
);
if (parseInt(nomor) > riss.available)
return res.json({
status: false,
creator: "SatganzDevs",
message: `nomor hadist tidak tersedia, nomor yang tersedia adalah ${riss.available}`,
});
let data = riss.hadits.filter((item) => item.number === parseInt(nomor));
res.json({
status: true,
creator: "SatzzDev",
data,
});
});





router.get("/renungan", async (req, res) => {
let riss = await fetchJson(
`https://raw.githubusercontent.com/SatzzDev/API/master/data/renungan.json`,
);
let imageUrl = riss[Math.floor(Math.random() * riss.length)];
const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
const buffer = Buffer.from(response.data, "binary");
res.set({
"Content-Type": "image/jpeg",
"Content-Length": buffer.length,
"Cache-Control": "public, max-age=31536000",
});
res.send(buffer);
});





router.get("/wallpaper/", async (req, res) => {
const { query, mobile } = req.query
if (!query) return res.json({ status: false, creator: "SatzzDev", message: "Masukkan parameter query contoh: ?query=anime" })
const { wallpaper } = await import("../routes/wallpaper.js")
let r = await wallpaper(query, mobile)
res.json(r)
})





router.get("/pitutur", async (req, res) => {
let { q } = req.query;
if (!q)
return res.json({
status: false,
creator: "SatganzDevs",
message: "Masukkan parameter q",
});
let { pitutur } = (await import("./berita.js"));
let riss = await pitutur(q);
res.json(riss);
});





router.get("/igdl", async (req, res) => {
let { url } = req.query;
if (!url)
return res.json({
status: false,
creator: "SatganzDevs",
message: "Masukkan parameter url!",
});
let { instaDL } = (await import("./snapinsta.js"));
let riss = await instaDL(url);
res.json(riss);
});





router.get("/xnxxsearch", async (req, res) => {
let { query } = req.query;
if (!query)
return res.json({
status: false,
creator: "SatganzDevs",
message: "Masukkan parameter query!",
});
let { xnxxsearch } = (await import("./xnxx.js"));
let riss = await xnxxsearch(query);
res.json(riss);
});





router.get("/xnxxdl", async (req, res) => {
let { url } = req.query;
if (!url)
return res.json({
status: false,
creator: "SatganzDevs",
message: "Masukkan parameter url!",
});
let { xnxxdl } = (await import("./xnxx.js"));
let riss = await xnxxdl(url);
res.json(riss);
});


export default router

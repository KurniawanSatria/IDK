/*
this script created by:

   _____       _                        _____                 
  / ____|     | |                      |  __ \                
 | (___   __ _| |_ __ _  __ _ _ __  ___| |  | | _____   _____ 
  \___ \ / _` | __/ _` |/ _` | '_ \|_  | |  | |/ _ \ \ / / __|
  ____) | (_| | || (_| | (_| | | | |/ /| |__| |  __/\ V /\__ \
 |_____/ \__,_|\__\__, |\__,_|_| |_/___|_____/ \___| \_/ |___/ 
                   __/ |                                      
                  |___/       

Social Media:
https://github.com/SatzzDev
https://instagram.com/kurniawan_Satria__
*/

//━━━━━━━━━━━━━━━[ PACKAGE ]━━━━━━━━━━━━━━━━━//
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import apiRoutes from "./routes/api.js";

//━━━━━━━━━━━━━━━[ DIRECTORY SETUP ]━━━━━━━━━━━━━━━━━//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//━━━━━━━━━━━━━━━[ INITIAL SETUP ]━━━━━━━━━━━━━━━━━//
const app = express();
const PORT = process.env.PORT || 4000;

//━━━━━━━━━━━━━━━[ APP SETTINGS ]━━━━━━━━━━━━━━━━━//
app.set("port", PORT);
app.set("json spaces", 2);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

//━━━━━━━━━━━━━━━[ MIDDLEWARES ]━━━━━━━━━━━━━━━━━//
app.enable('trust proxy');
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//━━━━━━━━━━━━━━━[ ROUTES ]━━━━━━━━━━━━━━━━━//
app.get("/", (req, res) => {
  res.render('index');
});

app.use("/api", apiRoutes);

//━━━━━━━━━━━━━━━[ STARTING SERVER ]━━━━━━━━━━━━━━━━━//
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

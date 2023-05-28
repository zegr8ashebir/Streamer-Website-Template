//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// Node
import path from "node:path";
// Express
import express from "express";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Définitions
//----------------------------------------------------------------

const router = express();

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Programme principal
//----------------------------------------------------------------

// Requête à la racine, renvoyer le document index
router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../../src/front/html/index.html")));

// Demander l'application (i.e. react)
router.get("/bundle", (req, res) => res.sendFile(path.join(__dirname, "../../dist/bundle.js")));
router.get("/script", (req, res) => res.sendFile(path.join(__dirname, "../../dist/script.js")));

// Demander le style (i.e. tailwind + ? sass)
router.get("/style", (req, res) => res.sendFile(path.join(__dirname, "../../dist/style.css")));

// Se mettre sur le port 1303 pour écouter les requêtes
router.listen(1303);

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
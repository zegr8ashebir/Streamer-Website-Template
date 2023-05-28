//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React.js
import React from "react";
import ReactDOM from "react-dom";
// Local
import App from "@containers/App";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Function
//----------------------------------------------------------------

function adjustParagraphs()
{
    document.querySelectorAll("textarea").forEach(paragraph =>
    {
        paragraph.style.height = "0";
        paragraph.style.height = `${paragraph.scrollHeight}px`;
    });
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Événements
//----------------------------------------------------------------

window.addEventListener("load", adjustParagraphs);

(new MutationObserver(adjustParagraphs)).observe(document.body, { childList: true, subtree: true });

window.addEventListener("resize", adjustParagraphs);

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Programme principal
//----------------------------------------------------------------

ReactDOM.render(<App/>, document.getElementById("root"));

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
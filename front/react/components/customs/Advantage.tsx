//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React, { useState } from "react";
// Local
import BaseInput from "./../BaseInput";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function({ bottomToolTip = false, cStyle = "", iStyle = "", lStyle = "", defImg, defDesc }): JSX.Element
{
    const [image, setImage] = useState(defImg);

    return (<BaseInput bottomToolTip={bottomToolTip} icon="star" type="Avantage" style={cStyle}>
        <img
            onClick={() => {
                const img = window.prompt("URL d'une image représentant l'avantage en question", image);
                if (img) setImage(img);
            }}
            src={image}
            className={`object-cover ${iStyle}`}
        />
        <input
            className={`outline-none truncate bg-transparent border-none overflow-y-hidden ${lStyle}`}
            defaultValue={defDesc} placeholder={defDesc} type="text"
        />
    </BaseInput>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
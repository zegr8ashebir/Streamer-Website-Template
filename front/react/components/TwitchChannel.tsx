//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React, { useState } from "react";
// Local
import BaseInput from "./BaseInput";
import { useEditor } from "@context/Editor";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function({ page, tag, bottomToolTip = false, cStyle = "", iStyle = "" }): JSX.Element
{
    const { editor, edit } = useEditor();
    const [channel, setChannel] = useState(editor[page][tag]);

    return (
        <BaseInput bottomToolTip={bottomToolTip} icon="tv" type="Chaîne Twitch" style={`aspect-video ${cStyle}`} editButton onEdit={() => {
            const chan = window.prompt("Nom de votre chaîne", editor[page][tag]);
            if (chan)
            {
                setChannel(chan);
                edit(page, tag, chan);
            }
        }}>
            <iframe
                src={`https://player.twitch.tv/?channel=${channel}&parent=${location.hostname}`} allowFullScreen={true}
                className={`w-full h-full ${iStyle}`}> 
            </iframe>
        </BaseInput>
    )
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
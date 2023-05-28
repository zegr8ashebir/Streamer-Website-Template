//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React, {useState} from "react";
// Local
import BaseInput from "./BaseInput";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function({ bottomToolTip = false, defVal, defEl, style = "" }): JSX.Element
{
    const [elements, setElements] = useState(defVal);

    return (<BaseInput onRemove={() =>
    {
        elements.pop();
        setElements([...elements]);
    }} bottomToolTip={bottomToolTip} icon="list" type="Liste" style={`items-center hover:pr-6 ${style}`} isList
        
        onAdd={() => setElements([...elements, defEl])}>
        
        {elements.map((element) => element)}
    
    </BaseInput>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
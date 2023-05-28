//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
// Local
import Paragraph from "@components/Paragraph";
import Mail from "@components/Mail";
import Telephone from "@components/Telephone";
import Heading from "@components/Heading";
import Section from "@components/Section";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function(): JSX.Element
{
    const cStyle = "flex justify-center flex-wrap w-full gap-2 items-center text-lg", iStyle = "text-center lg:text-left";

    return (<Section style="flex flex-col justify-center items-center pt-20 pb-10 gap-8 primary">
        <Heading
            page="contact" tag="title"
            cStyle="w-3/4"
            iStyle="font-poppins text-center text-4xl lg:text-5xl xl:text-6xl"
        />
        <div className="flex flex-col gap-4 w-1/2">
            <Telephone
                cStyle={cStyle} dStyle={iStyle} iStyle={iStyle}
                defVal="05 31 61 34 64"
                defDesc="(appel non surtaxé)"
            />
            <Mail
                cStyle={cStyle} dStyle={iStyle} iStyle={iStyle}
                defVal="hello@elkir.fr"
                defDesc="(merci de respecter les règles de politesse)"
            />
        </div>
        <Paragraph
            page="contact" tag="description"
            cStyle="w-3/4 xl:w-1/2"
            iStyle="text-xl text-justify"
        />
    </Section>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
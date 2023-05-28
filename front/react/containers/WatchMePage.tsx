//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
// Local
import TwitchChannel from "@components/TwitchChannel";
import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import Section from "@components/Section";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function(): JSX.Element
{
    return (<Section style="flex flex-col gap-8 justify-center pt-20 pb-10 items-center primary">
        <Heading
            page="watchme" tag="title"
            cStyle="w-3/4"
            iStyle="font-poppins text-center text-4xl lg:text-5xl xl:text-6xl"
        />
        <TwitchChannel
            page="watchme" tag="channel"
            cStyle="w-3/4 xl:w-1/2"
            iStyle="rounded-2xl shadow-md shadow-black/50"
        />
        <Paragraph
            page="watchme" tag="description"
            cStyle="w-3/4 xl:w-1/2"
            iStyle="text-xl text-justify"
        />
    </Section>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
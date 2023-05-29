//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
// Local
import Heading from "@components/Heading";
import Image from "@components/Image";
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
    return (<Section style="flex flex-col justify-center items-center pt-20 pb-10 gap-8 primary">
        <Heading
            page="planning" tag="title"
            cStyle="w-3/4"
            iStyle="font-poppins text-center text-4xl lg:text-5xl xl:text-6xl"
        />
        <Image
            page="planning" tag="planning"
            cStyle="w-3/4 xl:w-1/2"
            iStyle="rounded-2xl aspect-video shadow-md shadow-black/50"
        />
        <Paragraph
            page="planning" tag="description"
            cStyle="w-3/4 xl:w-1/2"
            iStyle="text-xl text-justify"
        />
    </Section>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
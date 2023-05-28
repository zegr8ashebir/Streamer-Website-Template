//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
// Local
import Paragraph from "@components/Paragraph";
import Heading from "@components/Heading";
import Image from "@components/Image";
import Link from "@components/Link";
import Section from "@components/Section";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function(): JSX.Element
{
    return (<>
        <Section style="flex flex-col justify-center items-center relative gap-px primary">
            <Heading
                page="home" tag="pseudonym"
                cStyle="w-3/4"
                iStyle="font-poppins text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center"
            />
            <Heading
                page="home" tag="note"
                iStyle="font-poppins text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center"
            />
        </Section>
        <Section style="flex flex-col 2xl:flex-row justify-center items-center gap-4 2xl:gap-32 secondary py-8">

            <div className="flex flex-col justify-center items-start gap-8 w-3/4 xl:w-1/2 2xl:w-1/3">
                <Heading
                    page="home" tag="title"
                    cStyle="w-full"
                    iStyle="font-poppins text-4xl xl:text-5xl 2xl:text-6xl text-center 2xl:text-left"
                />
                <Paragraph
                    page="home" tag="description_1"
                    cStyle="w-full"
                    iStyle="text-xl text-justify"
                />
                <Paragraph
                    page="home" tag="description_2"
                    cStyle="w-full"
                    iStyle="text-xl text-justify"
                />
                <Link
                    defVal="Regarde-moi!" to="watchme"
                    iStyle="hidden 2xl:block w-48 px-6 py-3 text-left font-bold text-white accentuation rounded-xl shadow shadow-black/50"
                />
            </div>
            <div className="flex items-center w-1/2 2xl:w-1/3">
                <Image
                    defVal="https://cdn.elkir.fr/assets/img/avatars/img-profil-base.jpg"
                    cStyle="w-full"
                    iStyle="aspect-square rounded-2xl shadow-md shadow-black/50"
                />
            </div>
        </Section>
    </>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";

interface SocialBarProps {
    openFunction: Function;
}

export const SocialBar = ({ openFunction }: SocialBarProps) => {
    return (
        <div className="flex justify-center text-[18px] mb-[-50px] text-blue-600 ">
            <a
                href="https://www.youtube.com/channel/UCP4nMSTdwU1KqYWu3UH5DHQ"
                target="_blank"
                rel="noreferrer"
                className="mr-2 hover:text-blue-400 flex"
            >
                <div className="mt-1 mr-1">
                    <FaYoutube />{" "}
                </div>
                Pomu Channel{" "}
            </a>{" "}
            <a
                href="https://twitter.com/PomuRainpuff"
                target="_blank"
                rel="noreferrer"
                className="ml-2 mr-2 hover:text-blue-400 flex"
            >
                <div className="mt-1 mr-1">
                    <FaTwitter />{" "}
                </div>{" "}
                Pomu Twitter{" "}
            </a>
            <div
                className="ml-2 text-blue-600  hover:text-blue-400 flex cursor-pointer  "
                onClick={() => {
                    openFunction(true);
                }}
            >
                <div className="mt-1 mr-1">
                    <AiFillInfoCircle />
                </div>{" "}
                Info
            </div>
        </div>
    );
};

import { useEffect, useState } from "react";

interface CreditsProps {
    closeCredits: Function;

}

export const Credits = ({ closeCredits }: CreditsProps) => {


    return (
        <div className=" z-30 absolute top-[280px] w-[400px] h-[500px] bg-[#af7133] rounded-[5%] justify-center text-center p-10">
            <div
                className="text-right mt-[-30px] mr-[-20px] text-[20px] font-bold cursor-pointer"
                onClick={() => {
                    closeCredits(false);
                }}
            >
                X
            </div>
            <div className="text-[30px] font-bold ">About</div>
            <div className="text-[20px] font-medium">
                This is a fan site dedicated to{" "}
                <a
                    className="text-[#f9cd9e] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCP4nMSTdwU1KqYWu3UH5DHQ"
                >
                    Pomu Rainpuff
                </a>
                , and to help to get random answers for no important questions.
            </div>
            <div className="text-[30px] font-bold mt-10">Credits</div>
            <div className="text-[20px] font-medium flex flex-col ">
                <div>
                    {" "}
                    Inspired by{" "}
                    <a
                        href="https://impomu.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-[#f9cd9e] cursor-pointer"
                    >
                        impomu.com
                    </a>
                </div>
                <div>
                    {" "}
                    Icons by{" "}
                    <a
                        href="https://react-icons.github.io/react-icons/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-[#f9cd9e] cursor-pointer"
                    >
                        react-icons
                    </a>
                </div>
                <div>
                    {" "}
                    Fan site and arts by{" "}
                    <a className="hover:underline text-[#f9cd9e] cursor-pointer">
                        me
                    </a>
                </div>
                <div>
                    {" "}
                    shake sounds by{" "}
                    <a
                        href="https://freesound.org/people/korry999/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-[#f9cd9e] cursor-pointer"
                    >
                        korry999
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://freesound.org/people/movingplaid/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-[#f9cd9e] cursor-pointer"
                    >
                        movingplaid
                    </a>
                </div>
                <div>
                    {" "}
                    scream by{" "}
                    <a
                        href="https://www.youtube.com/channel/UCP4nMSTdwU1KqYWu3UH5DHQ"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-[#f9cd9e] cursor-pointer"
                    >
                        Pomu Rainpuff
                    </a>
                </div>
            </div>
        </div>
    );
};

import PomuJarImage from "../../assets/jar.png";
import PomuPomu from "../../assets/pomuStanding.png";
import PomuPomuConfuse from "../../assets/pomuConfuse.png";
import PomuJarImageShaking from "../../assets/shakingJar.png";
import PomuPomuShaking from "../../assets/pomuShake.png";
import PomuHittingJar from "../../assets/shakingPomuSound.mp3";
import PomuScream from "../../assets/pomuAAA.mp3";

interface PomuProps {
    isShaking: boolean;
    isConfuse: boolean;
    
}

export const PomuJar = ({ isShaking, isConfuse,  }: PomuProps) => {
    const shakingAudio = new Audio(PomuHittingJar);
    shakingAudio.loop = true;
    const pomuHelp = new Audio(PomuScream);
    pomuHelp.loop = true;

    function playinAudio() {
        shakingAudio.loop = false;
        shakingAudio.play();
        pomuHelp.loop = false;
        pomuHelp.play();
    }

    isShaking ? playinAudio() : (shakingAudio.loop = false);

    return (
        <div className={`${isShaking ? "animate-shaking absolute" : ""}`}>
            <div
                className={`${
                    isShaking
                        ? "animate-shakingPomu absolute"
                        : "animate-floating absolute"
                }`}
            >
                {
                    <img
                        src={
                            isShaking
                                ? PomuPomuShaking
                                : isConfuse
                                ? PomuPomuConfuse
                                : PomuPomu
                        }
                        alt=""
                        width={250}
                        height={250}
                        className="z-12  pt-44 ml-32  "
                    />
                }
            </div>
            <div className=" ">
                <img
                    src={isShaking ? PomuJarImageShaking : PomuJarImage}
                    alt=""
                    width={450}
                    height={450}
                    className="z-10 -rotate-12"
                />
            </div>
        </div>
    );
};

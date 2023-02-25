import React, { useEffect, useState } from "react";
import { QuestionBar } from "../components/QuestionBar";
import { PomuJar } from "../components/PomuJar";
import { Credits } from "../components/PomuCredits";
import { SocialBar } from "../components/PomuSocialBar";
import { answers } from "../constants/constants";

import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

import Ground from "../assets/groundDone.png";
import PomuSucess from "../assets/531087__ryusa__magic-spell-buff-bell-sparkle-reverb.wav";

export const MainPage = () => {
    const [questionState, setQuestionState] = useState("");
    const [jarShaking, setJarShaking] = useState(false);
    const [pomuConfuse, setPomuConfuse] = useState(false);
    const [pomuAnswer, setPomuAnswer] = useState("");
    const [credits, setCredits] = useState(false);
    const [totalCount, setTotalCount] = useState<any>({});
    const [addCount, setAddCount] = useState<boolean>(false);

    useEffect(() => {
        jarShaking && setAddCount(!addCount);
    }, [jarShaking]);

    console.log("total", totalCount.count);
    useEffect(() => {
        const q = query(collection(db, "count"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let dataArray: any = [];
            querySnapshot.forEach((doc) => {
                dataArray.push({ ...doc.data(), id: doc.id });
            });
            setTotalCount(dataArray[0]);
        });
        return () => unsub();
    }, []);

    useEffect(() => {
        const handleEdit = async (totalCount: any) => {
            await updateDoc(doc(db, "count", totalCount.id), {
                count: totalCount.count + 1,
            });
        };
        handleEdit(totalCount);
    }, [addCount]);

    const sucessAudio = new Audio(PomuSucess);
    sucessAudio.loop = true;

    function playSucessAudio() {
        sucessAudio.play();
        sucessAudio.loop = false;
    }

    function getRandomAnswers() {
        setPomuAnswer(answers[Math.floor(Math.random() * answers.length)]);
    }

    function stopConfusion() {
        setPomuConfuse(false);
    }
    useEffect(() => {
        function cancelShaking() {
            playSucessAudio();
            setJarShaking(false);
            setPomuConfuse(true);
        }
        jarShaking && setTimeout(cancelShaking, 2000);
    }, [jarShaking]);

    console.log("bbb", jarShaking);
    return (
        <div className="h-screen bg-[#A1ED9D]">
            <div className=" fixed inset-x-0 bottom-0">
                <div className=" mb-[-50px]">
                    {!jarShaking && <SocialBar openFunction={setCredits} />}
                </div>{" "}
                <img
                    src={Ground}
                    alt=""
                    className=" object-contain mt-[55px] "
                />
            </div>
            <div className="flex justify-center ">
                {credits ? <Credits closeCredits={setCredits} /> : ""}
                <div className="lg:mt-[-67px] 2xl:scale-[90%] min-[1600px]:scale-[100%] lg:scale-[70%] scale-[60%] mt-[-120px] 2xl:mt-[-10px] min-[1600px]:mt-[80px]">
                    <QuestionBar
                        question={questionState}
                        questionChange={setQuestionState}
                        shakeTheJar={setJarShaking}
                        stopConfusion={stopConfusion}
                        getAnswer={getRandomAnswers}
                        isShaking={jarShaking}
                        questionCount={totalCount.count}
                    />
                    {pomuConfuse && !jarShaking ? (
                        <div className="absolute top-[480px] text-[25px] bg-white rounded-full px-5 z-20 text-left	">
                            {pomuAnswer}
                        </div>
                    ) : (
                        ""
                    )}
                    <PomuJar isShaking={jarShaking} isConfuse={pomuConfuse} />
                </div>{" "}
            </div>
        </div>
    );
};

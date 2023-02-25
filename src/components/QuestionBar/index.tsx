import { useEffect, useState } from "react";

interface QuestionBarProps {
    question: any;
    questionChange: Function;
    shakeTheJar: Function;
    stopConfusion: Function;
    getAnswer: Function;
    isShaking: boolean;
    questionCount: number
}

export const QuestionBar = ({
    question,
    questionChange,
    shakeTheJar,
    stopConfusion,
    getAnswer,
    isShaking,
    questionCount
}: QuestionBarProps) => {
    const [questionExist, setQuestionExist] = useState(false);

    useEffect(() => {
        question.length > 3 ? setQuestionExist(true) : setQuestionExist(false);
    }, [question]);

    function askTheFairy() {
        questionExist && shakeTheJar(true);
        getAnswer();
    }

    return (
        <div className="flex flex-col">
            <div className="z-10">
                <div className="bg-[#A1ED9D] h-5" />
                <input
                    placeholder="Ask your question"
                    className="text-[24px] w-[463px] h-[40px] pl-2"
                    value={question}
                    onChange={(e) => {
                        questionChange(e.target.value);
                        stopConfusion();
                    }}
                />
                <div className="text-blue-600  flex justify-center absolute ml-10">
                    questions asked: {questionCount}
                </div>
            </div>
            <div className=" flex w-[463px] justify-end ">
                <div
                    className={
                        isShaking
                            ? "bg-[#81b666] cursor-default flex justify-center w-[170px] h-[106px] rounded-b-[50%] z-2 mt-[-55px]"
                            : `${
                                  questionExist
                                      ? "bg-[#9DD980] hover:bg-[#9ce777] hover:mt-[-52px] cursor-pointer"
                                      : "bg-[#81b666] cursor-default"
                              } flex justify-center w-[170px] h-[106px] rounded-b-[50%] z-2 mt-[-55px] `
                    }
                    onClick={() => {
                        !isShaking && askTheFairy();
                    }}
                >
                    <div className="text-[24px] text-[#EDFFB9] mt-[56px] ">
                        {questionExist ? "Ask It" : "Write It"}
                    </div>
                </div>
            </div>
        </div>
    );
};

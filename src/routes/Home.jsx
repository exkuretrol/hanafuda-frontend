import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import combinations from "../utilities/combinations";
import ShowCards from "../components/ShowCards";
import special_combinations from "../utilities/special_combinations";

const Home = () => {
    return (
        <>
            <Header />
            <Combinations />
            <SpecialCombinations />
        </>
    );
};

const Header = () => {
    const pageRef = useRef();
    const leftPanel = useRef();
    const leftInnerPanel = useRef();
    const rightPanel = useRef();
    const onEnter = () => {
        gsap.to(leftPanel.current, { x: "-4px", duration: 0.3 });
        gsap.to(leftInnerPanel.current, { x: "4px", duration: 0.3 });
    };
    const onLeave = () => {
        gsap.to(leftPanel.current, { x: "0", duration: 0.3 });
        gsap.to(leftInnerPanel.current, { x: "0", duration: 0.3 });
    };
    useLayoutEffect(() => {
        gsap.fromTo(leftPanel.current, { x: "-50px", duration: 1 }, { x: 0 });
        gsap.fromTo(
            rightPanel.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
        );
    }, [pageRef]);

    return (
        <div
            className="relative flex min-h-screen flex-row items-stretch"
            ref={pageRef}
        >
            <div
                className="absolute inset-0 z-10 h-[40rem] w-1/2 rounded-r-xl bg-slate-100 shadow-xl"
                ref={leftPanel}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
            >
                <div className="mx-32 my-40" ref={leftInnerPanel}>
                    <div className=" font-sans text-4xl font-medium tracking-[0.1em] text-slate-400">
                        はなふだ
                    </div>
                    <div className="mt-6 font-sans text-4xl font-bold tracking-[0.1em] text-slate-700 ">
                        花牌
                    </div>
                    <div className="mt-4 font-sans text-2xl font-normal text-slate-300">
                        是源於日本的傳統紙牌遊戲。
                    </div>
                    <div className="mt-4 font-sans text-2xl font-normal text-slate-300">
                        來一場花牌吧！こいこい！
                    </div>
                    <button className="group mt-24 flex flex-row items-center rounded-[90px] bg-slate-400 px-8 py-4">
                        <div className=" h-6 font-sans text-2xl font-normal leading-6 text-slate-200">
                            開始遊戲
                        </div>
                        <div className="ml-8 grid h-8 w-8 place-items-center rounded-full bg-slate-500">
                            <FaArrowRight className="h-4 w-4 fill-slate-300 transition-all duration-300 group-hover:rotate-90" />
                        </div>
                    </button>
                </div>
            </div>
            <img
                className="absolute right-0 h-[40rem] w-7/12 object-cover object-right"
                src="./assets/meric-dagli-7NBO76G5JsE-unsplash.jpg"
                alt=""
                ref={rightPanel}
            />
        </div>
    );
};

const Rules = () => {
    return <></>;
};

const Combinations = () => {
    const TableItems = combinations.map((comb, i) => (
        <div key={i} className=" mt-4 border-t border-slate-400 pt-4">
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2">
                    <div className="flex flex-row mb-6">
                        <p className="font-sans text-2xl font-normal text-slate-700">
                            {comb.name}
                        </p>
                        <p className="font-sans text-2xl font-normal text-slate-300 ml-auto">
                            （{comb.points}點）
                        </p>
                    </div>
                    <p className="font-sans text-2xl font-normal text-slate-500">
                        {comb.description}
                    </p>
                </div>
                <div className="w-1/2 flex items-center">
                    <ShowCards Cards={comb.cards} Size="sm" />
                </div>
            </div>
        </div>
    ));
    return (
        <div className=" max-w-5xl mx-auto">
            <div className="font-sans text-2xl font-bold text-slate-700">
                役
            </div>
            <div className="mt-6 mb-2 font-sans text-2xl font-normal text-slate-500">
                在遊戲中獲得特定組合的牌，就能獲得對應的點數。
            </div>
            <div className="flex flex-col border-b border-slate-400 pb-6">
                {TableItems}
            </div>
        </div>
    );
};

const SpecialCombinations = () => {
    const TableItems = special_combinations.map((comb, i) => (
        <div key={i} className=" mt-4 border-t border-slate-400 pt-4">
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2">
                    <div className="flex flex-row mb-6">
                        <p className="font-sans text-2xl font-normal text-slate-700">
                            {comb.name}
                        </p>
                        <p className="font-sans text-2xl font-normal text-slate-300 ml-auto">
                            （{comb.points}點）
                        </p>
                    </div>
                    <p className="font-sans text-2xl font-normal text-slate-500">
                        {comb.description}
                    </p>
                </div>
                <div className="w-1/2 flex items-center">
                    <ShowCards Cards={comb.cards} Size="sm" />
                </div>
            </div>
        </div>
    ));
    return (
        <div className=" max-w-5xl mx-auto mt-9">
            <div className="font-sans text-2xl font-bold text-slate-700">
                特殊的役
            </div>
            <div className="mt-6 mb-2 font-sans text-2xl font-normal text-slate-500">
                除了上面列出的役之外，在任天堂網站上還有下列組合的役。 
            </div>
            <div className="flex flex-col border-b border-slate-400 pb-6">
                {TableItems}
            </div>
        </div>
    );
};
export default Home;

import * as React from "react";
import { Variants, m } from "framer-motion";

const Welcome = () => {
    const Variants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };
    return (
        <m.div
            variants={Variants}
            animate={"show"}
            initial={"hidden"}
            className="ml-[4vw]prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 lg:ml-[1vw] "
        >
            <m.div variants={item} className="flex pb-3 space-x-2">
                <h1 className="underline decoration-blue-400 underline-offset-2 lg:text-6xl">
                    Welcome,
                </h1>
                <h1 className="lg:text-6xl">&#x1F44B;</h1>
            </m.div>
            <div className="ml-[2vw] lg:mt-[1vh] lg:space-y-2">
                <m.h2 className="lg:text-4xl" variants={item}>
                    I&apos;m Justin Morris. A...
                </m.h2>
                <m.h3 variants={item} className="lg:text-4xl">
                    - Computer science student
                </m.h3>
                <m.h3 variants={item} className="lg:text-4xl">
                    - Web developer
                </m.h3>
                <m.h3 variants={item} className="lg:text-4xl">
                    - Programming Instructor
                </m.h3>
            </div>
        </m.div>
    );
};

export default Welcome;

import * as React from "react";
import Image from "next/image";
import me from "./img/Me/me.jpg";
import { m } from "framer-motion";

const About: React.FC = () => (
    <div>
        <h1 className="text-3xl font-semibold lg:hidden">
            Hey I&apos;m Justin,
        </h1>
        <div className="gap-x-[2vw] lg:mx-[4vw] lg:grid lg:grid-cols-2">
            <div className="my-[3vh] lg:mt-[1vh]">
                <m.div
                    className="relative w-full origin-center"
                    whileHover={{ scale: 0.95 }}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 1 }}
                >
                    <Image
                        src={me}
                        width={1439}
                        height={831}
                        placeholder="blur"
                        priority={true}
                        layout="responsive"
                        className="rounded-xl "
                        // objectFit="contain"
                        quality={100}
                        alt="Justin"
                    />
                </m.div>
            </div>
            <div className="py-[1vh]  lg:place-self-center">
                <h1 className="hidden font-semibold lg:block lg:text-4xl">
                    Hey I&apos;m Justin,
                </h1>

                <h2 className="h-min text-2xl font-normal leading-normal lg:text-3xl lg:leading-loose ">
                    I&apos;m a front-end{" "}
                    <span className="underline decoration-slate-500 underline-offset-1">
                        {" "}
                        ReactJS
                    </span>{" "}
                    web developer and computer science student at Jacobs
                    University in Bremen Germany. While originally from Chicago
                    IL, &apos;m now located in New York City and Bremen.
                </h2>
            </div>
        </div>
    </div>
);

export default About;

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import orangeBg from '@/assets/abstractorange.jpg'
export function WobbleCardDemo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 h-full bg-pink-800 min-h-[410px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Gippity AI powers the entire universe
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        popular AI platform for developers.
                    </p>
                </div>
                {/* <img
          src={orangeBg}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}
            </WobbleCard>
            <div className="lg:col-span-2 col-span-full space-y-4 ml-4">
                <h2 className="text-2xl font-bold text-muted-foreground">Vaani Foundation</h2>
                <h1 className="text-4xl font-extrabold text-black">
                    Your <span className="text-red-600">One Stop Solution</span> to charity
                </h1>
                <p className="text-base text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum alias, officiis optio, at eius eaque libero suscipit minus, veritatis mollitia voluptatum expedita similique amet exercitationem accusantium corrupti aperiam quos beatae molestiae autem iure itaque quae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima illum nobis incidunt reprehenderit officia aspernatur quae? Vero, officia facere. Magni perspiciatis dignissimos ipsam inventore velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, corporis. Magnam labore odio provident error culpa doloribus quasi! Corporis modi, accusantium alias autem explicabo ex incidunt fugit unde earum odio facere beatae sit voluptate?
                </p>
            </div>
        </div>
    );
}
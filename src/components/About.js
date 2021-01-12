import Image from "next/image";
import { hrtime } from "process";

export default function About() {
  return (
    <>
      <div className="my-24">
        <div className="grid grid-cols-2">
          <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
            <div className="flex flex-row justify-center items-center h-full">
              <Image
                src="/me.png"
                alt="Picture of the author"
                width={150}
                height={194}
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 2xl:col-span-1 py-8 md:py-0">
          <h4 className="text-black dark:text-white text-xl py-2 md:py-4">
                About Me
              </h4>
            <p className="dark:text-white text-base md:text-lg">
              I born and raised in India. After studies (Masters of computer
              applications), i moved to Canada for higher studies. <br />
              Involved in
              the lifecycle of a product - from visual design, design systems to
              build maintainable, fast and accessible interfaces. <br /> Outside of work, I like
              to read books and i’m a milk tea enthusiast ☕.️️ <br />You can take a
              look at my resume, if you’re interested in the details.
            </p>
            <h3 className="py-4" style={{color: "#FFDD00" }}><a href="https://www.buymeacoffee.com/hyumanamar">Buy me a Tea</a></h3>
          </div>
        </div>
      </div>
      <style jsx>{`
      .gradient {
        background: linear-gradient(128.34deg, #FF9C57 11.25%, #F981AD 35.65%, rgba(169, 131, 233, 0.98625) 64.05%, rgba(67, 174, 254, 0.97) 88.05%);
      }
      `}
      </style>
    </>
  );
}

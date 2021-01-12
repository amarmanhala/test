import Link from "next/link";

if (typeof window !== "undefined") {
  window.onscroll = function () {
    scrollRotate();
  };
}

function scrollRotate() {
  let image = document.getElementById("reload");
  image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
}

export default ({ siteTitle }) => {
  return (
    <div>
      <div className="w-100 flex flex-row items-center justify-between">
        <div className="text-white">
          <h4 className="font-sans dark:text-white text-black text-lg md:text-xl subpixel-antialiased">
            <Link href="/">{siteTitle}</Link>
          </h4>
        </div>
        <div
          className="fixed xl:right-36 lg:right-10 md:right-12 right-4 z-50"
          id="reload"
        >
          <img src="./Logo.svg"></img>
        </div>
      </div>
    </div>
  );
};

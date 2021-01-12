import animationData from "../lotties/33510-smiling.json";

export default function () {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay()];
  return (
    <div className="my-2 border-t-2 py-4 md:py-8 border-greyText">
      <div className="flex flex-row flex-wrap justify-between">
        <p className="dark:text-white font-light text-sm md:text-base">
          This site is designed in Figma, coded in React by Amarpreet singh.
        </p>
        <div className="flex flex-row py-4 md:py-0">
        <div id="workLottieContainer"></div>       
          <p className="dark:text-white ml-2 font-normal">Happy {dayName}</p>
        </div>
      </div>
    </div>
  );
}

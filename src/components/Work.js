import animationData from "../lotties/29178-cat-in-box.json";
import ProjectsData from "../Projects.json";
import Image from 'next/image'

export default function Work() {
  return (
    <>
      <div className="flex flex-row items-end">
      <div id="workLottieContainer"></div>       
        <h4 className="text-black dark:text-white text-xl ml-2">Recent Work</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 my-6">
        {ProjectsData.map((project) => {
          return (
            <a href={project.url} target="_blank">
              <div
                className="bg-pureWhite dark:bg-grey rounded-lg shadow overflow-hidden"
                id="card"
              >
                <div className="flex flex-col relative p-4 md:p-6 items-start h-96">
                  <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row w-4/5">
                      <div className="">
                        <p className=" text-black dark:text-white text-lg">{project.title}</p>
                        <p className="dark:text-greyText text-base">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="displayLink">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        className="stroke-current dark:text-white text-black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.303 13.5046V19.5046C18.303 20.0351 18.0923 20.5438 17.7172 20.9189C17.3421 21.2939 16.8334 21.5046 16.303 21.5046H5.30298C4.77255 21.5046 4.26384 21.2939 3.88876 20.9189C3.51369 20.5438 3.30298 20.0351 3.30298 19.5046V8.50464C3.30298 7.97421 3.51369 7.4655 3.88876 7.09043C4.26384 6.71535 4.77255 6.50464 5.30298 6.50464H11.303"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.303 3.50464H21.303V9.50464"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.303 14.5046L21.303 3.50464"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end w-full absolute top-44 -right-32 transform rotate-12">
                    <div className="filter">
                    <Image src={project.image} width={600} height={600} intrinsic="true"></Image>
                    </div>
                    
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <style jsx>{`
        .filter {
          filter: grayscale(1);
        }
        #card:hover .filter {
          filter: none;
          transition: all 0.55s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
        }
        .displayLink {
          display: none;
        }
        #card:hover .displayLink {
          display: block;
          transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
        }
      `}</style>
    </>
  );
}


export default function Contact() {
 
  return (
    <div className="flex flex-row w-full my-28">
      <div>
            <h3 className="dark:text-white text-2xl">
              Clients Friends Collaborators
            </h3>
    
        <p className="dark:text-white text-base md:text-lg py-4 font-light tracking-wide">
          Email me at{" "}
          <a href="mailto: amar.manhala@gmail.com" className="underline">
            amar.manhala@gmail.com
          </a>{" "}
          or you can find on{" "}
          <a
            href="https://twitter.com/hyumanamar"
            target="_blank"
            className="underline"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://github.com/amarmanhala"
            target="_blank"
            className="underline"
          >
            Github
          </a>
          .
        </p>
      </div>
    </div>
  );
}

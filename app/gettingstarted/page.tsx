//LANDING PAGE AKA HOMESCREEN
export default function GettingStarted() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#EFEFEF] font-sans text-black">
      <div className="grid h-full w-full grid-cols-3 grid-rows-10 gap-3">
        <div className="col-span-3 flex w-full items-center justify-between">
          <div className="group mt-5 ml-5 flex items-center">
            <svg
              width="45"
              height="45"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="svgGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#4FBBC9" />
                  <stop offset="100%" stopColor="#8869D1" />
                </linearGradient>
              </defs>
              <path
                className="group-hover:fill-[url(#svgGrad)]"
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V13.5C3 13.6818 3.09864 13.8492 3.25762 13.9373C3.41659 14.0254 3.61087 14.0203 3.765 13.924L7.5 11.5896L11.235 13.924C11.3891 14.0203 11.5834 14.0254 11.7424 13.9373C11.9014 13.8492 12 13.6818 12 13.5V2.5C12 2.22386 11.7761 2 11.5 2H3.5Z"
                fill="black"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <h1 className="ml-5 text-6xl font-bold">
              <span className="group-hover:bg-linear-[25deg,#4FBBC9,#8869D1] group-hover:bg-clip-text group-hover:text-transparent">
                Hourglass
              </span>
            </h1>
          </div>
          <div className="mt-5 mr-5 flex gap-5 text-lg text-black">
            <a
              className="m-auto rounded-full border-2 pt-2 pr-3 pb-2 pl-3 transition-colors duration-100 hover:border-transparent hover:bg-linear-[25deg,#4FBBC9,#8869D1] hover:text-white"
              href="/login"
            >
              Login
            </a>
            <a
              className="m-auto rounded-full border-2 pt-2 pr-3 pb-2 pl-3 transition-colors duration-100 hover:border-transparent hover:bg-linear-[25deg,#4FBBC9,#8869D1] hover:text-white"
              href="/signup"
            >
              Sign Up
            </a>
          </div>
        </div>
        <div className="group col-start-2 row-start-2 row-end-3 m-auto mt-15 text-xl">
          <span className="group-hover:bg-linear-[25deg,#4FBBC9,#8869D1] group-hover:bg-clip-text group-hover:text-transparent">
            The Ultimate Event Management App.
          </span>
          <hr className="mt-1 h-1 scale-x-0 border-transparent bg-linear-[25deg,#4FBBC9,#8869D1] transition-transform group-hover:scale-x-100"></hr>
        </div>
        <div className="group row-start-4 row-end-10 mr-auto ml-auto w-3/4 rounded-sm bg-[#4FBBC9] p-5 text-center shadow-[-10px_10px_0px_0px_#8869D1]">
          <svg
            className="absolute float-left transition-transform duration-500 group-hover:translate-x-10"
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="mr-auto ml-auto text-2xl font-bold">FAQ</h1>
          <p>
            Is it free
            <br />
            yes
          </p>
        </div>
        <div className="group row-start-4 row-end-10 mr-auto ml-auto w-3/4 rounded-sm bg-[#4FBBC9] p-5 text-center shadow-[-10px_10px_0px_0px_#8869D1]">
          <svg
            className="absolute float-left transition-transform duration-500 group-hover:translate-x-10"
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="ml-auto text-2xl font-bold">Features</h1>
          <p>
            Plan events
            <br />
            calendar integration
            <br />
            Easy RSVP
            <br />
            Easy guest management
            <br />
            Easy venue management
          </p>
        </div>
        <div className="group row-start-4 row-end-10 mr-auto ml-auto w-3/4 rounded-sm bg-[#4FBBC9] p-5 text-center shadow-[-10px_10px_0px_0px_#8869D1]">
          <svg
            className="absolute float-left transition-transform duration-500 group-hover:translate-x-10"
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="ml-auto text-2xl font-bold">Why Us?</h1>
          <p>Because we said so</p>
        </div>
      </div>
    </div>
  );
}

import { infos } from "../../../public/images/info";

const Footer = () => (
  <footer className=" bg-gray-950 bg-opacity-75 text-gray-200 py-4 mt-16">
    <div className="container mx-auto px-4 flex flex-col  justify-center items-center">
      <div className="mb-4  md:mb-0 ">
        {/* <h2 className="text-lg flex justify-center font-semibold">
          Anandha Dinesh
        </h2> */}
        <p className="flex justify-center text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
      {/* <div className="flex space-x-4">
        <a
          href={infos.social.linkedin}
          className="text-gray-400 hover:text-violet-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={infos.social.github}
          className="text-gray-400 hover:text-violet-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="mailto:anandhadinesh80@gmail.com"
          className="text-gray-400 hover:text-violet-500"
        >
          Email
        </a>
      </div> */}
    </div>
  </footer>
);
export default Footer;

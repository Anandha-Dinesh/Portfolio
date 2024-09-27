import NameCard from "../components/namecard";
import Icons from "../components/icons";
import Titles from "../components/titles";
import { infos } from "../../../public/images/info";
const Intro = () => {
  return (
    <div className="flex-1 ml-6 mt-10 text-3xl align-middle">
      <div className="ml-20 mt-24 font-mono">
        <div className="text-6xl font-semibold font-mono">Hello there !</div>
        <div className="mt-8">
          <NameCard />
          <div className="mt-4">
            <Titles />
          </div>
          <div className="mt-10 ml-10 mb-5 text-sm justify-center">
            {" "}
            Connect with me in{" "}
            <div className="flex mt-3 flex-grow mr-4">
              <div className="flex space-x-5">
                <a href="mailto:anandhadinesh80@gmail.com" target="_blank">
                  <Icons
                    link={"mailto:anandhadinesh80@gmail.com"}
                    alt="Email"
                    img={"/images/mail.png"}
                  />
                </a>
                <Icons
                  link={infos.social.linkedin}
                  alt="linkedin"
                  img={"/images/linkedin.svg"}
                />
                <Icons
                  link={infos.social.github}
                  alt={"github"}
                  img={"/images/github.svg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

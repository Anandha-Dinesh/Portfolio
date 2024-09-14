import Link from "next/link";
import Image from "next/image";
import {infos} from "../../../public/images/info";

const NavBar = () => {
	return (
		<div className="sticky mt-2 p-4 w-full flex items-center overflow-x-hidden">
			<div className="flex-shrink-0 mr-8">
				<Image src="/images/logo.png" alt="logo" width={50} height={50} />
			</div>
			<div className="flex flex-grow mr-4 justify-end">
				<div className="flex space-x-5">
					<Link href="/">Home</Link>
					{/* <Link href="/">Resume</Link> */}
					<Link href={infos.social.github}>Projects</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;

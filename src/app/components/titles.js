import {useEffect, useState} from "react";
import TextTransition, {presets} from "react-text-transition";
import {infos} from "../../../public/images/info";
const Titles = () => {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
		return () => clearTimeout(intervalId);
	}, []);
	return (
		<section className="inline">
			And I am a{" "}
			<TextTransition springConfig={presets.stiff} inline>
				{
					infos.personal_info.intrests[
						index % infos.personal_info.intrests.length
					]
				}
			</TextTransition>
		</section>
	);
};

export default Titles;

import Image from "next/image";
const Icons = (props) => {
	return (
		<a target="_blank" href={props.link}>
			<Image src={props.img} alt={props.alt} width={30} height={30} />
		</a>
	);
};

export default Icons;

import { Box, Heading, Text } from "@chakra-ui/react";
import { Key, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export type Question = {
	id: Key;
	question: string;
	answer: string;
};

export default function Collapse({ question }: { question: Question }) {
	const [isShow, setShow] = useState(false);

	const toggleCollapse = () => {
		setShow(!isShow);
	};

	return (
		<Box w='100%'>
			<hr />
			<Box my={8} textAlign='left'>
				<Heading
					as='h3'
					size='md'
					mb={5}
					_hover={{ cursor: "pointer" }}
					onClick={toggleCollapse}
					display='flex'
					justifyContent='space-between'
					alignItems='center'
				>
					{question.question}
					<Box flexShrink={1}>
						{isShow ? <CiCircleMinus size={50} /> : <CiCirclePlus size={50} />}
					</Box>
				</Heading>
				{isShow && <Text>{question.answer}</Text>}
			</Box>
			<hr />
		</Box>
	);
}

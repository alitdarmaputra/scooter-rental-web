import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
	return (
		<Box bg='black' color='white' py={10}>
			<Flex
				maxW='4xl'
				marginInline='auto'
				justifyContent='space-between'
				alignItems='center'
				flexDir={["column", "row"]}
				gap={5}
			>
				<Text>© 2019 company, Inc. All rights reserved.</Text>
				<Flex gap={5}>
					<IconButton
						aria-label='send whatsapp'
						icon={<FaWhatsapp />}
						colorScheme='green'
					/>
					<IconButton
						aria-label='send instagram'
						icon={<FaInstagram />}
						colorScheme='pink'
					/>
					<IconButton
						aria-label='send email'
						icon={<MdOutlineEmail />}
						colorScheme='blue'
					/>
				</Flex>
			</Flex>
		</Box>
	);
}

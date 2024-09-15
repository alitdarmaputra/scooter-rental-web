import { Box, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box bg='black' color='white' py={10}>
			<Flex
				maxW='4xl'
				marginInline='auto'
				justifyContent='center'
				alignItems='center'
				flexDir={["column", "row"]}
				gap={5}
			>
				<Text>
					© 2024 Cahaya Dewi&apos;s Rental, Inc. All rights reserved.
				</Text>
				{/*
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
				*/}
			</Flex>
		</Box>
	);
}

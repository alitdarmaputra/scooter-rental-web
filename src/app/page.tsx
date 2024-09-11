"use client";

import { Image } from "@chakra-ui/next-js";
import hero from "../asset/hero.png";
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home() {
	return (
		<>
			<section>
				<Box
					position='absolute'
					mt={300}
					px={10}
					color='white'
					maxW={["100%", "50%"]}
					textAlign={["center", "left"]}
				>
					<Heading as='h1' size='2xl'>
						Discover Bali Your Way
					</Heading>
					<Heading as='h1' size='xl' mb={5}>
						with Easy Scooter Rentals
					</Heading>
					<Text>
						Welcome to Bali's most convenient scooter rental service! Whether
						you're chasing waterfalls, surfing the waves, or exploring vibrant
						markets, our scooters offer the perfect way to experience all that
						Bali has to offer. Enjoy the island at your own pace and uncover its
						true magic.
					</Text>
					<ButtonGroup mt={8}>
						<Button>Book Now</Button>
						<Button
							rightIcon={<ArrowForwardIcon />}
							bg='transparent'
							border='1px'
							color='white'
							borderColor='white'
							_hover={{ color: "black", bg: "white" }}
						>
							Chat Us
						</Button>
					</ButtonGroup>
				</Box>
			</section>
			<Flex
				height='100vh'
				bg='teal'
				alignItems='center'
				justifyContent='center'
				position='fixed'
				zIndex={-2}
			>
				<Image
					src={hero}
					alt='tourist riding scooter'
					minH='100%'
					objectFit='cover'
					objectPosition={{ base: "-600px 0", md: "0 0" }}
				/>
			</Flex>
		</>
	);
}

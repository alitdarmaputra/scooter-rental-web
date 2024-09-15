import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/next-js";

export type Scooter = {
	id: number;
	name: string;
	description: string;
	img: Array<string>;
	bookLink: string;
	pricePerDay: number;
	specialPrice?: {
		pricePerDay: number;
		condition: string;
	};
};

export default function ScooterCard({ scooter }: { scooter: Scooter }) {
	const sourceLink = new URL(`/scooter/${scooter.id}`, window.location.origin);

	const bookLink: URL = new URL(scooter.bookLink);
	bookLink.searchParams.set(
		"text",
		`Hello Cahaya Dewi's Rental, I would like to rent ${scooter.name} (${sourceLink}).`
	);

	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 1 }}
			viewport={{ once: true }}
		>
			<Card maxW='sm' bg='transparent' shadow='none'>
				<CardBody>
					<Box
						bgImg={scooter.img[0]}
						height={350}
						width={350}
						bgSize='cover'
						bgPos='center'
					></Box>
					<Stack mt='6' spacing='2'>
						<Heading size='md'>{scooter.name}</Heading>
						<Text fontWeight='bold'>Price</Text>
						<Text fontSize={scooter.specialPrice ? "md" : "3xl"}>
							{scooter.pricePerDay}K/ Day
						</Text>
						{scooter.specialPrice && (
							<>
								<Text fontWeight='bold' color='teal'>
									{scooter.specialPrice.condition}
								</Text>
								<Text fontSize='3xl'>
									{scooter.specialPrice.pricePerDay}K/ Day
								</Text>
							</>
						)}
					</Stack>
				</CardBody>
				<CardFooter>
					<Stack w='100%'>
						<Link href={bookLink}>
							<Button width='100%' colorScheme='teal'>
								Book Now
							</Button>
						</Link>
						<Link href={`/scooter/${scooter.id}`}>
							<Button width='100%' colorScheme='teal' variant='outline'>
								Detail
							</Button>
						</Link>
					</Stack>
				</CardFooter>
			</Card>
		</motion.div>
	);
}

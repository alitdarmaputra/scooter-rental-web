import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/next-js";

export type Scooter = {
	id: number;
	imgLink: string;
	title: string;
	alt: string;
	bookLink: string;
};

export default function ScooterCard({ scooter }: { scooter: Scooter }) {
	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 1 }}
			viewport={{ once: true }}
		>
			<Card maxW='sm' bg='transparent' shadow='none'>
				<CardBody>
					<Image
						src={scooter.imgLink}
						width={560}
						height={492}
						alt={scooter.alt}
					/>
					<Stack mt='6' spacing='3'>
						<Heading size='md'>{scooter.title}</Heading>
					</Stack>
				</CardBody>
				<CardFooter>
					<Stack w='100%'>
						<Button width='100%' colorScheme='teal'>
							Book Now
						</Button>
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

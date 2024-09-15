"use client";

import {
	Box,
	Button,
	Card,
	CardBody,
	Divider,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "@chakra-ui/next-js";

import jsonScooters from "../../scooters.json";
import { Scooter } from "../../../component/ScooterCatalogue/ScooterCard";
import { useEffect, useState } from "react";
import ScooterCatalogue from "@/component/ScooterCatalogue";

const scooters: Array<Scooter> = jsonScooters;

export default function ScooterDetail({ params }: { params: { id: number } }) {
	const [bookLink, setBookLink] = useState("");

	const scooterFiltered: Array<Scooter> = scooters.filter(
		s => s.id == params.id
	);

	useEffect(() => {
		if (!scooterFiltered.length) {
			return;
		}

		const link: URL = new URL(scooterFiltered[0].bookLink);
		const sourceLink = new URL(
			`/scooter/${scooterFiltered[0].id}`,
			window.location.origin
		);

		link.searchParams.set(
			"text",
			`Hello Cahaya Dewi's Rental, I would like to rent ${scooterFiltered[0].name} (${sourceLink}).`
		);
		setBookLink(link.toString());
	}, [scooterFiltered]);

	if (!scooterFiltered.length) {
		return <Heading>Scooter not found</Heading>;
	}

	return (
		<Box overflowX='hidden' pt={100} pb={50} px={8} bg={"gray.50"}>
			<Link href='/'>
				<Flex gap={4} alignItems='center'>
					<FaArrowLeft />
					Back to Home
				</Flex>
			</Link>
			<Heading my={4} as='h3'>
				{scooterFiltered[0].name}
			</Heading>
			<Flex justifyContent='start' gap={8} mt={8} flexDir={["column", "row"]}>
				<Card flexGrow={1}>
					<CardBody>
						<Swiper
							pagination={true}
							modules={[Pagination]}
							className='mySwiper'
							style={{ maxWidth: "600px" }}
						>
							{scooterFiltered[0].img.map((src: string, i: number) => {
								return (
									<SwiperSlide key={i}>
										<Flex w='100%' justifyContent='center'>
											<Box
												bgImg={src}
												width={500}
												height={500}
												bgSize='cover'
												bgPos='center'
											></Box>
										</Flex>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</CardBody>
				</Card>
				<Card maxW={["100%", "30%"]}>
					<CardBody p={8}>
						<Heading as='h3' fontSize='3xl' fontWeight='bold' mb={4}>
							Description:
						</Heading>
						<Text mb={4}>{scooterFiltered[0].description}</Text>
						<Box mb={6}>
							<Heading as='h3' mb={4} fontSize='xl' fontWeight='bold'>
								Price:
							</Heading>
							<Flex
								justifyContent='space-between'
								fontSize={scooterFiltered[0].specialPrice ? "md" : "3xl"}
							>
								{scooterFiltered[0].specialPrice && <Text>Normal</Text>}
								<Text>{scooterFiltered[0].pricePerDay}K /Day</Text>
							</Flex>
							{scooterFiltered[0].specialPrice && (
								<Flex justifyContent='space-between' fontSize='xl'>
									<Text color='teal' fontWeight='bold'>
										{scooterFiltered[0].specialPrice.condition}
									</Text>
									<Text>
										{scooterFiltered[0].specialPrice.pricePerDay}K /Day
									</Text>
								</Flex>
							)}
						</Box>
						<Divider mb={4} />
						<Text
							py={2}
							px={3}
							mb={2}
							bg='yellow.200'
							fontSize='sm'
							fontWeight='bold'
							color='red.800'
							rounded='md'
							textAlign='center'
						>
							Minimum 2 Days Rent
						</Text>
						<Link href={bookLink}>
							<Button w='100%' colorScheme='teal'>
								Book Now
							</Button>
						</Link>
					</CardBody>
				</Card>
			</Flex>
			<Heading my={10} as='h3'>
				Other Scooters
			</Heading>
			<Card textAlign='center'>
				<ScooterCatalogue scooters={scooters} />
			</Card>
		</Box>
	);
}

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

const scooterDetails: Array<Scooter> = jsonScooters;

export default function ScooterDetail({ params }: { params: { id: number } }) {
	const scooterDetail: Array<Scooter> = scooterDetails.filter(
		s => s.id == params.id
	);

	if (!scooterDetail.length) {
		return <Heading>Scooter not found</Heading>;
	}

	const sourceLink = new URL(
		`/scooter/${scooterDetail[0].id}`,
		window.location.origin
	);

	const bookLink: URL = new URL(scooterDetail[0].bookLink);
	bookLink.searchParams.set(
		"text",
		`Hello Cahaya Dewi's Rental, I would like to rent ${scooterDetail[0].name} (${sourceLink}).`
	);

	return (
		<Box overflowX='hidden' pt={100} pb={50} px={8} bg={"gray.50"}>
			<Link href='/'>
				<Flex gap={4} alignItems='center'>
					<FaArrowLeft />
					Back to Home
				</Flex>
			</Link>
			<Heading my={4} as='h3'>
				{scooterDetail[0].name}
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
							{scooterDetail[0].img.map((src: string, i: number) => {
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
						<Text mb={4}>{scooterDetail[0].description}</Text>
						<Box mb={6}>
							<Heading as='h3' mb={4} fontSize='xl' fontWeight='bold'>
								Price:
							</Heading>
							<Flex
								justifyContent='space-between'
								fontSize={scooterDetail[0].specialPrice ? "md" : "3xl"}
							>
								{scooterDetail[0].specialPrice && <Text>Normal</Text>}
								<Text>{scooterDetail[0].pricePerDay}K /Day</Text>
							</Flex>
							{scooterDetail[0].specialPrice && (
								<Flex justifyContent='space-between' fontSize='xl'>
									<Text color='teal' fontWeight='bold'>
										{scooterDetail[0].specialPrice.condition}
									</Text>
									<Text>{scooterDetail[0].specialPrice.pricePerDay}K /Day</Text>
								</Flex>
							)}
						</Box>
						<Divider mb={4} />
						<Link href={bookLink}>
							<Button w='100%' colorScheme='teal'>
								Book Now
							</Button>
						</Link>
					</CardBody>
				</Card>
			</Flex>
		</Box>
	);
}

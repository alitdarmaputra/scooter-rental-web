"use client";

import {
	Box,
	Button,
	Card,
	CardBody,
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
import Image from "next/image";

type ScooterDetail = {
	id: number;
	title: string;
	description: string;
	img: Array<string>;
};

const scooterDetails: Array<ScooterDetail> = [
	{
		id: 1,
		title: "nmax ngebut banget",
		description: `Tipe Mesin: Liquid cooled 4-stroke, SOHC , VVA
		Jumlah/Posisi Silinder 	: Single Cylinder
		Volume Silinder: 155.09 cc
		Diameter x Langkah: 58 mm x 58.7 mm
		Perbandingan Kompresi: 11.6 : 1
		Daya Maksimum: 11.3 kW / 8000 rpm
		Torsi Maksimum: 13.9 Nm / 6500 rpm
		Sistem Starter: Electric Starter
		Sistem Pelumasan: Wet Sump
		Kapasitas Oli Mesin: 0,9 L (Periodical Change)
		Sistem Bahan Bakar:	Fuel Injection
		Tipe Kopling: Single Dry Clucth
		Tipe Transmisi:	Automatic `,
		img: [
			"/img/scooters/nmax/nmax.png",
			"/img/scooters/nmax/nmax.png",
			"/img/scooters/nmax/nmax.png",
		],
	},
];

export default function ScooterDetail({ params }: { params: { id: number } }) {
	const scooterDetail: Array<ScooterDetail> = scooterDetails.filter(
		s => s.id == params.id
	);

	if (!scooterDetail.length) {
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
				{scooterDetail[0].title}
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
										<Image
											src={src}
											width={600}
											height={500}
											objectFit='cover'
											alt={`${scooterDetail[0].title}-${i}`}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</CardBody>
				</Card>
				<Card maxW={["100%", "30%"]}>
					<CardBody p={8}>
						<Text fontWeight='bold'>Spesifications:</Text>
						<Text mb={8}>{scooterDetail[0].description}</Text>
						<Button w='100%' colorScheme='teal'>
							Book Now
						</Button>
					</CardBody>
				</Card>
			</Flex>
		</Box>
	);
}

"use client";
import "./global.css";
import { Image, Link } from "@chakra-ui/next-js";
import hero from "../asset/hero.png";
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	Flex,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Scooter } from "../component/ScooterCatalogue/ScooterCard";
import ScooterCatalogue from "../component/ScooterCatalogue";
import { MdScreenSearchDesktop } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { GiScooter } from "react-icons/gi";
import { FaMoneyBill, FaRegMoneyBillAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import Collapse from "../component/Collapse";
import { Question } from "../component/Collapse/Collapse";
import jsonScooters from "./scooters.json";
import jsonQuestions from "./questions.json";

const scooters: Array<Scooter> = jsonScooters;

const questions: Array<Question> = jsonQuestions;

export default function Page() {
	return (
		<Box overflowX='hidden'>
			<Image
				zIndex={-2}
				position='fixed'
				minH='100vh'
				src={hero}
				alt='tourist riding scooter'
				objectPosition='center'
				objectFit='cover'
			/>
			<section id='home'>
				<Box
					pt={250}
					ml={[0, 40]}
					px={[10, 0]}
					height='80vh'
					color='white'
					maxW={["100%", "40%"]}
					textAlign={["center", "left"]}
				>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: "easeInOut", duration: 1 }}
						viewport={{ once: true }}
					>
						<Heading as='h1' size='2xl'>
							Discover Bali Your Way
						</Heading>
						<Heading as='h1' size='xl' mb={5}>
							with Easy Scooter Rentals
						</Heading>
						<Text>
							Welcome to Bali&apos;s most convenient scooter rental service!
							Whether you&apos;re chasing waterfalls, surfing the waves, or
							exploring vibrant markets, our scooters offer the perfect way to
							experience all that Bali has to offer. Enjoy the island at your
							own pace and uncover its true magic.
						</Text>
						<ButtonGroup mt={8}>
							<Link href='/#scooter-list'>
								<Button>Book Now</Button>
							</Link>
							<Link href='https://wa.me/6283114301410'>
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
							</Link>
						</ButtonGroup>
					</motion.div>
				</Box>
			</section>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 319'>
				<path
					fill='#fff'
					fillOpacity='1'
					d='M0,64L34.3,80C68.6,96,137,128,206,138.7C274.3,149,343,139,411,112C480,85,549,43,617,48C685.7,53,754,107,823,133.3C891.4,160,960,160,1029,176C1097.1,192,1166,224,1234,202.7C1302.9,181,1371,107,1406,69.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
				></path>
			</svg>
			<section id='scooter-list'>
				<Box bg='white' px={8} textAlign='center'>
					<Heading as='h2' mb={10}>
						Scooter List
					</Heading>
					<ScooterCatalogue scooters={scooters} />
				</Box>
			</section>
			<section id='how-to-rent'>
				<Box bg='white' py={32} px={8} textAlign='center'>
					<Heading as='h2' mb={5}>
						How to Rent
					</Heading>
					<Text mb={20}>
						Renting a scooter with us is simple and straightforward. Just follow
						these easy steps:
					</Text>
					<Box display={["block", "none"]}>
						<Swiper
							spaceBetween={50}
							slidesPerView={1}
							modules={[Autoplay]}
							autoplay={{
								delay: 2000,
								disableOnInteraction: true,
							}}
						>
							<SwiperSlide>
								<Card maxW='sm' shadow='none'>
									<CardBody>
										<Stack mt='6' spacing='3' textAlign='left'>
											<Box color='teal'>
												<MdScreenSearchDesktop size='100px' />
											</Box>
											<Heading color='teal' size='md'>
												Choose Your Scooter
											</Heading>
											<Text color='gray.500'>
												Browse our selection of scooters online and choose the
												one that fits your needs.
											</Text>
										</Stack>
									</CardBody>
								</Card>
							</SwiperSlide>
							<SwiperSlide>
								<Card maxW='sm' shadow='none'>
									<CardBody>
										<Stack mt='6' spacing='3' textAlign='left'>
											<Box color='teal'>
												<FaWhatsapp size='100px' />
											</Box>
											<Heading color='teal' size='md'>
												Book via WhatsApp
											</Heading>
											<Text color='gray.500'>
												Send us a message on WhatsApp with your scooter choice
												and rental details (e.g., duration and pick-up time).
												Our team will respond promptly to confirm your booking
												and provide any necessary information.
											</Text>
										</Stack>
									</CardBody>
								</Card>
							</SwiperSlide>
							<SwiperSlide>
								<Card maxW='sm' shadow='none'>
									<CardBody>
										<Stack mt='6' spacing='3' textAlign='left'>
											<Box color='teal'>
												<FaRegMoneyBillAlt size='100px' />
											</Box>
											<Heading color='teal' size='md'>
												Make Payment
											</Heading>
											<Text color='gray.500'>
												Transfer the rental fee to our bank account. We will
												provide you with the bank details via WhatsApp. Please
												include your booking name in the payment description to
												ensure it&apos;s correctly matched to your reservation.
											</Text>
										</Stack>
									</CardBody>
								</Card>
							</SwiperSlide>
							<SwiperSlide>
								<Card maxW='sm' shadow='none'>
									<CardBody>
										<Stack mt='6' spacing='3' textAlign='left'>
											<Box color='teal'>
												<GiScooter size='100px' />
											</Box>
											<Heading color='teal' size='md'>
												Receive Your Scooter
											</Heading>
											<Text color='gray.500'>
												<Text as='b'>Pick-Up:</Text> Head to the agreed location
												at the specified time.
												<br />
												<Text as='b'>Delivery:</Text> If you opted for delivery,
												we’ll bring the scooter to your location and ensure
												you’re comfortable with its use.
											</Text>
										</Stack>
									</CardBody>
								</Card>
							</SwiperSlide>
						</Swiper>
					</Box>

					<Box display={["none", "flex"]} justifyContent='space-between'>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
							viewport={{ once: true }}
						>
							<Card minW='300px' maxW='300px' shadow='none'>
								<CardBody>
									<Stack mt='6' spacing='3' textAlign='left'>
										<Box color='teal'>
											<MdScreenSearchDesktop size='100px' />
										</Box>
										<Heading color='teal' size='md'>
											Choose Your Scooter
										</Heading>
										<Text color='gray.500'>
											Browse our selection of scooters online and choose the one
											that fits your needs.
										</Text>
									</Stack>
								</CardBody>
							</Card>
						</motion.div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
							viewport={{ once: true }}
						>
							<Card minW='300px' maxW='300px' shadow='none'>
								<CardBody>
									<Stack mt='6' spacing='3' textAlign='left'>
										<Box color='teal'>
											<FaWhatsapp size='100px' />
										</Box>
										<Heading color='teal' size='md'>
											Book via WhatsApp
										</Heading>
										<Text color='gray.500'>
											Send us a message on WhatsApp with your scooter choice and
											rental details (e.g., duration and pick-up time). Our team
											will respond promptly to confirm your booking and provide
											any necessary information.
										</Text>
									</Stack>
								</CardBody>
							</Card>
						</motion.div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
							viewport={{ once: true }}
						>
							<Card minW='300px' maxW='300px' shadow='none'>
								<CardBody>
									<Stack mt='6' spacing='3' textAlign='left'>
										<Box color='teal'>
											<FaRegMoneyBillAlt size='100px' />
										</Box>
										<Heading color='teal' size='md'>
											Make Payment
										</Heading>
										<Text color='gray.500'>
											Transfer the rental fee to our bank account. We will
											provide you with the bank details via WhatsApp. Please
											include your booking name in the payment description to
											ensure it&apos;s correctly matched to your reservation.
										</Text>
									</Stack>
								</CardBody>
							</Card>
						</motion.div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
							viewport={{ once: true }}
						>
							<Card minW='300px' maxW='300px' shadow='none'>
								<CardBody>
									<Stack mt='6' spacing='3' textAlign='left'>
										<Box color='teal'>
											<GiScooter size='100px' />
										</Box>
										<Heading color='teal' size='md'>
											Receive Your Scooter
										</Heading>
										<Text color='gray.500'>
											<Text as='b'>Pick-Up:</Text> Head to the agreed location
											at the specified time.
											<br />
											<Text as='b'>Delivery:</Text> If you opted for delivery,
											we’ll bring the scooter to your location and ensure you’re
											comfortable with its use.
										</Text>
									</Stack>
								</CardBody>
							</Card>
						</motion.div>
					</Box>
				</Box>
			</section>
			<section id='about-us'>
				<Box bg='teal' py={32} px={[8, 40]} textAlign='center' color='white'>
					<Flex gap={10} flexDir={["column", "row"]}>
						<Box maxW='lg' textAlign={["center", "left"]}>
							<Heading as='h3' mb={5}>
								Bali Scooter Rental
							</Heading>
							<Text color='gray.200' mb={10}>
								Based in the heart of Bali, we pride ourselves on offering
								top-notch scooter rental services with a focus on customer
								satisfaction. Our mission is to make your travel experience as
								seamless and enjoyable as possible. Whether you&apos;re here for
								a short vacation or an extended stay, we have the perfect
								scooter to enhance your adventure.
							</Text>
							<Text>Email: test@gmail.com</Text>
							<Text>Whatsapp: test@gmail.com</Text>
							<Text>
								Location: Jl. Saliya No.30, Sangeh, Kec. Abiansemal, Kabupaten
								Badung, Bali 80352
							</Text>
						</Box>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.33695908929!2d115.20533117490643!3d-8.466576585608697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22372aa34cfe1%3A0x10abfdd4e71b3f69!2sBabi%20Genyol%20Pan%20Aplus!5e0!3m2!1sid!2sid!4v1726074528661!5m2!1sid!2sid'
							style={{ border: 0, width: "100%", height: "500px" }}
							loading='lazy'
						></iframe>
					</Flex>
				</Box>
			</section>
			<section>
				<Stack backgroundColor='gray.50' textAlign='center' px={8} py={32}>
					<Heading as='h1' size='xl' mb={20}>
						Why We&apos;re the Best Choice <br />
						for Your Scooter Rental
					</Heading>
					<Flex
						justifyContent='space-between'
						alignItems='center'
						gap={20}
						px={[8, 20]}
						flexDir={["column", "row"]}
					>
						<Card maxW='xs' p={5}>
							<CardBody>
								<Stack textAlign='start'>
									<Box
										bg='teal'
										width={50}
										height={50}
										rounded='50%'
										display='flex'
										alignItems='center'
										justifyContent='center'
										color='white'
										mb={5}
									>
										<FaLocationDot />
									</Box>
									<Heading size='md' as='h2' mb={2}>
										Convenient Locations
									</Heading>
									<Text>
										With multiple pickup and drop-off points across the city,
										accessing your scooter is a breeze.
									</Text>
								</Stack>
							</CardBody>
						</Card>
						<Card maxW='xs' p={5}>
							<CardBody>
								<Stack textAlign='start'>
									<Box
										bg='teal'
										width={50}
										height={50}
										rounded='50%'
										display='flex'
										alignItems='center'
										justifyContent='center'
										color='white'
										mb={5}
									>
										<FaMoneyBill />
									</Box>
									<Heading size='md' as='h2' mb={2}>
										Affordable Rates
									</Heading>
									<Text>
										Enjoy competitive pricing and flexible rental options to fit
										any budget.
									</Text>
								</Stack>
							</CardBody>
						</Card>
						<Card maxW='xs' p={5}>
							<CardBody>
								<Stack textAlign='start'>
									<Box
										bg='teal'
										width={50}
										height={50}
										rounded='50%'
										display='flex'
										alignItems='center'
										justifyContent='center'
										color='white'
										mb={5}
									>
										<IoIosSettings />
									</Box>
									<Heading size='md' as='h2' mb={2}>
										High-Quality Scooters
									</Heading>
									<Text>
										Our scooters are regularly serviced and maintained to ensure
										a smooth, safe ride every time.
									</Text>
								</Stack>
							</CardBody>
						</Card>
					</Flex>
				</Stack>
			</section>
			<section id='FAQ'>
				<Flex
					bg='white'
					px={8}
					textAlign='center'
					flexDir={["column", "row"]}
					gap={20}
					py={32}
				>
					<Box textAlign='left' mb={10}>
						<Heading as='h2' mb={5}>
							Frequently Asked Question
						</Heading>
						<Text>
							Everything you need to know about the product and how it work.
							Can&apos;t find an answer?
							{
								<Link color='teal' href='https://google.com'>
									Please chat to our contact.
								</Link>
							}
							.
						</Text>
					</Box>
					<Box w='100%'>
						<Collapse questions={questions} />
					</Box>
				</Flex>
			</section>
		</Box>
	);
}

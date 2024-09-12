"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
	Box,
	Flex,
	IconButton,
	SlideFade,
	useDisclosure,
} from "@chakra-ui/react";

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<>
			<Box
				px={[5, 8]}
				py={5}
				bg='white'
				shadow='md'
				position='fixed'
				width='100vw'
				zIndex={2}
			>
				<Flex justifyContent='space-between' alignItems='center'>
					<Link href='/#home' _hover={{ textDecor: "none" }}>
						Logo
					</Link>
					<Box display={["none", "flex"]} gap={10}>
						<Link
							py={2}
							href='/#scooter-list'
							_hover={{ textDecor: "underline" }}
						>
							Scooter List
						</Link>
						<Link
							py={2}
							href='/#how-to-rent'
							_hover={{ textDecor: "underline" }}
						>
							How to Rent
						</Link>
						<Link py={2} href='/#about-us' _hover={{ textDecor: "underline" }}>
							About Us
						</Link>
						<Link py={2} href='/#FAQ' _hover={{ textDecor: "underline" }}>
							FAQ
						</Link>
					</Box>
					<IconButton
						display={["block", "none"]}
						variant='ghosty'
						aria-label='toggle-menu'
						onClick={onToggle}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					/>
				</Flex>
			</Box>
			<Box
				position='fixed'
				mt={20}
				w='100vw'
				zIndex={2}
				display={isOpen ? "block" : "none"}
			>
				<SlideFade in={isOpen}>
					<Box p={5} shadow='md' bg='white'>
						<Flex flexDir='column' gap={5}>
							<Link
								py={2}
								href='/#scooter-list'
								_hover={{ textDecor: "underline" }}
							>
								Scooter List
							</Link>
							<Link
								py={2}
								href='/#how-to-rent'
								_hover={{ textDecor: "underline" }}
							>
								How to Rent
							</Link>
							<Link
								py={2}
								href='/#about-us'
								_hover={{ textDecor: "underline" }}
							>
								About Us
							</Link>
							<Link py={2} href='/#FAQ' _hover={{ textDecor: "underline" }}>
								FAQ
							</Link>
						</Flex>
					</Box>
				</SlideFade>
			</Box>
		</>
	);
}

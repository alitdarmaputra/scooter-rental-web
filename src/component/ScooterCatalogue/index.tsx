import { Flex } from "@chakra-ui/react";
import ScooterCard, { Scooter } from "./ScooterCard";

export default function ScooterCatalogue({
	scooters,
}: {
	scooters: Array<Scooter>;
}) {
	return (
		<Flex justifyContent={["center", "space-between"]} flexWrap='wrap' gap={5}>
			{scooters &&
				scooters.map((s: Scooter) => {
					return <ScooterCard key={s.id} scooter={s} />;
				})}
		</Flex>
	);
}

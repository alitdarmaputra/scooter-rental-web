import Collapse, { Question } from "./Collapse";

export default function CollapseList({
	questions,
}: {
	questions: Array<Question>;
}) {
	return (
		<>
			{questions.map((question: Question) => {
				return <Collapse question={question} key={question.id} />;
			})}
		</>
	);
}

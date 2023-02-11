const Game = ({ question, setVariant, progress }) => {
	return (
		<>
			<div className="progress">
				<div
					style={{ width: `${progress}%` }}
					className="progress__inner"
				></div>
			</div>

			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((variant, idx) => (
					<li key={idx} onClick={() => setVariant(idx)}>
						{variant}
					</li>
				))}
			</ul>
		</>
	)
}

export default Game

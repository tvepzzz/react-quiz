import { useState } from 'react'
import Game from './components/Game'
import Result from './components/Result'
import './index.scss'

const questions = [
	{
		title: 'React - это ... ?',
		variants: ['библиотека', 'фреймворк', 'приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ... ',
		variants: [
			'приложение',
			'часть приложения или страницы',
			'то, что я не знаю что такое',
		],
		correct: 1,
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код',
		],
		correct: 2,
	},
]

function App() {
	const [step, setStep] = useState(0)
	const [correctVariants, setCorrectVariants] = useState(0)
	const percentage = Math.round((step / questions.length) * 100 + 5)
	const question = questions[step]

	const onClickVariant = idx => {
		setStep(prev => prev + 1)
		idx === question.correct && setCorrectVariants(prev => prev + 1)
	}

	return (
		<div className="App">
			{step === questions.length ? (
				<Result correct={correctVariants} questions={questions} />
			) : (
				<Game
					question={question}
					setVariant={onClickVariant}
					progress={percentage}
				/>
			)}
		</div>
	)
}

export default App

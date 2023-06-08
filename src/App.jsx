import { useEffect, createRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as Pentagram } from './assets/pentagram.svg'
import { Input } from '@ui'
import {submit} from './futures/searching/submit'
import './styles/global.css'
import './styles/themes/arch.css'
import {Bookmarks} from './components'

function App() {
	const ref = createRef()

	const [value, setValue] = useState('')


	return (
		<div className="container">
			<Pentagram />
			
			<h1>help your self</h1>

			<form id="form" onSubmit={e => submit(e, {value})}>
				<Input
					ref={ref}
					autoComplete="off"
					autoFocus
					onChange={e => setValue(e.target.value)}
					tabIndex="1"
					id="search-bar"
					name="request"
					placeholder="any desire"
					type="text" />
			</form>
			<Bookmarks/>
		</div>
	)
}
export default App
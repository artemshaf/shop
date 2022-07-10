import { RadiobuttonProps } from './Radiobutton.props'
import './Radiobutton.scss';

export const Radiobutton = ({children}: RadiobuttonProps):JSX.Element => {
	return (
			<div>
				<input type="radio" name=""/>
				<span className='children'>{children}</span>
			</div>
	)
}
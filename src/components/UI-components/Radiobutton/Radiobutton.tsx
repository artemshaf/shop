import { RadiobuttonProps } from './Radiobutton.props'
import './Radiobutton.scss';

export const Radiobutton = ({children}: RadiobuttonProps):JSX.Element => {
	return (
		<label className="radio-btn__container">
        <input className="radio-btn" type="radio" />
				<span className="radio-fake"></span>
        <span className="radio-btn__children" >{children}</span>
    </label>
	)
}
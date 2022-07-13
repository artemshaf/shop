import { CheckboxProps } from './Checkbox.props'
import './Checkbox.scss';

export const Checkbox = ({children}: CheckboxProps):JSX.Element => {
	return (
		<label className="checkbox-btn__container">
        <input className="checkbox-btn" type="checkbox"/>
				<span className="checkbox-fake"></span>
        <span className="checkbox-btn__children" >{children}</span>
    </label>
	)
}
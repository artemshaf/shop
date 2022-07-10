import { CheckboxProps } from './Checkbox.props'
import './Checkbox.scss';
import CheckedIcon from './Checkbox-checked.svg';

export const Checkbox = (props: CheckboxProps):JSX.Element => {
	return (
		<div className='checbox-container'>
			<input type={'checkbox'}/>
		</div>
	)
}
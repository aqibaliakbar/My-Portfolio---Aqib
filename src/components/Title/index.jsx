import './index.css'

const Title = ({title, span}) => {
	return (
		<div className="title">
			<h2 className='global-title'>{title} <span className='global-span'>{span}</span></h2>
		</div>
	)
}

export default Title
import ImageSection from '../../components/ImageSection'
import ReviewsSection from '../../components/ReviewsSection'
import ServicesSection from '../../components/ServicesSection'
import Title from '../../components/Title'
import './index.css'
const AboutPage = ({theme}) => {
	return (
		<div className="main-layout ">
			<Title title={"About Me"} span={"About Me"} />
			<ImageSection theme={theme} />
			<ServicesSection />
			{/* <ReviewsSection/> */}
		</div>
	)
}

export default AboutPage
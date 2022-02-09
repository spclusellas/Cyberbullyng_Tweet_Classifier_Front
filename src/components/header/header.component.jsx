import React from 'react'
import { Paper, Typography, Grid } from '@mui/material'
const Header = () => {
	return (
		<React.Fragment>
			<div>
				<h1>Cyberbullyng Tweet Classification</h1>
			</div>
			<div>
				<Grid container justifyContent='center' sx={{ mb: 2 }}>
					<Grid item xs={10}>
						<Paper elevation={3} sx={{ p: 1 }}>
							<Typography variant='subtitle2' gutterBottom align='justify'>
								<p>
									As social media usage becomes increasingly prevalent in every age group, a vast majority of citizens
									rely on this essential medium for day-to-day communication. Social media’s ubiquity means that
									cyberbullying can effectively impact anyone at any time or anywhere, and the relative anonymity of the
									internet makes such personal attacks more difficult to stop than traditional bullying.
								</p>
								<p>
									On April 15th, 2020, UNICEF issued a warning in response to the increased risk of cyberbullying during
									the COVID-19 pandemic due to widespread school closures, increased screen time, and decreased
									face-to-face social interaction. The statistics of cyberbullying are outright alarming: 36.5% of
									middle and high school students have felt cyberbullied and 87% have observed cyberbullying, with
									effects ranging from decreased academic performance to depression to suicidal thoughts.
								</p>
								<p>
									In light of all of this, this dataset contains more than 47000 tweets labelled according to the class
									of cyberbullying:
								</p>
								<ul>
									<li>Age</li>
									<li>Ethnicity</li>
									<li>Religion</li>
									<li>Not cyberbullying</li>
								</ul>
								<p>The data has been balanced in order to contain ~8000 of each class.</p>
								<i>
									<a
										href='https://www.kaggle.com/andrewmvd/cyberbullying-classification'
										target='_blank'
										rel='noreferrer noopener'>
										Source
									</a>
								</i>
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	)
}

export default Header

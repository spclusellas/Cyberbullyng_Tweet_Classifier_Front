import React from 'react'
import { Grid, Paper, Box, Typography } from '@mui/material'

const TweetAnalysisResult = ({ resultData }) => {
	return (
		<Grid container justifyContent='center' sx={{ mt: 2 }}>
			<Grid item xs={10}>
				<Paper elevation={3} sx={{ p: 2 }}>
					<Box>
						<i> Prediction </i>
					</Box>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h6'>{resultData.toUpperCase()}</Typography>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default TweetAnalysisResult

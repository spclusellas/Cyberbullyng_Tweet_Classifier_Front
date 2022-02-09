import React from 'react'
import { Grid, Paper, Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const TweetAnalysisResult = ({ resultData }) => {
	const isCyberbullyng = resultData === 'not cyberbullying' ? false : true

	return (
		<Grid container justifyContent='center' sx={{ m: 2 }}>
			<Grid item xs={10}>
				<Paper elevation={3} sx={{ p: 2, bgcolor: isCyberbullyng ? 'error.main' : 'success.main' }}>
					<Box>
						<Typography sx={{ color: grey[50] }}>{isCyberbullyng ? 'Cyberbullyng' : ''}</Typography>
						<Typography sx={{ color: grey[50] }} variant='h6'>
							{resultData.toUpperCase()}
						</Typography>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default TweetAnalysisResult

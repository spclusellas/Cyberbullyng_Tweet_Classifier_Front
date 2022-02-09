import React, { useState } from 'react'

import { useFormik } from 'formik'
import axios from 'axios'

import TweetAnalysisResult from '../TweetAnalysisResult/TweetAnalysisResult.component'

import { TextField, Button, Grid, LinearProgress, IconButton } from '@mui/material'
import PsychologyIcon from '@mui/icons-material/Psychology'
import TwitterIcon from '@mui/icons-material/Twitter'
import DeleteIcon from '@mui/icons-material/Delete'

const TweetForm = () => {
	const [randomTweet, setRandomTweet] = useState('')
	const [tweetAnalysisResult, seTweetAnalysisResult] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const formik = useFormik({
		initialValues: {
			tweet: randomTweet,
		},
		onSubmit: async ({ tweet }) => {
			setIsLoading(true)
			const { data } = await axios({
				url: 'http://127.0.0.1:5000/cyberbullying',
				method: 'POST',
				data: {
					tweet,
				},
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					Accept: 'application/json',
				},
			})
			console.log(data)
			seTweetAnalysisResult(data.label)
			setIsLoading(false)
		},
		enableReinitialize: true,
	})

	const getRandomTweet = async () => {
		const { data } = await axios({
			url: 'http://127.0.0.1:5000/get-tweet',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				Accept: 'application/json',
			},
		})
		console.log(data)
		setRandomTweet(data.tweet)
	}

	const resetForm = () => {
		setRandomTweet('')
		seTweetAnalysisResult(null)
		formik.resetForm({ tweet: '' })
	}

	return (
		<React.Fragment>
			<form onSubmit={formik.handleSubmit}>
				<Grid container justifyContent='center'>
					<Grid item xs={10}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								{isLoading ? (
									<LinearProgress />
								) : (
									<Grid container>
										<Grid item xs={11}>
											<TextField
												onChange={formik.handleChange}
												fullWidth
												label='Write a tweet'
												name='tweet'
												type='text'
												value={formik.values.tweet}
											/>
										</Grid>
										<Grid item xs={1}>
											<IconButton aria-label='delete' size='large' color='error' onClick={resetForm} type='button'>
												<DeleteIcon fontSize='inherit' />
											</IconButton>
											{/* <Button color='error' type='button' variant='outlined' onClick={resetForm}>
												Clear
											</Button> */}
										</Grid>
									</Grid>
								)}
							</Grid>
							<Grid item xs={12}>
								<Grid container direction='row' justifyContent='center' alignItems='space-around'>
									<Grid item xs={3}>
										<Button size='large' color='success' variant='contained' type='submit' endIcon={<PsychologyIcon />}>
											Analyse
										</Button>
									</Grid>
									<Grid item xs={4}>
										<Button
											size='large'
											color='info'
											variant='contained'
											type='button'
											onClick={getRandomTweet}
											endIcon={<TwitterIcon />}>
											Get Random Tweet
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>
			{tweetAnalysisResult ? <TweetAnalysisResult resultData={tweetAnalysisResult} /> : ''}
		</React.Fragment>
	)
}

export default TweetForm

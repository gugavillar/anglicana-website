export type GetLiveVideoResponse = {
	kind: string
	etag: string
	regionCode: string
	pageInfo: { totalResults: number; resultsPerPage: number }
	items: Array<{
		id: {
			kind: string
			videoId: string
		}
	}>
}

export const getLiveVideo = async (): Promise<GetLiveVideoResponse> => {
	const res = await fetch(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&type=video&eventType=live&key=${process.env.YOUTUBE_API_KEY}`
	)
	const data = await res.json()
	return data
}

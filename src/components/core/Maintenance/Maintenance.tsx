import type { GetLiveVideoResponse } from '@/services/videos'

import { Live } from './components/Live'
import { Schedules } from './components/Schedules'

type MaintenanceProps = {
	video: GetLiveVideoResponse['items']
}

export const Maintenance = ({ video }: MaintenanceProps) => {
	const liveUrl = video?.[0] ? `https://www.youtube.com/watch?v=${video[0].id.videoId}` : undefined
	return (
		<>
			<Live liveUrl={liveUrl} />
			<Schedules />
		</>
	)
}

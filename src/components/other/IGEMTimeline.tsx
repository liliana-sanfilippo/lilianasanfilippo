import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import "../../componentStyling/Muitimeline.css"
import { Muitimelineprops } from "../../types/muitimelinetype";

export default function IGEMTimeline({items}: Muitimelineprops) {
    return (
        <Timeline sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
            },
        }}>
            {
                items.map((item, index)  => (<>
                        <TimelineSeparator>
                            { index != 0 && index != items.length-1 &&  <TimelineConnector />}
                        </TimelineSeparator>
                    <TimelineItem>
                            <TimelineOppositeContent>
                                {item.timelineOppositeContent ? item.timelineOppositeContent : ""}
                            </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color={item.dotColor ? item.dotColor :  "grey"} >
                                {
                                    item.timelineDot && item.timelineDot
                                }
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography  component="span" className={"h-min"}>
                               <b> {item.itemTitle}</b>
                            </Typography>
                            {
                                item.itemText &&
                                <Typography>{item.itemText}</Typography>
                            }
                        </TimelineContent>
                    </TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector style={{height: `${item.spaceafter}px`}} />
                        </TimelineSeparator>
                    </>
                    )
                )
            }
        </Timeline>
    );
}

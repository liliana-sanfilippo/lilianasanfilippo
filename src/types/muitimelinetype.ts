export interface Muitimelinetype {
    timelineOppositeContent?: React.ReactNode | string,
    timelineDot?: React.ReactNode | string,
    itemTitle: React.ReactNode | string,
    itemText?: React.ReactNode | string,
    dotColor?: "inherit" | "primary" | "grey" | "secondary" | "error" | "info" | "success" | "warning",
    spaceafter?: string
}

export interface Muitimelineprops {
    items: Muitimelinetype[]
}

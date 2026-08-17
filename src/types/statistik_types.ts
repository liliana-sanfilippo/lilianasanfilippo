export interface StatistikAufgabe {
    nummer: string,
    title: string
    text: string,
    loesung?: string | React.ReactNode
    warnung?: string
}
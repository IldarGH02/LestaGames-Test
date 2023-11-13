interface Icons {
    large: string;
    medium: string;
}

interface VehType {
    name: string,
    title: string,
    icons: any
}

interface INation {
    name: string
    title: string
    color: string
    icons: {
        small: string
        medium: string
        large: string
    }
}

export interface IShip {
    title: string
    description: string
    icons: Icons
    level: number
    type: VehType
    nation: INation
}
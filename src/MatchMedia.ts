import {useEffect, useState} from "react";

const maxWidth = (width: number) => `(max-width: ${width - .02}px)`

const minWidth = (width: number) => `(min-width: ${width}px)`

export enum Breakpoints {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl
}

// const breakpoints = [576, 768, 992, 1200]

const mediaSizes = {
    xs: maxWidth(576),
    sm: `${minWidth(576)} and ${maxWidth(768)}`,
    md: `${minWidth(768)} and ${maxWidth(992)}`,
    lg: `${minWidth(992)} and ${maxWidth(1200)}`,
    xl: `${minWidth(1200)} and ${maxWidth(1920)}`,
    xxl: `${minWidth(1920)}`
}

export const useMatchMedia = () => {

    const [mediaSize, setMediaSize] = useState<string>()

    const gt = (breakpoint: string) => {
        return mediaSize ? (Breakpoints as any)[mediaSize] > (Breakpoints as any)[breakpoint] : true
    }

    const eq = (breakpoint: string) => {
        return mediaSize ? (Breakpoints as any)[mediaSize] === (Breakpoints as any)[breakpoint] : true
    }

    const lt = (breakpoint: string) => {
        return mediaSize ? (Breakpoints as any)[mediaSize] < (Breakpoints as any)[breakpoint] : true
    }

    useEffect(() => {
        Object
        .entries(mediaSizes)
        .map(([key, value]) => ({key, mediaQueryList: window.matchMedia(value)}))
        .forEach(({key, mediaQueryList}) => {
            mediaQueryList.addEventListener("change", it => {
                if (it.matches) {
                    setMediaSize(key)
                }
            })
            if (mediaQueryList.matches) {
                setMediaSize(key)
            }
        })
    }, [])

    return {
        mediaSize,
        gt,
        eq,
        lt
    }
}

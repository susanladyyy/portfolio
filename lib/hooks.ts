import { useActiveMenuContext } from "@/context/active-menu"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { MenuName } from "./types"

export function useMenuInView(menuName: MenuName) {
    const {ref, inView} = useInView()
    const { setActiveMenu, lastClick } = useActiveMenuContext()

    useEffect(() => {
        if (inView && Date.now() - lastClick > 1000) setActiveMenu(menuName)
    }, [inView, setActiveMenu, lastClick, menuName])

    return {
        ref,
    }
}
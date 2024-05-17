"use client"
import React, { ReactNode, createContext, useContext, useState } from 'react'
import type { MenuName } from '@/lib/types'

type ActiveMenuContextProviderProps = {
    children: ReactNode
}
type ActiveMenuContextType = {
    activeMenu: MenuName,
    setActiveMenu: React.Dispatch<React.SetStateAction<MenuName>>,
    lastClick: number,
    setLastClick: React.Dispatch<React.SetStateAction<number>>,
}

export const ActiveMenuContext = createContext<ActiveMenuContextType | null>(null)

export default function ActiveMenuContextProvider( {
    children,
}: ActiveMenuContextProviderProps ) {
    const[activeMenu, setActiveMenu] = useState<MenuName>('Projects');
    const [lastClick, setLastClick] = useState(0)

    return (
        <ActiveMenuContext.Provider value={{
            activeMenu,
            setActiveMenu,
            lastClick,
            setLastClick
        }}>{children}</ActiveMenuContext.Provider>
    )
}

export function useActiveMenuContext() {
    const context = useContext(ActiveMenuContext)

    if(context === null) {
        throw new Error ("useActiveMenuContext must be used within an ActiveMenuContextProvider")
    }

    return context
}
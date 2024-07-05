'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

function ModeToggle() {
	const [mount, setMount] = useState(false)

	useEffect(() => setMount(true),[])

	const { setTheme, resolvedTheme } = useTheme()
	return mount && resolvedTheme === 'dark' ? (
		<Button size={"icon"} variant={"ghost"} onClick={()=>setTheme("light")}>
			<Sun />
		</Button>
	) : (
		<Button size={"icon"} variant={"ghost"} onClick={()=>setTheme("dark")}>
			<Moon />
		</Button>
	)
}

export default ModeToggle
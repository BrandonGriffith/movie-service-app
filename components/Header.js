import {
HomeIcon,
BadgeCheckIcon, CollectionIcon,
LightningBoltIcon, SearchIcon,
UserIcon
} from "@heroicons/react/outline"
import Image from "next/image"
import HeaderItem from "./HeaderItem"

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-4 ml-8 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="TOP" Icon={BadgeCheckIcon}/>
                <HeaderItem title="GENRE" Icon={CollectionIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="PROFILE" Icon={UserIcon}/>
            </div>
            <h1 className="max-w-6xl text-4xl text-green-400">Movie Service App Project</h1>
        <Image
        className="object-contain"
        src="/logo512.png"
        width={150} 
        height={150}
        />
        </header>
    )
}

export default Header

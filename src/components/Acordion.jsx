import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react"

import {
    IoChevronDownCircleOutline,
    IoChevronUpCircleOutline,
} from 'react-icons/io5'

const items = [
    {
        title: "¿Quiénes Somos?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus ipsam beatae assumenda, molestiae fugiat porro error ex voluptate eaque."
    },
    {
        title: "¿Dónde Estamos Ubicados?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus ipsam beatae assumenda, molestiae fugiat porro error ex voluptate eaque."
    },
    {
        title: "¿Hacemos entregas y envíos nacionales?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus ipsam beatae assumenda, molestiae fugiat porro error ex voluptate eaque."
    },
    
]

export default function Acordion() {

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <Disclosure key={index}>
                    {({ open }) => (
                        <>
                            <DisclosureButton className={`w-full text-left bg-white rounded-sm p-4 flex items-center justify-between ${open ? 'border-l-2 border-orange1' : 'border mb-4'}`}>
                                <span className="font-bold text-gray-600 text-lg">{item.title}</span>
                                {open ? <IoChevronUpCircleOutline className="w-5 h-5 text-orange1" /> : <IoChevronDownCircleOutline className="w-5 h-5 text-gray-500" />}
                            </DisclosureButton>
                            <DisclosurePanel className='bg-white p-4 border-l-2 border-orange1 rounded-sm mb-2'>
                                <p className="text-gray-500">{item.content}</p>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    )
}

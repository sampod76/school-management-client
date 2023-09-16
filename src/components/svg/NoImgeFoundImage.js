import React from 'react'
import image from '../../assets/images/noImge.jpg'
import Image from 'next/image'

export default function NoImgeFoundImage({ data }) {
    return (
        <Image
            src={image}
            width={100}
            height={100}
            className={`${data?.class}`}
            alt="Picture of the author"
        />
    )
}

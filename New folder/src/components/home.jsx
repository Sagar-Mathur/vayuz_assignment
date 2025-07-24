import React from 'react'
import { FlutterHistory } from './section/flutterHistory'
import { Banner } from './section/banner'
import { Services } from './section/services'

export const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <FlutterHistory />
            <Services />
        </div>
    )
}

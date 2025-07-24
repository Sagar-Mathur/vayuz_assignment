import { Button } from '@mui/material'
import React from 'react'

export const Banner = () => {
    return (
        <div className='banner'>
            <div className='left-banner-side'>
                <div>
                    <h6 className='' style={{ fontSize: "40px", lineHeight: "110%", style: "medium", fontWeight: "500", fontFamily: "auto"   }}>Unlock the Potential of Flutter</h6>
                    <p>Your Premier Partner for Cross-Platform App Excellence!</p>
                </div>
                <div>
                    <Button style={{ width: "220px" }} className='button'>Upgrade Your Tech</Button>
                </div>
            </div>
            <div className='right-banner-side'>
                <div className='img-bg' >
                    <img style={{ position: "relative" }} src='bgimge.png' />
                    <div className='img-container'>
                        <img style={{ width: "298px", objectFit: "contain" }} src='codeImg2.png' />
                        <div style={{ width: "390px", display: "flex", alignItems: "end" }}>
                            <img style={{ width: "298px", objectFit: "contain" }} src='codeImg1.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

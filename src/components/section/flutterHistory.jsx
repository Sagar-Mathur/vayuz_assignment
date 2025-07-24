import { CallMade } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

export const FlutterHistory = () => {
    return (
        <div className='flutter'>
            <div style={{ width: "25%", minWidth: "200px" }} className='part'>
                <div>
                    <h6 style={{ fontSize: "40px", fontWeight: "500" }} className='p-0 m-0'>Flutter's Drawn</h6>
                    <p className='p-0 m-0'>History of flutter</p>
                </div>
            </div>
            <div style={{ width: "50%", minWidth: "230px" }} className='part text'>
                <p className='long_text'>
                    Uncover the fascinating story of Flutter in 'Flutter's Dawn: History
                    of Flutter.' From humble origins to global acclaim, delve into its captivating
                    narrative.join us on this captivating journey! Uncover
                    the fascinating story of Flutter in 'Flutter's Dawn: History of Flutter.'
                    From humble origins to global acclaim, delve into its captivating narrative.
                    Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind,
                    join us on this captivating journey! <span style={{ color: "skyblue" }}>Click to begin!</span>
                </p>
            </div>
            <div style={{ width: "25%", minWidth: "150px", display: "flex", alignItems: "end" }} className='part d-flex justify-content-end'>
                <Button style={{ width: "150px" }} className='button' >begin <CallMade /> </Button>
            </div>
        </div>
    )
}

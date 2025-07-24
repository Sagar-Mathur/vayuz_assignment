import { Remove, Add } from '@mui/icons-material';
import React, { useState } from 'react'

export const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const services = [
        {
            labels: "Flutter App Development",
            des: "this is flutter app development.now you are arrested",
        },
        {
            labels: "UI/UX Design",
            des: "this is flutter app development.now you are arrested",
        },
        {
            labels: "Customization & integration",
            des: "this is flutter app development.now you are arrested",
        },
        {
            labels: "Testing & Quality Assurance",
            des: "this is flutter app development.now you are arrested",
        },
        {
            labels: "Maintenance & Support",
            des: "this is flutter app development.now you are arrested",
        },
        {
            labels: "Consulting & Training",
            des: "this is flutter app development.now you are arrested",
        },
        {
            labels: "Migration & Upgrades",
            des: "this is flutter app development.now you are arrested",
        },
    ]
    return (
        <div className='service'>
            <div className='service_heading'>
                <h6 style={{ fontSize: "40px", fontWeight: "400", fontFamily: "Playfair Display", margin: "0px", textAlign: "center" }}>Our Dynamic Services Suite!</h6>
                <p style={{ fontSize: "22px", fontWeight: "500", fontFamily: "Quicksand" }}>Embrace Innovation: Let's Create Together!</p>
                <p style={{ width: "70%", minWidth: '300px', textAlign: "center", fontSize: "14px", fontWeight: "400", color: "grey" }}   >Step into innovation! Explore our range of services and let's create something extraordinary together. Your vision, our expertise. Let's begin!</p>
            </div>
            <div style={{ display: "flex", width: "100%", height: "auto", alignItems: "center" }}>
                <div className='service_left' style={{ width: "65%", height: "100%", display: "flex", alignItems: "start", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                    {services.map((item, index) => (
                        <div key={index} style={{ width: "100%", padding: "0px 10px 0px 20px" }} className="accordion-item">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }} className="accordion-header" onClick={() => toggle(index)}>
                                <h6 style={{ fontWeight: "500", fontSize: "26px", letterSpacing: "4%", fontFamily: "Playfair Display" }} >{item.labels}</h6>
                                <span>{activeIndex === index ? <Remove /> : <Add />}</span>
                            </div>
                            {activeIndex === index && (
                                <div style={{ transition: "ease-in-out", width: "90%" }} className="accordion-content">
                                    <p style={{ color: "grey", fontSize: "14px", fontWeight: "400" }}>Unlock endless possibilities with Flutter App Development.
                                        Build beautiful, high-performance applications for any platform -
                                        faster and easier than ever before. Ready to revolutionize your
                                        app experience? <span style={{ color: "skyblue" }}>Let's get started today!</span></p>
                                </div>
                            )}
                        </div>
                    ))
                    }
                </div>
                <div className='service_right' style={{ height: "100%" }}>
                    <img className='serviceImg' src='imgservice.png' />
                </div>
            </div>
        </div>
    )
}

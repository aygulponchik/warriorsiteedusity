import React, { useRef } from 'react'
import './Tmonials.css'
import n_icon from '../../assets/next-icon.png'
import b_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Tmonials = () => {
    const slider = useRef()
    let tx = 0;


    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


    return (
        <div className='testimonials' >


            <img src={b_icon} alt="" className='back-btn' onClick={slideBackward} />
            <img src={n_icon} alt="" className='next-btn' onClick={slideForward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jakson1</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusitywas one of the best decisions I've ever made.
                                The supportive community state-of-the-art facilites, and commiment to academic
                                exelence have truly exceeded my expectations
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jakson2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusitywas one of the best decisions I've ever made.
                                The supportive community state-of-the-art facilites, and commiment to academic
                                exelence have truly exceeded my expectations
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>William Jakson3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusitywas one of the best decisions I've ever made.
                                The supportive community state-of-the-art facilites, and commiment to academic
                                exelence have truly exceeded my expectations
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William Jakson4</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusitywas one of the best decisions I've ever made.
                                The supportive community state-of-the-art facilites, and commiment to academic
                                exelence have truly exceeded my expectations
                            </p>
                        </div>
                    </li>
                </ul>
            </div>



        </div>
    )
}

export default Tmonials

/**
 * Created by Алексей on 26.05.2017.
 */

import {mainColors, transitionTime} from 'Common/style/variables'
import defaultImg from 'imgs/instagram-like.png'
import playBtnImg from '../imgs/playBtnImg.png'

export const right = {
    maxWidth: 745
};

export const video = {
    position: "relative",
    minHeight: 364,
    transition: `all ${transitionTime}`,
    background: `url(${defaultImg}) center no-repeat`,
    backgroundSize: "100%",
};

export const playBtn = {
    minHeight: 62,
    minWidth: 62,
    position: "absolute",
    background: `url(${playBtnImg})`,
    left: "50%",
    top: "50%",
    transform: 'translate(-50%, -50%)'
};
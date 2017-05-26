/**
 * Created by Алексей on 26.05.2017.
 */

import {mainColors, transitionTime} from 'Common/style/variables'
import forumImg from '../imgs/forumBackground.png'

export const promo = {
        display: "flex",
        flexDirection: "row",
        maxHeight: 208,
        backgroundColor: "white",
        marginBottom: 16,
        padding: 48,
        paddingTop: 54,
        paddingLeft: 63,
        img:{
            maxHeight: 106,
            maxWidth: 127,
            margin: 0,
            marginRight: 32
        },
        content:{
            form: {
                marginBottom:  29,
                padding: 5,
                display: "flex"
            },
            number: {
                padding: 12,
                paddingLeft: 15,
                paddingRight: 15,
                marginRight: 26,
                maxHeight: 37,
                minWidth: 247,
                fontSize: "13px",
                boxSizing: "border-box",
                border: `1px solid ${mainColors.sectionBorder}`,
            backgroundColor: mainColors.background,
        },
        button: {
            border: "none",
            color: "white",
            backgroundColor: mainColors.blue,
            padding: 12,
            paddingRight: 71,
            paddingLeft: 73
        }
    },
    notice: {
        color: "#93a6ba",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        img: {
            marginRight: 11
        }
    }
};

export const forum = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    padding: 36,
    paddingTop: 29,
    paddingRight: 48,
    marginBottom: 14,
    background: `url(${forumImg}) center no-repeat`,
    color: "white",
    backgroundSize: "100%",
    transition: `background-size ${transitionTime}s`,
    content: {
        zIndex: 1,
        maxWidth: 325,
        maxHeight: 68,
        header:{
            fontSize: "2.57rem",
            textTransform: "uppercase",
            marginBottom: 5
        },
    },
    button: {
        zIndex: 1,
        paddingTop: 9,
        paddingRight: 52,
        paddingBottom: 16,
        paddingLeft: 59,
        color: "white",
        fontSize: "1rem",
        border: "1px solid white"
    },
    shadow: {
        zIndex: 0,
        content: ' ',
        position: "absolute",
        display: "block",
        height: "100%",
        width: "100%",
        background: "rgba(10,10,20, 0.6)",
        transition: `background ${transitionTime}s`,
        left: 0,
        top: 0,
    },
};
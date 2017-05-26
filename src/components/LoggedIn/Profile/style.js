/**
 * Created by Алексей on 26.05.2017.
 */

import {mainColors} from 'Common/style/variables'
export const profileStyle = {
    main: {
        display: "flex",
        flexDirection: "row"
    },
    left: {
        maxWidth: 780,
        margin: 0,
        marginRight: 15,

        promo:{
            display: "flex",
            flexDirection: "row",
            maxHeight: 208,
            backgroundColor: "white",
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
        }
    },
    right: {

    }
};
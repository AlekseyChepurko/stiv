/**
 * Created by Алексей on 26.05.2017.
 */

export const headerStyle = {
    main: {
        minHeight: 75,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    progress: {
        wrap: {
            margin: 0,
            marginLeft: 40,
            minWidth: 340
        },
        main: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            tariff: {
                textTransform: "uppercase",
                fontWeight: 800
            }
        }
    },
    progressBar: {
        position: "relative",
        width: "100%",
        minHeight: 5,
        borderRadius: 10,
        backgroundColor: "#ecf1f4"
    },
    fill: {
        position: "absolute",
        width: "10%",
        height: "100%",
        borderRadius: 10,
        backgroundColor: "#00a2fb",
    },
    exit:{
        margin: 0,
        marginRight: 40
    }
};
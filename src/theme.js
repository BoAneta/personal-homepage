const colorName = {
        white: "#FFFFFF",
        whitelilac: "#FBFBFE",
        anakiwa: "#8CC2FF",
        parsley: "rgba(20, 70, 32, 0.2)",
        porcelain: "#F2F3F4",
        irontransparent: "rgba(209, 213, 218, 0.3)",
        mercury: "#E5E5E5",
        slategray: "#6E7E91",
        dodgerblue: "#2188FF",
        tropicalBlue: "#CDE0F7",
        sciencebluelight:"rgba(3, 102, 214, 0.2)",
        scienceblue: "#0366D6",
        violet: "#090A33",
        black: "#252525",
}

export const lightMode = {
    color: {
        primary: colorName.scienceblue,
        textPrimary: colorName.black,
        site: {
            background: colorName.whitelilac,
            text: colorName.slategray,
        },
        buttonLink: {
            text: colorName.white,
            border: colorName.irontransparent,
            shadow: colorName.anakiwa,
            active: colorName.parsley,
        },
        boxBackground: colorName.white,
        headerLine: colorName.mercury,
        tile: {
            border: colorName.porcelain,
            borderHover: colorName.tropicalBlue,
        },
        link: {
            text: colorName.scienceblue,
            underline: colorName.sciencebluelight,
            hover: colorName.dodgerblue,
        },
    },

    breakpoint: {
        mobileMax: 767,
        desktopMax: 1024,
    }
};
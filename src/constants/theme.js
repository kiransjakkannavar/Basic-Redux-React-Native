import React, { Component } from 'react'
import { Dimensions, PixelRatio } from 'react-native'

const { height, width } = Dimensions.get('window')


const calcHeight = x => PixelRatio.roundToNearestPixel((height * x) / 100)
const calcWidth = x => PixelRatio.roundToNearestPixel((width * x) / 100)

const sizes = {
    // global sizes
    base: 16,
    font: 14,
    radius: 6,
    padding: 25,

    // font sizes
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12,

    //dimensions
    height,
    width,
    calcHeight,
    calcWidth
};

const fonts = {
    h1: {
        fontSize: sizes.h1
    },
    h2: {
        fontSize: sizes.h2
    },
    h3: {
        fontSize: sizes.h3
    },
    header: {
        fontSize: sizes.header
    },
    title: {
        fontSize: sizes.title
    },
    body: {
        fontSize: sizes.body
    },
    caption: {
        fontSize: sizes.caption
    },
};

export { sizes, fonts };
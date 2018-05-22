import React from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';

import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

export default class Position extends React.Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            fadeOutOpacity: new Animated.Value(0),
        };
        this.startAnimation = this.startAnimation.bind(this);
    }

    startAnimation() {
        this.state.fadeOutOpacity.setValue(0);
        Animated.timing(this.state.fadeOutOpacity, {
            toValue: 1,
            duration: 700,
            easing: Easing.linear,// 线性的渐变函数
        }).start(() => this.startAnimation());
    }
    componentDidMount() {
        this.startAnimation();
    }

    render() {
        return (
            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Animated.View style={{ position: 'absolute', left: 250, top: 250, opacity: this.state.fadeOutOpacity, }}>
                <Svg height="500" width="500">
                    <Circle
                        cx="6"
                        cy="6"
                        r="5"
                        stroke="green"
                        strokeWidth="1"
                        fill="green"
                    >
                    </Circle>
                </Svg>
            </Animated.View >
            // </View>
        );
    }
}

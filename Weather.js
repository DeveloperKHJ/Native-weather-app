import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', "#005BEA", 'purple'],
        title: "Some people feel the rain",
        subtitle: "Others just get wet",
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#FEF253', "#FF7300"],
        title: "Sunny",
        subtitle: "Think like a man of action and act like man of thought",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ['#D7D2CC', "#304352"],
        title: "Cloudy",
        subtitle: "Great art is an instant arrested in eternity",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', "#B9B6E5"],
        title: "It's cold",
        subtitle: "Do you want to build a snowman? Hmm.. no.",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#89F7FE', "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈",
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#D7D2CC', "#304352", "purple"],
        title: "Haze",
        subtitle: "Don't know what that is 🤩",
        icon: 'weather-fog'
    }
};

function Weather({ weatherName, temp, cityName, countryName }){
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}℃</Text>
                <Text style={styles.subtitle}>
                    {cityName}, {countryName}
                </Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>
                {weatherCases[weatherName].title}
                </Text>
                <Text style={styles.subtitle}>
                {weatherCases[weatherName].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    weatherName: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    cityName: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: '200',
        marginTop: 10
    },
    lower: {
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 20
    },
    title: {
        fontSize: 35,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '200'
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 54,
        fontWeight: '200'
    }
});
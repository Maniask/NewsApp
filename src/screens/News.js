import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import NewsCard from '../components/NewsCard'
import newAPI from '../apis/News'

const News = ({ navigation }) => {

    // const [news, setNews] = useState([])
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    // const newsResponse = async() =>{
    //     const response = await newAPI.get('top-headlines?sources=bbc-news&apiKey=d569fa53cff74b91be47dc0718adb325')
    //     console.log(response.data)
    // }

    function getNewsFromAPI() {
        newAPI.get('top-headlines?sources=bbc-news&apiKey=d569fa53cff74b91be47dc0718adb325')
            .then(async function (response) {
                setNews(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    if (!news) {
        return null
    }



    return (
        <View>
            <FlatList data={news.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <NewsCard item = {item}/>
                }}
            />
        </View>
    )
}

export default News


import React, { useState } from 'react'
import { View, Text,Image, Pressable,FlatList} from 'react-native'
import styles from './styles';
import movies from '../../assets/data/movies';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo,AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem';
import {Picker} from '@react-native-picker/picker';
import VideoPlayer from '../../components/VideoPlayer';

const firstSeason = movies.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];


const MovieDetailsScreen = () => {

    const [currentSeason, setCurrentSeason] = useState(firstSeason);
    const [currenEpisode, setCurrentEpisode] = useState(firstEpisode);
    const seasonNames = movies.seasons.items.map(season => season.name);

    return (
        <View>
            <VideoPlayer episode={currenEpisode} />
            <FlatList 
                data={currentSeason.episodes.items}
                renderItem={({item}) => <EpisodeItem episode={item} onPress={setCurrentEpisode} />}
                style={{marginBottom:250}}
                ListHeaderComponent={(
                        <View style={{ padding: 12 }}>
                            <Text style={styles.title}>{movies.title}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.match}>98% match</Text>
                                <Text style={styles.year}>{movies.year}</Text>
                                <View style={styles.ageContainer}>
                                    <Text style={styles.age}>12+</Text>
                                </View>
                                <Text style={styles.year}>{movies.numberOfSeasons} Seasons</Text>
                                <MaterialIcons name="hd" size={24} color="white" />
                            </View>
    
                            {/* Play Button */}
                            <Pressable onPress={() => { console.warn('Plage')}} style={styles.playButton}>
                                <Text style={styles.playButtonText}>
                                    <Entypo name="controller-play" size={16} color="black" />
                                    Play
                                </Text>
                            </Pressable>
    
                            {/* Download Button */}
                            <Pressable onPress={() => { console.warn('Download')}} style={styles.downloadButton}>
                                <Text style={styles.downloadButtonText}>
                                    <AntDesign name="download" size={16} color="white" />
                                    {' '}
                                    Download
                                </Text>
                            </Pressable>
    
                            <Text style={{color:'white', marginVertical:10 }}>{movies.plot}</Text>
                            <Text style={styles.year}>Cast: {movies.cast}</Text>
                            <Text style={styles.year}>Creator: {movies.creator}</Text>
                        
                            {/* Row with icon buttons */}
                            <View style={{flexDirection: 'row', marginTop: 20,}}>
                                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                                    <AntDesign name="plus" size={24} color={'white'} />
                                    <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
                                </View>
    
                                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                                    <Feather name="thumbs-up" size={24} color="white" />
                                    <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                                </View>
    
                                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                                    <FontAwesome name="send-o" size={24} color="white" />
                                    <Text style={{color: 'darkgrey', marginTop: 5 }}>Share</Text>
                                </View>
                            </View>
                            <Picker
                                    selectedValue={currentSeason.name}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setCurrentSeason(movies.seasons.items[itemIndex]);
                                        // console.log(itemIndex); 0,1,2....
                                    }}
                                    style={{color:'white', width:130}}
                                    dropdownIconColor='white'
                                    >
                                        {seasonNames.map(seasonName =>(
                                                <Picker.Item label={seasonName} value={seasonName} key={seasonName}/>
                                        ) )}
                                    </Picker>
                </View>
                )}
           />
        </View> 
)};

export default MovieDetailsScreen;
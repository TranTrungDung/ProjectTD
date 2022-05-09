import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const sliders = [
  {
    key: '1',
    title: 'Manage your tasks',
    desc: 'You can easily manage all of your daily tasks in DoMe for free',
    image: require('../../assets/image/Onboard1.png'),
  },
  {
    key: '2',
    title: 'Create daily routine',
    desc: 'In Uptodo  you can create your personalized routine to stay productive',
    image: require('../../assets/image/Onboard2.png'),
  },
  {
    key: '3',
    title: 'Orgonaize your tasks',
    desc: 'You can organize your daily tasks by adding your tasks into separate categories',
    image: require('../../assets/image/Onboard3.png'),
  },
];
const Onboard = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = React.useRef(null);
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <Image
          style={{
            height: '50%',
            width,
            resizeMode: 'contain',
            marginBottom: 100,
          }}
          source={item.image}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 32,
            lineHeight: 38,
            textAlign: 'center',
            fontFamily: 'Lato-Bold',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 0.87)',
            fontSize: 16,
            lineHeight: 24,
            textAlign: 'center',
            fontFamily: 'Lato-Regular',
            maxWidth: 300,
            marginTop: 42,
          }}>
          {item.desc}
        </Text>
      </View>
    );
  };
  const Dot = () => {
    return (
      <View
        style={{
          height: 50,
          position: 'absolute',
          top: '50%',
          transform: [{translateY: -20}],
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {sliders.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentSlideIndex == index && {
                  backgroundColor: 'white',
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };
  const Footer = () => {
    return (
      <View>
        {currentSlideIndex === sliders.length - 1 ? (
          <View
            style={{
              height: height * 0.15,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingStart: 24,
              paddingRight: 24,
            }}>
            <TouchableOpacity onPress={goBack}>
              <Text style={styles.back}>BACK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('StartScreen');
              }}>
              <Text style={styles.getStarted}>GET STARTED</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              height: height * 0.15,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingStart: 24,
              paddingRight: 24,
            }}>
            <TouchableOpacity onPress={goBack}>
              <Text style={styles.back}>BACK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goNext}>
              <Text style={styles.next}>NEXT</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goNext = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex < sliders.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const goBack = () => {
    const backSlideIndex = currentSlideIndex - 1;
    if (backSlideIndex >= 0) {
      const offset = backSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(backSlideIndex);
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#121212',
        flex: 1,
      }}>
      <TouchableOpacity>
        <Text
          style={{
            justifyContent: 'center',
            fontFamily: 'Lato-Regular',
            fontSize: 16,
            color: 'rgba(255, 255, 255, 0.44)',
            paddingStart: 24,
            paddingTop: 14,
          }}>
          SKIP
        </Text>
      </TouchableOpacity>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        data={sliders}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.key}
      />
      <Dot />
      <Footer />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  dot: {
    marginHorizontal: 4,
    width: 26,
    height: 4,
    backgroundColor: '#AFAFAF',
    borderRadius: 20,
  },
  next: {
    color: 'white',
    backgroundColor: '#8875FF',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 4,
  },
  back: {
    color: 'rgba(255, 255, 255, 0.44)',
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
  getStarted: {
    color: 'white',
    backgroundColor: '#8875FF',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 4,
  },
});
export default Onboard;

import {Alert, View, FlatList, RefreshControl, TouchableOpacity, Text} from 'react-native';
import axios from "axios";
import React from "react";
import Post from "../../components/posts/Post";
import Loading from "../../components/Loading";

const apiUrl = 'https://63302be4591935f3c88b0b99.mockapi.io/api/v1/';

export default function PostsListScreen({ navigation }) {
	const [posts, setPosts] = React.useState();
	const [isLoading, setIsLoading] = React.useState(true);

	const fetchPosts = () => {
		setIsLoading(true);
		axios
			.get(`${apiUrl}simple_posts`)
			.then(({ data })=>{
				setPosts(data);
			})
			.catch(()=>{
				Alert.alert('Fetch error',`${apiUrl}simple_posts`);
				console.error('Fetch error',`${apiUrl}simple_posts`);
			})
			.finally(()=>{
				setTimeout(()=>{
					setIsLoading(false);
				},2000);
			})
	}
	React.useEffect(fetchPosts,[]);

	// View ===========================================
	if(isLoading) {
		return <Loading/>
	} else {
		return (
			<View>
				{/* Variant 1*/}
				<FlatList
					refreshControl={ <RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/> }
					data={posts}
					renderItem={ ({ item }) => (
						<TouchableOpacity
							onPress={ () => navigation.navigate('PostsPostScreen', { item }) }>
							<Post
								title={item.title}
								createdAt={item.createdAt||'-'}
								imageUrl={item.imageUrl}
							></Post>
						</TouchableOpacity>
					)}
				/>
				{/* Variant 2*/}{
				// items ? [...items,...items,...items]?.map( (obj) => (
				// 	<Post key={obj.id} title={obj.title} createdAt={obj.createdAt||'-'} imageUrl={obj.imageUrl}></Post>
				// )) : null
				}
			</View>
		);
	}
}

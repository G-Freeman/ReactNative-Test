import styled from 'styled-components/native';
import { View } from "react-native";
import React from "react";
import navigation from "../Navigation";

const PostImage = styled.Image`
	width: 100%;
	height: 250px;
	border-radius: 10px;
	margin-bottom: 20px;
	background: rgba(0,0,0,.1);
`;

const PostText = styled.Text`
	font-size:18px;
	line-height: 24px;
`;

export default function PostsPostScreen({ route }) {
	const { item:post } = route.params;

	React.useEffect(()=>{
		// navigation.setOptions({
		// 	title:post.title,
		// });
	});

	return (
		<View style={{ padding: 20 }}>
			<PostImage source={{ uri: post.imageUrl }}></PostImage>
			<PostText>{post.text||'no text'}</PostText>
		</View>
	)
}
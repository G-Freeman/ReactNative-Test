import styled from 'styled-components/native';
import { ActivityIndicator, Text, View } from "react-native";

const LoadingWrapper = styled.View`
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default function Loading() {
	return <LoadingWrapper>
		<ActivityIndicator size='large'/>
		<Text style={{ marginTop:15 }}>    Loading ...</Text>
	</LoadingWrapper>
}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PostsListScreen from "./posts/List";
import PostsPostScreen from "./posts/Post";

const Stack = createNativeStackNavigator();

export default function() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="PostsListScreen" component={PostsListScreen} options={{title:'News'}}></Stack.Screen>
				<Stack.Screen name="PostsPostScreen" component={PostsPostScreen} options={{title:'Post'}}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
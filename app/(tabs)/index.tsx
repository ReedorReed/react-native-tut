
import icedCoffeeImg from '@/assets/images/iced-coffee.png';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const app = () => {
	return (
		<View style={styles.container}>
			<ImageBackground source={icedCoffeeImg}>
				<Text style={styles.text}>Coffee Shop</Text>
			</ImageBackground>
		</View>
	);
};

export default app;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 60
	},
	text: {
		color: 'white',
		fontSize: 42,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

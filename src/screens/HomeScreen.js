import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';  // Mengimpor tombol kalkulator dari komponen Button

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',  // Menyimpan input dari pengguna
    };
  }

  componentDidMount() {
    console.log('HomeScreen dimuat!');
  }

  handlePress = (value) => {
    this.setState({ input: this.state.input + value });
  };

  handleCalculate = () => {
    try {
      this.setState({ input: eval(this.state.input).toString() });
    } catch (e) {
      this.setState({ input: 'Error' });
    }
  };

  handleClear = () => {
    this.setState({ input: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Layar untuk menampilkan input */}
        <Text style={styles.display}>{this.state.input}</Text>  {/* Pastikan ini dibungkus dengan <Text> */}

        {/* Baris tombol kalkulator */}
        <View style={styles.row}>
          <Button label="1" onPress={() => this.handlePress('1')} />
          <Button label="2" onPress={() => this.handlePress('2')} />
          <Button label="3" onPress={() => this.handlePress('3')} />
          <Button label="+" onPress={() => this.handlePress('+')} />
        </View>

        <View style={styles.row}>
          <Button label="4" onPress={() => this.handlePress('4')} />
          <Button label="5" onPress={() => this.handlePress('5')} />
          <Button label="6" onPress={() => this.handlePress('6')} />
          <Button label="-" onPress={() => this.handlePress('-')} />
        </View>

        <View style={styles.row}>
          <Button label="7" onPress={() => this.handlePress('7')} />
          <Button label="8" onPress={() => this.handlePress('8')} />
          <Button label="9" onPress={() => this.handlePress('9')} />
          <Button label="*" onPress={() => this.handlePress('*')} />
        </View>

        <View style={styles.row}>
          <Button label="0" onPress={() => this.handlePress('0')} />
          <Button label="." onPress={() => this.handlePress('.')} />
          <Button label="=" onPress={this.handleCalculate} />
          <Button label="/" onPress={() => this.handlePress('/')} />
        </View>

        {/* Tombol Clear dengan ukuran lebih besar */}
        <Button label="Clear" onPress={this.handleClear} style={styles.clearButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  display: {
    fontSize: 40,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  clearButton: {
    backgroundColor: '#ff6666',
    width: 300,  // Memperbesar lebar tombol Clear
  },
});

export default HomeScreen;

import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { Title } from './components/Title'
import { SubTitle } from './components/SubTitle'
import { Button } from './components/Button'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.titulo}>Bem-vindo a Fernando De Noronha</Text>
      <Text style={styles.subtitulo}>Descubra o paraíso das praias intocadas e águas cristalinas.</Text>

      <Title />
      <SubTitle />
      <Footer />
      <Button />
      
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#228B22',
  },

  subtitulo: {
    paddingLeft: 10,
    marginBottom: 25,
  },
})
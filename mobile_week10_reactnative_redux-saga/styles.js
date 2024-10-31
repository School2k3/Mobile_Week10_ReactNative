import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 60,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DEE1E6',
    paddingVertical: 10,
    paddingLeft: 16,
    marginBottom: 8,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 24,
  },
  content: {
    flex: 2,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  editIcon: {
    marginRight: 16,
  },
  addButton: {
    alignSelf: 'center',
    width: 69,
    marginBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#fff',
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: '100%',
    color: 'silver',
    paddingLeft: 12,
  },
  button: {
    backgroundColor: '#00CFFF',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  userContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  userImage: {
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

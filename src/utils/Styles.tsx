/* istanbul ignore file */
import type { StyleProp } from 'react-native';

const Styles = {
  sidebar: {
    box: {
      flex: 1,
    } as StyleProp<any>,
    head: {
      padding: 14,
      flex: 1,
      flexDirection: 'row',
    } as StyleProp<any>,
    title: {
      paddingLeft: 26,
      paddingTop: 4,
    } as StyleProp<any>,
    divider: {
      marginBottom: 6,
    } as StyleProp<any>,
  },
  notification: {
    card: {
      borderRadius: 3,
      borderWidth: 1,
    } as StyleProp<any>,
  },
  select: {
    div: {
      borderRadius: 3,
      borderColor: 'gray',
      borderWidth: 1,
    } as StyleProp<any>,
    input: {
      backgroundColor: 'white',
    } as StyleProp<any>,
  },
  page: {
    view: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    } as StyleProp<any>,
    content: {
      padding: 20,
      maxWidth: 800,
      width: '100%',
      alignSelf: 'center',
      minHeight: '100vh',
    } as StyleProp<any>,
  },
  list: {
    item: {
      padding: 5,
    } as StyleProp<any>,
  },
  input: {
    backgroundColor: 'white',
    paddingTop: 10,
  } as StyleProp<any>,
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    paddingTop: 10,
  } as StyleProp<any>,
  row: {
    flexDirection: 'row',
    marginTop: 4,
  } as StyleProp<any>,
  link: {
    fontWeight: 'bold',
  } as StyleProp<any>,
  provider: {
    borderRadius: 8,
    borderColor: '#efefef',
    borderWidth: 1,
    marginBottom: 10,
  } as StyleProp<any>,
  score: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    display: 'inline-flex',
  } as StyleProp<any>,
  rating: {
    padding: '0',
    margin: '-8px',
  } as StyleProp<any>,
  ratingColor: '#FFA000',
  ratingColorNotSelected: '#d4d2d2',
  ratingCommentText: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'start',
  } as StyleProp<any>,
};

export { Styles };

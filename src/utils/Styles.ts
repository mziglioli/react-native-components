/* istanbul ignore file */
const Styles = {
  sidebar: {
    box: {
      flex: 1,
    },
    head: {
      padding: 14,
      flex: 1,
      flexDirection: 'row',
    },
    title: {
      paddingLeft: 26,
      paddingTop: 4,
    },
    divider: {
      marginBottom: 6,
    },
  },
  notification: {
    card: {
      borderRadius: 3,
      borderWidth: 1,
    },
  },
  select: {
    div: {
      borderRadius: 3,
      borderColor: 'gray',
      borderWidth: 1,
    },
    input: {
      backgroundColor: 'white',
    },
  },
  page: {
    view: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    content: {
      padding: 20,
      maxWidth: 800,
      width: '100%',
      alignSelf: 'center',
      minHeight: '100vh',
    },
  },
  list: {
    item: {
      padding: 5,
    },
  },
  input: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
  provider: {
    borderRadius: 8,
    borderColor: '#efefef',
    borderWidth: 1,
    marginBottom: 10,
  },
  score: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    padding: 0,
    paddingTop: 10,
  },
  rating: {
    padding: '0',
    margin: '-8px',
  },
};

export { Styles };

class User {
  constructor(name = '', email = '', profile_picture = '', created_at = '') {
    this.name = name ?? '';
    this.email = email ?? '';
    this.profile_picture = profile_picture ?? '';
    this.created_at = created_at ?? '';
  }

  static fromData(data) {
    if (data === null) {
      return new User();
    }
    const { username, email, profile_picture, created_at } = data;
    return new User(username, email, profile_picture, created_at);
  }

  static async getUserByName(name) {
    const response = await fetch(
      `${process.env.REACT_APP_HOST_URL}/user/username/${name}`,
      {
        method: 'GET',
        // credentials: 'same-origin'
      }
    );
    const jsonResponse = await response.json();
    console.log('response = ', jsonResponse);
    return User.fromData(jsonResponse);
  }
}

export { User };
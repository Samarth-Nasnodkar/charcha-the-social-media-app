import {User} from "./User";

class Post {
  constructor(id = '', title = '', content = '', author = null) {
    this.id = id ?? '';
    this.title = title ?? '';
    this.content = content ?? '';
    this.author = User.fromData(author);
    this.attachments = [];
    this.ready = false;
  }

  static fromData(data) {
    if (!data) {
      return new Post();
    }
    const { id, title, content, author } = data;
    const post = new Post(id, title, content, author);
    post.ready = true;
    return post;
  }

  static async getPostById(id) {
    const response = await fetch(
      `${process.env.REACT_APP_HOST_URL}/post/p/${id}`,
      {
        method: 'GET',
        // credentials: 'same-origin'
      }
    );
    const jsonResponse = await response.json();
    return Post.fromData(jsonResponse);
  }
}

export { Post };
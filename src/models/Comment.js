import { User } from './User';
import { Post } from './Post';

class Comment {
  constructor(id = '', content = '', author = null, post = null, created_at = '') {
    this.id = id;
    this.content = content;
    this.author = User.fromData(author);
    this.post = Post.fromData(post);
    this.created_at = created_at;
  }

  static async createComment(content, authorName, postId) {
    const response = await fetch(
      `${process.env.REACT_APP_HOST_URL}/comment/create/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content,
          author: authorName,
          post: postId,
        }),
      }
    );
    const jsonResponse = await response.json();
    return Comment.fromData(jsonResponse);
  }

  static fromData(data) {
    if (data === null) {
      return new Comment();
    }
    const { id, content, author, post, created_at } = data;
    return new Comment(id, content, author, post, created_at);
  }

  static async getCommentsForPost(postId) {
    const response = await fetch(
      `${process.env.REACT_APP_HOST_URL}/comment/post/${postId}`,
      {
        method: 'GET',
        // credentials: 'same-origin'
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse.map((comment) => Comment.fromData(comment));
  }
}

export { Comment };
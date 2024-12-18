export const users = [
  {
    id: "1",
    username: "user1",
    name: "User One",
    followers: ["2", "3"],
    following: ["2"],
  },
  {
    id: "2",
    username: "user2",
    name: "User Two",
    followers: ["1"],
    following: ["1", "3"],
  },
  {
    id: "3",
    username: "user3",
    name: "User Three",
    followers: ["2"],
    following: ["1"],
  },
];

export const posts = [
  {
    id: "1",
    userId: "1",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 10,
    comments: [],
  },
  {
    id: "2",
    userId: "2",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 15,
    comments: [],
  },
  {
    id: "3",
    userId: "3",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 20,
    comments: [],
  },
];

export const hashtagPhotos = [
  {
    id: "1",
    imageUrl: "/placeholder.svg?height=200&width=200",
    hashtags: ["candy", "sweet"],
  },
  {
    id: "2",
    imageUrl: "/placeholder.svg?height=200&width=200",
    hashtags: ["candy", "chocolate"],
  },
  {
    id: "3",
    imageUrl: "/placeholder.svg?height=200&width=200",
    hashtags: ["candy", "lollipop"],
  },
  {
    id: "4",
    imageUrl: "/placeholder.svg?height=200&width=200",
    hashtags: ["food", "healthy"],
  },
  {
    id: "5",
    imageUrl: "/placeholder.svg?height=200&width=200",
    hashtags: ["nature", "trees"],
  },
  {
    id: "6",
    imageUrl: "/placeholder.svg?height=200&width=200",
    hashtags: ["city", "urban"],
  },
];

export function getUserById(id) {
  return users.find(user => user.id === id);
}

export function getPostById(id) {
  return posts.find(post => post.id === id);
}

export function getUserPosts(userId) {
  return posts.filter(post => post.userId === userId);
}

export function searchHashtagPhotos(query) {
  return hashtagPhotos.filter(photo =>
    photo.hashtags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
}

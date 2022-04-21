export const Users = [
  {
    userId: 1,
    firstName: 'Kent',
    lastName: 'Park',
    email: 'euichangpark@gmail.com',
    profilePictureUrl: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2144&q=80',
    like: 3
  },
  {
    userId: 2,
    firstName: 'Serena',
    lastName: 'Kim',
    email: '23e2323',
    profilePictureUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    like: 32
  }
];

export const Posts = [
  {
    postId: 1,
    photoUrl: 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
    note: 'lorem ipsumwdrfgrg',
    userId: 1,
    like: 32
  },
  {
    postId: 2,
    photoUrl: 'https://marketplace.canva.com/EAE51aZtB7M/1/0/900w/canva-pastel-teal-daisy-phone-wallpaper-orM89HdvSio.jpg',
    note: 'loremwdasefef ipsum',
    userId: 1,
    like: 3
  },
  {
    postId: 3,
    photoUrl: 'https://archziner.com/wp-content/uploads/2020/07/air-jordan-hoodie-worn-by-man-wearing-purge-mask-with-neon-lights-super-cool-wallpapers-holding-pink-smoke-bomb.jpg',
    note: 'qwdfgrgdlorem ipsum',
    userId: 2,
    like: 14
  }
];

export const Comments = [
  {
    commentId: 1,
    postId: 1,
    userId: 1,
    comment: 'This is a test'
  },
  {
    commentId: 2,
    postId: 1,
    userId: 2,
    comment: 'This is a test'
  },
  {
    commentId: 3,
    postId: 1,
    userId: 1,
    comment: 'This is a test'
  }
];

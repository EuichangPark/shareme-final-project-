insert into "users" (
  "userId",
  "firstName",
  "lastName",
  "email",
  "age",
  "currentLocation",
  "profilePictureUrl"
) values(
  1,
  'Euichang',
  'Park',
  'euichangpark@gmail.com',
  28,
  'Toronto',
  'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2144&q=80'
), (
  2,
  'Kent',
  'Park',
  'sdwdsdwd@gmail.com',
  11,
  'Provo',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
);

insert into "posts" (
  "postId",
  "photoUrl",
  "note",
  "userId",
  "mood"
) values (
  1,
  'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
  'lorem ipsum fenbfujbfefefef',
  2,
  'love'
), (
  2,
  'https://marketplace.canva.com/EAE51aZtB7M/1/0/900w/canva-pastel-teal-daisy-phone-wallpaper-orM89HdvSio.jpg',
  'great day today',
  2,
  'happiness'
), (
  3,
  'https://archziner.com/wp-content/uploads/2020/07/air-jordan-hoodie-worn-by-man-wearing-purge-mask-with-neon-lights-super-cool-wallpapers-holding-pink-smoke-bomb.jpg',
  'great day today',
  1,
  'sadness'
);

insert into "comments" (
  "commentId",
  "postId",
  "userId",
  "comment"
) values (
  1,
  1,
  1,
  'dfefdfefdf'
), (
  2,
  2,
  2,
  'wdsdgtgtg'
);

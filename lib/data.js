const blogs = [
  {
    id: 1,
    title: "The Importance of Exercise for Mental Health",
    content:
      "Exercise has been shown to have numerous benefits for mental health.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    author: "Jane Doe",
    category: "Health and Wellness",
    featuredImage:
      "https://images.unsplash.com/photo-1679958256318-1ffdb03bfad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    createdAt: "2022-03-01T12:00:00.000Z",
    profileImage:
      "https://images.unsplash.com/photo-1679100572626-aba3120a0c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    about: "Jane Doe is a certified personal trainer and nutritionist...",
    comments: [
      {
        id: 1,
        name: "John Smith",
        email: "johnsmith@gmail.com",
        content: "Great article! I couldn't agree more.",
      },
      {
        id: 2,
        name: "Mary Johnson",
        email: "maryjohnson@gmail.com",
        content: "Thanks for sharing this information. It's really helpful.",
      },
    ],
  },
  {
    id: 2,
    title: "10 Tips for Better Time Management",
    content:
      "Managing your time effectively can help you achieve your goals and reduce stress.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    author: "John Smith",
    category: "Productivity",
    featuredImage:
      "https://images.unsplash.com/photo-1679958256318-1ffdb03bfad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    createdAt: "2022-02-01T12:00:00.000Z",
    profileImage:
      "https://images.unsplash.com/photo-1679100572626-aba3120a0c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    about: "John Smith is a productivity coach and author...",
    comments: [
      {
        id: 1,
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        content: "These tips are really helpful. Thanks for sharing!",
      },
      {
        id: 2,
        name: "Tom Johnson",
        email: "tomjohnson@gmail.com",
        content:
          "I struggle with time management, so this article was really useful for me.",
      },
    ],
  },
  {
    id: 3,
    title: "How to Build a Successful Remote Team",
    content:
      "Remote work has become increasingly popular in recent years, and for good reason.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    author: "Sarah Lee",
    category: "Business",
    featuredImage:
      "https://images.unsplash.com/photo-1679958256318-1ffdb03bfad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    createdAt: "2022-01-01T12:00:00.000Z",
    profileImage:
      "https://images.unsplash.com/photo-1679100572626-aba3120a0c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    about: "Sarah Lee is a business consultant and remote work expert...",
    comments: [
      {
        id: 1,
        name: "Tom Smith",
        email: "tomsmith@gmail.com",
        content:
          "I've been struggling with managing my remote team, so this article was really helpful for me.",
      },
      {
        id: 2,
        name: "Mary Johnson",
        email: "maryjohnson@gmail.com",
        content: "Thanks for the great tips!",
      },
    ],
  },
  {
    id: 4,
    title: "The Power of Positive Thinking",
    content:
      "Positive thinking can help you overcome challenges and achieve your goals. By focusing on the good and refusing to dwell on the negative, you can cultivate a mindset of success and happiness. In this blog post, we'll explore the benefits of positive thinking and provide tips for developing a more optimistic outlook.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    author: "Lewis Maina",
    category: "Self Improvement",
    featuredImage:
      "https://images.unsplash.com/photo-1679958256318-1ffdb03bfad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    createdAt: "2022-01-01T12:00:00Z",
    profileImage:
      "https://images.unsplash.com/photo-1679100572626-aba3120a0c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    about:
      "John Doe is a life coach and motivational speaker who helps people achieve their full potential. He is passionate about personal growth and believes that anyone can achieve success with the right mindset and strategies.",
    comments: [
      {
        id: 1,
        author: "Jane Smith",
        text: "Great article! I've been trying to adopt a more positive mindset and these tips are really helpful. Thanks for sharing!",
      },
      {
        id: 2,
        author: "Bob Johnson",
        text: "I completely agree with the power of positive thinking. It's amazing how much of a difference it can make in your life.",
      },
    ],
  },
  {
    id: 5,
    title: "The Benefits of Meditation",
    content:
      "Meditation has been shown to have numerous benefits for mental and physical health. By practicing meditation regularly, you can reduce stress and anxiety, improve focus and concentration, and cultivate a sense of inner peace and wellbeing. In this blog post, we'll explore the science behind meditation and provide tips for incorporating it into your daily routine.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    author: "Samantha Lee",
    category: "Health and Wellness",
    featuredImage:
      "https://images.unsplash.com/photo-1679958256318-1ffdb03bfad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    createdAt: "2021-12-01T12:00:00Z",
    profileImage:
      "https://images.unsplash.com/photo-1679100572626-aba3120a0c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    about:
      "Samantha Lee is a certified yoga and meditation instructor who has been practicing for over 10 years. She is passionate about helping others improve their health and wellbeing through mindfulness practices.",
    comments: [
      {
        id: 1,
        author: "John Doe",
        text: "I've been practicing meditation for a few months now and I've noticed a big difference in my stress levels. Thanks for sharing this informative post!",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "I've been meaning to start a meditation practice, so these tips are really helpful. Thanks!",
      },
    ],
  },
  {
    id: 6,
    title: "How to Start a Successful Blog",
    content:
      "Starting a blog can be a great way to share your ideas and connect with others who share your interests. But with so much competition out there, it can be difficult to know where to begin. In this blog post, we'll provide tips for starting a successful blog and growing your audience.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    author: "Tom Johnson",
    category: "Blogging",
    featuredImage:
      "https://images.unsplash.com/photo-1679958256318-1ffdb03bfad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    createdAt: "2021-11-01T12:00:00Z",
    profileImage:
      "https://images.unsplash.com/photo-1679100572626-aba3120a0c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    about:
      "Tom Johnson is a blogger and content creator who has been writing for over 5 years. He is passionate about helping others start and grow successful blogs.",
    comments: [
      {
        id: 1,
        author: "Mary Smith",
        text: "These tips are really helpful. Thanks for sharing your expertise!",
      },
      {
        id: 2,
        author: "Bob Johnson",
        text: "I've been thinking about starting a blog for a while now, so this post is perfect timing. Thanks!",
      },
    ],
  },
];

module.exports = blogs;

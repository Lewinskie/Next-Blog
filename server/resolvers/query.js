const Query = {
  // Get single user
  user: (_, __, context) => {
    const authorization = context.req.headers["authorization"];
    if (!authorization) {
      return null;
    }
    // Verify and decode the JWT token
    try {
      const token = authorization.split(" ")[1];
      const decoded = jwt.verify(token, secret);

      // find user by ID
      const user = context.users.find((user) => user.id === decoded.userId);
      return user;
    } catch (error) {
      return null;
    }
  },
  users: (_, __, context) => context.users,
  blogs: (_, __, context) => context.blogs,
  blog: (_, { id }, context) => {
    const blog = context.blogs.find((blog) => blog.id == id);
    if (!blog) throw new Error(`Blog with id ${id} does not exist!`);
    return blog;
  },
};

module.exports = Query;

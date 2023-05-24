const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");

const secret = "fbsdjfsdbj";

const Mutation = {
  register: (_, { username, email, password }, context) => {
    // destructure users from context
    const { users } = context;

    // Find if email exists or not
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      throw new Error("Email already registered. Kindly log in");
    }
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create the new user after hashing the password
    const newUser = {
      id: v4(),
      username,
      password: hashedPassword,
      email,
    };

    //Save the new user
    users.push(newUser);

    return newUser;
  },
  login: (_, { email, password }, context) => {
    // destructure context
    const { users } = context;

    // find the user
    const user = users.find((user) => user.email === email);
    if (!user) throw new Error("User not found. Kindly register");

    // Compare the password with the hashed password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid username or password");

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, secret);

    return { user, token };
  },
  createBlog: (
    _,
    { title, content, author, category, featuredImage, profileImage, about },
    context
  ) => {
    // Destructure context
    const { blogs } = context;
    const newBlog = {
      id: v4(),
      createdAt: new Date().toISOString(),
      title,
      content,
      author,
      category,
      featuredImage,
      profileImage,
      about,
    };
    blogs.push(newBlog);
    return newBlog;
  },
  updateBlog: (
    _,
    {
      id,
      title,
      content,
      author,
      category,
      featuredImage,
      createdAt,
      profileImage,
      about,
    },
    context
  ) => {
    // Destructure context
    const { blogs } = context;
    const index = blogs.findIndex((blog) => blog.id == id);

    if (index === -1) throw new Error(`Blog with id ${id} not found`);

    const updatedBlog = {
      ...blogs[index],
      title,
      content,
      author,
      category,
      featuredImage,
      createdAt,
      profileImage,
      about,
    };
    blogs[index] = updatedBlog;
    return updatedBlog;
  },
  deleteBlog: (_, { id }, context) => {
    // Destructure context
    const { blogs } = context;

    const index = blogs.findIndex((blog) => blog.id == id);
    if (index === -1) throw new Error("Blog not found");

    const deletedBlog = context.blogs[index];
    blogs.splice(index, 1);
    console.log(deletedBlog);
    return deletedBlog;
  },
};

module.exports = Mutation;

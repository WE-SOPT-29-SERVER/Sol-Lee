const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllPosts = async (client) => {
  const { rows } = await client.query(
    `
    SELECT * FROM post p
    WHERE is_deleted = FALSE
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const getPostById = async (client, postId) => {
  const { rows } = await client.query(
    `
    SELECT * FROM post p
    WHERE id = $1
      AND is_deleted = FALSE
    `,
    [postId],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const addPost = async (client, userId, title, content, imageUrls) => {
  const { rows } = await client.query(
    `
    INSERT INTO post
    (user_id, title, content, image_urls)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *
    `,
    [userId, title, content, imageUrls],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const updatePost = async (client, title, content, postId) => {
  const { rows: existingRows } = await client.query(
    `
    SELECT * FROM post p
    WHERE id = $1
       AND is_deleted = FALSE
    `,
    [postId],
  );

  if (existingRows.length === 0) return false;

  const data = _.merge({}, convertSnakeToCamel.keysToCamel(existingRows[0]), { title, content });

  const { rows } = await client.query(
    `
    UPDATE post p
    SET title = $1, content = $2, updated_at = now()
    WHERE id = $3
    RETURNING * 
    `,
    [data.title, data.content, postId],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const deletePost = async (client, postId) => {
  const { rows } = await client.query(
    `
    UPDATE post p
    SET is_deleted = TRUE, updated_at = now()
    WHERE id = $1
    RETURNING *
    `,
    [postId],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const getPostsByUserId = async (client, userId) => {
  const { rows } = await client.query(
    `
    SELECT * FROM post
    WHERE user_id = $1
      AND is_deleted = FALSE
    `,
    [userId],
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const getPostsByUserIds = async (client, userIds) => {
  if (userIds.length < 1) return [];
  const { rows } = await client.query(
    `
    SELECT * FROM post
    WHERE user_id IN (${userIds.join()})
      AND is_deleted = FALSE
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getAllPosts, getPostById, addPost, updatePost, deletePost, getPostsByUserId, getPostsByUserIds };

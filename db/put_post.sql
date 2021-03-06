UPDATE TABLE posts
SET (author_id, title, img, content) = ($2, $3, $4, $5)
WHERE id = $1;
SELECT p.id, u.username as author, u.img as author_img, p.title, p.img, p.content, u.id as author_id
FROM posts p
JOIN users u ON (p.author_id = u.id)
ORDER BY p.id DESC;
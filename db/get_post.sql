SELECT p.id, u.username as author, u.img as author_img, p.title, p.img, p.content, u.id as author_id
FROM posts p
JOIN users u ON (p.author_id = u.id)
WHERE p.id = $1;
SELECT p.id, u.username as author, u.img as author_img, p.title, p.img, p.content
FROM posts p
JOIN users u ON (p.author_id = u.id)
WHERE u.id != $1
ORDER BY p.id DESC;
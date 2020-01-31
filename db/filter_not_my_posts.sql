SELECT p.id, u.username as author, u.img as author_img, p.title, p.img, p.content
FROM posts p
JOIN users u ON (p.author_id = u.id)
WHERE u.username ILIKE ('%'||$1||'%')
OR p.title ILIKE ('%'||$1||'%')
OR p.content ILIKE ('%'||$1||'%')
AND u.id != $2
ORDER BY p.id DESC;
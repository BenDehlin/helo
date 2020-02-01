SELECT p.id, u.username as author, u.img as author_img, p.title, p.img, p.content, u.id as author_id
FROM posts p
JOIN users u ON (p.author_id = u.id)
WHERE (u.username ILIKE ('%'||'test'||'%')
OR p.title ILIKE ('%'||'test'||'%')
OR p.content ILIKE ('%'||'test'||'%'))
AND author_id != 5
ORDER BY p.id DESC;
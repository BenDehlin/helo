SELECT p.id, u.username as author, u.img as author_img, p.title, p.img, p.content
FROM posts p
JOIN users u ON (p.author_id = u.id)
WHERE u.username ILIKE ('%'||$1||'%')
OR p.title ILIKE ('%'||$1||'%')
OR p.content ILIKE ('%'||$1||'%')
ORDER BY p.id DESC;

-- WHERE ('%'||$1||'%') LIKE
-- IN (lower(u.username), 
-- lower(p.title), 
-- lower(p.content))
-- ORDER BY p.id DESC;
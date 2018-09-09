``` sql
Создаем таблицу:
create table blog (
	id SERIAL PRIMARY KEY,
	header VARCHAR(100),
	description VARCHAR(255),
	fullText TEXT,
	day DATE
);

Вставляем пост:
insert into blog (header, description, fullText, day) values ('your-header', 'your-description', 'your-text', now());
```

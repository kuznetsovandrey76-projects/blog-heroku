``` sql
Исправить шрифт:  
psql \! chcp 1251 

Создать таблицу:
create table blog (
	id serial primary key,
	header varchar(100),
	description varchar(255),
	fullText text,
	day date
);

Получить список всех таблиц:
\dt   

Вставить пост:
insert into blog (header, description, fullText, day) values ('your-header', 'your-description', 'your-text', now());

Получить все значения:  
select * from blog;
```

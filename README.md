``` sql
Исправить шрифт:  
psql \! chcp 1251 

Создать таблицу:
create table blog (
	id serial primary key,
	header varchar(100),
	description varchar(255),
	fullText text,
	day varchar(10)
);

Получить список всех таблиц:
\dt   

Вставить пост:
insert into blog (header, description, fullText, day) values ('your-header', 'your-description', 'your-text', '10.09.2018');

Получить все значения:  
select * from blog;

Удалить таблицу:  
drop table blog;  
```

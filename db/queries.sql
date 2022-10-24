select * from platform;

SELECT * FROM client;

select * from game;

-- Juego y plataforma
SELECT g.title, g.producer, g.director, g.launch_date, p.platform FROM game g JOIN platform_game pg ON g.id=pg.game_id JOIN platform p ON pg.platform_id=p.id;

-- Protagonistas de cada juego
SELECT g.title, p.protagonist_name FROM game g JOIN protagonist p on g.id=p.game_id;

-- Lista de copias de juegos con sus plataformas
SELECT gc.id, g.title, p.platform FROM game_copy gc JOIN platform_game pg ON gc.platform_game_id=pg.id JOIN platform p ON pg.platform_id=p.id JOIN game g ON pg.game_id=g.id;

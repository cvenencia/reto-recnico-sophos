-------------------------------------------------------
-- TABLA DE PLATAFORMAS

INSERT INTO platform(platform) VALUES('XBOX');
INSERT INTO platform(platform) VALUES('PLAYSTATION');
INSERT INTO platform(platform) VALUES('NINTENDO');
INSERT INTO platform(platform) VALUES('PC');

-------------------------------------------------------
-- TABLA DE CLIENTES

INSERT INTO client(first_name, last_name, birthdate) VALUES('TONI', 'LOPEZ', '02/02/1975');
INSERT INTO client(first_name, last_name, birthdate) VALUES('Juana', 'Gamero', '08/09/1997');
INSERT INTO client(first_name, last_name, birthdate) VALUES('Ane', 'Montilla', '27/03/1976');
INSERT INTO client(first_name, last_name, birthdate) VALUES('Nicolae', 'Jimenez', '23/03/1987');
INSERT INTO client(first_name, last_name, birthdate) VALUES('Clara', 'Seco', '03/10/1972');

-------------------------------------------------------
-- TABLA DE JUEGOS

INSERT INTO game(title, producer, director, launch_date) VALUES('Halo Combat Evolved', 'Bungie', 'Microsoft', '15/11/2001');
INSERT INTO game(title, producer, director, launch_date) VALUES('Minecraft', 'Mojang', 'Microsoft', '18/11/2011');
INSERT INTO game(title, producer, director, launch_date) VALUES('Tomb Raider', 'Crystal Dynamics', 'Alisha Thayer', '05/03/2013');
INSERT INTO game(title, producer, director, launch_date) VALUES('Sea of Thieves', 'Rare', 'Microsoft', '20/03/2018');
INSERT INTO game(title, producer, director, launch_date) VALUES('Portal', 'Valve', 'Kim Swift', '10/10/2007');

-------------------------------------------------------
-- TABLA DE PLATAFORMAS DE JUEGOS

INSERT INTO platform_game(game_id, platform_id) VALUES(1, 1);
INSERT INTO platform_game(game_id, platform_id) VALUES(1, 4);
INSERT INTO platform_game(game_id, platform_id) VALUES(2, 1);
INSERT INTO platform_game(game_id, platform_id) VALUES(2, 2);
INSERT INTO platform_game(game_id, platform_id) VALUES(2, 3);
INSERT INTO platform_game(game_id, platform_id) VALUES(2, 4);
INSERT INTO platform_game(game_id, platform_id) VALUES(3, 1);
INSERT INTO platform_game(game_id, platform_id) VALUES(3, 2);
INSERT INTO platform_game(game_id, platform_id) VALUES(3, 4);
INSERT INTO platform_game(game_id, platform_id) VALUES(4, 1);
INSERT INTO platform_game(game_id, platform_id) VALUES(4, 4);
INSERT INTO platform_game(game_id, platform_id) VALUES(5, 1);
INSERT INTO platform_game(game_id, platform_id) VALUES(5, 2);
INSERT INTO platform_game(game_id, platform_id) VALUES(5, 3);
INSERT INTO platform_game(game_id, platform_id) VALUES(5, 4);

-------------------------------------------------------
-- TABLA DE PROTAGONISTAS

INSERT INTO protagonist(protagonist_name, game_id) VALUES('Master Chief', 1);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Cortana', 1);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Steve', 2);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Alex', 2);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Lara Croft', 3);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Jonah Maiava', 3);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Samantha Nishimura', 3);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Larinna', 4);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Madame Olivia', 4);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Pirate Lord', 4);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Davy Jones', 4);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('Atlas', 5);
INSERT INTO protagonist(protagonist_name, game_id) VALUES('P-body', 5);

-------------------------------------------------------
-- TABLA DE COPIAS DE JUEGOS

INSERT INTO game_copy(platform_game_id) VALUES(1);
INSERT INTO game_copy(platform_game_id) VALUES(1);
INSERT INTO game_copy(platform_game_id) VALUES(2);
INSERT INTO game_copy(platform_game_id) VALUES(3);
INSERT INTO game_copy(platform_game_id) VALUES(4);
INSERT INTO game_copy(platform_game_id) VALUES(5);
INSERT INTO game_copy(platform_game_id) VALUES(6);
INSERT INTO game_copy(platform_game_id) VALUES(7);
INSERT INTO game_copy(platform_game_id) VALUES(7);
INSERT INTO game_copy(platform_game_id) VALUES(8);
INSERT INTO game_copy(platform_game_id) VALUES(9);
INSERT INTO game_copy(platform_game_id) VALUES(10);
INSERT INTO game_copy(platform_game_id) VALUES(11);
INSERT INTO game_copy(platform_game_id) VALUES(11);
INSERT INTO game_copy(platform_game_id) VALUES(12);
INSERT INTO game_copy(platform_game_id) VALUES(12);
INSERT INTO game_copy(platform_game_id) VALUES(13);
INSERT INTO game_copy(platform_game_id) VALUES(14);
INSERT INTO game_copy(platform_game_id) VALUES(15);
INSERT INTO game_copy(platform_game_id) VALUES(15);

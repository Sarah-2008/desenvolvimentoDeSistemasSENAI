CREATE DATABASE IF NOT EXISTS LojaVirtual;
USE LojaVirtual;

CREATE TABLE cadrastros (
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL, 
    dataCadastro DATE NOT NULL
);


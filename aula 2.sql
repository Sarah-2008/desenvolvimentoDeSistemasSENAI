-- primeiro codigo de banco de dados do Thom 

CREATE DATABASE IF NOT EXISTS lojinha;

USE lojinha;

CREATE TABLE Clientes (
    idCliente INT(99999),
    nome VARCHAR(40),
    email VARCHAR(120),
    telefone VARCHAR(20)
);


CREATE TABLE Produtos (
    idProduto INT(9999999),
    nomeProduto VARCHAR(100),
    preco DECIMAL(600,2),
    estoque INT(9999)
);


CREATE TABLE Pedidos (
    idPedido INT(9999999),
    idCiente INT(99999999),
    idProduto INT(99999999),
    quantidade INT(999)
);

